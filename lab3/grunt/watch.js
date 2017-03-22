module.exports =
{
    options:
    {
        livereload: true
    },
    scripts:
    {
        files: ['index.html', 'js/**', 'css/*.css'], 
        tasks: ['concat', 'eslint', 'uglify', 'cssmin', 'hashres:prod', 'copy:main']
    }
};