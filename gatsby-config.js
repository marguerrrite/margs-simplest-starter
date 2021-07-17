module.exports = {
    siteMetadata: {
        title: `Marg's Simplest Starter`,
        description: `This is the base I use to get going with any Gatsby site.`,
        author: `@margueriteroth`,
        siteUrl: `https://github.com/margueriteroth`,
        image: `https://marguerite.io/og-image.png`,
        twitterImage: `https://marguerite.io/twitter-image.png`,
        keywords: `web development, design, gatsby, starter`,
    },
    plugins: [
		`gatsby-plugin-resolve-src`,
		`gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,

        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `margs-simplest-starter`,
                short_name: `simplest`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/oscar-icon.png`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-gatsby-cloud`,
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
