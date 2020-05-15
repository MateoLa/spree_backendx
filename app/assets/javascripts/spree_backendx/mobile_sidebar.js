$().ready(function($) {

  function MobileSidebarManager()  {
    this.mobileSidebar = document.querySelector('.mobile-sidebar');

    if (this.mobileSidebar !== null) {
      this.cogButton = document.querySelector('.sidebar-toggler');
      this.closeButton = document.querySelector('#mobile-sidebar-close-button');
      this.mobileNavigationList = document.querySelector('.mobile-navigation-list');
      this.categoryLinks = document.querySelectorAll('.mobile-navigation-category-link');
      this.backButton = document.querySelector('#mobile-sidebar-back-button');
      this.overlay = document.querySelector('#overlay');
      this.navigationOpen = false;
      this.openedCategories = ['main'];
      this.onResize = this.onResize.bind(this);
      this.onCategoryClick = this.onCategoryClick.bind(this);
      this.onCogClick = this.onCogClick.bind(this);
      this.onCloseClick = this.onCloseClick.bind(this);
      this.onBackClick = this.onBackClick.bind(this);
      this.closeAllCategories = this.closeAllCategories.bind(this);

      window.addEventListener('resize', this.onResize);
      window.addEventListener('turbolinks:request-start', this.onCloseClick);

      this.cogButton.addEventListener('click', this.onCogClick, false);
      this.closeButton.addEventListener('click', this.onCloseClick, false);
      this.backButton.addEventListener('click', this.onBackClick, false);

      this.categoryLinks.forEach(function(link) {
        link.addEventListener('click', this.onCategoryClick)
      }.bind(this))
    }
  }

  MobileSidebarManager.prototype.onResize = function(e) {
    var currentWidth = e.currentTarget.innerWidth;
    if (this.navigationOpen && currentWidth >= 1200) this.close();
  }

  MobileSidebarManager.prototype.onCategoryClick = function(e) {
    var category = e.currentTarget.dataset.category;
    e.preventDefault();
    this.openCategory(category);
  }

  MobileSidebarManager.prototype.onCogClick = function() {
    if (this.navigationOpen) {
      this.close();
    } else {
      this.open();
    }
  };

  MobileSidebarManager.prototype.onCloseClick = function() {
    this.close();
    setTimeout(this.closeAllCategories, 500);
  };

  MobileSidebarManager.prototype.onBackClick = function() {
    this.closeCurrentCategory();
  };

  MobileSidebarManager.prototype.open = function() {
    this.navigationOpen = true;
    this.mobileSidebar.classList.add('shown');
    document.body.style.overflow = "hidden";
    this.overlay.classList.add('shown');
  }

  MobileSidebarManager.prototype.close = function() {
    this.navigationOpen = false;
    this.mobileSidebar.classList.remove('shown');
    document.body.style.overflow = "";
    this.overlay.classList.remove('shown');
  }

  MobileSidebarManager.prototype.openCategory = function(category) {
    this.openedCategories.push(category);
    var subList = document.querySelector('ul[data-category=' + category + ']');
    if (subList) {
      this.mobileNavigationList.classList.add('mobile-navigation-list-subcategory-shown');
      this.mobileNavigationList.scrollTop = 0
      subList.classList.add('shown');
      this.backButton.classList.add('shown');
    }
    return false;
  }

  MobileSidebarManager.prototype.closeCurrentCategory = function() {
    var category = this.openedCategories.pop();
    var subList = document.querySelector('ul[data-category=' + category + ']');
    if (subList) {
      subList.classList.remove('shown');
    }
    if (this.openedCategories[this.openedCategories.length - 1] === 'main') {
      this.backButton.classList.remove('shown');
    }
    this.mobileNavigationList.classList.remove('mobile-navigation-list-subcategory-shown')
    return false;
  }

  MobileSidebarManager.prototype.closeCategory = function(category) {
    var subList = document.querySelector('ul[data-category=' + category + ']');
    subList.style.transition = 'none';
    subList.classList.remove('shown');
    setTimeout(function(){ subList.style.transition = ''; }, 500);
  }

  MobileSidebarManager.prototype.closeAllCategories = function() {
    var openedCategories = this.openedCategories;
    if (openedCategories.length === 1) return false;
    for (var i = openedCategories.length - 1; i > 0; i--) {
      var category = openedCategories.pop();
      this.closeCategory(category);
    }
    this.mobileNavigationList.classList.remove('mobile-navigation-list-subcategory-shown')
    this.backButton.classList.remove('shown');
  }

  new MobileSidebarManager();
})
