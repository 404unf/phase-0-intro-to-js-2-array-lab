// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name)
}


function destructivelyPrependCat(name) {
    cats.unshift(name)
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(name) {
    const new_cats = [...cats]
    new_cats.push(name)
    return new_cats
}


function prependCat(name) {
    const newCats = [...cats]
    newCats.unshift(name)
    return newCats
}

function removeLastCat() {
    const copyOfCats = [...cats]
    copyOfCats.pop()
    return copyOfCats
}


function removeFirstCat() {
    const copyOfCats = [...cats]
    copyOfCats.shift()
    return copyOfCats

}