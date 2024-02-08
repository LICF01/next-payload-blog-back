import { Block } from "payload/types";

export const Collection: Block = {
  slug: "collection",
  labels: {
    singular: "Collection Block",
    plural: "Collection Blocks",
  },
  fields: [
    {
      name: "collection",
      label: "Collection",
      type: "select",
      hasMany: false,
      defaultValue: "posts",
      options: [
        {
          label: "Posts",
          value: "posts",
        },
        {
          label: "Categories",
          value: "categories",
        },
      ],
    },
  ],
};
