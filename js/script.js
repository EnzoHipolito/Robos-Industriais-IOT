/* Portal de Robótica Industrial 4.0 - Scripts de navegação */

// MENU RESPONSIVO (aparece em telas pequenas)

var botaoMenu = document.getElementById('menu-toggle');
var menuPrincipal = document.getElementById('menu-principal');

if (botaoMenu && menuPrincipal) {
  botaoMenu.addEventListener('click', function () {
    menuPrincipal.classList.toggle('aberto');
  });
}

// MENUS SUSPENSOS (Robôs e Sensores)

var itensDropdown = document.querySelectorAll('.item-dropdown');

function fecharDropdowns(exceto) {
  itensDropdown.forEach(function (item) {
    if (item === exceto) return;
    item.classList.remove('aberto');
    item.querySelector('.botao-dropdown').setAttribute('aria-expanded', 'false');
  });
}

itensDropdown.forEach(function (item) {
  var botao = item.querySelector('.botao-dropdown');

  botao.addEventListener('click', function (evento) {
    evento.stopPropagation();
    var vaiAbrir = !item.classList.contains('aberto');
    fecharDropdowns(item);
    item.classList.toggle('aberto', vaiAbrir);
    botao.setAttribute('aria-expanded', vaiAbrir ? 'true' : 'false');
  });
});

// Fecha os menus ao clicar fora deles ou ao pressionar Esc
document.addEventListener('click', function () {
  fecharDropdowns(null);
});

document.addEventListener('keydown', function (evento) {
  if (evento.key === 'Escape') {
    fecharDropdowns(null);
  }
});

// BOTÃO VOLTAR AO TOPO

var botaoTopo = document.getElementById('botao-topo');

if (botaoTopo) {
  window.addEventListener('scroll', function () {
    botaoTopo.classList.toggle('visivel', window.scrollY > 300);
  });

  botaoTopo.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// MARCA O LINK DA PÁGINA ATUAL NO MENU

var paginaAtual = window.location.pathname.split('/').pop() || 'index.html';

document.querySelectorAll('.menu a').forEach(function (link) {
  if (link.getAttribute('href').split('/').pop() === paginaAtual) {
    link.classList.add('ativo');
    var pai = link.closest('.item-dropdown');
    if (pai) pai.querySelector('.botao-dropdown').classList.add('ativo');
  }
});
