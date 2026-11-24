/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
   images: { unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "wembleysquickfix.com", pathname: "/products/**" },
      { protocol: "https", hostname: "www.wembleysquickfix.com", pathname: "/products/**" },
    ],
    } ,
   async headers() {
  return [{
    source: "/api/:path*",
    headers: [
      { key: "Access-Control-Allow-Origin", value: "https://wembleysquickfix.com" },
      { key: "Access-Control-Allow-Methods", value: "GET" },
    ],
  }];
},
  trailingSlash: true,
};

export default nextConfig;