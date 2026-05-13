            // 1. Amikor rákattintasz egy linkre a tartalomjegyzékben
            document.querySelectorAll('.tartalom-jegyzek a').forEach(link => {
                link.addEventListener('click', function() {
                    // Elmentjük a link célját (pl. #fejezet2) a böngésző memóriájába
                    const hovaUgrott = this.getAttribute('href');
                    localStorage.setItem('utolso_olvasas', hovaUgrott);
                    console.log("Mentve: " + hovaUgrott);
                });
            });

            // 2. Amikor megnyitod az oldalt, megnézzük, van-e mentett hely
            window.addEventListener('load', function() {
                const mentettHely = localStorage.getItem('utolso_olvasas');
                if (mentettHely) {
                    // Ha van mentett hely, az oldal automatikusan odaugrik
                    window.location.hash = mentettHely;
                    alert("Ott folytatjuk, ahol abbahagytad: " + mentettHely);
                }
            });
            const oldalsav = document.querySelector('.tartalom-jegyzek');
            const gomb = document.getElementById('menu-nyito');
            // Ha a gombra kattintunk, ráteszi vagy leveszi a 'nyitva' osztályt
            gomb.addEventListener('click', () => {
                oldalsav.classList.toggle('nyitva');
                    if (oldalsav.classList.contains('nyitva')) {
                        gomb.innerText = "✖ Bezár";
                    } else {
                        gomb.innerText = "☰ Tartalom";
                    }
            });

            // Ha rákattintasz egy fejezetre, csukja be a menüt automatikusan
            document.querySelectorAll('.tartalom-jegyzek a').forEach(link => {
                link.addEventListener('click', () => {
                    oldalsav.classList.remove('nyitva');
                 });
            });
            const darkModeToggle = document.getElementById('dark-mode-toggle');
            const body = document.body;

            // 1. Ellenőrizzük, hogy volt-e már elmentve a sötét mód
            if (localStorage.getItem('dark-mode') === 'enabled') {
                body.classList.add('dark-mode');
                darkModeToggle.textContent = '☀️ Világos mód';
            }

            // 2. Kapcsoló eseménykezelő
            darkModeToggle.addEventListener('click', () => {
                body.classList.toggle('dark-mode');
                
                if (body.classList.contains('dark-mode')) {
                    localStorage.setItem('dark-mode', 'enabled');
                    darkModeToggle.textContent = '☀️ Világos mód';
                } else {
                    localStorage.setItem('dark-mode', 'disabled');
                    darkModeToggle.textContent = '🌙 Sötét mód';
                }
            });
