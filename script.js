function showProductInfo(productId) {
  let productInfo;
  switch (productId) {
    case 1:
      productInfo = `
            <div class="product-info product-info-mobile">
              <img src="./assets/img.png" alt="img">
              <div>
                <h1>IZDELEK 1</h1>
                <h2>Podnaslov izdelka 1</h2>
                <p>
                  Odstavek 1. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nullam quis risus eget urna mollis ornare vel eu leo.
                  <br><br>
                  Odstavek 2. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                <button onclick="goBackToProducts()"><i class="fa-solid fa-angle-left"></i></i> NAZAJ NA SEZNAM</button>
              </div>
            </div>
            `;
      break;
    case 2:
      productInfo = `
            <div class="product-info product-info-mobile">
              <img src="./assets/img.png" alt="img">
              <div>
                <h1>IZDELEK 2</h1>
                <h2>Podnaslov izdelka 2</h2>
                <p>
                  Odstavek 1. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nullam quis risus eget urna mollis ornare vel eu leo.
                  <br><br>
                  Odstavek 2. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                  <br><br>
                  Odstavek 2. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                <button onclick="goBackToProducts()"><i class="fa-solid fa-angle-left"></i></i> NAZAJ NA SEZNAM</button>
              </div>
            </div>
          `;
      break;
    case 3:
      productInfo = `
            <div class="product-info product-info-mobile">
              <img src="./assets/img.png" alt="img">
              <div>
                <h1>IZDELEK 3</h1>
                <h2>Podnaslov izdelka 3</h2>
                <p>
                  Odstavek 1. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nullam quis risus eget urna mollis ornare vel eu leo.
                  <br><br>
                  Odstavek 2. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                  <br><br>
                  Odstavek 2. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                  <br><br>
                  Odstavek 2. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                <button onclick="goBackToProducts()"><i class="fa-solid fa-angle-left"></i> NAZAJ NA SEZNAM</button>
              </div>
            </div>
          `;
      break;
    default:
      productInfo = "<p>Product Information not available.</p>";
      break;
  }
  document.getElementById('productContainer').style.display = 'none'; // Hide product container
  document.getElementById('productCard').innerHTML = productInfo; // Display product information
  document.getElementById('productInfo').style.display = 'block'; // Show product info container

}

function goBackToProducts() {
  document.getElementById('productContainer').style.display = 'flex'; // Show product container
  document.getElementById('productInfo').style.display = 'none'; // Hide product info container

  // Clear the product card content
  document.getElementById('productCard').innerHTML = '';
}

function toggleMenu() {
  document.getElementById('menu').classList.toggle('menu')
}

function selectPage() {
  document.getElementById('menu').classList.remove('menu')
}

