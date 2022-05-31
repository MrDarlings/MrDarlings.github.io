const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "BMX",
    price: 3499,
    colors: [
      {
        code: "lightgray",
        img: "./img/bmx/imagen1.png",
      },
    ],
  },
  {
    id: 2,
    title: "MERIDA BIKE MTB",
    price: 3999,
    colors: [
      {
        code: "lightgray",
        img: "./img/Merida/meri1.png",
      },
    ],
  },
  {
    id: 3,
    title: "ORBEA BIKE RISE",
    price: 4499,
    colors: [
      {
        code: "lightgray",
        img: "./img/orbea/orbea.png",
      },
    ],
  },
  {
    id: 4,
    title: "SCOTT ASPECT 910",
    price: 4999,
    colors: [
      {
        code: "black",
        img: "./img/scott/scott.png",
      },
    ],
  },
  {
    id: 5,
    title: "TREK DUAL SPORT 4",
    price: 5499,
    colors: [
      {
        code: "gray",
        img: "./img/trek/trek.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //Cambia la pantalla actual
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //Cambia el producto escogido
    choosenProduct = products[index];

    //Cambia los textos del currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "Q" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //creación de nuevos colores
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

//Cambiar la imagen al seleccionar los colores
currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});


const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

//Animación para el Pago
productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

//Cierre de la Animación del Pago
close.addEventListener("click", () => {
  payment.style.display = "none";
});
