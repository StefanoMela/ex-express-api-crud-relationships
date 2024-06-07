const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// validazione campi del body ricevuto dal client

const bodyData = {
    // per ogni campo specifico dove si trova il valore e assegno i controlli da eseguire 
    title: {
        in: ['body'],
        notEmpty: {
            errorMessage: 'Il titolo del post è obbligatorio',
            // bail blocca l'esecuzione del codice in questo punto restituendo l'errore
            bail: true,
        },
        isString: {
            errorMessage: 'Il titolo deve essere una stringa.',
            bail: true
        },
    },
    image: {
        in: ['body'],
        isURL: {
            options:
                { protocols: ['http', 'https', 'ftp'] },
            errorMessage: 'La foto deve essere un URL sicuro',
            bail: true
        }
    },
    content: {
        in: ['body'],
        notEmpty: {
            errorMessage: 'Il contenuto del post è obbligatorio',
            bail: true,
        },
        isLength: {
            options: { max: 3000 },
            errorMessage: 'Il post non può essere più lungo di 3000 caratteri',
        }
    },
    published: {
        in: ['body'],
        isBoolean: {
            errorMessage: 'Published deve essere un booleano'
        }
    },
    categoryId: {
        in: ['body'],
        isInt: {
            errorMessage: "L'id della categoria deve essere un intero",
            bail: true,
        },
        custom: {
            options: async (value) => {
                const categoryId = parseInt(value);
                const category = await prisma.category.findUnique({
                    where: { id: categoryId }
                });
                if (!category) {
                    throw new Error(`Non esiste una Category con id ${categoryId}`)
                }
                return true;
            }
        }
    },
    tags: {
        in: ['body'],
        notEmpty: {
            errorMessage: 'I tags sono obbligatori.',
            bail: true
        },
        isArray: {
            errorMessage: "Tags deve essere un array",
            bail: true
        },
        custom: {
            options: async (ids) => {
                if (ids.length === 0) {
                    throw new Error(`Un post deve avere almeno un tag`);
                }
                const notIntegerId = ids.find(id => isNaN(parseInt(id)));
                if (notIntegerId) {
                    throw new Error(`Uno o più ID non sono dei numeri interi.`);
                }
                const tags = await prisma.tag.findMany({
                    where: { id: { in: ids } }
                });
                if (tags.length !== ids.length) {
                    throw new Error(`Uno o più tags specificati non esistono.`);
                }
                return true;
            }
        }
    }
}

module.exports = {
    bodyData,
}