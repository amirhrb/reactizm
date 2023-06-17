import {
  AUTHORS_QUERY,
  AUTHOR_QUERY,
  POSTS_QUERY,
  POST_QUERY,
} from './queries';

const uri = process.env.HYGRAPH_URI as string;

const headers = {
  'content-type': 'application/json',
};
const method = 'POST';

export async function getAuthors() {
  const res = await fetch(uri, {
    method,
    headers,
    body: JSON.stringify({
      query: AUTHORS_QUERY,
      variables: {},
    }),
  });
  return res.json();
}
export async function getPosts() {
  const res = await fetch(uri, {
    method,
    headers,
    body: JSON.stringify({
      query: POSTS_QUERY,
      variables: {},
    }),
  });
  return res.json();
}
export async function getAuthor(slug: string) {
  const res = await fetch(uri, {
    method,
    headers,
    body: JSON.stringify({
      query: AUTHOR_QUERY,
      variables: { Slug: slug },
    }),
  });
  return res.json();
}
export async function getPost(slug: string) {
  const res = await fetch(uri, {
    method,
    headers,
    body: JSON.stringify({
      query: POST_QUERY,
      variables: { Slug: slug },
    }),
  });
  return res.json();
}
