
    fetch('../header_Footer.html')
        .then(response => response.text())
        .then(data => {
            // Create a temporary element to parse the response
            const temp = document.createElement('div');
            temp.innerHTML = data;

            // Extract and insert the header content
            const headerContent = temp.querySelector('header').outerHTML;
            document.getElementById('header-placeholder').innerHTML = headerContent;

            // Extract and insert the footer content
            const footerContent = temp.querySelector('footer').outerHTML;
            document.getElementById('footer-placeholder').innerHTML = footerContent;
        });