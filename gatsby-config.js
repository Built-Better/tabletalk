module.exports = {
  siteMetadata: {
    title: `This is Table Talk`,
    description: `Official website of This is Table Talk.`,
    author: `@builtbetter`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    // Building Blocks GraphQL config
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "BBSchema",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "bbschema",
        // Url to query from
        url: "https://www.dashboard.buildingblockscms.tech/graphiql",
        // HTTP headers
        headers: {
          // Learn about environment variables: https://gatsby.dev/env-vars
          "x-auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZjc5NTg1OTUzNjVhMjQwODNhMTgyMyIsImlhdCI6MTU5MzI4ODI0Nn0.fsSDZhOhVzwMSwQvj7RHjp_0eNZUSlaGdZuMDxhbTHw`,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `this-is-table-talk`,
        short_name: `table-talk`,
        start_url: `/`,
        icon: `src/images/nav_logo_yellow.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
