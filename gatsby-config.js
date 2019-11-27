module.exports = {
    siteMetadata: {
        title: `Site Title`,
        description: `Site Description`,
        author: `Author Name`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-emotion`,
        `gatsby-transformer-json`,
        `gatsby-plugin-netlify-cms`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Site Title',
                short_name: 'Site',
                start_url: '/',
                background_color: '#000',
                theme_color: '#000',
                display: 'minimal-ui',
                icon: 'src/assets/images/favicon-512.png',
            },
        },
    ],
};
