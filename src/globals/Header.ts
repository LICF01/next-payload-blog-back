import type { GlobalConfig } from "payload/types";

export const Header: GlobalConfig = {
  access: {
    read: () => true,
  },
  fields: [
    {
      type: "text",
      name: "siteName",
      label: "Name of the Site",
      required: true,
    },
  ],
  slug: "header",
};
