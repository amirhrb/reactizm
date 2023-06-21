'use client';

import { useParams, usePathname } from 'next/navigation';
import { getAuthorBySlug, getPostBySlug } from '../Contentful/queries';
import { useEffect } from 'react';

const postHandler = async (slug: string) => {
  if (slug) {
    const res: any = await getPostBySlug(slug);
    console.log(res);
  }
};
const authorHandler = async (slug: string) => {
  if (slug) {
    const res: any = await getAuthorBySlug(slug);
    console.log(res);
  }
};

const ConsoleComponent = () => {
  const { slug } = useParams();
  const pathname = usePathname();
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      if (pathname.includes('/articles/')) {
        postHandler(slug);
      } else if (pathname.includes('/authors/')) {
        authorHandler(slug);
      }
    }
  }, [pathname, slug]);
  return '';
};

export default ConsoleComponent;
