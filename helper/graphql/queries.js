import { gql } from '@apollo/client';

export const AUTHORS_QUERY = gql`
  query {
    authors {
      field
      id
      name
      slug
      avatar {
        fileName
        url
      }
      description {
        html
        text
      }
      posts {
        id
        slug
        title
        ogImage {
          fileName
          url
        }
        publishDate
      }
    }
  }
`;
export const AUTHOR_QUERY = gql`
  query GetSlug($Slug: String!) {
    author(where: { slug: $Slug }) {
      field
      id
      name
      slug
      avatar {
        fileName
        url
      }
      description {
        html
        text
      }
      posts {
        id
        slug
        title
        ogImage {
          fileName
          url
        }
        publishDate
      }
    }
  }
`;
export const POSTS_QUERY = gql`
  query {
    posts {
      id
      title
      content {
        html
        text
        markdown
      }
      author {
        name
        avatar {
          fileName
          url
        }
        slug
      }
      ogImage {
        fileName
        url
      }
      slug
    }
  }
`;

export const POST_QUERY = gql`
  query GetSlug($Slug: String!) {
    post(where: { slug: $Slug }) {
      id
      title
      content {
        html
        text
        markdown
      }
      author {
        name
        avatar {
          fileName
          url
        }
        slug
      }
      ogImage {
        fileName
        url
      }
      slug
    }
  }
`;
