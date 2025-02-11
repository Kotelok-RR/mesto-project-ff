const page = document.querySelector('.page')
const cardAddButton = page.querySelector('.profile__add-button');
const newCardPopupContainer = page.querySelector('.popup_type_new-card');
const newCardCloseButton = newCardPopupContainer.querySelector('.popup__close');
const cardsContainer = page.querySelector('.places__list');
const newCardSaveButton = newCardPopupContainer.querySelector('.popup__button');

const deleteCard = (e) => {
    const card = e.target.closest('.card');
    card.remove();
}

const createCard = (cardImage, cardTitle, deleteCard) => {
    const cardTemplate = document.querySelector('#card-template').content;
    const newCard = cardTemplate.querySelector('.card').cloneNode(true);

    newCard.querySelector('.card__title').textContent = cardTitle;
    newCard.querySelector('.card__image').setAttribute('src', cardImage);
    newCard.querySelector('.card__image').setAttribute('alt', cardTitle);

    const deleteCardButton = newCard.querySelector('.card__delete-button');
    deleteCardButton.addEventListener('click', deleteCard)

    return newCard;
}

initialCards.forEach(card => {
    const cardElement = createCard(card.link, card.name, deleteCard);
    cardsContainer.append(cardElement);
})