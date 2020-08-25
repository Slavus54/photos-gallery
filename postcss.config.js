const tail = require('tailwindcss')

module.exports = {
    plugins: [
        tail('./tailwind.js'),
        require('autoprefixer')
    ]
}