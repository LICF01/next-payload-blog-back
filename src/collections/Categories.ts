import type { CollectionConfig } from "payload/types";

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
  ],
};

export default Categories;
