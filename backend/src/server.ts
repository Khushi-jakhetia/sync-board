import express from 'express';
import http from 'http';
import cors from 'cors';
import dotenv from 'dotenv';

import { initializeSocket } from './socket';


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = initializeSocket(server);




const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
