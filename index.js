import express from "express";
import resolvers from "./graphql/resolvers.js";
import schema from "./graphql/schema.js";
import { graphqlHTTP } from "express-graphql";


const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/:id", (req, res) => {
    // let myData = req.query;
    // const teachingAssist = new TeachingAssist(myData);
    // console.log(resolvers.getCourse("hello"));
    // test();
    // res.send(teachingAssist);
  res.send("This is a test API "+req.params.id);
});

app.use("/graphql", graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
}));

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});