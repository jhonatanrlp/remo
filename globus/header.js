document.getElementById('site-header').innerHTML = `
  <!-- Portal bar -->
  <div class="portal-bar">
    <a>globus.com</a>
    <a>g1</a>
    <a>ge</a>
    <a>gshow</a>
    <a>globusplay</a>
    <a>seja pro</a>
    <a>cartola</a>
    <a>sportv</a>
    <a>globuspop</a>
  </div>

  <!-- Main header -->
  <header class="main-header">
    <div class="header-left">
      <div class="hamburger-btn">
        <span></span><span></span><span></span>
        <label>Menu</label>
      </div>
      <div class="times-btn">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
        <label>Times</label>
      </div>
    </div>

    <a class="header-brand" href="index.html">
      <span class="header-brand-text">Globus</span>
    </a>

    <div class="header-right">
      <div class="search-box">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
        <span>Buscar</span>
      </div>
      <div class="user-btn">
        <div class="user-avatar">J</div>
        <span>Olá, Jhonatan</span>
      </div>
    </div>
  </header>

  <!-- Match ticker -->
  <div class="match-ticker">
    <div class="ticker-highlight">Agenda<br/>Completa</div>

    <!-- ══ JOGOS: edite os ticker-slot abaixo para adicionar partidas ══ -->

    <div class="ticker-slot live">
      <span class="ticker-slot__live-badge">AO VIVO</span>
      <div class="ticker-slot__match">
        <span>🏳️</span> Time A
        <span class="sep">0 × 0</span>
        Time B <span>🏳️</span>
      </div>
      <span class="ticker-slot__comp">Rodada 1 · Grupo A</span>
    </div>

    <div class="ticker-slot">
      <span class="ticker-slot__time">19:00</span>
      <div class="ticker-slot__match">
        <span>🏳️</span> Time C
        <span class="sep">×</span>
        Time D <span>🏳️</span>
      </div>
      <span class="ticker-slot__comp">Rodada 1 · Grupo B</span>
    </div>

    <div class="ticker-slot">
      <span class="ticker-slot__time">22:00</span>
      <div class="ticker-slot__match">
        <span>🏳️</span> Time E
        <span class="sep">×</span>
        Time F <span>🏳️</span>
      </div>
      <span class="ticker-slot__comp">Rodada 1 · Grupo C</span>
    </div>

    <div class="ticker-add">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <polyline points="9 18 15 12 9 6"/>
      </svg>
    </div>
  </div>
`;
