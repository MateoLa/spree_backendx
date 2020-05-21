$(document).ready(function() {
  var searchIcons = document.querySelectorAll('#admin-nav-bar .search-icons')[0]
  var searchDropdown = document.getElementById('admin-search-dropdown')

  if (searchIcons !== undefined) {
    searchIcons.addEventListener(
      'click',
      toggleSearchBar,
      false
    )
  }

  var content_sidebar = $('#content-sidebar')

  content_sidebar.on('click', function() {
    var content = $('#content')
    var main    = $('#admin-main-part')
    var sidebar = $('#sidebar-cols')

   main.toggleClass('sidebar-minimized')

    content
      .toggleClass('col-11 sidebar-minimized')
      .toggleClass('col-md-9')
    sidebar
      .toggleClass('col-md-3')
  })


  function toggleSearchBar() {
    if (searchDropdown.classList.contains('shown')) {
      document.querySelector('.header-spree').classList.remove('above-overlay')
      document.getElementById('overlay').classList.remove('shown')
      searchDropdown.classList.remove('shown')
    } else {
      document.querySelector('.header-spree').classList.add('above-overlay')
      document.getElementById('overlay').classList.add('shown')
      searchDropdown.classList.add('shown')
      document.querySelector('#admin-search-dropdown input').focus()
    }
  }
})
