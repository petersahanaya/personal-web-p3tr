/** @type {import('prettier').Config} */
module.exports = {
  // singleQuote: true,
  // trailingComma: 'all',
  // pluginSearchDirs: false,
  plugins: ["prettier-plugin-tailwindcss"],
  importOrder: ["^@", "^[a-zA-Z0-9-]+", "^[./]"],
};
