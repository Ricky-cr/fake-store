'use strict';

const getData = async () => {
  let path = 'https://fakestoreapi.com/products';

  try {
    const response = await axios.get(path);
    console.log(response.data);
    // newParagraph(response);
    creationCard(response);
  } catch (error) {
    console.log('i dati non sono stati ricaricati');
  }
};

// const newParagraph = (data) => {
//   const container = document.getElementById('container');
//   const imgContainer = document.getElementById('img-container');

//   console.log('Inizio Loop');
//   for (let product of data.data) {
//     const p = document.createElement('p');

//     // console.log(product)
//     for (let property in product) {
//       //Creo un Div per ogni proprietà dell'oggetto
//       const img = document.createElement('div');
//       p.textContent = product.title;
//       // Se la Proprietà corrisponde a Image allora
//       if (property === 'image') {
//         img.innerHTML = '<img id="IMMAGINE" src=\'' + product[property] + "'>";
//       } else {
//         img.innerHTML = product[property];
//       }
//       imgContainer.append(img);

//       container.append(imgContainer); // console.log(property + " : " + product[property])

//       console.log(product[property]);
//       console.log(product.description);
//     }
//     container.append(p);
//   }
// };

const creationCard = (data) => {
  const products = document.getElementById('products');
  const imgContainer = document.getElementById('img-container');

  for (let product of data.data) {
    const p = document.createElement('p');
    const h3 = document.createElement('h3');
    const span = document.createElement('span');
    const spanRating = document.createElement('span');
    const spanRating2 = document.createElement('span');
    const div = document.createElement('div');
    const img = document.createElement('div');

    for (let property in product) {
      if (property === 'title') {
        h3.textContent = product.title;
      } else if (property === 'price') {
        span.textContent = product.price;
      } else if (property === 'description') {
        p.textContent = product.description;
      } else if (property === 'image') {
        img.innerHTML = '<img id="IMMAGINE" src=\'' + product[property] + "'>";
      } else if (property === 'rating') {
        spanRating.textContent = product.rating.rate;
      }

      // else {
      //   img.innerHTML = product[property];
      // }
    }
    products.append(div);
    div.append(img);
    div.append(h3);
    div.append(p);
    div.append(span);
    div.append(spanRating);
    div.append(spanRating2);
  }
};
getData();
