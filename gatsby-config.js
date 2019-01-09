const path = require(`path`)

module.exports = {
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `img`,
          path: `${__dirname}/src/img/`
        },
      },
      'gatsby-transformer-sharp',
      'gatsby-plugin-sharp',
    ],
};
