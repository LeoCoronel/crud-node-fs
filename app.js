const { argv } = require('./config/yargs')
const posts = require('./posts/posts')

let comando = argv._[0]

let post

switch(comando) {
    case 'create':
        post = posts.create(argv.title)
        console.log("Create ", post);
        break;
    case 'read':
        post = posts.read(argv.id)
        console.log("Read ", post);
        break;
    case 'update':
        post = posts.update(argv.id, argv.title)
        console.log("Update ", post);
        break;
    case 'eliminar':
        post = posts.eliminar(argv.id)
        console.log("Delete ", post)
        break;
    default:
        console.log('No reconozco el comando');
}