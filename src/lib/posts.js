import fs from 'node:fs';
import path from 'node:path';

import matter from 'gray-matter';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

const postsDirectory = path.join(process.cwd(), 'content/blog');

function postPath(slug) {
  return path.join(postsDirectory, slug, 'index.md');
}

function readPost(slug) {
  const fileContents = fs.readFileSync(postPath(slug), 'utf8');
  return matter(fileContents);
}

function stripMarkdown(content) {
  return content
    .replace(/<[^>]+>/g, '')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[[^\]]+\]\(([^)]+)\)/g, '$1')
    .replace(/[#>*_`-]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function getExcerpt(content) {
  const text = stripMarkdown(content);
  if (text.length <= 160) {
    return text;
  }
  return `${text.slice(0, 157).trimEnd()}...`;
}

export function getPostSlugs() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(postsDirectory, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && fs.existsSync(postPath(entry.name)))
    .map((entry) => entry.name);
}

export function formatPostDate(date) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(date));
}

export function getAllPosts() {
  return getPostSlugs()
    .map((slug) => {
      const { data, content } = readPost(slug);

      return {
        slug,
        title: data.title || slug,
        date: data.date,
        formattedDate: formatPostDate(data.date),
        description: data.description || getExcerpt(content),
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function markdownToHtml(markdown) {
  const processed = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .process(markdown);

  return processed.toString();
}

export async function getPostBySlug(slug) {
  const { data, content } = readPost(slug);

  return {
    slug,
    title: data.title || slug,
    date: data.date,
    formattedDate: formatPostDate(data.date),
    description: data.description || getExcerpt(content),
    html: await markdownToHtml(content),
  };
}

export function getPostNavigation(slug) {
  const posts = getAllPosts();
  const index = posts.findIndex((post) => post.slug === slug);

  return {
    previous: index >= 0 && index < posts.length - 1 ? posts[index + 1] : null,
    next: index > 0 ? posts[index - 1] : null,
  };
}
