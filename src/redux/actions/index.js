const onChange = function (info) {
    return {
        type: 'CHANGE',
        payload: info,
    }
}
const itemDecress = function (id) {
    return {
        type: "ITEM_DECRESS",
        payload: id,
    }
}
const itemIncress = function (id) {
    return {
        type: "ITEM_INCRESS",
        payload: id,
    }
}
const itemDelete = function (id) {
    return {
        type: "ITEM_DELETE",
        payload: id,
    }
}

export {
    onChange,
    itemDecress,
    itemIncress,
    itemDelete,
}