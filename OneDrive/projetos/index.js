// atividade2

let nomeHeroi = "nikkianimes ";
let experienciaHeroi = 5001;
let mensagem = "";

const Parabens = "Parabens " + nomeHeroi + "voce ta no nivel";

switch (true) {
  case experienciaHeroi < 1000:
    mensagem = Parabens + " ferro";
    console.log(Parabens + " ferro");
    break;
  case experienciaHeroi < 2000:
    mensagem = Parabens + " bronze";
    console.log(Parabens + " bronze");
    break;
  case experienciaHeroi < 5000:
    mensagem = Parabens + " prata";
    console.log(Parabens + " prata");
    break;
  case experienciaHeroi < 7000:
    mensagem = Parabens + " ouro";
    console.log(Parabens + " ouro");
    break;
  case experienciaHeroi < 8000:
    mensagem = Parabens + " diamante";
    console.log(Parabens + " diamante");
    break;
  case experienciaHeroi < 9000:
    mensagem = Parabens + " ascendente";
    console.log(Parabens + " ascendente");
    break;
  case experienciaHeroi < 10000:
    mensagem = Parabens + " imortal";
    console.log(Parabens + " imortal");
    break;
  default:
    mensagem = Parabens + " radiante";
    console.log(Parabens + " radiante");
}

console.log (mensagem)

daosdkadokqwqowdko