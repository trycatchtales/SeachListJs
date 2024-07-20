document.addEventListener('DOMContentLoaded', () => {
    const suggestions = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape", "Honeydew"];
    const searchBox = document.getElementById('searchBox');
    const suggestionsList = document.getElementById('suggestionsList');


    function showSuggestions() {
        const filter = searchBox.value.toLowerCase();    
        // Clear previous suggestions
        suggestionsList.innerHTML = '';
        if (filter.length === 0) { 
            suggestionsList.style.display = 'none'; return;
        }

        // Filter and show suggestions
        const filteredSuggestions = suggestions.filter(item =>
            item.toLowerCase().includes(filter)
        );

        filteredSuggestions.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            li.addEventListener('click', () => {
                searchBox.value = item;
                suggestionsList.style.display = 'none';
            });
            suggestionsList.appendChild(li);
        });

        suggestionsList.style.display = filteredSuggestions.length ? 'block' : 'none';
    }

    searchBox.addEventListener('keyup', showSuggestions);

    document.addEventListener('click', (e) => {
        if (!searchBox.contains(e.target) && !suggestionsList.contains(e.target)) {
            suggestionsList.style.display = 'none';
        }
    });
   
});



 /*function debounce(func, delay) {
        return function(...args) {
            clearTimeout(debounceTimeout);
            debounceTimeout = setTimeout(() => func.apply(this, args), delay);
        };
    }*/