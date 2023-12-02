function getWeather() {
    let location = document.getElementById('location').value;
    console.log('Location:', location);
    let apiKey = '014b6a2e55ce3ae4206ff2808d1f9c80';
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&lang=pt`;

    // Faz uma solicitação GET à API usando fetch
    fetch(apiUrl)
        .then(response => {
            // Verifica se a resposta da API foi bem-sucedida (status code 200)
            if (!response.ok) {
                throw new Error(`Erro na API: ${response.status}`);
            }
            return response.json(); // Converte a resposta para JSON
        })
        .then(data => {
            // Extraia os dados relevantes da resposta da API (a descrição do tempo)
            let weatherDescription = data.weather[0].description;

            // Atualize o elemento HTML com os resultados
            document.getElementById('result').textContent = `Previsão do Clima: ${weatherDescription}`;
        })
        .catch(error => {
            console.error(`Erro ao obter dados da API para ${location}:`, error);
            document.getElementById('result').innerHTML += `<p>Erro ao obter dados da API de previsão do tempo para ${location}: ${error.message}</p>`;
        });
}
