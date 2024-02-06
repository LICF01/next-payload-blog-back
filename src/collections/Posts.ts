import { CollectionConfig } from "payload/types";
import { published } from "../access/published";
import { RichText } from "../blocks/RichText";
import { YouTubeEmbed } from "../blocks/YouTubeEmbed";
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
    },
    {
      name: "categories",
      admin: {
        position: "sidebar",
      },
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
          label: "Content",
          fields: [
            {
              name: "layout",
              blocks: [YouTubeEmbed, RichText],
              required: true,
              type: "blocks",
            },
          ],
        },
      ],
    },
  ],
};
