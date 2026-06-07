# Laplace Analytica Cognitive — MazyOS

Agência de marketing digital com IA. Operação solo em fase de lançamento.
Essa pasta é o sistema operacional do negócio.

---

## Contexto do negócio

No início de toda conversa, ler os seguintes arquivos:

1. `_memoria/empresa.md` — quem é a agência, o que faz, perfil de cliente
2. `_memoria/preferencias.md` — tom de voz, estilo de escrita, o que evitar
3. `_memoria/estrategia.md` — foco atual, prioridades, fase do negócio

Usar essas informações como base pra qualquer resposta ou decisão. Ao
sugerir prioridades, formatos ou abordagens, considerar o foco atual
descrito em `estrategia.md`.

Pra qualquer tarefa visual (carrossel, post, landing page), consultar
`identidade/design-guide.md` como referência de estilo.

Não é necessário listar o que foi lido nem confirmar a leitura. Apenas
usar o contexto naturalmente.

---

## O que é esse workspace

Operação completa da Laplace Analytica Cognitive. Aqui ficam todos os
clientes, propostas, conteúdo e entregas da agência.

**Estrutura de pastas:**
- `_memoria/` — quem é a agência, como falamos, foco atual
- `identidade/` — marca da agência (aplicada nas peças que o sistema gera)
- `marketing/` — conteúdo institucional da agência (Instagram, blog, etc.)
- `saidas/` — exports gerados (carrosséis em saidas/carrosseis/, análises, docs)
- `dados/` — arquivos a analisar (relatórios de cliente, exports de ads)
- `site/` — site HTML da agência (em desenvolvimento)
- `scripts/` — scripts utilitários e automações
- `templates/` — templates de skills, identidade e ferramentas

---

## Sobre a agência

Marketing digital com IA pra empresas que dominam o offline mas têm zero presença digital.
Atende Brasil (R$ 3.500/mês) e EUA (US$ 2.000/mês). Sem nicho fixo.

Time: 1 pessoa. Meta: escalar até 10 clientes recorrentes antes de contratar.

**Serviços:**
- Presença digital do zero (site, GMB, redes sociais)
- Gestão de tráfego pago (Meta, Google, TikTok, YouTube, LinkedIn, Kwai)
- Estratégia e produção de conteúdo
- Implementação de IA nos processos de marketing

---

## Clientes ativos

*(nenhum ainda — negócio em fase de lançamento)*

---

## Fluxo de trabalho

Antes de executar qualquer tarefa, verificar se existe skill relevante
em `.claude/skills/`. Se encontrar, seguir as instruções da skill. Se
não encontrar, executar a tarefa normalmente.

Ao concluir uma tarefa que não tinha skill mas parece repetível, perguntar:

> "Isso pode virar uma skill pra próxima vez. Quer que eu crie?"

Não perguntar pra tarefas pontuais ou perguntas simples. Só quando o
padrão de repetição for claro.

**Regras operacionais:**
- Cliente novo → criar pasta `clientes/<Nome>/` com briefing e estratégia
- Proposta nova → `propostas/<cliente>-<data>.html` antes de fechar
- Casos de sucesso → `clientes/<Nome>/caso.md` (reusar em pitches)

---

## Aprender com correções

Quando o usuário corrigir algo ou dar instrução permanente ("na verdade é assim",
"não faça mais isso", "prefiro assim", "sempre que...", "evita..."), perguntar:

> "Quer que eu salve isso pra não precisar repetir?"

Se sim, identificar onde salvar:

- **Sobre o negócio** → `_memoria/empresa.md`
- **Sobre preferências e estilo** → `_memoria/preferencias.md`
- **Sobre prioridades e foco** → `_memoria/estrategia.md`
- **Regra de comportamento nessa pasta** → este `CLAUDE.md`

Salvar com uma linha nova clara, sem reformatar o arquivo inteiro.

---

## Manter contexto atualizado

Ao terminar uma tarefa que mudou algo relevante (cliente novo, skill nova,
mudança de foco, ferramenta instalada), perguntar:

> "Isso mudou algo no teu contexto. Quer que eu atualize a memória?"

Se sim, mostrar o que vai mudar antes de salvar. Não reformatar o arquivo
inteiro — só adicionar ou editar a linha relevante.

**Quando NÃO perguntar:**
- Tarefas pontuais sem impacto no contexto
- Perguntas simples ou conversas sem ação
- Mudanças já salvas pelo bloco anterior

---

## Criação de skills

Quando o usuário pedir skill nova:

1. Verificar se existe template relevante em `templates/skills/`
2. Perguntar se é específica desse projeto ou útil em qualquer lugar:
   - Específica → `.claude/skills/nome-da-skill/SKILL.md`
   - Universal → `~/.claude/skills/nome-da-skill/SKILL.md`
3. Ler `_memoria/empresa.md` e `_memoria/preferencias.md` pra calibrar o conteúdo
4. Criar arquivos de apoio dentro da pasta da skill se necessário

---

## Ferramentas conectadas

- [ ] Notion
- [x] LinkedIn (plugin linkedin-skills — publica via Publora, lê dados via Apify)
- [x] Gmail
- [x] Google Calendar
- [ ] Meta Ads
- [ ] Google Ads
- [ ] Canva

*(Marcar conforme for conectando)*
