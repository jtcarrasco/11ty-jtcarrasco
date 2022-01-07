module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy('./src/assets'); // assets in public folder
  eleventyConfig.addPassthroughCopy('./src/admin'); // assets in public folder
  eleventyConfig.setBrowserSyncConfig({
		files: './public/css/**/*.css'
	});

  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
};