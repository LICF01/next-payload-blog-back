import type { GlobalConfig } from "payload/types";

export const Socials: GlobalConfig = {
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "socialNetworks",
      type: "array",
      label: "Social Networks",
      fields: [
        {
          name: "profileURL",
          label: "Profile Link",
          type: "text",
        },
        {
          name: "shareTo",
          type: "checkbox",
          label: "Allow Sharing to",
          defaultValue: false,
        },
      ],
    },
  ],
  slug: "socials",
};
