const app = require('./server.js');

const PORT = 3000;


app.listen(PORT, () => {
  console.log(`dummy app listening on PORT localhost:${PORT}`)
})