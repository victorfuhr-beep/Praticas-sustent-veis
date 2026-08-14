// Lista de dicas sobre sustentabilidade no campo
const dicas = [
    "Pratique a rotação de culturas para que o solo recupere seus nutrientes naturalmente.",
    "Instale calhas nos galpões para captar a água da chuva e usá-la na limpeza ou irrigação.",
    "Plante árvores ao redor das plantações para criar barreiras naturais contra o vento e proteger o solo.",
    "Prefira adubos orgânicos e compostagem no lugar de fertilizantes químicos pesados.",
    "Monitore sua irrigação: regar nas horas mais frias do dia evita a perda de água por evaporação."
];

// Seleciona os elementos da página
const botaoDica = document.getElementById('btn-dica');
const textoDica = document.getElementById('texto-dica');
const botaoConhecer = document.getElementById('btn-conhecer');

// Evento para mudar a dica ao clicar no botão
botaoDica.addEventListener('click', () => {
    const indiceAleatorio = Math.floor(Math.random() * dicas.length);
    textoDica.textContent = dicas[indiceAleatorio];
});

// Evento do botão do banner para rolar a tela até os pilares
botaoConhecer.addEventListener('click', () => {
    document.getElementById('pilares').scrollIntoView({ behavior: 'smooth' });
});
