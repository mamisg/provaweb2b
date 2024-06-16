(async () => {
    const response = await fetch(
        'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
    ).then(response => response.json());

    estados = response.sort((a, b) => {
        if (a.nome < b.nome) {
            return -1;
        }
        if (a.nome > b.nome) {
            return 1;
        }
        return 0;
    })

    let li;
    let a;

    for(i = 0; i < 27; i++) {

        li = document.createElement("li");    
        a = document.createElement("a");

        a.textContent = `${response[i].nome}`
        a.href = "./municipios/index.html" + "?" + "nome=" + `${response[i].sigla}` + "&estado=" + `${response[i].nome}`

        document.querySelector("#lista-de-estados").appendChild(li)
        document.querySelector("#lista-de-estados").lastElementChild.appendChild(a)
    }

    let tabela = document.querySelector("#tabela")
    tabela.style = "border: 1px solid black; padding: 5px;"
    let red = 255;
    let green = 0;

    setInterval(() => {
        tabela.style.backgroundColor = `rgb(${red}, ${green}, 0)`;
        red = red === 255 ? 0 : 255;
        green = green === 255 ? 0 : 255;
    }, 300);
})();