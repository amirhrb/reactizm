'use client';

export const dynamic = 'force-dynamic';

import { useSuspenseQuery as useSuspenseQueryMain } from '@apollo/experimental-nextjs-app-support/ssr';
import { DocumentNode, OperationVariables } from '@apollo/client';
import {
  AUTHORS_QUERY,
  AUTHOR_QUERY,
  POSTS_QUERY,
  POST_QUERY,
} from './queries';

export function useSuspenseQuery(query: DocumentNode, options?: any) {
  return useSuspenseQueryMain<any, OperationVariables>(query, options);
}

export function useAuthors() {
  const { data, error } = useSuspenseQuery(AUTHORS_QUERY);
  return { data, error };
}
export function usePosts() {
  const { data, error } = useSuspenseQuery(POSTS_QUERY);
  return { data, error };
}
export function useAuthor(variables: any) {
  const { data, error } = useSuspenseQuery(AUTHOR_QUERY, variables);
  return { data, error };
}
export function usePost(variables: any) {
  const { data, error } = useSuspenseQuery(POST_QUERY, variables);
  return { data, error };
}
