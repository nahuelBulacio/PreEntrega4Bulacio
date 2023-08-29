const API_URL = "http://localhost:8080/products";
const HTMLResponse = document.querySelector("#app");

fetch(`${API_URL}`)
  .then((res) => res.json())
  .then((products) => {
    for (let product of products) {
      HTMLResponse.innerHTML += `
        <tr>
            <td>${product.id}</td>
            <td>${product.thumbnail}</td>
            <td>${product.title}</td>
            <td>${product.description}</td>
            <td>${product.stock}</td>
            <td>${product.code}</td>
            <td>${product.price}</td>
        </tr>
        `;
    }
  });
