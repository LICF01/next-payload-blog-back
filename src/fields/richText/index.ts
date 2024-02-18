import {
  defaultEditorFeatures,
  FeatureProvider,
  HeadingFeature,
} from "@payloadcms/richtext-lexical";
import type { RichTextField } from "payload/types";

import {
  ParagraphFeature,
  UploadFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";

import deepMerge from "../../utilities/deepMerge";

type RichText = (overrides?: Partial<RichTextField>) => RichTextField;

const richText: RichText = (overrides) =>
  deepMerge<RichTextField, Partial<RichTextField>>(
    {
      name: "richText",
      editor: lexicalEditor({
        features: () => [
          ...defaultEditorFeatures,
          HeadingFeature({
            enabledHeadingSizes: ["h2", "h3", "h4", "h5", "h6"],
          }),
        ],
      }),
      required: true,
      type: "richText",
    },
    overrides || {}
  );

export default richText;
