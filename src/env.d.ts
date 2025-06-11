/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

import type { Path } from "typescript";

interface EntryImage {
  url: string;
  alt: string;
}

interface EntryData {
  title: string;
  pubDate: string;
  author: string;
  description: string;
  image: EntryImage;
  tags: string[];
}

interface RenderedContent {
  html: string;
  metadata?: {
    imagePaths: Array<string> | Array<Path>;
    localImagePaths?: Array<Path> | Array<string>;
    remoteImagePaths?: Array<Path> | Array<string>;
    headings: {
      depth: number;
      slug: string;
      text: string;
    }[];
    frontmatter: EntryData;
  };
}

interface Entry {
		id: string,
		data: EntryData,
		body: string,
		filePath: Path | String,
		digest: MD5Hash<string>,
		renderered: RenderedContent,
		collection: string,
		slug: string,
		render: () => Promise<{ Content: unknown; headings: Array<{ depth: number; slug: string; text: string }>; }>
}