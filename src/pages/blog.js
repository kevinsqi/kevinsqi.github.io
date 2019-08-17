import React from 'react';
import { Link, graphql } from 'gatsby';

import Page from '../components/Page';
import SEO from '../components/SEO';

class Blog extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Page title={siteTitle}>
        <SEO title="Blog" />
        <div className="row">
          <div className="col-12 col-md-7">
            <h2 className="font-weight-light text-secondary">Blog //</h2>
            <div>
              {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug;
                return (
                  <article className="mt-5" key={node.fields.slug}>
                    <header>
                      <h3>
                        <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                          {title}
                        </Link>
                      </h3>
                      <small>{node.frontmatter.date}</small>
                    </header>
                    <section>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: node.frontmatter.description || node.excerpt,
                        }}
                      />
                    </section>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </Page>
    );
  }
}

export default Blog;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
