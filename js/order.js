
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