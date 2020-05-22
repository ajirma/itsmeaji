import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../layout'
import PostListing from '../components/PostListing'
import GitHubButton from 'react-github-btn'
import SEO from '../components/SEO'
import config from '../../data/SiteConfig'
import photo from '../../content/images/me-lite.png'

export default class Index extends Component {
  render() {
    const popularPostEdges = this.props.data.popular.edges
    return (
      <Layout>
        <Helmet title={`${config.siteTitle} – The Jurney Has Begun`} />
        <SEO />
        <div className="container">
          <div className="lead">
            <a
              href="https://www.youtube.com/channel/UCjntzibNSsjjIOh0HoP9vxw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={photo}
                className="lite-icon"
                title="Hi i'm Aji"
                alt="Hi i'm Aji"
              />
            </a>
            <h1>Hi, Saya Aji</h1>
            <p>
                Suka menulis dan sharing seputar IT di <a
                  href="https://www.youtube.com/channel/UCjntzibNSsjjIOh0HoP9vxw"
                  target="blank"
                >
                 Youtube
                </a> dan <a
                  href="https://codewith.ihwan.id"
                  target="blank"
                >Blog</a> CodeWithIhwan. Temukan juga beberapa artikel menarik di sini. 
              </p>
            <div className="social-buttons">
              <div>
                <a
                  className="twitter-follow-button"
                  href="https://twitter.com/ajirza"
                  data-size="large"
                  data-show-screen-name="false"
                >
                  Follow @ajirza
                </a>
              </div>
              <div>
                <GitHubButton
                  href="https://github.com/ajirma"
                  data-size="large"
                  data-show-count="true"
                  aria-label="Follow @ajirma on GitHub"
                >
                  Follow
                </GitHubButton>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <section className="section">
            <h2>Artikel Pilihan</h2>
            <PostListing simple postEdges={popularPostEdges} />
          </section>
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    latest: allMarkdownRemark(
      limit: 6
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
    popular: allMarkdownRemark(
      limit: 6
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { categories: { eq: "Popular" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
  }
`
