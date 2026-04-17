
function prompt_number(input){
  let answer;
  while(isNaN(answer) || answer < 0){
    answer = prompt(input);
  }
  return Number(answer);
}

function classify_orcamento(){
  if (sumLosses > userGains) return "⚠️ Atenção: você gastou mais do que ganhou.";
  else {
    let sobra = userGains - sumLosses;
    if (sobra >= 0.3*userGains) return "✅ Ótimo: boa margem de sobra.";
    else return "🙂 Ok: dá para melhorar a sobra.";
  }
}

function get_final_message(){
  return `Nome: ${userName}\nRenda: R$${userGains.toFixed(2)}\nTotal de Despesas: R$${sumLosses.toFixed(2)}\nSobra: R$${(userGains-sumLosses).toFixed(2)}\nClassificação: ${classify_orcamento()}`
}

const userName = prompt("Qual o seu nome?");
const userGains = prompt_number("Qua sua renda mensal?");
var sumLosses = 0;
var userLossQuantity = prompt_number("Quantas despesas deseja adicionar?");

if (userLossQuantity < 1 ) userLossQuantity = 1;
else if (userLossQuantity > 5) userLossQuantity = 5;

for (let i = 0; i < userLossQuantity; i++){
  let loss = prompt_number(`Digite a despesa ${i+1}`)
  sumLosses+=loss
}

console.log(get_final_message());
alert(get_final_message());