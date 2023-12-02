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

// Função para obter alertas meteorológicos
function getWeatherAlerts() {
    const selectedLocation = document.getElementById('location').value;
    const apiKey = 'd3f3614405fb4b488c00b5f5b6c029cd';

    // Construa a URL da API de alertas meteorológicos
    const apiUrl = `http://api.weatherbit.io/v2.0/alerts?city=${selectedLocation}&key=${apiKey}`;

    // Faça uma solicitação GET à API usando fetch
    fetch(apiUrl)
        .then(response => {
            // Verifique se a resposta da API foi bem-sucedida (status code 200)
            if (!response.ok) {
                throw new Error(`Erro na API: ${response.status}`);
            }
            return response.json(); // Converte a resposta para JSON
        })
        .then(data => {
            // Manipule os dados da resposta
            console.log('Dados da API de alertas:', data);

            // Atualize o elemento HTML com os resultados
            const alertResultElement = document.getElementById('alertResult');
            if (data.alerts && data.alerts.length > 0) {
                // Exiba os alertas, se houver algum
                const alertsHTML = data.alerts.map(alert => `<p>${alert.title}: ${alert.description}</p>`).join('');
                alertResultElement.innerHTML = alertsHTML;
            } else {
                alertResultElement.textContent = 'Sem alertas meteorológicos para a localização selecionada.';
            }
        })
        .catch(error => {
            console.error('Erro ao obter dados da API de alertas meteorológicos:', error);
            document.getElementById('alertResult').textContent = 'Erro ao obter dados da API de alertas meteorológicos';
        });
}
