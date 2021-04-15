
module.exports = function (config) {
  config.addPassthroughCopy('src/assets/**')
  config.addWatchTarget('src/styles/**')

  return {
    dir: {
      input: 'src',
      output: '_site',
      layouts: 'layouts',
      includes: 'includes',
      data: 'data'
    },
    dataTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    templateFormats: [
        'md', 'njk'
    ],
  }
}