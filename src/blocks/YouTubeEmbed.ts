import { Block } from "payload/types";

export const YouTubeEmbed: Block = {
  slug: "youTubeEmbed",

  labels: {
    singular: "YouTube Embed Block",
    plural: "YouTube Embed Blocks",
  },
  fields: [
    { name: "id", label: "ID", type: "text", required: true },
    { name: "title", label: "Title", type: "text", required: true },
    { name: "description", label: "Description", type: "text" },
  ],
};
