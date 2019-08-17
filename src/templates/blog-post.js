import React from 'react';
import { Link, graphql } from 'gatsby';

import Bio from '../components/Bio';
import Page from '../components/Page';
import SEO from '../components/SEO';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;

    return (
      <Page title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <div className="row">
          <div className="col-12 col-md-7">
            <article className="BlogPost">
              <header>
                <h1>{post.frontmatter.title}</h1>
                <p className="text-secondary small">{post.frontmatter.date}</p>
              </header>
              <section dangerouslySetInnerHTML={{ __html: post.html }} />
              <hr className="mt-5" />
              <footer className="mt-5">
                <Bio />
              </footer>
            </article>

            <nav className="mt-5">
              <ul
                style={{
                  display: `flex`,
                  flexWrap: `wrap`,
                  justifyContent: `space-between`,
                  listStyle: `none`,
                  padding: 0,
                }}
              >
                <li>
                  {previous && (
                    <Link to={previous.fields.slug} rel="prev">
                      ← {previous.frontmatter.title}
                    </Link>
                  )}
                </li>
                <li>
                  {next && (
                    <Link to={next.fields.slug} rel="next">
                      {next.frontmatter.title} →
                    </Link>
                  )}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </Page>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        description
      }
    }
  }
`;
