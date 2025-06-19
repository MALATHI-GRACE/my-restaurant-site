    window.addEventListener('scroll', function() {
    var sidebar = document.getElementById('sidebar');
    var footer = document.getElementById('footer');
    var tabs = document.querySelector('.fixed-tabs'); 
    var footerRect = footer.getBoundingClientRect();
    var sidebarHeight = sidebar.offsetHeight;
    var tabsHeight = tabs ? tabs.offsetHeight : 0;

    if (footerRect.top < window.innerHeight + sidebarHeight - tabsHeight) {
        sidebar.style.position = 'absolute';
        sidebar.style.top = (window.pageYOffset + footerRect.top - sidebarHeight) + 'px';
    } else {
        sidebar.style.position = 'fixed';
        sidebar.style.top = tabsHeight + 'px';
    }
    });