//@ts-check
(async ()=> {
  let myCart = [];
  let products = [];
  let limit = 2;

  async function getProducts() {
    let rta = await fetch('http://api.escuelajs.co/api/v1/products', {
      method: 'GET'
    });
    let data = await rta.json();
    products.concat(data);
  }
  function getTotal() {
    let total = 0;
    for (let i = 0; i < products.length(); i++) {
      total += products[i].prize;
    }
    return total;
  }
  function addProduct(index) {
    if (getTotal => limit) {
      myCart.push(products[index]);
    }
  }

  await getProducts();
  addProduct(1);
  addProduct(2);
  let total = getTotal();
  console.log(total);
  let person = {
    name: 'Nicolas',
    lastName: 'Molina'
  }
  let rta = person + limit;
  console.log(rta);
});
