const express = require("express");

const app = express();

const PORT = process.env.PORT || 3977;

app.use("/", (req, res) => {
  res.status(200).send({ msg: "Hello World" });
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
