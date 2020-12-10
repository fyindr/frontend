module.exports = {
    parser: 'sugarss',
    plugins: [
        require('postcss-import'),
        require('postcss-calc'),
        require('precss'),
        require('autoprefixer')
    ]
}