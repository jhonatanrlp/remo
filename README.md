# Site Clube do Remo + Jornal Globus

Dois sites estáticos hospedados no GitHub Pages.

- **Clube do Remo** → `jhonatanrlp.github.io/remo/`
- **Jornal Globus** → `jhonatanrlp.github.io/remo/globus/`

---

## Estrutura de Pastas

```
remo/
├── index.html          ← Homepage do Remo (lista de comunicados)
├── jhonatanrlp.html    ← Comunicado do técnico
├── plata.html          ← Contratação do Plata
├── styles.css          ← Estilos do site do Remo
├── header.js           ← Header compartilhado do Remo
├── escudo.png          ← Logo do Clube do Remo
├── remo.png            ← Favicon
│
└── globus/             ← JORNAL GLOBUS
    ├── index.html          ← Homepage do Globus
    ├── times.html          ← Página de times (clica → notícias do time)
    ├── calendario.html     ← Calendário das 5 primeiras rodadas
    ├── styles.css          ← Estilos do Globus
    ├── header.js           ← Header compartilhado do Globus (auto-detecta caminho)
    ├── logo_globus.png     ← Logo do Globus
    │
    ├── artigos/            ← HTML de cada notícia/comunicado
    │   ├── inter-financas.html
    │   ├── inter-pietro.html
    │   └── ...
    │
    ├── fotos/              ← Imagens das notícias
    │   ├── pietro_quadros_no_inter.jpg
    │   └── ...
    │
    └── data/
        ├── noticias.json   ← FONTE DE TODAS AS NOTÍCIAS (edite aqui)
        └── calendario.json ← Calendário de jogos (edite aqui)
```

---

## Como criar uma nova notícia no Globus

### Passo 1 — Colocar a foto em `globus/fotos/`

Arraste a imagem para a pasta `globus/fotos/`. Qualquer formato funciona (`.jpg`, `.png`, `.webp`).

### Passo 2 — Criar o arquivo HTML em `globus/artigos/`

Copie qualquer arquivo existente de `globus/artigos/` e renomeie, por exemplo `flamengo-nova.html`. Depois edite:

- **Título** (`<h1 class="article__title">`)
- **Label** (`<p class="article__label">`) — ex: "Contratação", "Comunicado Oficial", "Futebol"
- **Subtítulo** (`.article__subtitle`)
- **Data** (`<time datetime="...">`)
- **Imagem** (`src="../fotos/nomedafoto.jpg"`)
- **Texto**: substitua o bloco `.article__placeholder` por parágrafos `<p>texto</p>`

> ⚠️ Não mude `<link rel="stylesheet" href="../styles.css">` nem `<script src="../header.js">` — os `../` são necessários porque o arquivo fica dentro de `artigos/`.

### Passo 3 — Registrar em `globus/data/noticias.json`

Abra o arquivo e adicione um bloco **no topo** do array (mais recente primeiro):

```json
{
  "id": "flamengo-nova",
  "title": "Título completo da notícia",
  "subtitle": "Linha fina / descrição curta.",
  "label": "Contratação",
  "date": "15/06/2026",
  "img": "fotos/nomedafoto.jpg",
  "file": "artigos/flamengo-nova.html",
  "teams": ["flamengo"],
  "destaque": false
}
```

**Campos:**
| Campo | O que é |
|---|---|
| `id` | Identificador único (sem espaços, sem acentos) |
| `title` | Título completo exibido no card e na página |
| `subtitle` | Linha fina (aparece só dentro do artigo) |
| `label` | Categoria: `"Contratação"`, `"Comunicado Oficial"`, `"Futebol"`, etc. |
| `date` | Data no formato `"DD/MM/AAAA"` |
| `img` | Caminho da foto: `"fotos/arquivo.jpg"` (ou `null` se não tiver) |
| `file` | Caminho do HTML: `"artigos/nome.html"` |
| `teams` | Array com os IDs dos times relacionados (ver lista abaixo) |
| `destaque` | `true` = vira o hero grande da homepage |

**IDs dos times:**
`atletico-mg`, `athletico-pr`, `bahia`, `botafogo`, `bragantino`, `chapecoense`,
`corinthians`, `coritiba`, `cruzeiro`, `flamengo`, `fluminense`, `gremio`,
`inter`, `mirassol`, `palmeiras`, `remo`, `santos`, `sao-paulo`, `vasco`, `vitoria`

### Passo 4 — Fazer commit e push

```bash
git add .
git commit -m "nova noticia: flamengo-nova"
git push
```

O site atualiza em ~1 minuto no GitHub Pages.

---

## Como atualizar o Calendário

Abra `globus/data/calendario.json`. Cada rodada tem um array `jogos` com pares `casa` × `fora`.

Para adicionar uma nova rodada:
```json
{
  "numero": 6,
  "jogos": [
    { "casa": "remo",     "fora": "flamengo" },
    { "casa": "inter",    "fora": "palmeiras" }
  ]
}
```

Os nomes dos times usam os mesmos IDs listados acima.

---

## Como atualizar os técnicos dos times

Abra `globus/times.html` e edite o array `TIMES` no final do arquivo:

```js
{ id: 'flamengo', nome: 'Flamengo', manager: 'NovoTecnico', status: 'active' },
```

**Status disponíveis:** `active` ✅ | `empty` (vaga aberta) | `banned` 🚫

---

## Como atualizar os jogos do ticker (barra de partidas)

Abra `globus/header.js`. O ticker carrega automaticamente a **primeira rodada** de `calendario.json`.

Para mostrar outra rodada, mude `data.rodadas[0]` para `data.rodadas[1]`, etc.

---

## Como criar um comunicado no site do Remo

1. Copie `jhonatanrlp.html` e renomeie (ex: `novo-jogador.html`)
2. Edite título, texto e imagem dentro do arquivo
3. Adicione um card em `index.html` dentro da `<div class="news-grid">`:

```html
<a class="news-card" href="novo-jogador.html">
  <img class="news-card__thumb" src="foto.jpg" ... />
  <div class="news-card__body">
    <span class="news-card__label">Contratação</span>
    <span class="news-card__title">Título do comunicado</span>
    <span class="news-card__date">15/06/2026</span>
  </div>
</a>
```

4. Faça commit e push.
