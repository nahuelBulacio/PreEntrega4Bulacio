const socket = io();
socket.emit("message", "Me comunico desde el websocket");

socket.on("Evento_para_socket_individual", (data) => {
  console.log(data);
});

socket.on("Evento_para_todos_menos_el_socket_actual", (data) => {
  console.log(data);
});

socket.on("Evento_para_todos", (data) => {
  console.log(data);
});
