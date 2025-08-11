module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("static");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("content");
  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    passthroughFileCopy: true
  };
};
