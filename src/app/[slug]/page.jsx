import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import Bio from '../../components/Bio';
import Page from '../../components/Page';
import { getAllPosts, getPostBySlug, getPostNavigation, getPostSlugs } from '../../lib/posts';
import { SITE } from '../../lib/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  if (!getPostSlugs().includes(slug)) {
    return {};
  }

  const post = await getPostBySlug(slug);

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      url: `${SITE.siteUrl}/${post.slug}/`,
    },
  };
}

const BlogPost = async ({ params }) => {
  const { slug } = await params;

  if (!getAllPosts().some((post) => post.slug === slug)) {
    notFound();
  }

  const post = await getPostBySlug(slug);
  const { previous, next } = getPostNavigation(slug);

  return (
    <Page>
      <div className="row">
        <div className="col-12">
          <article className="BlogPost">
            <header>
              <h1>{post.title}</h1>
              <p className="text-secondary small">{post.formattedDate}</p>
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
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                listStyle: 'none',
                padding: 0,
              }}
            >
              <li>
                {previous && (
                  <Link href={`/${previous.slug}/`} rel="prev">
                    &larr; {previous.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link href={`/${next.slug}/`} rel="next">
                    {next.title} &rarr;
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Page>
  );
};

export default BlogPost;
