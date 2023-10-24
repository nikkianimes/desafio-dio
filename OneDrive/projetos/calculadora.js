let i = ranked(11, 0);
console.log(i);

function ranked(vitorias, derrotas) {
  let saldoRanked = vitorias - derrotas;
  const mensagem = `O Herói tem de saldo de ${saldoRanked} esta no nivel `;
  if (saldoRanked <= 10) {
    return mensagem + `ferro `;
  } else if (saldoRanked <= 20) {
    return mensagem + `bronze`;
  } else if (saldoRanked <= 50) {
    return mensagem + `prata`;
  } else if (saldoRanked <= 80) {
    return mensagem + `ouro`;
  } else if (saldoRanked <= 90) {
    return mensagem + `diamante`;
  } else if (saldoRanked <= 100) {
    return mensagem + `lendario `;
  } else {
    return mensagem + `imortal `;
  }
}
