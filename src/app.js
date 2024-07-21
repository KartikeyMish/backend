import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}));
app.use(express.json({ limit: "16kb" })); // imports the express.json() middleware and sets the limit to 16kb from the fors body
app.use(express.urlencoded({ extended: true,limit: "16kb" })); // imports the express.urlencoded() middleware and sets the limit to 16kb from the form body
app.use(cookieParser()); // imports the cookieParser() middleware 
app.use(express.static("public")); // imports the express.static() middleware and sets the path to the public folder



export default app; 