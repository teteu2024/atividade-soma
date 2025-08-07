const input1 = document.getElementById("valor1");
const input2 = document.getElementById("valor2");
const botao = document.getElementById("somar");
const resultado = document.getElementById("resultado");


botao.addEventListener("click", () => {
  const valor1 = parseFloat(input1.value);
  const valor2 = parseFloat(input2.value);
  const soma = valor1 + valor2;

  resultado.textContent = `Resultado: ${soma}`;
});
