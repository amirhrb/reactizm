'use client';

import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import { ReactNode } from 'react';

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

function RTL(props: { children: ReactNode }) {
  return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
}
export default RTL;
