import localFont from 'next/font/local';

const colfax = localFont({
  src: [
    {
      path: './colfax/ColfaxAIBold.woff2',
      style: 'bold',
    },
    {
      path: './colfax/ColfaxAIRegular.woff2',
      style: 'normal',
    },
  ],
  variable: '--colfax-font',
});
export default colfax;
