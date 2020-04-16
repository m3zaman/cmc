const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsHelp {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allDatoCmsHelp.edges.map(({ node: help }) => {
        createPage({
          path: `helps/${help.slug}`,
          component: path.resolve(`./src/templates/help.js`),
          context: {
            slug: help.slug,
          },
        })
      })
      resolve()
    })
  })
}
