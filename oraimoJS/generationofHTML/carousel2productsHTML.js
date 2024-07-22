import { carousel2ProductDetails } from "../carousel2ProductDetails.js";
export let carousel2Products = "";
carousel2ProductDetails.forEach((list) => {
  carousel2Products += `
 <div class="product-container">
          <div class="product">
            <img src=${list.image.productImage} alt="">
          </div>
          <div class="product-details">
            <h3>Watch ES 2 1.95″ AMOLED IP68 Smart Watch</h3>
            <ul>
              <li class="carousel2-icon"><img src="/oraimoIMAGE/carousel2IMAGE/icons/2.4a-max-fast-charging.svg" alt=""></li>
              <li>38-Hr Long Playtime</li>
              </ul>
              <ul>
              <li class="carousel2-icon"><img src="/oraimoIMAGE/carousel2IMAGE/icons/2.4a-max-fast-charging.svg" alt=""></li>
              <li>38-Hr Long Playtime</li>
            </ul>
            <ul>
              <li class="newprice">₦15,000<s class="oldprice">₦15,000</s></li>
            </ul>
          </div>
        </div>
`;
});
document.querySelector("#carousel2-slider").innerHTML = carousel2Products;




