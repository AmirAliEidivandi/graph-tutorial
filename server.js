const express = require("express");
const graphqlHTTPHandler = require("./graphql");
const app = express();

app.use("/graphql", graphqlHTTPHandler);

const port = 8000;
app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
