module.exports =
{
    options:
    {
        fileNameFormat: '${name}.[${hash}].${ext}'
    },

    prod:
    {
        src: ['.build/js/main.min.js', '.build/css/main.min.css'],
        dest: ['index.html']
    }
};