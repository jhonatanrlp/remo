/* Detecta automaticamente o caminho base do Globus, funciona de qualquer subpasta */
const GLOBUS_BASE = (document.currentScript?.src || '').replace(/[^/]*$/, '');

document.getElementById('site-header').innerHTML = `
  <header class="main-header">
    <div class="header-left">
      <div class="hamburger-btn">
        <span></span><span></span><span></span>
        <label>Menu</label>
      </div>
      <a class="times-btn" href="${GLOBUS_BASE}times.html">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
        <label>Times</label>
      </a>
      <a class="cal-btn" href="${GLOBUS_BASE}tabela.html">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <line x1="3" y1="9" x2="21" y2="9"/>
          <line x1="3" y1="15" x2="21" y2="15"/>
          <line x1="9" y1="9" x2="9" y2="21"/>
        </svg>
        <label>Tabela</label>
      </a>
      <a class="cal-btn" href="${GLOBUS_BASE}calendario.html">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <rect x="3" y="4" width="18" height="18" rx="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
        <label>Calendário</label>
      </a>
    </div>

    <a class="header-brand" href="${GLOBUS_BASE}index.html">
      <img class="globus-logo" src="${GLOBUS_BASE}logo_globus.png" alt="Globus Esportes"
           onerror="this.outerHTML='<span class=\\'header-brand-text\\'>Globus</span>'" />
    </a>

    <div class="header-right">
      <div class="search-box">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
        <span>Buscar</span>
      </div>
      <a class="login-btn" href="${GLOBUS_BASE}admin.html">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
        </svg>
        Login
      </a>
    </div>
  </header>

  <div class="match-ticker" id="match-ticker">
    <div class="ticker-highlight">Agenda<br/>Completa</div>
  </div>
`;

/* Carrega os jogos da Rodada 1 no ticker */
fetch(GLOBUS_BASE + 'data/calendario.json')
  .then(r => r.json())
  .then(data => {
    const ticker = document.getElementById('match-ticker');
    const rodada = data.rodadas[0];
    rodada.jogos.forEach(j => {
      const casa = data.times[j.casa]?.nome || j.casa;
      const fora = data.times[j.fora]?.nome || j.fora;
      const slot = document.createElement('div');
      slot.className = 'ticker-slot';
      slot.innerHTML = `
        <span class="ticker-slot__time">Rod. ${rodada.numero}</span>
        <div class="ticker-slot__match">
          <span>${casa}</span><span class="sep">×</span><span>${fora}</span>
        </div>
        <span class="ticker-slot__comp">OSM · Liga</span>
      `;
      ticker.appendChild(slot);
    });
    const arrow = document.createElement('div');
    arrow.className = 'ticker-add';
    arrow.innerHTML = `<a href="${GLOBUS_BASE}calendario.html" style="color:#1a4a22;display:flex;align-items:center">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <polyline points="9 18 15 12 9 6"/>
      </svg></a>`;
    ticker.appendChild(arrow);
  })
  .catch(() => {});
