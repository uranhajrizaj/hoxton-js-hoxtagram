// [
//     {
//       "id": 1,
//       "title": "Coder dog",
//       "likes": 7,
//       "image": "./assets/coder-dog.png",
//       "comments": [
//         {
//           "id": 1,
//           "content": "What a cute dog!",
//           "imageId": 1
//         },
//         {
//           "imageId": 1,
//           "content": "Funny dog!!",
//           "id": 4
//         },
//         {
//           "imageId": 1,
//           "content": "Hes a good boy!!",
//           "id": 5
//         }
//       ]
//     },
//     {
//       "id": 2,
//       "title": "Coder cats",
//       "likes": 5,
//       "image": "./assets/coder-cat.jpeg",
//       "comments": [
//         {
//           "id": 2,
//           "content": "He has the paws for this!",
//           "imageId": 2
//         },
//         {
//           "id": 3,
//           "content": "Someone's in trouble!",
//           "imageId": 2
//         }
//       ]
//     }
//   ]

type Image = {
  id: number;
  title: string;
  likes: number;
  image: string;
  comments: Comment[];
};


type State = {
  images: Image[];
};

let state: State = {
  images: [],
};

fetch("http://localhost:3000/images")
  .then((response) => response.json())
  .then((images) => {
    state.images = images;
    render();
  });

let sectionEl = document.querySelector(".image-container");

function createImageCard() {
  if (!sectionEl) return;

  for (let image of state.images) {
    let imageCard = document.createElement("article");
    imageCard.classList.add("image-card");

    let title = document.createElement("h2");
    title.classList.add("title");
    title.textContent = image.title;

    let imageElement = document.createElement("img");
    imageElement.classList.add("image");
    imageElement.src = image.image;

    let deivEL = document.createElement("div");
    deivEL.classList.add("likes-section");

    let likes = document.createElement("span");
    likes.classList.add("likes");
    likes.textContent = String(image.likes);

    let likeButton = document.createElement("button");
    likeButton.classList.add("like-button");
    likeButton.textContent = "♥";

    deivEL.append(likes, likeButton);

    let ulEl = document.createElement("ul");
    ulEl.classList.add("comments");

    let liEl = document.createElement("li");
    liEl.textContent = "Get rid of these comments";

    let liEl2 = document.createElement("li");
    liEl2.textContent = "And replace them with the real ones";

    let liEl3 = document.createElement("li");
    liEl3.textContent = "From the server";

    ulEl.append(liEl, liEl2, liEl3);
    imageCard.append(title, imageElement, deivEL, ulEl);
    sectionEl.append(imageCard);
  }
}
function render() {
  createImageCard();
}
render();
