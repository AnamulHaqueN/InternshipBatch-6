

fetch("data.json")
  .then(res => res.json())
  .then(data => {
      console.log("JSON loaded:", data);  // 👈 check if this prints
      
      const container = document.querySelector(".container");
      

      for(i in data) {
        const product = document.createElement("div");

        product.className = "product";

        product.innerHTML = `
            <img src= ${data[i].imgUrl} alt="Product">
            <h3> ${data[i].name} </h3>
            <p>${data[i].weight}</p>
            <p> ${data[i].price}</p>
            
            <button onclick="addToCart(${data[i].id}, '${data[i].name}', '${data[i].price}')">Add to Cart</button>

        `;

        container.appendChild(product);
      }
      
      

  })
  .catch(err => console.error("Error loading JSON:", err));
