const express = require("express");
const postsRouter = require("./routers/posts");
const categoriesRouter = require('./routers/categories')
const tagsRouter = require('./routers/tags')
const app = express();
require("dotenv").config();

const {PORT} = process.env;
const port = PORT || 3000;

app.use(express.json());

app.use('/posts', postsRouter);
app.use('/categories', categoriesRouter)
app.use('/tags', tagsRouter)


app.listen(port, () => {
    console.log(`Server attivo su http://localhost:${port}`);
});