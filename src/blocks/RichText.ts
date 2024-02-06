import { Block } from "payload/types";
import richText from "../fields/richText";

export const RichText: Block = {
  slug: "richText",
  labels: {
    singular: "Rich Text Block",
    plural: "Rich Text Blocks",
  },
  fields: [richText()],
};
