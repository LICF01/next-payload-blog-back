import { Block } from "payload/types";

export const TwoColumn: Block = {
  slug: "twoColumn",
  labels: {
    singular: "Two Column Block",
    plural: "Two Column Blocks",
  },
  fields: [
    {
      name: "text",
      label: "Text",
      type: "richText",
    },
    {
      name: "image",
      label: "Image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "direction",
      label: "Direction",
      type: "select",
      options: [
        {
          label: "Default",
          value: "default",
        },
        {
          label: "Reverse",
          value: "reverse",
        },
      ],
    },
  ],
};
