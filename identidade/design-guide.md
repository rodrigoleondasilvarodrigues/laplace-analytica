# Identidade visual

> Como a marca aparece em tudo que o MazyOS gera.
> As skills de conteúdo, carrossel e post leem esse arquivo antes de criar qualquer visual.
> Edite quando a marca evoluir.

---

## Cores

- **Fundo principal:** `#1a0826` — roxo muito escuro, quase preto

- **Cor de destaque / CTA:** `#7B2FBE` — roxo médio, cor principal da marca

- **Texto principal:** `#FFFFFF` — branco puro

- **Fundo alternativo / cards:** `#2d1045` — roxo escuro um pouco mais claro que o fundo

- **Acento / gradiente:** `#C084FC` — roxo claro, usado em destaques e gradientes

- **Cor proibida:** Qualquer cor quente (laranja, vermelho, amarelo) — destoa completamente da identidade

---

## Tipografia

- **Títulos e destaques:** Outfit — peso 700 (bold) ou 800 (extrabold para números hero e stat-num)

- **Corpo, subtítulos e botões:** Outfit — peso 400 (regular) ou 600 (semibold)

- **Peso máximo em uso:** 800 — reservado para números grandes (ROAS hero, stat-num, ghost-num)

- **Google Fonts import:** `https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;800&display=swap`

---

## Estilo geral

Tech, dark, limpo. Remete a IA e dados sem ser frio — o roxo dá personalidade. Sem elementos decorativos desnecessários. Espaço em branco generoso. Gradientes de roxo médio pro roxo claro são bem-vindos em títulos e CTAs.

---

## Elementos-chave

- Bordas: finas, em roxo médio ou transparentes
- Border-radius dos cards: 12–16px
- Botões: fundo roxo médio (#7B2FBE), texto branco, border-radius 8px
- Sombras: roxo escuro com baixa opacidade (`rgba(123, 47, 190, 0.3)`)

### Padrão visual dos carrosséis (aprovado nos 15 carrosséis produzidos)

- **Accent-bar:** faixa vertical de 5px na borda esquerda do slide, gradiente `transparent → #7B2FBE → #C084FC → transparent`, opacidade 0.7
- **Ghost number:** número decorativo 260px, `color: rgba(123,47,190,0.07)`, posicionado canto inferior direito — indica o número do slide de forma sutil
- **Glassmorphism (stat-box):** `background: rgba(20,5,35,0.65)`, `backdrop-filter: blur(16px)`, borda `rgba(192,132,252,0.22)`, border-radius 16px
- **Stat-num:** `#C084FC`, 68px, weight 800, `text-shadow: 0 0 30px rgba(192,132,252,0.4)`
- **Overlay duplo em slides com imagem:** radial-gradient roxo suave + linear-gradient escuro (de 83% a 95% de opacidade do topo ao rodapé)
- **Flat slide background:** 3 radial-gradients roxos sutis sobre `linear-gradient(180deg, #110120, #1a0826, #110120)` + grid lines `rgba(123,47,190,0.04)` em 80x80px
- **Context paragraph:** fonte 33px, `color: rgba(255,255,255,0.62)`, border-left `3px solid rgba(192,132,252,0.45)`, padding-left 22px
- **H2 em slides:** 70px, weight 700, `span` em `#C084FC`

---

## O que NUNCA fazer

- Fundo branco ou claro — a marca é dark
- Fontes serifadas ou de script
- Cores quentes (laranja, vermelho, amarelo) como cor de destaque
- Excesso de elementos visuais — menos é mais aqui

---

## Logo

- **Arquivo:** `identidade/logo.png`
- **Versão pra fundo escuro:** a logo já é projetada pra fundo escuro (roxo profundo)
- **Onde usar:** slide final do carrossel (CTA), header de propostas, slides de apresentação
- **Descrição:** cérebro com circuitos dentro de um círculo, tons de roxo sobre fundo escuro, contorno branco
- **Tamanho sugerido:** largura entre 120–200px nos HTMLs

---

## Observações adicionais

- Instagram: @laplaceanalytica
- O site atual usa essas mesmas cores e fonte — manter consistência
- Gradiente principal: `linear-gradient(135deg, #7B2FBE, #C084FC)`
