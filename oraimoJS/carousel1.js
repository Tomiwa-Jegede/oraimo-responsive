export function carousel1() {
  /*-----code for the next and prev BTN-------*/
  const navigation = document.querySelectorAll("#dots li");
  const prevBTN = document.getElementById("prevBTN");
  const nextBTN = document.getElementById("nextBTN");
  const carousel1Slider = document.getElementById("carousel1-slider");
  const size = carousel1Slider.clientWidth;

  let direction1;
  let counter = 0;
  nextBTN.addEventListener("click", () => {
    direction1 = -1;

    counter++;
    if (counter >= 7) {
      counter = 0;
    }

    carousel1Slider.style["transform"] = `translateX(${-size}px)`;

    navigation.forEach((dots, i) => {
      dots.classList.remove("active");
      if (i === counter) {
        dots.classList.add("active");
      }
    });
  });

  prevBTN.addEventListener("click", () => {
    direction1 = 1;

    counter--;
    if (counter <= -1) {
      counter = 6;
    }
    carousel1Slider.style["transform"] = `translateX(${size}px)`;

    navigation.forEach((dots, i) => {
      dots.classList.remove("active");
      if (i === counter) {
        dots.classList.add("active");
      }
    });
  });
  carousel1Slider.addEventListener("transitionend", () => {
    direction1 === 1
      ? carousel1Slider.prepend(carousel1Slider.lastElementChild)
      : carousel1Slider.appendChild(carousel1Slider.firstElementChild);

    carousel1Slider.style["transition"] = "none";

    carousel1Slider.style["transform"] = `translateX(0px)`;

    setTimeout(() => {
      carousel1Slider.style["transition"] = "transform .3s linear";
    });
  });
  setInterval(() => {
    direction1 = -1;

    counter++;
    if (counter >= 7) {
      counter = 0;
    }

    carousel1Slider.style["transform"] = `translateX(${-size}px)`;

    navigation.forEach((dots, i) => {
      dots.classList.remove("active");
      if (i === counter) {
        dots.classList.add("active");
      }
    });
  }, 4000);
}
