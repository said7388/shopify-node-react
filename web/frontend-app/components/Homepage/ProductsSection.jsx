import { Container } from "@mui/material";
import React from "react";
import SingleProductSection from "./SingleProductSection";

const ProductsSection = () => {
  return (
    <Container maxWidth="lg">
      <SingleProductSection
        title="Create new product photos instantly"
        description="Generate new product photos instantly by describing your product and key features. "
        imgSrc="https://i.ibb.co/ZdBKqBN/Group-1000005708.png"
        direction="ltr"
      />
      <SingleProductSection
        title="Generate new backgrounds in seconds"
        description="Already have an image of your product? Simply upload the image, automatically remove the existing background and generate new high-quality backgrounds in seconds. Describe the scene surrounding your product exactly as you want - no sets needed!"
        imgSrc="https://i.ibb.co/5Wft0qD/perfume.png"
        direction="rtl"
      />
      <SingleProductSection
        title="Create product videos in a few clicks"
        description="Turn your ideas into videos using our text-to-video AI tool. Just describe the video you want to create and watch the magic happen. Ready to share as ads or organic content on your website and social channels."
        imgSrc="https://i.ibb.co/BNQQr6K/Group-1000005708.png"
        direction="ltr"
      />
      <SingleProductSection
        title="Enhance your photos and videos using editor tools"
        description="Customize your generated photos and videos with creator editing tools to make sure they're designed exactly as you want. Easily add brand elements, styling, promotional messaging, and more."
        imgSrc="https://i.ibb.co/vXtp59P/car.png"
        direction="rtl"
      />

      <SingleProductSection
        title="Generate captions and easily share across channels"
        description="Easily optimize aspect ratios, add captions or descriptions, and share your new photos and videos directly on your website and social channels. Our Shopify app even directly integrates with your store admin!"
        imgSrc="https://i.ibb.co/WHnCBF7/apps.png"
        direction="ltr"
      />
    </Container>
  );
};

export default ProductsSection;
