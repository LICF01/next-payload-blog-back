import { FeatureProvider, HeadingFeature } from "@payloadcms/richtext-lexical";
import type { RichTextField } from "payload/types";

import {
  ParagraphFeature,
  UploadFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";

import deepMerge from "../../utilities/deepMerge";
import { defaultFeatures } from "./defaultFeatures";

type RichText = (overrides?: Partial<RichTextField>) => RichTextField;

const richText: RichText = (overrides) =>
  deepMerge<RichTextField, Partial<RichTextField>>(
    {
      name: "richText",
      editor: lexicalEditor({
        features: () => [...defaultFeatures],
      }),
      required: true,
      type: "richText",
    },
    overrides || {}
  );

export default richText;
