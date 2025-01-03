'use strict';

const getData = async () => {
  let path = 'https://fakestoreapi.com/products';

  try {
    const response = await axios.get(path);
    buildParagraph(response.data);
    console.log(response.data);
  } catch (error) {
    console.log('i dati non sono stati ricaricati');
  }
};

const buildParagraph = (data) => {
  const products = document.getElementById('products');

  for (let product of data.data) {
    const paragraph = document.createElement('p');
  }
};

getData();
