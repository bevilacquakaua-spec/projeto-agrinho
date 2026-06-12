// Agrinho 2026 - Kauã Bevilacqua

console.log("Site Agrinho 2026 carregado com sucesso!");

// Rolagem suave do menu
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const destino = document.querySelector(this.getAttribute('href'));

        destino.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
