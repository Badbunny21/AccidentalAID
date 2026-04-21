/** @type {import('next').NextConfig} */
const nextConfig = {
  // Dev can hit EMFILE (too many open files) on macOS; broken watchers leave / as 404.
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        ...config.watchOptions,
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
};

export default nextConfig;
