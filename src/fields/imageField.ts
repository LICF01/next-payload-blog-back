import { Field } from "payload/types";
import Image from "../components/Image";
import deepMerge from "../utilities/deepMerge";

type ImageField = (overrides?: Partial<Field>) => Field;

export const imageField: ImageField = (overrides) =>
  deepMerge<Field, Partial<Field>>(
    {
      name: "cover",
      label: "URL",
      type: "ui",
      admin: {
        components: {
          Field: Image,
        },
      },
    },
    overrides
  );
