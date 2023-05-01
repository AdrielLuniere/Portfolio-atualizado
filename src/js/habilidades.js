const skills = document.querySelectorAll ('.skill-box');
const descricao = document.querySelector ('.texto-descricao');
const sobreSkill = [
                    '<p>HTML</p> <br> <p>É uma linguagem de marcação utilizada na construção de páginas na Web.</p> <br>',
                    '<p>CSS</p> <br> <p>É um mecanismo para adicionar estilo a um documento web.</p> <br>',
                    '<p>JavaScript</p> <br> <p>É uma linguagem de programação. Juntamente com HTML e CSS, é uma das três principais tecnologias da web.</p> <br>',
                    '<p>ReactJS</p> <br> <p>O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.</p> <br>',
                    '<p>Typescript</p> <br> <p>É uma linguagem de programação de código aberto desenvolvida pela Microsoft que é uma extensão do JavaScript. Ela adiciona recursos avançados ao JavaScript, como a tipagem estática e interfaces, tornando mais fácil detectar e prevenir erros durante a fase de desenvolvimento.</p> <br>',
                    '<p>Github</p> <br> <p>É utilizado para hospedagem de código-fonte e arquivos com controle de versão usando o Git, que no qual esse meu portfolio está hospedado.</p> <br>',
                    '<p>Designer UX</p> <br> <p>UX Design é a área que desenha a experiência de usuários (user experience design) considerando negócios, tecnologia e pessoas.</p> <br>',
                    '<p>Designer UI</p> <br> <p>UI design (design de interface do usuário) é o processo de construção de interfaces que podem ser utilizadas de maneira fácil, eficiente e agradável, tenho experiência na área desde 2014 quando tinha uma gráfica "Print King" fazendo landing page, logomarca e etc, no figma, AdobeXD, CorelDraw e Photoshop</p> <br>'
]
const dataInicio = [
                    (new Date(2021, 10, 1)).getTime(), // 0
                    (new Date(2021, 10, 1)).getTime(), // 1
                    (new Date(2022, 0, 1)).getTime(), // 2
                    (new Date(2022, 3, 1)).getTime(), // 3
                    (new Date(2022, 3, 1)).getTime(), // 4
                    (new Date(2022, 1, 1)).getTime(), // 5
                    (new Date(2021, 11, 1)).getTime(), // 6
                    (new Date(2021, 11, 1)).getTime(), // 7
                    ]
const dataHoje = (new Date()).getTime();

skills.forEach(  (elemento, index) => {
    let index1 = index;
    let elemento1 = elemento;
    elemento.addEventListener('mouseover', (evento) => {
        let tempo = 'mês';
        let tempoDeExperiencia = Math.round((dataHoje-dataInicio[index1])/(1000*60*60*24*30));
        if (tempoDeExperiencia > 1) tempo = 'meses'
        descricao.innerHTML = `<p>${sobreSkill[index1]} </p>` ;
    } )
    elemento.addEventListener('mouseout', (evento, elemento,) => {
        descricao.innerHTML = '<-- Passe o mouse por cima de alguma habilidade para ler a descrição -->';
    } )
} );



