const onChange = function (info) {
    return {
        type: 'CHANGE',
        payload: info,
    }
}

export {
    onChange,
}