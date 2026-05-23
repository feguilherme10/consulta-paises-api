
async function buscarPais() {

    const nomePais = document.getElementById("paisInput").value;

    const resultado = document.getElementById("resultado");

    resultado.innerHTML = "Carregando...";

    try {

        const resposta = await fetch(`https://restcountries.com/v3.1/name/${nomePais}`);

        const dados = await resposta.json();

        const pais = dados[0];

        resultado.innerHTML = `
            <div class="card">
                <h2>${pais.name.common}</h2>

                <img src="${pais.flags.png}" alt="Bandeira do país">

                <p><strong>Capital:</strong> ${pais.capital}</p>

                <p><strong>População:</strong> ${pais.population.toLocaleString()}</p>

                <p><strong>Região:</strong> ${pais.region}</p>

                <p><strong>Idioma:</strong> ${Object.values(pais.languages).join(", ")}</p>
            </div>
        `;

    } catch (erro) {

        resultado.innerHTML = `
            <p> País não encontrado.</p>
        `;

        console.error(erro);
    }
}
