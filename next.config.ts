import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com", // Unsplash domain for using their images
      "your-logo-url.com",
      "your-cdn.com",
      "your-cdn.com",
      "your-logo-url.com",
      "cdnjs.cloudflare.com",
      "socialmedia-icon.png",
      "app-icon.png",
      "website-icon.png",
      "via.placeholder.com",
    ],
  },
};

export default nextConfig;
