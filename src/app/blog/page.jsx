import React from 'react';
import Link from 'next/link';

import Page from '../../components/Page';
import { getAllPosts } from '../../lib/posts';

export const metadata = {
  title: 'Blog',
};

const Blog = () => {
  const posts = getAllPosts();

  return (
    <Page>
      <div className="row">
        <div className="col-12">
          <h2 className="h3 text-secondary">Blog</h2>
          <div>
            {posts.map((post) => (
              <article className="mt-5" key={post.slug}>
                <header>
                  <h3>
                    <Link style={{ boxShadow: 'none' }} href={`/${post.slug}/`}>
                      {post.title}
                    </Link>
                  </h3>
                  <small>{post.formattedDate}</small>
                </header>
                <section>
                  <p>{post.description}</p>
                </section>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Blog;
