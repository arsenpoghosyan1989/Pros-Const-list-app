const add = function (info) {
    return {
        type: 'ADD',
        payload: info,
    }
}
const change = function (info) {
    return {
        type: 'CHANGE',
        payload: info,
    }
}
const remove = function (info) {
    return {
        type: 'REMOVE',
        payload: info,
    }
}

export {
    add,
    change,
    remove,
}