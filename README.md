# Cyber Space Theme


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
