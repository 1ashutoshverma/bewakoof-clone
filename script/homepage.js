var second_tile = [
  {
    img: "https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-D-230x320-newarrivals-common-1682570370.jpg",
    name: "New Arrivals",
  },
  // {
  //   img: "https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-D-230x320-common-bestseller-1679567164.jpg",
  //   name: "Bestsellers",
  // },
  // {
  //   img: "https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-D-230x320-official-collab-common-1682570371.jpg",
  //   name: "Official Collaboration",
  // },
  // {
  //   img: "https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-D-230x320-old-version-1687889121.jpg",
  //   name: "Customization",
  // },
  {
    img: "https://images.bewakoof.com/uploads/grid/app/vote-thumbnail-1668508339.jpg",
    name: "Vote for Designs",
  },
  {
    img: "https://images.bewakoof.com/uploads/grid/app/ezgif-com-gif-maker-1684474101.gif",
    name: "Combos",
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
var fifth_tile = [
  {
    img: "https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-printed-tees-m-1685445850.jpg",
  },
  {
    img: "https://images.bewakoof.com/uploads/grid/app/category-box-oversized-tees-m-1685086219.jpg",
  },
  {
    img: "https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-men-shorts-1686063035.jpg",
  },
  {
    img: "https://images.bewakoof.com/uploads/grid/app/category-box-joggers-m-1684997505.jpg",
  },
  {
    img: "https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-men-vests-1686063036.jpg",
  },
  {
    img: "https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-men-fullsleeve-1686063034.jpg",
  },
  {
    img: "https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-printed-tees-w-1685445851.jpg",
  },
  {
    img: "https://images.bewakoof.com/uploads/grid/app/category-box-Oversized-tshirts-Women-1682055634.png",
  },
  {
    img: "https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-fashion-tops-1686305660.jpg",
  },
  {
    img: "https://images.bewakoof.com/uploads/grid/app/category-box-Joggers-Women-1682055633.png",
  },
  {
    img: "https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-WOMEN-Dresses-1681725004.jpg",
  },
  {
    img: "https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-WOMEN-BoyfriendTeess-1681730084.jpg",
  },
];

var fifthTile = document.querySelector("#fifth_tile");
console.log(fifthTile);
updateFifthTile(fifth_tile, fifthTile);

function updateFifthTile(arr, name) {
  arr.forEach((ele) => {
    //making things
    let div = document.createElement("div");
    let a = document.createElement("a");
    let img = document.createElement("img");
    img.setAttribute("src", ele.img);
    a.setAttribute("href", "#");
    a.append(img);
    div.append(a);
    name.append(div);
  });
}
var seventh_tile = [
  {
    img: "https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-men-sshirts-1686063036.jpg",
  },
  {
    img: "https://images.bewakoof.com/uploads/grid/app/category-box-boxers-1685086219.jpg",
  },
  {
    img: "https://images.bewakoof.com/uploads/grid/app/category-box--m-pyjama-1685086220.jpg",
  },
  {
    img: "https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-women-cords-1686063032.jpg",
  },
  {
    img: "https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-women-pjs-1686063033.jpg",
  },
  {
    img: "https://images.bewakoof.com/uploads/grid/app/category-box-new-240x350-women-shorts-1686063034.jpg",
  },
];
var seventhTile = document.querySelector("#seventh_tile");
updateFifthTile(seventh_tile, seventhTile);
