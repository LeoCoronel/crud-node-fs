const { exception } = require('console')
const fs = require('fs')

let posts = []

const create = (title) => {

    try {
        load()
    } catch($e) {}

    let post = {
        id: 1 + posts.length,
        title
    }

    posts.push(post)

    save()

    return post
}

const save = () => {
    let json = JSON.stringify(posts)
    fs.writeFile('posts/db.json', json, (error) => {
        if(error) throw new Error('No se puede grabar el archivo')
    })
}

const load = () => {
    posts = require('./db.json')
}

const read = (id) => {
    try {
        load()
    } catch($e) {}

    let post = posts.find(post => post.id == id)

    return post
}

const update = (id, title) => {
    try {
        load()
    } catch($e) {}

    let index = posts.findIndex(post => post.id == id)

    if(index !== -1) {
        posts[index].title = title
        save()
        return posts[index]
    }

    return false
}

const eliminar = (id) => {
    try {
        load()
    } catch($e) {}

    let index = posts.findIndex(post => post.id == id)

    if(index !== -1) {
        posts.splice(index, 1)
        posts.map((e, index) => {
            posts[index].id = index + 1;
            return e
        })

        save()
        return true
    }

    return false
}

module.exports = {
    create,
    read,
    update,
    eliminar
}