import { productImage } from "../productDropDownItems.js";
export function productDropDownItems() {
  let productHTML = "";
  productImage.forEach((list) => {
    productHTML += `
        <ul>
            <h3>${list.title}</h3>
            <img src=${list.image} alt="">
            <li>${list.list.nos1}</li>
            <li>${list.list.nos2}</li>
            <li>${list.list.nos3}</li>
            <li>${list.list.nos4}</li>
            <li>${list.list.nos5}</li>
            <li>${list.list.nos6}</li> 
        </ul>`;
  });
  document.getElementById("product").innerHTML = productHTML;
}
