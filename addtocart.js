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

const categories = [...new Set(product.map((item) => {
  return item;
}))];

let i = 0;
document.getElementById('root').innerHTML = categories.map((item) => {
  var { image, title, price } = item;
  return (
    `
      <div class='box'>
        <div class='img-box'>
          <img class='images' src=${image}>
        </div>
        <div class='bottom'>
          <p>${title}</p>
          <h2>${price}.00</h2>
          <button onclick='addToCart(${i++})'>Add to cart</button>
        </div>
      </div>`
  );
}).join('')

var cart =[];
function addToCart(a){
  cart.push({...categories[a]});
  displayCart();
}

function delElement(a){
  cart.splice(a, 1);
  displayCart();
}

function displayCart(a){
  let j = 0, total = 0;
  document.getElementById('count').innerHTML = cart.length; 
  if(cart.length == 0){
    document.getElementById('cartItem').innerHTML = 'Your cart is empty';
    document.getElementById('total').innerHTML = `${0}.00`;
  } else{
    document.getElementById('cartItem').innerHTML = cart.map((items) => {
      var {image, title, price} = items;
      total += price;
      document.getElementById('total').innerHTML = `${total}.00`
      return (
        `
          <div class='cart-item'>
            <div class='row-img'>
              <img class='rowing' src=${image}>
            </div>

              <p style='font-size: 12px;'>${title}</p>
              <h2 style='font-size: 15px;'>${price}.00</h2>
              <i class='fa-solid fa-trash' onclick=delElement(${j++})></i>

          </div>`
      );
        
    }).join('');
  }
}