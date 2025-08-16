const isProd = process.env.NODE_ENV === 'production';

module.exports = function (eleventyConfig) {
 eleventyConfig.addPassthroughCopy({ 'src/assets/images': 'images' });
 eleventyConfig.addPassthroughCopy({ 'src/assets/css': 'css' });
 eleventyConfig.addPassthroughCopy({ 'src/assets/js': 'js' });

 // 本番だけSearch Console用HTMLをコピー
 if (isProd) {
  eleventyConfig.addPassthroughCopy('src/googlea90e67b64e74ba4a.html');
 }

 return {
  dir: {
   input: 'src',
   output: 'dist',
  },
  pathPrefix: isProd ? '/official-site/' : '/',
 };
};
