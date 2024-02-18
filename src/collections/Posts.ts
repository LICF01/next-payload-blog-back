import { CollectionConfig } from "payload/types";
import { published } from "../access/published";
import { ExternalImage } from "../blocks/ExternalImage";
import { RichText } from "../blocks/RichText";
import { YouTubeEmbed } from "../blocks/YouTubeEmbed";
import { slugField } from "../fields/slugField";

export const Posts: CollectionConfig = {
  access: {
    read: published,
    delete: () => true,
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
      type: "tabs",
      tabs: [
        {
          label: "Content",
          fields: [
            {
              name: "title",
              label: "Title",
              required: true,
              type: "text",
            },
            {
              name: "description",
              label: "Description",
              required: true,
              type: "text",
            },
            {
              name: "coverImage",
              label: "Cover Image",
              type: "upload",
              relationTo: "media",
            },
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
  ],
};
