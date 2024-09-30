module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    "public/styles.out.css": "/styles.css"
  });

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: "src",
      output: "dist",
    },
  };
}
