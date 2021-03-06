const sortByDisplayOrder = require('./src/utils/sort-by-display-order.js')

module.exports = (eleventyConfig) => {
  eleventyConfig.addWatchTarget('./src/styles/')

  // Set directories to pass through to the dist folder
  eleventyConfig.addPassthroughCopy('./src/styles/')
  eleventyConfig.addPassthroughCopy('./src/assets/images/')

  // Layout aliases can make templates more portable
  eleventyConfig.addLayoutAlias('default', 'layouts/base.html')

  // Returns track items, sorted by display order
  eleventyConfig.addCollection('transcripts', (collection) => {
    return sortByDisplayOrder(
      collection.getFilteredByGlob('./src/transcriptions/contattoA2/*.md')
    )
  })

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'public',
    },
  }
}
