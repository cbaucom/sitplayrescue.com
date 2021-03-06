import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

// import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content:
                'SitPlayRescue dog walking, dog training, and dog matchmaking',
            },
            {
              name: 'keywords',
              content:
                'dogs, walking, dog walking, dog training, sitplayrescue, matchmaking',
            },
            { name: 'msapplication-TileColor', content: '#E66FA4' },
            { name: 'theme-color', content: '#E66FA4' },
          ]}
        >
          <html lang="en" />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
        </Helmet>
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <div
          id="App"
          style={{
            margin: '0 auto',
          }}
        >
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
