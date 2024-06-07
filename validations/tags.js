const bodyData = {
    name: {
        in: ["body"],
        notEmpty: {
            errorMessage: 'Name è un campo obbligatorio.',
            bail: true
        },
        isString: {
            errorMessage: 'Name deve essere una stringa.',
            bail: true
        },
        isLength: {
            errorMessage: 'Name deve essere di almeno 4 caratteri',
            options: {min: 4}
        }
    }
}

module.exports = {
    bodyData,
}