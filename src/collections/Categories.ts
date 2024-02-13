import type { CollectionConfig } from "payload/types";
import { slugField } from "../fields/slugField";

const Categories: CollectionConfig = {
  access: {
    delete: () => false,
    read: () => true,
  },
  admin: {
    useAsTitle: "title",
  },
  slug: "categories",
  fields: [
    {
      name: "title",
      type: "text",
    },
    {
      name: "description",
      type: "textarea",
    },
    slugField("title"),
  ],
};

export default Categories;
