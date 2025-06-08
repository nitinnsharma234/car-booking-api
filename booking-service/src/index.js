import "express-async-errors";
import express from "express";
import { xss } from "express-xss-sanitizer";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.set("reverse proxy", 1);
// app.use(cors());
app.use(express.json({ limit: "5000kb" }));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use("/a2", (req, res) => {
  res.send("Hello this is booking service");
});

app.listen(4002, () => {
  console.log(`Running this on port ${process.env.PORT}`);
  //   logger.info(`Service is listening on port ${process.env.PORT}`);
});

export default app;
