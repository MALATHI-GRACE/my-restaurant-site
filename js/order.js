
        let savedItems = [];
    
        function saveItem(itemName) {
            if (!savedItems.includes(itemName)) {
                savedItems.push(itemName);
                alert(itemName + " has been added to your saved items.");
            } else {
                alert(itemName + " is already in your saved items.");
            }
            console.log(savedItems); 
        }
        
                // Add popup for "Add to Cart" buttons
        document.addEventListener("DOMContentLoaded", function () {
            const cartButtons = document.querySelectorAll(".add-to-cart");

            cartButtons.forEach(button => {
                button.addEventListener("click", function () {
                    alert("Item added to cart!");
                });
            });
        });
