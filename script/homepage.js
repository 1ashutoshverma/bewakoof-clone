var second_tile = [
  {
    img: "https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-D-230x320-newarrivals-common-1682570370.jpg",
    name: "New Arrivals",
  },
  {
    img: "https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-D-230x320-common-bestseller-1679567164.jpg",
    name: "Bestsellers",
  },
  {
    img: "https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-D-230x320-official-collab-common-1682570371.jpg",
    name: "Official Collaboration",
  },
  {
    img: "https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-D-230x320-old-version-1687889121.jpg",
    name: "Customization",
  },
  {
    img: "https://images.bewakoof.com/uploads/grid/app/ezgif-com-gif-maker-1684474101.gif",
    name: "Combos",
  },
  {
    img: "https://images.bewakoof.com/uploads/grid/app/vote-thumbnail-1668508339.jpg",
    name: "Vote for Designs",
  },
  {
    img: "https://images.bewakoof.com/uploads/grid/app/last-size-new-thumbnaik-1668508337.jpg",
    name: "Last Sizes Left",
  },
  {
    img: "https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-D-230x320-plus-size-common-1682570373.jpg",
    name: "Plus Size",
  },
];

let secondTile = document.querySelector("#second_tile");
updateTiles(second_tile);
function updateTiles(arr) {
  arr.forEach((ele) => {
    //making things
    let div = document.createElement("div");
    let img = document.createElement("img");
    let p = document.createElement("p");

    img.setAttribute("src", ele.img);
    p.textContent = ele.name;
    div.append(img, p);
    secondTile.append(div);
  });
}
