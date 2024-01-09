const product = [
  {
    id: 0,
    image: 'images/camera.jpeg',
    title: 'Z Flip Foldable Mobile',
    price: 120,
  },
  {
    id: 1,
    image: 'images/camera.jpeg',
    title: 'Air pods pro',
    price: 60,
  },
  {
    id: 2,
    image: 'images/camera.jpeg',
    title: '250D DSLR Camera',
    price: 230,
  },
  {
    id: 3,
    image: 'images/camera.jpeg',
    title: 'Head Phones',
    price: 100,
  }
];

const categories = [...new Set(product.map(item => item.title))];

document.getElementById('root').innerHTML = categories.map((title, index) => {
  const { image, price } = product.find(item => item.title === title);
  return `
    <div class='box'>
      <div class='img-box'>
        <img class='images' src='${image}' alt='${title}'>
      </div>
      <div class='bottom'>
        <p>${title}</p>
        <h2>${price}.00</h2>
        <button onclick='addToCart(${index})'>Add to cart</button>
      </div>
    </div>`;
}).join('');

const cart = [];

function addToCart(categoryIndex) {
  const productIndex = product.findIndex(item => item.title === categories[categoryIndex]);
  if (productIndex !== -1) {
    cart.push({ ...product[productIndex] });
    displayCart();
  }
}

function delElement(cartIndex) {
  cart.splice(cartIndex, 1);
  displayCart();
}

function displayCart() {
  let total = 0;
  document.getElementById('count').innerHTML = cart.length;

  if (cart.length === 0) {
    document.getElementById('cartItem').innerHTML = 'Your cart is empty';
    document.getElementById('total').innerHTML = '0.00';
  } else {
    document.getElementById('cartItem').innerHTML = cart.map((item, index) => {
      const { image, title, price } = item;
      total += price;
      document.getElementById('total').innerHTML = `${total}.00`;

      return `
        <div class='cart-item'>
          <div class='row-img'>
            <img class='rowing' src='${image}' alt='${title}'>
          </div>
          <p style='font-size: 12px;'>${title}</p>
          <h2 style='font-size: 15px;'>${price}.00</h2>
          <i class='fa-solid fa-trash' onclick='delElement(${index})'></i>
        </div>`;
    }).join('');
  }
}