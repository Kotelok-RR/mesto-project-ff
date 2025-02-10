const page = document.querySelector('.page')
const cardAddButton = page.querySelector('.profile__add-button');
const newCardPopupContainer = page.querySelector('.popup_type_new-card');
const newCardCloseButton = newCardPopupContainer.querySelector('.popup__close');
const cardsList = page.querySelector('.places__list');
const newCardSaveButton = newCardPopupContainer.querySelector('.popup__button');

const closePopup = (popupWindow) => {
    popupWindow.removeAttribute('style');
}

cardAddButton.addEventListener('click', () => {
    newCardPopupContainer.setAttribute('style', 'display: flex');
});

newCardCloseButton.addEventListener('click', () => {
    closePopup(newCardPopupContainer);
});

const deleteCard = (e) => {
    const card = e.target.closest('.card');
    card.remove();
}

const createCard = (cardImage, cardTitle, deleteCard) => {
    const cardTemplate = document.querySelector('#card-template').content;
    const newCard = cardTemplate.querySelector('.card').cloneNode(true);

    newCard.querySelector('.card__title').textContent = cardTitle;
    newCard.querySelector('.card__image').setAttribute('src', cardImage);
    
    const deleteCardButton = newCard.querySelector('.card__delete-button');
    deleteCardButton.addEventListener('click', deleteCard)

    return newCard;
}

newCardSaveButton.addEventListener('click', (e) => {
    e.preventDefault();

    const imageLinkContainer = newCardPopupContainer.querySelector('.popup__input_type_url');
    const titleContainer = newCardPopupContainer.querySelector('.popup__input_type_card-name');

    if (imageLinkContainer.value && titleContainer.value) {
        const newCardElement = createCard(imageLinkContainer.value, titleContainer.value, deleteCard);
        cardsList.append(newCardElement);
        
        imageLinkContainer.value = '';
        titleContainer.value = '';

        closePopup(newCardPopupContainer);
    }
})

initialCards.forEach(card => {
    const cardElement = createCard(card.link, card.name, deleteCard);
    cardsList.append(cardElement);
})