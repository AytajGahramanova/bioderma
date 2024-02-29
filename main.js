const jsonData = {
  Logo: [
    {
      id: 1,
      image:
        "https://s3-alpha-sig.figma.com/img/cca0/2d1a/24026c34edbf37127f64357097803068?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AWMvuU~jFOHHhABhwwE8QDN34~6vOgMy2CsIOF655BDtsDlFaR285b7QJBZtqpusWUFAr-~GW6NoHMPJC2ExHwo6MRIWJOg5AaVNZXrymf5FcUZrIM~-9iIiALk5DEm3HAGsNMyGbeOuq8LaJQeFQIjomGO~5z310jQYj3mqR0eVzlzkg4tJDDLY9-Zw3YbChrsoPzuH-hNGRvNTJZAiLGENjrEC7KWJYqiw3U3hVGe75peset4g1DxmJQo6eTjRvKRN2IK4-O7~bTOOOGiONN0pGhIphNvEgmzHG0X8ngzfB5eYnIlNn-3EOtjTdYpQnevP4TTzVdoL8V1U10Gjrg__",
      actionName: "Təmizlə",
      desc: "Dəri tipinə uyğun təmizləyicilər",
    },
    {
      id: 2,
      image:
        "https://s3-alpha-sig.figma.com/img/d939/e371/9ecbadadecf94b988f435e38766022d9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Kl5UmG6D~Hox1uGI4FIEv2s60TvJMLaY7yuRi~X5VXEknBaVCaCfhyKWE8PV-jxs3gf9RnmHtxWojM-lLXqxgTgBp3YUH~ciySkzUlC2omV3I-qjSpZVzwD~42ZLlWBz5APtJwM3sBQNsQNq51E2YjAUnzOAX~znWvcKMt96pVz-z3CMc1n~sWOZW4GN5EMjpj-G6Q1dHBVCuYmOEm2z3KhsPsxBQj0~YfpILJPZD~V9xDHfp1xyNSO4OTVAeU9YLQRJT8T1clgJgi42X0SjMsKKIiannNypNz7wSSP09Gx9YTlyf6z0Jy3~eOeFgNML00kQ6koe0dfEH2aYmXkuMA__",
      actionName: "Müalicə et və qulluq (nəmləndir) et ",
      desc: "Dəri tipinə uyğun qulluq məhsulları",
    },
    {
      id: 3,
      image:
        "https://s3-alpha-sig.figma.com/img/bdfb/8081/5f2248c171677fa40ee9eb8b8ae3375c?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ikAvT9lVoOLU8AOT70D9NpUtL~acK5VXmtOoFN3HaKP-GFGoWXjM6SFQnkOQRTJ50a4Nmj3ZDx6LGh79-raSmnq-vGbbW0TNirdXRC03PiaxTT9zQtZmNNFxvBGmLhEAYPTz0uzbhGsk0DuDnU3j6G5-e872XLSCuX9SDOjj-rUQrkaWrlEmCOaT2YQAaMcNPheqPfGNOjrU~IyrJ-pfyN3MzVufvR4-gvEKNL71gmNlvE3V35zDhWOjurz3gzfFfSr9GAYR3A4tjZncyaljreMA46eKyMO2g754Ld8wjIrB4MpuVtqW9Geql1E2c0K9zmpaoa5E6l7s6lhrirlqSQ__",
      actionName: "Günəşdən qoru",
      desc: "Dəri tipinə uyğun Günəş qoruyucuları",
    },
  ],
};

const container = document.querySelector(".inner-scin");

jsonData.Logo.forEach((item) => {
  const itemDiv = document.createElement("div");
  itemDiv.classList.add("item");

  const imageDiv = document.createElement("div");
  imageDiv.classList.add("item-img");

  const image = document.createElement("img");
  image.src = item.image;
  image.alt = "";

  imageDiv.appendChild(image);

  const contentDiv = document.createElement("div");
  contentDiv.classList.add("item-content");

  const paragraph = document.createElement("p");
  paragraph.textContent = `${item.id}. Addım: ${item.actionName}`;
  contentDiv.appendChild(paragraph);

  const span = document.createElement("span");
  span.textContent = `${item.desc}`;
  contentDiv.appendChild(span);

  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("item-button");

  const button = document.createElement("button");
  button.textContent = "Kəşf et";

  buttonDiv.appendChild(button);

  itemDiv.appendChild(imageDiv);
  itemDiv.appendChild(contentDiv);
  itemDiv.appendChild(buttonDiv);

  container.appendChild(itemDiv);
});

const cssStyles = `
  .inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .item {
    .item-img img {
      width: 380px;
      height: 400px;
    }
    .item-content {
      margin-top: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      flex-direction: column;
      p {
        font-size: 18px;
        font-weight: 500;
        line-height: 21px;
      }
      span {
        font-size: 16px;
        font-weight: 400;
        line-height: 21px;
        color: var(--gray-color);
      }
    }
    .item-button {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 20px;
      button {
        width: 278px;
        height: 45px;
        border-radius: 4px;
        border: 1px solid #040404;
        background-color: var(--white-color);
      }
    }
  }
`;

const styleElement = document.createElement("style");
styleElement.textContent = cssStyles;
document.head.appendChild(styleElement);
