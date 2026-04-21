/** @type {import('next').NextConfig} */
const nextConfig = {
  // Dev can hit EMFILE (too many open files) on macOS; broken watchers leave / as 404.
  webpack: (config, { dev }) => {
    if (dev) {
      // Avoid large webpack packfile writes — on full disks (ENOSPC) dev returns 500.
      config.cache = false;
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
