const initialCards = [
  {
    name: "Golden Gate bridge",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg",
  },
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

const profileEditButton = document.querySelector(".profile__edit-btn");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

const newPostButton = document.querySelector(".profile__add-btn");
const newModalPost = document.querySelector("#new-post-modal");
const linkInput = newModalPost.querySelector("#card-image-input");
const nameInput = newModalPost.querySelector("#card-caption-input");
const newPostCloseBtn = newModalPost.querySelector(".modal__close-btn");

const editModal = document.querySelector("#edit-modal");
const editFormElement = editModal.querySelector(".modal__form");
const editCloseBtn = editModal.querySelector(".modal__close-btn");
const editModalNameInput = editModal.querySelector("#profile-name-input");
const editProfileDescriptionInput = editModal.querySelector(
  "#profile-description-input"
);

const previewModal = document.querySelector("#preview-modal");
const previewModalCloseBtn = previewModal.querySelector(".modal__close-btn");
const previewImageEl = previewModal.querySelector(".modal__image");
const previewCaptionEl = previewModal.querySelector(".modal__caption");

const cardTemplate = document.querySelector("#card-template");
const cardsList = document.querySelector(".cards__list");

function getCardElement(data) {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);

  const cardNameEl = cardElement.querySelector(".card__title");
  const cardImageEl = cardElement.querySelector(".card__image");

  cardNameEl.textContent = data.name;
  cardImageEl.src = data.link;
  cardImageEl.alt = data.name;

  const cardLikeBtnEl = cardElement.querySelector(".card__like-btn");
  cardLikeBtnEl.addEventListener("click", () => {
    cardLikeBtnEl.classList.toggle("card__like-btn_active");
  });

  const cardDeleteBtnEl = cardElement.querySelector(".card__delete-btn");
  cardDeleteBtnEl.addEventListener("click", () => {
    cardDeleteBtnEl.closest(".card").remove();
  });

  cardImageEl.addEventListener("click", () => {
    previewImageEl.src = data.link;
    previewImageEl.alt = data.name;
    previewCaptionEl.textContent = data.name;
    openModal(previewModal);
  });

  return cardElement;
}

function openModal(modal_opened) {
  modal.classList.add("modal_opened");
}

function openEditModal() {
  editModalNameInput.value = profileName.textContent;
  editProfileDescriptionInput.value = profileDescription.textContent;
  editModal.classList.add("modal_opened");
}

function openNewPostModal() {
  newModalPost.classList.add("modal_opened");
}

function closeModal() {
  editModal.classList.remove("modal_opened");
  newModalPost.classList.remove("modal_opened");
  previewModal.classList.remove("modal_opened");
}

function handleEditFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = editModalNameInput.value;
  profileDescription.textContent = editProfileDescriptionInput.value;
  closeModal();
}

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  console.log(nameInput.value);
  form.reset();

  const cardElement = getCardElement({
    name: nameInput.value,
    link: linkInput.value,
  });
  cardsList.prepend(cardElement);

  closeModal();
}

profileEditButton.addEventListener("click", openEditModal);
editCloseBtn.addEventListener("click", closeModal);
newPostCloseBtn.addEventListener("click", closeModal);
editFormElement.addEventListener("submit", handleEditFormSubmit);

newPostButton.addEventListener("click", openNewPostModal);
newModalPost.addEventListener("submit", handleAddCardSubmit);
previewModalCloseBtn.addEventListener("click", () => closeModal(previewModal));

for (let i = 0; i < initialCards.length; i++) {
  const cardElement = getCardElement(initialCards[i]);
  cardsList.append(cardElement);
}

initialCards.forEach(function (item) {});
