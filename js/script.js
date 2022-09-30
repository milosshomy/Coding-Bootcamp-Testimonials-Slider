/* Variables */

const prevBtn = document.querySelector(".slider-btn-prev");
const nextBtn = document.querySelector(".slider-btn-next");
const textSlider = document.querySelector(".text-slider");
const imageSlider = document.querySelector(".image-slider");
let count = 0;

//Getting sliders width

const textSliderWidth = textSlider.getBoundingClientRect().width;
const imageSliderWidth = imageSlider.getBoundingClientRect().width;

//Activating sliders on button clicks

prevBtn.addEventListener("click", () => {
  count -= 1;
  textSlider.style.translate = textSliderWidth * count + "px";
  imageSlider.style.translate = imageSliderWidth * count + "px";

  if (count <= 0) {
    textSlider.style.translate = "-" + textSliderWidth * count + "px";
    imageSlider.style.translate = "-" + imageSliderWidth * count + "px";
  }
  if (count === -2) {
    count = 0;
    textSlider.style.translate = textSliderWidth * count + "px";
    imageSlider.style.translate = imageSliderWidth * count + "px";
  }
});

nextBtn.addEventListener("click", () => {
  count += 1;
  textSlider.style.translate = "-" + textSliderWidth * count + "px";
  imageSlider.style.translate = "-" + imageSliderWidth * count + "px";

  if (count > 1) {
    count = 0;
    textSlider.style.translate = textSliderWidth * count + "px";
    imageSlider.style.translate = imageSliderWidth * count + "px";
  }
});
