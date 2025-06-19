  document.addEventListener("DOMContentLoaded", function () {
            const currentUrl = window.location.href;
            const tabs = document.querySelectorAll('.tab_link');
            tabs.forEach(tab => {
                if (currentUrl.includes(tab.href)) {
                    tab.classList.add('active');
                }
                tab.addEventListener('click', function () {
                    tabs.forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                });
            });
        });