const credito = {
  id: 0,
  nome: "Credito",
  chave: "CREDITO",
};
const debito = {
  id: 1,
  nome: "Débito",
  chave: "DEBITO",
};
const dinheiro = {
  id: 2,
  nome: "Dinheiro",
  chave: "DINHEIRO",
};

const transferencia = {
  id: 3,
  nome: "Transferência",
  chave: "TRANSFERENCIA",
};

const tipos = [credito, debito, dinheiro, transferencia];
module.exports = {
  tipos: tipos,
  chaves: tipos.map((t) => t.chave),
};
