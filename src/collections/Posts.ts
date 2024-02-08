import { CollectionConfig } from "payload/types";
import { published } from "../access/published";
import { ExternalImage } from "../blocks/ExternalImage";
import { RichText } from "../blocks/RichText";
import { YouTubeEmbed } from "../blocks/YouTubeEmbed";
import Image from "../components/Image";
import { slugField } from "../fields/slugField";

export const Posts: CollectionConfig = {
  access: {
    read: published,
  },
  admin: {
    defaultColumns: ["title", "slug", "updatedAt"],
    useAsTitle: "title",
  },
  slug: "posts",
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: "title",
      required: true,
      type: "text",
    },

    {
      name: "publishedDate",
      admin: {
        position: "sidebar",
      },
      type: "date",
      required: true,
    },
    {
      name: "categories",
      admin: {
        position: "sidebar",
      },
      required: true,
      hasMany: true,
      relationTo: "categories",
      type: "relationship",
    },
    {
      name: "relatedPosts",
      admin: {
        position: "sidebar",
      },
      filterOptions: ({ id }) => {
        return {
          id: {
            not_in: [id],
          },
        };
      },
      hasMany: true,
      relationTo: "posts",
      type: "relationship",
    },
    slugField("title"),
    {
      type: "tabs",
      tabs: [
        {
          label: {
            en: "Cover Image",
            es: "Imagen de portada",
          },
          name: "coverImage",
          fields: [
            {
              name: "type",
              label: {
                en: "Type",
                es: "Tipo",
              },
              type: "radio",
              options: [
                {
                  label: {
                    en: "External link",
                    es: "Enlace externo",
                  },
                  value: "external",
                },
                {
                  label: {
                    en: "local image | upload",
                    es: "Imagen local | subir ",
                  },
                  value: "local",
                },
              ],
              defaultValue: "external",
              admin: {
                layout: "horizontal",
                width: "50%",
              },
            },
            {
              name: "localImage",
              type: "upload",
              relationTo: "media",
              required: false,
              admin: {
                condition: (siblingData) => {
                  if (!siblingData.coverImage) return;
                  return siblingData.coverImage.type === "local";
                },
              },
            },
            {
              name: "url",
              label: "URL",
              type: "text",
              admin: {
                components: {
                  Field: Image,
                },
                condition: (siblingData) => {
                  if (!siblingData.coverImage) return;
                  return siblingData.coverImage.type === "external";
                },
              },
            },
            {
              name: "alt",
              type: "text",
              required: true,
              admin: {
                condition: (siblingData) => {
                  if (!siblingData.coverImage) return;
                  return siblingData.coverImage.type === "external";
                },
              },
            },
          ],
        },
        {
          label: "Content",
          fields: [
            {
              name: "layout",
              blocks: [YouTubeEmbed, RichText, ExternalImage],
              required: true,
              type: "blocks",
            },
          ],
        },
      ],
    },
  ],
};
