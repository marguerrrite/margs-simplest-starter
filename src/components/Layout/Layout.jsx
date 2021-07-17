import React from "react"
import PropTypes from "prop-types"
import classNames from 'classnames'
import { StaticQuery, graphql } from "gatsby"
import 'styles/globals.scss';

if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
}

const Layout = ({ className, children }) => (
    <StaticQuery
        query={graphql`
            query SITE_TITLE_QUERY {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
            render={data => (
                <div className="div">
                    <div className="Layout">
                        {/* <Header/> */}
                        <main className={classNames("Layout__content", className)}>
                            {children}
                        </main>
                    </div>
                </div>
            )}
        />

    )


Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
}

export default Layout;