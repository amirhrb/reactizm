import localFont from 'next/font/local';

export const yekan = localFont({
  src: [
    {
      path: './YekanBakh/YekanBakh-Light/YekanBakh-Light.woff',
      weight: '300',
      style: 'normal',
    },
    {
      path: './YekanBakh/YekanBakh-Regular/YekanBakh-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './YekanBakh/YekanBakh-Medium/YekanBakh-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: './YekanBakh/YekanBakh-Bold/YekanBakh-Bold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: './YekanBakh/YekanBakh-Heavy/YekanBakh-Heavy.woff',
      weight: '800',
      style: 'normal',
    },
    {
      path: './YekanBakh/YekanBakh-Fat/YekanBakh-Fat.woff',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--yekan-font',
});
