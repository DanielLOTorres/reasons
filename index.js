const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

// // Adicione o seguinte trecho para permitir o uso da porta 3000 em desenvolvimento
// if (process.env.NODE_ENV !== 'production') {
//   server.listen(3000, () => {
//     console.log('JSON Server is running on http://localhost:3000')
//   })
// }

server.use("/", (req, res) => {
  res.json({ message: "aasdnikolabdiNO" });
});

module.exports = server;
