// gatsby-node.js
exports.onCreatePage = ({ page, actions }) => {
  if (page.path.match(/^\/?404\/?$/)) {
    page.matchPath = "*"
    actions.createPage(page);
  }
}
