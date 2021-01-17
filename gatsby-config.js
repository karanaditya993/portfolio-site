module.exports = {
  siteMetadata: {
    title: "Hi, I'm Karan",
    siteUrl: "https://www.karanaditya.com",
    description: "Portfolio site for Karan",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-typescript",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-173108644-1",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `./src/data`,
      },
    },
    {
      resolve: 'gatsby-transformer-yaml',
      options: {
        typeName: 'Yaml',
      },
    },
  ],
}
