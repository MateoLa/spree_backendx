$().ready(function($) {
  var deleteButtons = document.querySelectorAll('.js-delete-button');
  if (deleteButtons.length > 0) {
    deleteButtons.forEach(function(deleteButton) {
      deleteButton.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#overlay').classList.add('shown');
        document.querySelector('#action-delete-popup').classList.add('shown');
        document.querySelector('.js-popup-resource').textContent = e.currentTarget.dataset.resource;
        document.querySelector('#action-delete-popup-confirm').href = e.currentTarget.dataset.url;
      }, false)
    })
  }

  document.querySelector('#overlay').addEventListener('click', function () {
    var deleteActionElement = document.querySelector('#action-delete-popup');
    if (deleteActionElement) deleteActionElement.classList.remove('shown');
  }, false);

  var popupCloseButtons = document.querySelectorAll('.js-action-delete-popup-close-button')
  if (popupCloseButtons.length > 0) {
    popupCloseButtons.forEach(function(closeButton) {
      closeButton.addEventListener('click', function(e) {
        document.querySelector('#overlay').classList.remove('shown');
        document.querySelector('#action-delete-popup').classList.remove('shown');
      })
    })
  }
})