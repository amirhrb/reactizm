import localFont from 'next/font/local';

export const aquire = localFont({
  src: [
    {
      path: './Aquire/Aquire.otf',
      style: 'normal',
    },
    {
      path: './Aquire/AquireLight.otf',
      style: 'light',
    },
    {
      path: './Aquire/AquireBold.otf',
      style: 'bold',
    },
  ],
  variable: '--aquire-font',
});
