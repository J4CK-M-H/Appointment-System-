import express from "express";
import dotenv from "dotenv";
import { run_connection } from "./db/database.js";
import usuarioRoutes from "./routes/usuario.js";
import authRoutes from "./routes/auth.js";
import uploadsRoutes from "./routes/upload.js";
import doctorRoutes from "./routes/doctor.js";
import cors from 'cors'
import fileUpload from "express-fileupload";

const app = express();

app.use(cors({exposedHeaders: '*'}))
dotenv.config();

run_connection();

app.use(express.json());
app.use(fileUpload());

app.use("/api/auth", authRoutes);
app.use("/api/doctor", doctorRoutes);
app.use("/api/usuario", usuarioRoutes);
app.use("/api/uploads", uploadsRoutes);

// app.listen(3500, '192.168.0.112');
app.listen(3500);
