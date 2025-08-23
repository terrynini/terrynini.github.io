// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import expressiveCode from 'astro-expressive-code';
import mermaid from 'astro-mermaid';


/** @type {import('unified').Plugin} */
const addAugmentedImageImport = () => (tree) => {
  // @ts-ignore
  tree.children.unshift({
    type: 'mdxjsEsm',
    value: "import AugmentedImage from '/src/components/AugmentedImage.astro';",
    data: {
      estree: {
        type: 'Program',
        body: [
          {
            type: 'ImportDeclaration',
            specifiers: [
              {
                type: 'ImportDefaultSpecifier',
                local: { type: 'Identifier', name: 'Image' },
              },
            ],
            source: {
              type: 'Literal',
              value: '/src/components/AugmentedImage.astro',
            },
          },
        ],
        sourceType: 'module',
      },
    },
  });
};


// https://astro.build/config
export default defineConfig({
  site: 'https://blog.terrynini.tw',
  integrations: [
    mermaid({
      theme: 'base',
      mermaidConfig: {
        flowchart: { useMaxWidth: true, htmlLabels: false },
      }
    }),
    expressiveCode({
      themes: ['github-dark-default', 'red', 'laserwave', 'tokyo-night']
    }),
    mdx({
      remarkPlugins: [addAugmentedImageImport],
    }),
  ],
});
