/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
    presets: [require('nativewind/preset')],
    theme: {
        extend: {
            colors: {
                heading: '#52665A',
                body: '#5C6660',
            }
        }
    },
    plugins: [],
}
