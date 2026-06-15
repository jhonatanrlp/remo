document.getElementById('site-header').innerHTML = `
  <div class="topbar">
    <div class="topbar-hamburger">
      <span></span><span></span><span></span>
    </div>
    <div class="topbar-logos">
      <img src="escudo.png" alt="Remo" onerror="this.style.display='none'" />
      <div class="topbar-divider"></div>
    </div>
    <nav class="topbar-nav">
      <a>Elenco</a>
      <a>Estatísticas</a>
      <a>Táticas</a>
      <a>Transferências</a>
      <a>Comunicados</a>
    </nav>
    <div class="topbar-right">
      <span class="osm-badge">OSM · Liga</span>
      <div class="topbar-btn">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
        Login
      </div>
    </div>
  </div>
  <nav class="navbar">
    <a href="index.html">
      <img class="navbar-logo" src="escudo.png" alt="Clube do Remo" onerror="this.style.display='none'" />
      <span class="navbar-name">Clube do Remo — O maior de Belém</span>
    </a>
  </nav>
`;
