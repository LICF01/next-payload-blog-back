import type { FeatureProvider } from "@payloadcms/richtext-lexical";

import {
  BlockQuoteFeature,
  BoldTextFeature,
  HeadingFeature,
  ItalicTextFeature,
  LinkFeature,
  ParagraphFeature,
  UnderlineTextFeature,
  OrderedListFeature,
  UnorderedListFeature,
  SubscriptTextFeature,
  SuperscriptTextFeature,
  StrikethroughTextFeature,
  BlocksFeature,
} from "@payloadcms/richtext-lexical";
import { ExternalImage } from "../../blocks/ExternalImage";
import { YouTubeEmbed } from "../../blocks/YouTubeEmbed";

export const defaultPublicDemoFeatures: FeatureProvider[] = [
  ParagraphFeature(),
  BoldTextFeature(),
  ItalicTextFeature(),
  UnderlineTextFeature(),
  BlockQuoteFeature(),
  HeadingFeature({
    enabledHeadingSizes: ["h2", "h3", "h4", "h5", "h6"],
  }),
  LinkFeature({}),
  OrderedListFeature(),
  UnorderedListFeature(),
  SubscriptTextFeature(),
  SuperscriptTextFeature(),
  StrikethroughTextFeature(),
  BlocksFeature({
    blocks: [YouTubeEmbed, ExternalImage],
  }),
];
