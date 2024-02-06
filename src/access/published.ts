import type { Access } from "payload/config";

export const published: Access = () => {
  return {
    _status: {
      equals: "published",
    },
  };
};
