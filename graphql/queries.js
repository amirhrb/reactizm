import { gql } from "@apollo/client";
export const AUTHOR_QUERY = gql`
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
export const POST_QUERY = gql`
  query {
    posts {
      id
      title
      content {
        html
        text
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
