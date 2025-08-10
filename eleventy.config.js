module.exports = function (eleventyConfig) {
 eleventyConfig.addPassthroughCopy({ 'src/assets/images': 'images' });
 eleventyConfig.addPassthroughCopy({ 'src/assets/css': 'css' });
 eleventyConfig.addPassthroughCopy({ 'src/assets/js': 'js' });

 return {
  dir: {
   input: 'src',
   output: 'dist',
  },
 };
};
