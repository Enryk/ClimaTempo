function getWeather() {
    // Limpar resultados anteriores
    document.getElementById('result').innerHTML = '';

    // Obter a lista de cidades selecionadas
    let selectedLocations = Array.from(document.getElementById('location').selectedOptions, option => option.value);

    // Chave de API da Weatherbit
    let apiKey = 'd3f3614405fb4b488c00b5f5b6c029cd';

    // Iterar sobre as cidades selecionadas
    selectedLocations.forEach(location => {
        let apiUrl = `https://api.weatherbit.io/v2.0/current?city=${location}&key=${apiKey}&lang=pt`;

        // Faz uma solicitação GET à API usando fetch
        fetch(apiUrl)
            .then(response => {
                // Verifica se a resposta da API foi bem-sucedida (status code 200)
                if (!response.ok) {
                    throw new Error(`Erro na API para ${location}: ${response.status}`);
                }
                return response.json(); // Converte a resposta para JSON
            })
            .then(data => {
                // Extraia os dados relevantes da resposta da API (por exemplo, a descrição do tempo)
                let weatherDescription = data.data[0].weather.description;

                // Atualize o elemento HTML com os resultados
                document.getElementById('result').innerHTML += `<p>Previsão do Clima em ${location}: ${weatherDescription}</p>`;
            })
            .catch(error => {
                console.error(`Erro ao obter dados da API para ${location}:`, error);
                document.getElementById('result').innerHTML += `<p>Erro ao obter dados da API de previsão do tempo para ${location}: ${error.message}</p>`;
            });
    });
}