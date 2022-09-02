const express = require("express");
const app = express();
const port = 3000;
// app.use(express.json()) 

app.use(
    express.json({
      limit: '5mb',
      verify: (req, res, buf) => {
        req.rawBody = buf.toString();
      },
    })
  );

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/hexdata", (req, res) => {
    console.log('--- Hex data is called!');

    const body = req.body;
    console.log('Body = ', body);
    console.log('Raw Body = ', req.rawBody);
    res.json(body);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
