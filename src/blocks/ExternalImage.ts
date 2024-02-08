import { Block } from "payload/types";
import { imageField } from "../fields/imageField";

export const ExternalImage: Block = {
  slug: "externalImage",
  labels: {
    singular: "External Image",
    plural: "External Image",
  },
  fields: [
    imageField(),
    {
      name: "alt",
      label: "Alt Text",
      type: "text",
      required: true,
    },
  ],
};
