/** @type {import('tailwindcss').Config} */

function colorGenerate(variable) {
  return `rgba(var(${variable}), <alpha-value>)`;
}

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: colorGenerate('--color-background'),
        text: colorGenerate('--color-text'),
        paper: colorGenerate('--color-background-paper'),
        primary: colorGenerate('--color-primary'),
        primaryLight: colorGenerate('--color-primary-light'),
        primaryContranst: colorGenerate('--color-primary-contrastcolor'),
        secondary: colorGenerate('--color-secondary'),
        secondaryLight: colorGenerate('--color-secondary-light'),
        secondaryContranst: colorGenerate('--color-secondary-contrastcolor'),
        error: colorGenerate('--color-error'),
        errorLight: colorGenerate('--color-error-light'),
        errorContranst: colorGenerate('--color-error-contrastcolor'),
        warning: colorGenerate('--color-warning'),
        warningLight: colorGenerate('--color-warning-light'),
        warningContranst: colorGenerate('--color-warning-contrastcolor'),
        info: colorGenerate('--color-info'),
        infoLight: colorGenerate('--color-info-light'),
        infoContranst: colorGenerate('--color-info-contrastcolor'),
        success: colorGenerate('--color-success'),
        successLight: colorGenerate('--color-success-light'),
        successContranst: colorGenerate('--color-success-contrastcolor'),
        divider: colorGenerate('--color-divider'),
        neutral: colorGenerate('--color-neutral'),
        neutralContranst: colorGenerate('--color-neutral-contrastcolor'),
        profile: colorGenerate('--color-profile'),
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
