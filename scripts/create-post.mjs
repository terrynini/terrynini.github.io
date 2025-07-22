
import fs from 'fs';
import path from 'path';

const title = process.argv[2];

if (!title) {
  console.error('Please provide a title for the post.');
  process.exit(1);
}

const slug = title.replace(/[\s!"#$%&'()*+,\-./:;<=>?@\[\\\]^_`{|}~]+/g, '-').replace(/-+$/, '');
const date = new Date().toISOString();

const postFilePath = path.join('src/pages/posts', `${slug}.mdx`);
const assetsFolderPath = path.join('src/assets', slug);

// Create the asset folder
if (!fs.existsSync(assetsFolderPath)) {
  fs.mkdirSync(assetsFolderPath, { recursive: true });
  console.log(`Created asset folder: ${assetsFolderPath}`);
} else {
  console.log(`Asset folder already exists: ${assetsFolderPath}`);
}

// Create the post file
if (!fs.existsSync(postFilePath)) {
  const frontmatter = `---
title: "${title}"
description: ""
publishDate: "${date}"
category: ""
layout: "../../layouts/ArticleLayout.astro"
---

`;
  fs.writeFileSync(postFilePath, frontmatter.trim());
  console.log(`Created post file: ${postFilePath}`);
} else {
  console.log(`Post file already exists: ${postFilePath}`);
}
