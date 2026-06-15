document.getElementById('site-header').innerHTML = `
  <!-- Main header -->
  <header class="main-header">
    <div class="header-left">
      <div class="hamburger-btn">
        <span></span><span></span><span></span>
        <label>Menu</label>
      </div>
      <a class="times-btn" href="times.html">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
        <label>Times</label>
      </a>
    </div>

    <a class="header-brand" href="index.html">
      <svg class="globe-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="28" stroke="#1a4a22" stroke-width="3"/>
        <ellipse cx="32" cy="32" rx="14" ry="28" stroke="#1a4a22" stroke-width="2.5"/>
        <line x1="4" y1="32" x2="60" y2="32" stroke="#1a4a22" stroke-width="2.5"/>
        <path d="M6 20 Q32 26 58 20" stroke="#1a4a22" stroke-width="2" fill="none"/>
        <path d="M6 44 Q32 38 58 44" stroke="#1a4a22" stroke-width="2" fill="none"/>
      </svg>
      <span class="header-brand-text">Globus</span>
    </a>

    <div class="header-right">
      <div class="search-box">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
        <span>Buscar</span>
      </div>
      <div class="login-btn">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
        </svg>
        Login
      </div>
    </div>
  </header>

  <!-- Match ticker -->
  <div class="match-ticker">
    <div class="ticker-highlight">Agenda<br/>Completa</div>

    <!-- ══ EDITE OS JOGOS AQUI ══ -->
    <div class="ticker-slot">
      <span class="ticker-slot__time">--:--</span>
      <div class="ticker-slot__match">
        🏳️ Time A <span class="sep">×</span> Time B 🏳️
      </div>
      <span class="ticker-slot__comp">Rodada · Grupo</span>
    </div>

    <div class="ticker-slot">
      <span class="ticker-slot__time">--:--</span>
      <div class="ticker-slot__match">
        🏳️ Time C <span class="sep">×</span> Time D 🏳️
      </div>
      <span class="ticker-slot__comp">Rodada · Grupo</span>
    </div>

    <div class="ticker-slot">
      <span class="ticker-slot__time">--:--</span>
      <div class="ticker-slot__match">
        🏳️ Time E <span class="sep">×</span> Time F 🏳️
      </div>
      <span class="ticker-slot__comp">Rodada · Grupo</span>
    </div>

    <div class="ticker-add">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <polyline points="9 18 15 12 9 6"/>
      </svg>
    </div>
  </div>
`;
