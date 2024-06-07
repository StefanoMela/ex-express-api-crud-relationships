const { PrismaClient } = require("@prisma/client");
const RestError = require('../utils/restError.js');
const prisma = new PrismaClient();

const index = async (req, res) => {
    try {
        const categories = await prisma.category.findMany();
        res.json(categories);
    } catch (error) {
        res.status(404).send('Errore nelle categorie')
    }
}

const show = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const category = await prisma.category.findUnique({
            where: { id }
        });
        if (category) {
            res.json(category)
        } else {
            throw new RestError(`Category con id ${id} non trovata.`, 404);
        }
    } catch (error) {
        res.status(404).send('Categoria non trovata')
    }
}

const create = async (req, res) => {
    const {name} = req.body;
    const data = {name};

    try {
        const category = await prisma.category.create({data});
        res.status(200).send(category)
    } catch (error) {
        res.status(500).send('Errore server')
    }
}

module.exports = {
    index,
    show,
    create
}