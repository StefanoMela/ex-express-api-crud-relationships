const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createCategories = (categoryNames, cf) => {
    prisma.category.createMany({
        data: categoryNames.map(categoryNames => ({ name: categoryNames }))
    })
    .then( count => cf(count))
    .catch(err => console.error(err));
}

const readCategories = (cf) => {

    prisma.category.findMany()
    .then( cs => cf(cs))
    .catch(err => console.error(err));
}

module.exports = {
    createCategories,
    readCategories
}