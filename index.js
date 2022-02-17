const express = require("express");
const Gun = require("gun");
const app = express();
const port = 3030;
app.use(Gun);

const server = app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

Gun({ web: server });
