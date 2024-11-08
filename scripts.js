// Carrinho de compras
const carrinho = [];

function adicionarAoCarrinho(nome, preco, observacaoId, quantidadeId) {
  const quantidade = document.getElementById(quantidadeId).value;
  const observacao = document.getElementById(observacaoId).value;

  const item = {
    nome: nome,
    preco: preco,
    quantidade: quantidade,
    observacao: observacao
  };

  carrinho.push(item);
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const carrinhoItens = document.getElementById("carrinho-itens");
  carrinhoItens.innerHTML = '';
  let total = 0;

  carrinho.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.quantidade}x ${item.nome} - R$${item.preco} - Observação: ${item.observacao}`;
    carrinhoItens.appendChild(li);
    total += item.preco * item.quantidade;
  });

  document.getElementById("total").textContent = `Total: R$${total.toFixed(2)}`;
}

function finalizarPedido() {
  let mensagem = "Pedido:\n";
  let total = 0;

  carrinho.forEach(item => {
    mensagem += `${item.quantidade}x ${item.nome} - R$${item.preco} - Observação: ${item.observacao}\n`;
    total += item.preco * item.quantidade;
  });

  mensagem += `\nTotal: R$${total.toFixed(2)}`;
  
  const urlWhatsApp = `https://wa.me/5511949890715?text=${encodeURIComponent(mensagem)}`;
  
  // Redirecionar para o WhatsApp
  window.open(urlWhatsApp, '_blank');
}

// Função de navegação entre seções
function navigateTo(sectionId) {
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });
  document.getElementById(sectionId).classList.add('active');
}

// Função de avaliação com estrelas
let avaliacao = 0;
function avaliar(estrelas) {
  avaliacao = estrelas;
  const estrelasElementos = document.querySelectorAll('.estrelas span');
  estrelasElementos.forEach((estrela, index) => {
    estrela.style.color = index < estrelas ? 'gold' : 'black';
  });
}

// Compartilha comentário no Instagram
function compartilharComentario() {
  const comentario = document.getElementById('comentario').value;
  const url = `https://instagram.com/SEUPERFIL`;  // Direciona para o Instagram
  window.open(url, '_blank');
}
