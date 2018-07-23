module.exports = {
  siteMetadata: {
    title: 'Kevin Qi',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-44564619-1',
        head: false,
      },
    },
  ],
};
