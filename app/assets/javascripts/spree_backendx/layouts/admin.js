$().ready(function ($) {

  // Sidebar nav toggle functionality
  var sidebar_toggle = $('#sidebar-toggle')

  sidebar_toggle.on('click', function() {
    var main = $('#main-part')
//    var table_filter = $("#table-filter")

//     these should match `spree_backendx/app/controllers/spree/admin/base_controller_decorator.rb#main_part_classes`
    main
      .toggleClass('col-12 sidebar-collapsed')
      .toggleClass('col-12 col-md-10 offset-md-2')
      
//    table_filter
//      .toggleClass('col-12 sidebar-collapsed')
//      .toggleClass('col-12 col-md-10 offset-md-2')
  })


  document.getElementById('overlay').addEventListener('click', function () {
//    var noProductElement = document.getElementById('no-product-available')
    document.getElementById("overlay").classList.remove('shown');
    document.getElementById("admin-search-dropdown").classList.remove('shown');
    document.querySelector('.header-spree').classList.remove('above-overlay')
//    if (noProductElement) noProductElement.classList.remove('shown');
  }, false);

  document.onkeydown = function(evt) {
    var searchMenuElement = document.getElementsByClassName("navbar-right-search-menu")

    if (searchMenuElement.length === 1) {
      evt = evt || window.event;
      var isEscape = false;
      var isOpenSearchInput = searchMenuElement[0].classList.contains("shown")

      if (isOpenSearchInput)
        return;

      if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
      } else {
        isEscape = (evt.keyCode === 27);
      }
      if (isEscape) {
        document.querySelector(".navbar-right-dropdown-toggle").blur();
        document.getElementById("overlay").classList.remove('shown');
        document.querySelector('.header-spree').classList.remove('above-overlay')
        document.getElementById("admin-search-dropdown").classList.remove('shown');
        $('.hide-on-esc').toggleClass('shown', false)
      }
    }
  };

  var searchDropdown = document.getElementById('admin-search-dropdown')
  var burgerButton = document.getElementsByClassName('navbar-toggler');
//  var navBarCategoryLinks = document.getElementsByClassName('main-nav-bar-category-links')
//  var navBarCategoryButtons = document.getElementsByClassName('main-nav-bar-category-button')
  var navBarCategoryImages = document.getElementsByClassName('category-image')
  var navBarAccountIcon = [document.getElementById('store-button')]
//  var navBarCartIcon = [document.getElementById('link-to-cart')]
  var adminSpreeLogoImage = document.getElementsByClassName('header-spree-fluid-logo')
  var spreeMobileNavs = document.getElementsByClassName('mobile-navigation-list-item')
  var navbarLinks = [
    burgerButton,
//    navBarCategoryLinks,
//    navBarCategoryButtons,
    navBarCategoryImages,
    navBarAccountIcon,
//    navBarCartIcon,
    adminSpreeLogoImage,
    spreeMobileNavs
  ]

  if (searchDropdown !== null) {
//  if (adminSpreeLogoImage !== null) {
    $.each(navbarLinks, function(index, navbarElements) {
      $.each(navbarElements, function(index, navBarCategoryLink) {
        navBarCategoryLink.addEventListener('click', function () {
          document.getElementById('overlay').classList.remove('shown');
          searchDropdown.classList.remove('shown');
          document.querySelector('.header-spree').classList.remove('above-overlay')
        });
      });
    });
  };
});
