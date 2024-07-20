import connectDB from "./db/index.js";
import { app } from "./app.js";
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3001, () => {
      console.log(`Server started at port: ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log("Server Connection Failed ! ", err));
