# ValeSafe EPI's — Unidade Indaiatuba

Site institucional **100% front-end** (sem back-end e sem banco de dados) da unidade
Indaiatuba da ValeSafe, rede de franquias especializada em Equipamentos de Proteção
Individual (EPIs) e Coletiva (EPCs).

Feito com **Vite + React + TypeScript + React Router + Tailwind CSS**. Todo o conteúdo
é estático e fica centralizado em [`src/data/content.ts`](src/data/content.ts).

## Como rodar

```bash
npm install      # instala as dependências
npm run dev      # ambiente de desenvolvimento (http://localhost:5173)
npm run build    # gera a versão de produção em /dist
npm run preview  # pré-visualiza o build de produção
```

## Estrutura de pastas

```
.
├── index.html                # HTML base (fontes, SEO, meta tags)
├── package.json
├── vite.config.ts            # config do Vite
├── tailwind.config.js        # paleta/identidade visual ValeSafe
├── postcss.config.js
├── tsconfig.json
└── src/
    ├── main.tsx              # entry point (BrowserRouter)
    ├── App.tsx               # definição das rotas
    ├── index.css             # Tailwind + estilos globais (botões, container)
    ├── data/
    │   └── content.ts        # >>> TODO O CONTEÚDO DO SITE FICA AQUI <<<
    ├── components/
    │   ├── Layout.tsx        # Header + Outlet + Footer + botão WhatsApp
    │   ├── Header.tsx        # cabeçalho fixo + menu responsivo
    │   ├── Hero.tsx          # seção principal da Home
    │   ├── Stats.tsx         # números / selo do Google
    │   ├── Sectors.tsx       # setores atendidos
    │   ├── ProductCategories.tsx   # categorias de EPIs
    │   ├── About.tsx         # história / missão / visão / valores
    │   ├── Mascot.tsx        # mascote "Casquito"
    │   ├── Testimonials.tsx  # depoimentos (grid + carrossel mobile)
    │   ├── FAQ.tsx           # perguntas frequentes (acordeão)
    │   ├── ContactLocation.tsx     # contato + mapa do Google
    │   ├── Footer.tsx        # rodapé + redes sociais
    │   ├── WhatsAppFloatingButton.tsx   # botão flutuante fixo
    │   ├── PageBanner.tsx    # faixa de topo das páginas internas
    │   ├── ScrollToTop.tsx   # rola ao topo ao trocar de rota
    │   ├── Logo.tsx          # wordmark "valesafe"
    │   └── Icons.tsx         # ícones SVG inline
    └── pages/
        ├── HomePage.tsx
        ├── ProductsPage.tsx
        ├── AboutPage.tsx
        ├── SectorsPage.tsx
        ├── TestimonialsPage.tsx
        ├── ContactPage.tsx
        └── NotFoundPage.tsx  # 404
```

## O que substituir por conteúdo real

O código usa **placeholders** claramente marcados com comentários. Procure por
`SUBSTITUIR` e `[ Espaço para foto ... ]` para localizar onde inserir imagens reais:

- **Hero** (`Hero.tsx`): foto de colaborador usando EPIs.
- **Categorias** (`ProductCategories.tsx`): fotos reais de cada produto.
- **Sobre** (`About.tsx`): foto da fachada amarela da loja.
- **Mascote** (`Mascot.tsx`): ilustração oficial do "Casquito".
- **Logo** (`Logo.tsx`): SVG/PNG oficial do wordmark.
- **Favicon** (`public/vite.svg`): ícone oficial.
- **Redes sociais** (`content.ts`): URLs oficiais da unidade.

Sugestão: coloque as imagens em `src/assets/` e importe-as nos componentes, ou em
`public/` e referencie por caminho absoluto (ex.: `/produtos/luvas.jpg`).

## Identidade visual

- Preto/grafite `#0D0D0D` (fundos de destaque)
- Amarelo-ouro `#F5B301` (CTAs e destaques)
- Toque de laranja `#F26B21` (mascote)
- Tipografia: **Poppins** (carregada via Google Fonts no `index.html`)

As cores estão registradas em `tailwind.config.js` como `brand.dark`,
`brand.yellow`, `brand.orange`, etc.
