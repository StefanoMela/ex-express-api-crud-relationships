const paramID = {
    id: {
        in: ['params'],
        isInt: {
            errorMessage: "L'ID deve essere un numero"
        },
    },
}

module.exports = {
    paramID,
}