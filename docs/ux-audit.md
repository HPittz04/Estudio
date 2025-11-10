# Estúdio 747 – UX/UI Audit & Redesign Direction

## 1. Diagnóstico do site atual
### Layout & Estrutura
- **Navegação fixa redundante:** existem duas barras fixas empilhadas (TopBar e Navbar) com efeitos de opacidade dependentes do scroll, o que consome área vertical em ecrãs pequenos e causa saltos visuais quando o utilizador começa a fazer scroll.【F:src/components/TopBar.tsx†L7-L43】【F:src/components/Navbar.tsx†L9-L73】
- **Conteúdo centralizado e longas linhas:** secções como a hero da página inicial utilizam largura máxima de 4xl com alinhamento centrado, dificultando a leitura de parágrafos extensos em dispositivos desktop e não adaptam o texto para layouts responsivos mais complexos.【F:src/app/page.tsx†L38-L61】
- **Uso repetido do mesmo copy:** o texto institucional repete-se em várias páginas (Home, Quem Somos, Serviços), reduzindo o valor de cada página e criando sensação de duplicação.【F:src/app/page.tsx†L43-L61】【F:src/app/quemsomos/page.tsx†L8-L22】【F:src/app/servicos/page.tsx†L47-L58】
- **Galerias sem descrição:** as galerias de imagens não possuem legendas, contexto ou alternativa de texto significativa, limitando compreensão de visitantes e motores de busca.【F:src/app/page.tsx†L62-L74】【F:src/app/servicos/page.tsx†L65-L93】
- **Modal de imagens não acessível:** o modal é acionado via `<img>` sem controlo de foco e não prevê navegação por teclado, tornando-se pouco inclusivo.【F:src/app/page.tsx†L62-L106】

### Conteúdo & Mensagem
- **Mensagem pouco hierarquizada:** cabeçalhos em caixa-alta e parágrafos longos dificultam leitura; falta storytelling sobre equipa, serviços, provas sociais e call-to-actions claros.【F:src/app/page.tsx†L38-L61】【F:src/app/quemsomos/page.tsx†L8-L22】
- **Informações críticas dispersas:** contactos aparecem apenas como texto plano sem botões de ação rápida (e-mail/telefone) nem formulário de contacto, reduzindo conversão.【F:src/app/contactos/page.tsx†L4-L38】
- **Inexistência de idioma alternativo:** todo o conteúdo está apenas em português, sem indicação de possibilidade multi-idioma para público internacional.

### Assets & Branding
- **Qualidade inconsistente das imagens:** mistura de fotografias com diferentes proporções e tratamento de cor; ausência de thumbnails otimizados ou legendas.
- **Logotipos múltiplos:** uso simultâneo de `/logo-747.png` e `/747.png` com cores e proporções distintas cria falta de coerência visual.【F:src/components/Navbar.tsx†L31-L39】【F:src/components/Footer.tsx†L10-L12】
- **Paleta indefinida:** fundo escuro fixo (#242530) combinado com overlays pretos semi-transparentes gera contraste insuficiente em alguns textos finos.【F:src/app/globals.css†L21-L35】【F:src/app/page.tsx†L33-L45】

## 2. Benchmarks e referências visuais/UX
| Referência | URL | Notas relevantes |
|------------|-----|------------------|
| Abbey Road Studios | https://www.abbeyroad.com/ | Hero com vídeo fullscreen, storytelling segmentado, secções com contrastes fortes e CTAs claros.
| Metropolis Studios | https://www.thisismetropolis.com/ | Paleta escura premium, tipografia com hierarquia evidente, uso de fotos de alta qualidade com overlays discretos.
| Funkhaus Berlin | https://funkhausberlin.net/ | Layout editorial com tipografia serif e grid assimétrico que transmite sofisticação artística.
| Westlake Recording Studios | https://www.westlakestudios.com/ | Estrutura simples com destaque para clientes, testimoniais e tours visuais do espaço.
| Spotify for Artists | https://artists.spotify.com/ | Exemplo de interface moderna com cores vibrantes e ícones consistentes para público musical.

Observações:
- A maioria destes exemplos trabalha com storytelling progressivo (história ➜ serviços ➜ portefólio ➜ prova social ➜ call-to-action).
- Tipografia legível com combinações de sans-serif e serif, uso de contrastes elevados e micro-interações discretas.

## 3. Objetivos de direção visual e verbal
### Tipografia
- **Primária (Display):** Família geométrica humanista (ex.: `Poppins`, `Sora` ou `Space Grotesk`) para títulos em caixa baixa, transmitindo modernidade e tecnologia.
- **Secundária (Texto corrido):** Sans-serif com boa leitura (ex.: `Inter`, `Manrope`), tamanhos base ≥ 18px e altura de linha ≥ 1.6 para legibilidade.
- **Tratamento:** Utilizar peso variável para criar hierarquias, evitar caixa-alta contínua, introduzir subtítulos e destaques com cor/itálico.

### Paleta de cores
- **Fundo principal:** Cinza-azulado profundo (#0F172A) para reforçar ambiente estúdio.
- **Contraste de texto:** Branco quente (#F8FAFC) e cinza-claro (#E2E8F0) para texto secundário.
- **Cor de destaque:** Laranja âmbar (#F97316) ou magenta elétrico (#F72585) para botões e elementos interativos, inspirando energia criativa.
- **Neutros de apoio:** Cinzas (#1E293B, #334155) e gradientes suaves para cards.

### Tom & Percepção
- **Tom de voz:** Profissional acolhedor, com foco em colaboração artística e resultados concretos (ex.: "Construímos a tua próxima obra sonora" em vez de slogans genéricos).
- **Percepção desejada:** Estúdio boutique contemporâneo, tecnologicamente avançado, mas próximo da comunidade musical; enfatizar experiência da equipa, portefólio, equipamento e processos.
- **Call-to-actions:** Claros e orientados para ação ("Agenda uma sessão", "Pede um orçamento", "Visita o estúdio").

## 4. Páginas e funcionalidades prioritárias para revisão
1. **Homepage (`src/app/page.tsx`):**
   - Redefinir hero com mensagem clara, CTA e imagem/vídeo otimizado.
   - Reestruturar conteúdo em secções: serviços-chave, equipa, trabalhos recentes, testemunhos, CTA final.
   - Otimizar galeria com legendas, filtros e modal acessível.

2. **Quem Somos (`src/app/quemsomos/page.tsx`):**
   - Diferenciar copy da homepage com narrativa da história do estúdio, valores, equipa e infraestrutura.
   - Adicionar fotos profissionais e cronologia.

3. **Serviços (`src/app/servicos/page.tsx`):**
   - Transformar lista genérica em cards detalhados com descrições, preços indicativos/pacotes, USPs e CTAs (agendar, pedir orçamento).
   - Galeria orientada para casos de estudo ou antes/depois, com depoimentos relacionados.

4. **Contactos (`src/app/contactos/page.tsx`):**
   - Introduzir formulário de contacto, botões clicáveis para telefone/e-mail, horários, links para redes sociais.
   - Mapa incorporado com informação complementar (estacionamento, transporte).

5. **Componentes Globais:**
   - Consolidar top bar e navegação num único header responsivo com comportamento suave no scroll.
   - Ajustar footer com CTA final (newsletter, agendamento) e consistência de logotipo.

6. **Assets & Performance:**
   - Otimizar imagens (Next/Image com `alt` descritivo, tamanhos responsivos, WebP).
   - Definir sistema de ícones consistente e bibliotecas necessárias.

---
Este documento serve de guia para alinhamento com stakeholders e base para o redesign do Estúdio 747.
