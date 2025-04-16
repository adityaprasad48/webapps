const config = {
  plugins: {
    "@tailwindcss/postcss": {
      extend: {
        animation: {
          'spin-slow': 'spin 10s linear infinite',
        },
      },
    },
  },
};
export default config;