export function carousel2() {
  /*-----code for the next and prev BTN-------*/
  const navigation = document.querySelectorAll("#dots2 li");
  const prevBTN = document.getElementById("prevBTN2");
  const nextBTN = document.getElementById("nextBTN2");
  const carousel2Slider = document.getElementById("carousel2-slider");
  const size = carousel2Slider.clientWidth / 6;
  let direction1;
  let counter = 0;
  nextBTN.addEventListener("click", () => {
    direction1 = -1;

    counter++;
    if (counter >= 7) {
      counter = 0;
    }

    carousel2Slider.style["transform"] = `translateX(${-size}px)`;

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
    carousel2Slider.style["transform"] = `translateX(${size}px)`;

    navigation.forEach((dots, i) => {
      dots.classList.remove("active");
      if (i === counter) {
        dots.classList.add("active");
      }
    });
  });
  carousel2Slider.addEventListener("transitionend", () => {
    direction1 === 1
      ? carousel2Slider.prepend(carousel2Slider.lastElementChild)
      : carousel2Slider.appendChild(carousel2Slider.firstElementChild);

    carousel2Slider.style["transition"] = "none";

    carousel2Slider.style["transform"] = `translateX(0px)`;

    setTimeout(() => {
      carousel2Slider.style["transition"] = "transform .3s linear";
    });
  });

  setInterval(() => {
    direction1 = -1;

    counter++;
    if (counter >= 7) {
      counter = 0;
    }

    carousel2Slider.style["transform"] = `translateX(${-size}px)`;

    navigation.forEach((dots, i) => {
      dots.classList.remove("active");
      if (i === counter) {
        dots.classList.add("active");
      }
    });
  }, 4000);
}
