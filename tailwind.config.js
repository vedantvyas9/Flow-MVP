/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins-Regular', 'sans-serif'], // Default font
        poppins: {
          black: ['Poppins-Black', 'sans-serif'],
          blackItalic: ['Poppins-BlackItalic', 'sans-serif'],
          bold: ['Poppins-Bold', 'sans-serif'],
          boldItalic: ['Poppins-BoldItalic', 'sans-serif'],
          extraBold: ['Poppins-ExtraBold', 'sans-serif'],
          extraLight: ['Poppins-ExtraLight', 'sans-serif'],
          extraLightItalic: ['Poppins-ExtraLightItalic', 'sans-serif'],
          italic: ['Poppins-Italic', 'sans-serif'],
          light: ['Poppins-Light', 'sans-serif'],
          lightItalic: ['Poppins-LightItalic', 'sans-serif'],
          medium: ['Poppins-Medium', 'sans-serif'],
          semiBold: ['Poppins-SemiBold', 'sans-serif'],
          semiBoldItalic: ['Poppins-SemiBoldItalic', 'sans-serif'],
          thin: ['Poppins-Thin', 'sans-serif'],
          thinItalic: ['Poppins-ThinItalic', 'sans-serif'],
        },
      },
    },
  },
  plugins: [],
};
