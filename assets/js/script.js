const tempartList = [
            ["A21s", "A71", "A72", "A73", "M51", "M52", "A80", "A90", "A96", "Note 10 Lite", "Realme 9i", "Realme C17", "Y7A", "Y9A", "Honer 9X Lite", "P smart", "Mi 10T", "Mi 10T Pro", "Mi Note 9s", "Mi Note 9 Pro", "Mi Note 10 Pro", "Mi Note 11 Pro", "Mi 11T", "Mi 11T Pro", "Poco X3", "Poco X3Pro", "Poco X2", "Poco M2 Pro", "Poco F2 Pro", "Poco F3", "X3 GT",  "X655", "X652", "X675", "Techno Spark Pro", "Techno X662", "Techno Hot 11", "Techno KD7", "Nokia X10", "Nokia X20"],
            ["Mi Note 8 Pro", "Mi 9", "Mi 9T", "Poco M3", "F11"],
            ["A53", "A55", "A54"],
            ["Realme 3 Pro", "Realme 5 Pro", "Realme XT", "A10S", "A10", "M10", "Realme 3/3i", "A5S", "Oppo A12", "Mi 8", "Mi 8 A", "Vivo Y 1S", "Vivo Y 90", "Vivo Y91", "Vivo Y91i", "Vivo Y91C", "Vivo Y93", "Vivo Y93S", "Vivo Y95", "X626", "X627", "F9"],
        ];

        const searchInput = document.getElementById('searchInput');
        const results = document.getElementById('results').querySelector('ul');

        searchInput.addEventListener('input', () => {
            const query = searchInput.value.toLowerCase();
            results.innerHTML = '';

            if (query) {
                tempartList.forEach(group => {
                    if (group.some(model => model.toLowerCase().includes(query))) {
                        const listItem = document.createElement('li');
                        listItem.innerHTML = group.map(model => {
                            const regex = new RegExp(`(${query})`, 'gi');
                            return model.replace(regex, '<span class="highlight">$1</span>');
                        }).join(', ');
                        results.appendChild(listItem);
                    }
                });
            }
        });
