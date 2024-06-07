const { PrismaClient } = require("@prisma/client");
const RestError = require('../utils/restError.js');
const prisma = new PrismaClient();

const index = async (req, res) => {
    try {
        const tags = await prisma.tag.findMany();
        res.json(tags);
    } catch (error) {
        res.status(404).send('Errore nelle categorie')
    }
}

const show = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const tag = await prisma.tag.findUnique({
            where: { id }
        });
        if (tag) {
            res.json(tag)
        } else {
            throw new RestError(`Tag con id ${id} non trovato.`, 404);
        }
    } catch (error) {
        res.status(404).send('Tag non trovato')
    }
}

const create = async (req, res) => {
    const {name} = req.body;
    const data = {name};

    try {
        const tag = await prisma.tag.create({data});
        res.status(200).send(tag)
    } catch (error) {
        res.status(500).send('Errore server')
    }
}

module.exports = {
    index,
    show,
    create
}