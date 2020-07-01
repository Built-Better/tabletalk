/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// exports.createPages = async function ({ actions, graphql }) {
//   // Case Study Pages
//   const projects_data = await graphql(`
//     query RecentProjectsQuery {
//       bbschema {
//         contents(content_type: "project") {
//           content
//           id
//         }
//       }
//     }
//   `)
//   projects_data.data.bbschema.contents.forEach(project => {
//     const slug = `case_study/${project.content.title}`
//     actions.createPage({
//       path: slug,
//       component: require.resolve(`./src/templates/case_study.js`),
//       context: { id: project.id },
//     })
//   })
// }
