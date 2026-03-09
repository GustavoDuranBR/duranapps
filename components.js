document.addEventListener("DOMContentLoaded", () => {
    // 1. Renderiza APENAS o Menu (onde houver a tag <nav id="main-nav">)
    const nav = document.getElementById("main-nav");
    if (nav) {
        nav.innerHTML = `
            <a href="index.html"><i class="fa-solid fa-house"></i> Início</a>
            <a href="quem-somos.html"><i class="fa-solid fa-user"></i> Quem Somos</a>
            <a href="index.html#apps"><i class="fa-solid fa-cubes"></i> Aplicativos</a>
        `;
    }

    // 2. Renderiza o Rodapé
    const footer = document.querySelector("footer");
    if (footer) {
        footer.innerHTML = `<p>© 2026 Gustavo Duran — Duran Labs</p>`;
    }

    // 3. Renderiza os Cards (apenas na página inicial)
    const appsGrid = document.getElementById("apps-grid");
    if (appsGrid) {
        fetch('apps.json')
            .then(response => response.json())
            .then(data => {
                appsGrid.innerHTML = data.map(app => `
                    <div class="app-card" data-aos="fade-up">
                        <span class="version-badge">${app.versao}</span>
                        <h3><i class="fa-solid ${app.icone}"></i> ${app.titulo}</h3>
                        <p>${app.descricao}</p>
                        <a class="download-btn" href="${app.detalhes_url}">
                            <i class="fa-solid fa-circle-info"></i> Ver detalhes
                        </a>
                        <br>
                        <a class="download-btn" href="${app.download_url}">
                            <i class="fa-solid fa-download"></i> Baixar
                        </a>
                    </div>
                `).join('');
            })
            .catch(err => console.error("Erro ao carregar apps.json: ", err));
    }
});