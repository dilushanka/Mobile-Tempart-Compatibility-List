const tempartList = [
            ["A20", "A22 4G", "A30", "A30s", "A31", "A32 4G", "A50", "A50s", "M21", "M30", "M30s", "M31", "A33", "5G"],
            ["Samsung A12", "Oppo A1"],
            ["iPhone 12", "iPhone 13"],
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