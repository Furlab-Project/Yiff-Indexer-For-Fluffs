const version = process.env.PACKAGE_VERSION || process.env.npm_package_version;
const useragent =
  process.env.CUSTOM_USERAGENT || `yiff/v${version} (wrwlf.de/yiff);`;
const killswitch = process.env.KILLSWITCH || "https://yiff.click";

export default {
  killswitch: killswitch,
  useragent: useragent,
};
