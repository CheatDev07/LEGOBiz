import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  //  config hostname of images
  images:{
    remotePatterns:[
      {
      protocol:'https',
      hostname:'fakestoreapi.com'
    }
  ]
  }
};

export default nextConfig;
