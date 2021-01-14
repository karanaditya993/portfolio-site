module.exports = {
  siteMetadata: {
    title: "Karan Aditya Personal Site",
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-173108644-1",
      },
    },
  ],
};
