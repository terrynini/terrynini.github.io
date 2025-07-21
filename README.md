# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## ✨ Custom Features

This project includes some custom features to make content creation easier.

### Creating New Posts

To create a new blog post, you can use the `new-post` command:

```bash
npm run new-post "Your Post Title"
```

This command will automatically:

1.  Create a new `.mdx` file in `src/pages/posts/`.
2.  Create a corresponding folder for your images in `src/assets/`.
3.  The filename will be a "slug" generated from your post title, preserving case and using hyphens for spaces and special characters.

### AugmentedImage Component

The `<AugmentedImage />` component simplifies adding images to your posts. Instead of manually importing each image, you can place them in the post's asset folder and reference them directly.

**Example:**

To use an image named `my-image.png` that you've placed in `src/assets/your-post-title/`, you would add the following to your `.mdx` file:

```astro
<AugmentedImage src="./my-image.png" alt="A description of the image" />
```

But it has been integrated into mdx, so you can
```astro
<Image src="./my-image.png" alt="A description of the image" />
```

The component will automatically find and display the image, and it's fully compatible with Astro's asset optimization.
