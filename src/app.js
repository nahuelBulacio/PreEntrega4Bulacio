import express, { json } from "express";
import __dirname from "./utils.js";
import handlebars from "express-handlebars";
import viewsRouter from "./routes/views.js";
import { Server } from "socket.io";
import products from "./routes/products.js";
import { ProductManager } from "./ProductManager.js";

const app = express();
const httpServer = app.listen(8080, () => {
  console.log("Listening on Port 8080");
});

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use("/", viewsRouter);
app.use("/", products);

const pro = new ProductManager("./src/productos.json");
const gp = await pro.getProducts();

const socketServer = new Server(httpServer);
socketServer.on("connection", (socket) => {
  socket.on("message", (data) => {
    console.log(data);
  });
  socket.on("agregarProducto", (prod) => {
    pro.addProduct(prod);
    console.log("Agregando Producto");
    console.log(prod);
  });
  socket.on("eliminar", (data) => {
    console.log("Eliminar el producto: ", data);
    pro.deleteProduct(data);
  });

  socket.emit("getProducts", gp);
});
