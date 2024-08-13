let img_arr = [
  {
    dp: "https://plus.unsplash.com/premium_photo-1668319914124-57301e0a1850?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1521676259650-675b5bfec1ae?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

let clutter = "";
let stories = document.querySelector("#stories");
img_arr.forEach((img, index) => {
  clutter += `<div class="story">
               
                <img id="${index}" src="${img.dp}" alt="story${
    img_arr.indexOf(img) + 1
  }" title="story${img_arr.indexOf(img) + 1}">
            </div>`;
});

stories.innerHTML = clutter;

stories.addEventListener("click", function (e) {
    let img = img_arr[e.target.id]?.dp
  if (img) {
    let img_card = document.querySelector("#full-screen");
    img_card.style.display = "block";
    img_card.style.backgroundImage = `url(${img})`;

    setTimeout(() => {
      img_card.style.display = "none";
    }, 3000);
  }
});

