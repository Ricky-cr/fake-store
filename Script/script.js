'use strict';

const getData = async () => {
  let path = 'https://fakestoreapi.com/products';

  try {
    const response = await axios.get(path);
    console.log(response.data);
  } catch (error) {
    console.log('i dati non sono stati ricaricati');
  }
};

const buildParagraph = (data) => {};

getData();
