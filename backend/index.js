import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./routes/User.js";
import adminRouter from "./routes/Admin.js";
import movieRouter from "./routes/Movie.js";
import bookingsRouter from "./routes/Booking.js";


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/movie", movieRouter);
app.use("/booking", bookingsRouter);

mongoose
    .connect(process.env.MONGO_URL)
    .then(() =>
        app.listen(5000, () =>
            console.log("Connected To Database And Server is running")
        )
    )
    .catch((e) => console.log(e));