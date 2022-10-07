import { gql } from "@apollo/client";

export const POST_QUERY = gql`
  query {
    posts {
      id
      title
      content {
        html
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
