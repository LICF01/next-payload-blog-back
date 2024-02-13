import path from "path";

import { payloadCloud } from "@payloadcms/plugin-cloud";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { viteBundler } from "@payloadcms/bundler-vite";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import seoPlugin from "@payloadcms/plugin-seo";

import { buildConfig } from "payload/config";

import Users from "./collections/Users";
import { Pages } from "./collections/Pages";
import { Media } from "./collections/Media";
import { Header } from "./globals/Header";
import { Posts } from "./collections/Posts";
import Categories from "./collections/Categories";

export default buildConfig({
  admin: {
    user: Users.slug,
    // bundler: webpackBundler(),
    bundler: viteBundler(),
  },
  editor: lexicalEditor({}),
  collections: [Users, Pages, Media, Posts, Categories],
  globals: [Header],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  plugins: [
    seoPlugin({
      collections: ["pages", "posts"],
      uploadsCollection: "media",
      generateTitle: ({ doc }) => doc.title.value,
      generateDescription: ({ doc }) => doc.description.value,
    }),
  ],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
});
