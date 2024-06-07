const express = require("express");
const postsRouter = require("./routers/posts");
const{ createCategories, readCategories} = require('./controllers/categories');
const{ createTags, readTags} = require('./controllers/tags');
const app = express();
require("dotenv").config();

const {PORT} = process.env;
const port = PORT || 3000;

app.use(express.json());

// creo e leggo Categories

// createCategories(['test', 'test2'], (count) => console.log(`Created ${count} categories`));
// readCategories((categories) => console.log(categories));

// creo e leggo Tags

// createTags(['test', 'test2'], (count) => console.log(`Created ${count} tags`));
// readTags((tags) => console.log(tags));

app.use('/posts', postsRouter);

app.listen(port, () => {
    console.log(`Server attivo su http://localhost:${port}`);
});