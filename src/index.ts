import "dotenv/config";
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

import menuRoutes from "./feature/menu/routes/menuRoutes";
import orderRoutes from "./feature/order/routes/orderRoutes";
import { setupOrderSocket } from "./feature/order/sockets/orderSocket";
import { errorHandler } from "./middleware/errorHandler";
import { securityHeaders } from "./middleware/securityHeaders";
import cors from "cors";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: [
      "*",
      "http://localhost:3000",
      "http://localhost:5173",
    ],
    methods: ["GET", "POST"],
    credentials: true,
  },
  transports: ["websocket", "polling"],
  pingTimeout: 60000,
  pingInterval: 25000,
});
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(securityHeaders);

// API v1 routes
app.use("/api/v1/menu", menuRoutes);
app.use("/api/v1/orders", orderRoutes);

setupOrderSocket(io);

app.use(errorHandler);

httpServer.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  console.log(`Socket.io server ready`);
});
