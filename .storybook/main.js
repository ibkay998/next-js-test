
const path = require('path');

const toPath = (_path) => path.join(process.cwd(), _path);
module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    // "@storybook/preset-create-react-app"
  ],
  webpackFinal: async (config) => {
    // Assign aliases from snowpack.config.js
    config.resolve.alias = {
      ...config.resolve.alias,
      '@emotion/core': toPath('node_modules/@emotion/react'),
      // 'emotion-theming': toPath('node_modules/@emotion/react'),
    };

    return config;
  },
}