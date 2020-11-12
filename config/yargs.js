const id = {
    demand: true,
    desc: 'ID del Post'
}

const title = {
    demand: true,
    alias: 't',
    description: 'Titulo del Post'
}

const argv = require('yargs')
    .command('create', 'Crea un nuevo Post', {
        title
    })
    .command('read', 'Read un Post', {
        id
    })
    .command('update', 'Actualizar un Post', {
        id,
        title
    })
    .command('eliminar', 'Eliminar post', {
        id
    })
    .argv

module.exports = {
    argv
}