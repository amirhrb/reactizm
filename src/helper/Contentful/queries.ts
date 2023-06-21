import client from './client';

export const getAllPosts = async (
  page: number | string = 1,
  limit: number | string = 20
) => {
  const res = await client.getEntries({
    content_type: 'post',
    limit: +limit,
    skip: (+page - 1) * +limit,
  });
  return res;
};
export const getAllAuthors = async (
  page: number | string = 1,
  limit: number | string = 5
) => {
  const res = await client.getEntries({
    content_type: 'author',
    limit: +limit,
    skip: (+page - 1) * +limit,
  });
  return res;
};
export const getPostBySlug = async (slug: string) => {
  if (slug) {
    const res = await client.getEntries({
      content_type: 'post',
      'fields.slug': slug,
    });
    return res;
  }
};
export const getAuthorBySlug = async (slug: string) => {
  if (slug) {
    const res = await client.getEntries({
      content_type: 'author',
      'fields.slug': slug,
    });
    return res;
  }
};
