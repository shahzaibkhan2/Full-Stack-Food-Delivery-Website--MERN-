import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());

//  Import Routers
import userRouter from "./routes/user.routes.js";
import foodRouter from "./routes/food.routes.js";
import cartRouter from "./routes/cart.routes.js";
// Routes Declaration

app.use("/api/v1/users", userRouter);
app.use("/api/v1/food", foodRouter);
app.use("/images", express.static("src/uploads"));
app.use("/api/v1/cart", cartRouter);

export { app };
