const eleventyVue = require('@11ty/eleventy-plugin-vue');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./js');
  eleventyConfig.addPassthroughCopy('./css');
  eleventyConfig.addPassthroughCopy('./images');
  eleventyConfig.addPassthroughCopy('./fonts');
  // eleventyConfig.addPassthroughCopy('./src/meta');

  eleventyConfig.addWatchTarget('./src/scss');

  eleventyConfig.addPlugin(eleventyVue);

  return {
    dir: {
      input: '.',
      output: 'dist',
    },
  };
};
