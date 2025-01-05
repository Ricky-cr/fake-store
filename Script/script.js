'use strict';

const getData = async () => {
  let path = 'https://fakestoreapi.com/products';

  try {
    const response = await axios.get(path);
    console.log(response.data);
    newParagraph(response)
  } catch (error) {
    console.log('i dati non sono stati ricaricati');
  }
};

const newParagraph = (data) => {
const container = document.getElementById("container")
    console.log("Inizio Loop")
  for (let product of data.data) {
    const p = document.createElement("p")

    // console.log(product)
    for(let property in product){
        
        p.textContent = product.title
        if(property === "image"){
            
            container.innerHTML = ("<img id=\"IMMAGINE\" src='" + product[property] + "'>")

        }
        
        
        

        // console.log(property + " : " + product[property])
        
        console.log(product[property])
        console.log(product.description)
    }
    container.append(p)
    
   
  }
  
  
  
};

getData();


