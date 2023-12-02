const input = document.querySelector("input");
const body = document.querySelector("body");
var weatherApp = document.getElementById('weatherApp');
var buttonPrevision = document.getElementById('buttonPrevision');
var buttonAlerts = document.getElementById('buttonAlerts');

// Função para ajustar dinamicamente o tamanho do campo de seleção
function ajustarTamanhoCampoSelecao() {
  const selectElement = document.getElementById('location');
  const optionsCount = selectElement.options.length;

  // Definir o tamanho do campo de seleção com base no número de opções
  selectElement.size = Math.min(optionsCount, 10); // Defina um limite máximo visível
}

const toggleThemeMode = () => {
  body.classList.toggle("dark"); // Ativar o dark mode em todo o body
  weatherApp.classList.toggle("dark-theme"); // Ativar o dark mode dentro do carde
  buttonPrevision.classList.toggle("button-theme"); // Ativa o dark mode apenas no button
  buttonAlerts.classList.toggle("button-theme"); // Ativa o dark mode apenas no button

};

input.onchange = toggleThemeMode;

// Após obter a previsão, ajuste o tamanho do campo de seleção
ajustarTamanhoCampoSelecao();