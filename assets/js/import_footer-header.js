const header = document.querySelector('header');
const footer = document.querySelector('footer');

header.innerHTML = `
        <div class="header_logo">
            <a href="https://www.youtube.com/@RapazeseTeclas" target="_blank" rel="noopener noreferrer"><img src="./assets/img/placeholder/gengar.png" alt="Logo"></a>
        </div>
        <nav class="header_content">
            <ul id="lista_header">
                    <li><a href="index.html"><h3>Início</h3></a></li>
                    <li><a href="quem_sou_eu.html"><h3>Quem sou eu?</h3></a></li>
                    <li><a href="projetos.html"><h3>Meus Projetos</h3></a> </li>
                    <li><a href="#contato"><h3>Contatos</h3></a></li>
            </ul>
        </nav>
`;

footer.innerHTML = `
    <div class="footer_pessoal">
                <h2>Infos</h2>
                <p>Portfólio pessoal com projetos, estudos e experimentações em desenvolvimento web, interface e tecnologia.</p>
            </div>
            <div class="footer_projetos">
                <h2>Mais projetos</h2>
                <p>Conheça mais dos meus projetos <a href="projetos.html">clicando aqui!</a></p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste reiciendis, labore quam quia voluptates id modi ipsum impedit esse voluptatum quasi magni laborum odio vitae quos voluptatem qui fuga perspiciatis.</p>
            </div>
            <div class="footer_contato" id="contato">
                <h2>Contatos</h2>
                <p>Caso queira me contatar, aqui estão minhas redes sociais:</p>
                <div class="contato_imagens">
                    <address>
                        <a href="https://www.instagram.com/_bruurb.rpz" target="blank" rel="noopener noreferrer"><img src="./assets/img/icon/icon_instagram.svg" alt="@bruurb.rpz"></a>
                        <a href="https://github.com/ISKAI23/ISKAI23.git" target="blank" rel="noopener noreferrer"><img src="./assets/img/icon/icon_github.svg" alt="GitHub ISKAI23"></a>
                    </address>
                </div>
            </div>
`;