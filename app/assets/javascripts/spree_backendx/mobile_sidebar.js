$().ready(function($) {

  function MobileSidebarManager()  {
    this.mobileSidebar = document.querySelector('.mobile-sidebar');

    if (this.mobileSidebar !== null) {
      this.cogButton = document.querySelector('.sidebar-toggler');
      this.closeButton = document.querySelector('#mobile-sidebar-close-button');
      this.overlay = document.querySelector('#overlay');
      this.navigationOpen = false;
      this.onResize = this.onResize.bind(this);
      this.onCogClick = this.onCogClick.bind(this);
      this.onCloseClick = this.onCloseClick.bind(this);

      window.addEventListener('resize', this.onResize);
      window.addEventListener('turbolinks:request-start', this.onCloseClick);

      this.cogButton.addEventListener('click', this.onCogClick, false);
      this.closeButton.addEventListener('click', this.onCloseClick, false);
    }
  }

  MobileSidebarManager.prototype.onResize = function(e) {
    var currentWidth = e.currentTarget.innerWidth;
    if (this.navigationOpen && currentWidth >= 768) this.close();
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

  new MobileSidebarManager();
})
