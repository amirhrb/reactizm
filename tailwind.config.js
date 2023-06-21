/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--color-background)',
        text: 'rgb(var(--color-text)',
        paper: 'rgb(var(--color-background-paper))',
        primary: 'rgb(var(--color-primary)',
        primaryLight: 'rgb(var(--color-primary-light))',
        primaryContranst: 'rgb(var(--color-primary-contrastcolor))',
        secondary: 'rgb(var(--color-secondary)',
        secondaryLight: 'rgb(var(--color-secondary-light))',
        secondaryContranst: 'rgb(var(--color-secondary-contrastcolor))',
        error: 'rgb(var(--color-error))',
        errorLight: 'rgb(var(--color-error-light))',
        errorContranst: 'rgb(var(--color-error-contrastcolor))',
        warning: 'rgb(var(--color-warning))',
        warningLight: 'rgb(var(--color-warning-light))',
        warningContranst: 'rgb(var(--color-warning-contrastcolor))',
        info: 'rgb(var(--color-info))',
        infoLight: 'rgb(var(--color-info-light))',
        infoContranst: 'rgb(var(--color-info-contrastcolor))',
        success: 'rgb(var(--color-success))',
        successLight: 'rgb(var(--color-success-light))',
        successContranst: 'rgb(var(--color-success-contrastcolor))',
        divider: 'rgba(var(--color-divider),0.12)',
        neutral: 'rgb(var(--color-neutral))',
        neutralContranst: 'rgb(var(--color-neutral-contrastcolor))',
        profile: 'rgb(var(--color-profile))',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
