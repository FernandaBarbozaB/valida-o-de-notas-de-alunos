<div align="center">

💖 ✨ SISTEMA DE VALIDAÇÃO DE NOTAS & FALTAS ✨ 💖

🌸 SOBRE O PROJETO

Este projeto foi preparado como parte de uma atividade prática na aula de Desenvolvimento de JavaScript! 🎀 

O objetivo é oferecer um sistema intuitivo para validação do desempenho escolar das alunas e alunos. A aplicação analisa tanto o rendimento acadêmico pelas notas quanto a assiduidade pelas faltas, garantindo um acompanhamento completo e organizado! 💕

---

# 🎀 REGRAS DE NEGÓCIO

### 👑 1. Média Aritmética das Notas
A média final é calculada somando as três notas informadas e dividindo o total por 3:

$$\text{Média Final} = \frac{\text{Nota 1} + \text{Nota 2} + \text{Nota 3}}{3}$$

* 🟢 **Aprovação:** Média maior ou igual a **7.0** ✨
* 🔴 **Reprovação:** Média menor que **7.0** 

#### ✦ Exemplos Práticos:
* 🌸 $5 + 5 + 5 = 15 \Rightarrow 15 / 3 = 5.0$ ❌ *(Reprovado)*
* 🌺 $6 + 7 + 8 = 21 \Rightarrow 21 / 3 = 7.0$ ✅ *(Aprovado!)*

---

### 🌷 2. Porcentagem de Faltas
Cada falta registrada equivale a **10%** de impacto na tolerância do aluno:

$$\text{Porcentagem de Faltas} = \text{Número de Faltas} \times 10\%$$

---

# 🎨 INTERFACE RETRÔ & FOFA

A interface visual foi pensada para encantar! Combinamos a nostalgias das telas antigas com um toque doce, moderno e super delicado. ✨

* 🍧 **Estilo Retrô:** Inspirado nos componentes incríveis da comunidade [UIverse.io](https://uiverse.io/).


# 📑 SUÍTE DE TESTES

Abaixo estão registrados todos os testes realizados para certificar o funcionamento perfeito do nosso sistema:

| Status | Cenário de Teste | Notas / Faltas | Média | Resultado Esperado |
| :---: | :--- | :---: | :---: | :--- |
| ✨ | **TC01:** Aprovação exata (0 faltas) | `6.0`, `7.0`, `8.0` \| `0 faltas` | `7.0` | 🌸 Aprovada(o) |
| ❌ | **TC02:** Média abaixo do limite | `5.0`, `5.0`, `5.0` \| `0 faltas` | `5.0` | 💔 Reprovada(o) |
| ⚠️ | **TC03:** Reprovação por excesso de faltas | `8.0`, `8.0`, `8.0` \| `4 faltas` | `8.0` | 🛑 Reprovada(o) por Faltas |
| 💖 | **TC04:** Nota máxima com presença total | `10.0`, `10.0`, `10.0` \| `0 faltas` | `10.0` | 🌟 Aprovada(o) c/ Excelência |

---

# 🛍️ TECNOLOGIAS UTILIZADAS

* 🍧 **HTML5** — Estrutura e organização
* 🌷 **CSS3 Retrô** — Estilização temática via UIverse
* ⚡ **JavaScript** — Cálculos e regras de validação

---

# 🚀 COMO EXECUTAR O PROJETO

1. Clone este repositório no seu computador:
   ```bash
   git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)


   Dica: Pode rodar também no LiveServer do VsCode.
