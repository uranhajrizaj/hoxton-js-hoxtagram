
type Image = {
  id: number;
  title: string;
  likes: number;
  image: string;
  comments: Comments[];
};

type Comments={
    id: number;
    content: string;
    imageId: number;
    
}

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

   for (let comment of image.comments) {
    if(comment.imageId === image.id){
        let liEl = document.createElement("li");
        liEl.textContent = comment.content;
        ulEl.append(liEl);
    }}

    
    imageCard.append(title, imageElement, deivEL, ulEl);
    sectionEl.append(imageCard);
  }
}
function render() {
  createImageCard();
}
render();
