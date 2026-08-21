function verificarAprovacao() {
  // Variáveis com const
  const nome = document.getElementById('nomeAluno').value.trim();
  const nota1 = parseFloat(document.getElementById('nota1').value);
  const nota2 = parseFloat(document.getElementById('nota2').value);
  const nota3 = parseFloat(document.getElementById('nota3').value);
  const totalFaltas = parseInt(document.getElementById('faltas').value, 10);
  const painel = document.getElementById('painelResultado');

  // Validação dos dados
  if (!nome || isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(totalFaltas)) {
    alert('Por favor, preencha todos os campos corretamente!');
    return;
  }

  // Operações aritméticas
  const media = (nota1 + nota2 + nota3) / 3;
  const frequencia = 100 - (totalFaltas * 10);

  // Operadores de comparação e operador lógico (&&)
  const mediaAprovada = media >= 7;
  const frequenciaAprovada = frequencia >= 75;
  const alunoAprovado = mediaAprovada && frequenciaAprovada;

  // Renderização do resultado
  painel.style.display = 'block';

  let statusClasse = '';
  let statusTexto = '';

  if (alunoAprovado) {
    statusClasse = 'status-aprovado';
    statusTexto = 'APROVADO(A)';
  } else {
    statusClasse = 'status-reprovado';
    statusTexto = 'REPROVADO(A)';
  }

  painel.innerHTML = `
    <strong>Aluno:</strong> ${nome}<br>
    <strong>Média:</strong> ${media.toFixed(1)}<br>
    <strong>Frequência:</strong> ${frequencia}%<br>
    <strong>Situação:</strong> <span class="${statusClasse}">${statusTexto}</span>
  `;
}
