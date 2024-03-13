import {
  BlockQuoteFeature,
  BoldTextFeature,
  HeadingFeature,
  ItalicTextFeature,
  LinkFeature,
  ParagraphFeature,
  UnderlineTextFeature,
  FeatureProvider,
  StrikethroughTextFeature,
  SubscriptTextFeature,
  SuperscriptTextFeature,
  UploadFeature,
} from "@payloadcms/richtext-lexical";

export const defaultFeatures: FeatureProvider[] = [
  ParagraphFeature(),
  HeadingFeature({
    enabledHeadingSizes: ["h2", "h3", "h4", "h5", "h6"],
  }),
  BoldTextFeature(),
  ItalicTextFeature(),
  UnderlineTextFeature(),
  StrikethroughTextFeature(),
  SuperscriptTextFeature(),
  SubscriptTextFeature(),
  LinkFeature({}),
  BlockQuoteFeature(),
  UploadFeature(),
];
