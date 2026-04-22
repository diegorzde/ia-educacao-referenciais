/* ============================================
   BASE CONCEITUAL — IA NA EDUCAÇÃO BÁSICA
   Script unificado
   ============================================ */

/* Alterna entre as duas grandes seções: SOBRE IA e COM IA */
function mostrarSecao(secao) {
  document.querySelectorAll('.secao').forEach(s => s.classList.remove('ativa'));
  document.getElementById('secao-' + secao).classList.add('ativa');

  document.querySelectorAll('.chave').forEach(c => c.classList.remove('ativa'));
  document.getElementById('chave-' + secao).classList.add('ativa');

  /* Fecha todos os painéis e ações abertos ao trocar de seção */
  document.querySelectorAll('.painel.aberto').forEach(p => {
    p.classList.remove('aberto');
  });
  document.querySelectorAll('.acao-descricao.aberto').forEach(d => d.classList.remove('aberto'));
  document.querySelectorAll('.acao-chip.ativo').forEach(c => c.classList.remove('ativo'));

  /* Reseta o texto dos botões (▼ -> ▸) */
  document.querySelectorAll('.btn').forEach(b => {
    b.textContent = b.textContent.replace('▼', '▸');
  });

  /* Rola para o topo da página ao trocar de seção */
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* Alterna entre as etapas (EFI / EFF / EM) dentro da seção SOBRE IA */
function mostrarEtapa(etapa) {
  document.querySelectorAll('.subsecao').forEach(s => s.classList.remove('ativa'));
  document.getElementById('etapa-' + etapa).classList.add('ativa');

  document.querySelectorAll('.btn-etapa').forEach(b => b.classList.remove('ativa'));
  document.getElementById('btn-etapa-' + etapa).classList.add('ativa');

  /* Fecha todos os painéis abertos ao trocar de etapa */
  document.querySelectorAll('.painel.aberto').forEach(p => {
    p.classList.remove('aberto');
  });

  /* Reseta texto dos botões */
  document.querySelectorAll('.btn').forEach(b => {
    b.textContent = b.textContent.replace('▼', '▸');
  });

  /* Rola para o topo ao trocar de etapa */
  window.scrollTo({ top: document.querySelector('.etapas-seletor').offsetTop - 70, behavior: 'smooth' });
}

/* Abre/fecha painéis expansíveis (OCs, métodos, perguntas, premissas) */
function toggle(btn, id) {
  const painel = document.getElementById(id);
  const aberto = painel.classList.contains('aberto');
  painel.classList.toggle('aberto', !aberto);
  btn.textContent = btn.textContent.replace(aberto ? '▼' : '▸', aberto ? '▸' : '▼');
}

/* Alias de toggle() usado pelos botões de Premissas (COM IA) */
function togglePainel(btn, id) {
  toggle(btn, id);
}

/* Abre/fecha descrições de ações nos chips de dimensão (COM IA) */
function toggleAcao(btn, id) {
  const desc = document.getElementById(id);
  const jaAberto = desc.classList.contains('aberto');
  const grupo = desc.dataset.grupo;

  /* Fecha todos os outros do mesmo grupo (dimensão) */
  document.querySelectorAll('.acao-descricao[data-grupo="' + grupo + '"]').forEach(d => d.classList.remove('aberto'));
  btn.parentElement.querySelectorAll('.acao-chip').forEach(c => c.classList.remove('ativo'));

  if (!jaAberto) {
    desc.classList.add('aberto');
    btn.classList.add('ativo');
  }
}

/* Abre o modal "Sobre" */
function abrirSobre() {
  document.getElementById('modal-sobre').classList.add('aberto');
  document.body.style.overflow = 'hidden';
}

/* Fecha o modal "Sobre" — fecha ao clicar no X ou no fundo escuro */
function fecharSobre(event) {
  if (event && event.target !== event.currentTarget && !event.target.classList.contains('modal-fechar')) {
    return;
  }
  document.getElementById('modal-sobre').classList.remove('aberto');
  document.body.style.overflow = '';
}

/* Fecha modal com tecla ESC */
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    const modal = document.getElementById('modal-sobre');
    if (modal && modal.classList.contains('aberto')) {
      modal.classList.remove('aberto');
      document.body.style.overflow = '';
    }
  }
});
