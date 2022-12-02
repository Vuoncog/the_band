const listBtns = document.querySelectorAll('.js-buy-ticket-btn')
const modal = document.querySelector('.js-modal')
const closeBtn = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')

function showModal() {
    modal.classList.add('open')
}

function hideModal() {
    modal.classList.remove('open')
}

for (const buyBtn of listBtns) {
    buyBtn.addEventListener('click', showModal)
}
modal.addEventListener('click', hideModal)
modalContainer.addEventListener('click', function (event_click) {
    event_click.stopPropagation()
})
closeBtn.addEventListener('click', hideModal)