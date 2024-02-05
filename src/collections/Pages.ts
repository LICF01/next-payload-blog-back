import { CollectionConfig } from "payload/types";
import { Hero } from "../blocks/Hero";
import { TwoColumn } from "../blocks/TwoColumn";
import { slugField } from "../fields/slugField";

export const Pages: CollectionConfig = {
  slug: "pages",
  labels: {
    singular: "Page",
    plural: "Pages",
  },
  access: {
    read: () => true,
  },
  admin: {
    defaultColumns: ["title", "slug", "updatedAt"],
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
    },
    slugField("name"),
    {
      type: "tabs",
      tabs: [
        {
          label: "Content",
          fields: [
            {
              name: "layout",
              label: "Layout",
              type: "blocks",
              blocks: [Hero, TwoColumn],
            },
          ],
        },
      ],
    },
  ],
};
