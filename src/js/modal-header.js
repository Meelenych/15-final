(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-opn4]'),
    closeModalBtn: document.querySelector('[data-modal-cls4]'),
    modal: document.querySelector('[data-modl4]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();