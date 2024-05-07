const http = require("http");
const app = require("./app.js");
const CONSTANTS = require("./constants.js");

const server = http.createServer(app);

// const PORT = process.env.PORT || 5000

server.listen(CONSTANTS.PORT, () => {
  console.log(`Server started on port ${CONSTANTS.PORT}`);
});
