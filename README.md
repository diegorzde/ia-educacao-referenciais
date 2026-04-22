# Base Conceitual — IA na Educação Básica

Site de referência para editores e designers instrucionais que criam atividades educacionais com IA. Cruza as aprendizagens do MEC/SEB (por etapa de ensino) com competências UNESCO, e também apresenta o framework de cocriação com IA de Priscilla Silveira.

## Estrutura

O site tem duas grandes seções, acessíveis por botões fixos no topo:

- **SOBRE IA** — aprendizagens MEC por etapa (Anos Iniciais / Anos Finais / Ensino Médio), cada uma com seus Objetivos Curriculares, Abordagens e Exemplos de Perguntas UNESCO
- **COM IA** — 4 dimensões de cocriação (Produção Textual, Pensamento Analítico, Pensamento Criativo, Aprendizagem), com ações possíveis e premissas para protagonismo humano

## Arquivos

- `index.html` — página única do site (todo o conteúdo)
- `style.css` — folha de estilos
- `script.js` — funções de navegação e painéis expansíveis

## Como testar localmente

Basta dar dois cliques no `index.html` que ele abre no navegador. Não precisa de servidor nem instalação.

## Como publicar no GitHub Pages

### 1. Crie uma conta no GitHub
Se ainda não tem, acesse [github.com](https://github.com) e crie uma conta gratuita.

### 2. Instale o GitHub Desktop
Baixe em [desktop.github.com](https://desktop.github.com). É um aplicativo visual que facilita muito quem não está acostumado com linha de comando.

### 3. Crie um novo repositório
No site do GitHub, clique em **New repository**. Dê um nome simples (ex.: `base-conceitual-ia`), escolha **Public** e clique em **Create repository**.

### 4. Suba os arquivos via GitHub Desktop
- Abra o GitHub Desktop e faça login
- Vá em **File → Clone repository** e selecione o repositório que acabou de criar
- Escolha uma pasta do seu computador para armazenar os arquivos
- Copie `index.html`, `style.css` e `script.js` para dentro dessa pasta
- Volte ao GitHub Desktop: ele vai detectar os novos arquivos
- Na parte de baixo à esquerda, escreva uma mensagem (ex.: "primeira versão") no campo Summary
- Clique em **Commit to main**
- Clique em **Push origin** no topo

### 5. Ative o GitHub Pages
- No site do GitHub, entre no seu repositório
- Clique em **Settings** (aba superior)
- No menu lateral, clique em **Pages**
- Em **Source**, escolha **Deploy from a branch**
- Em **Branch**, selecione **main** e pasta **/ (root)**
- Clique em **Save**

### 6. Acesse o site
Aguarde alguns minutos. O endereço do site será:

```
https://SEU-USUARIO.github.io/base-conceitual-ia/
```

Substitua `SEU-USUARIO` pelo seu nome de usuário no GitHub e `base-conceitual-ia` pelo nome que você deu ao repositório.

## Como editar depois

Para fazer qualquer alteração no conteúdo (corrigir um texto, trocar uma cor, adicionar algo):

1. Abra o arquivo no Bloco de Notas ou no [VS Code](https://code.visualstudio.com) (recomendado, é gratuito e tem destaque de sintaxe)
2. Salve as alterações
3. Volte ao GitHub Desktop: ele vai mostrar o que mudou
4. Escreva uma mensagem descrevendo a mudança
5. Clique em **Commit to main** e depois em **Push origin**
6. Em 1-2 minutos, o site publicado estará atualizado

## Fontes

- **MEC/SEB** — aprendizagens por etapa de ensino (Educação Básica brasileira)
- **UNESCO** — Marco Referencial de Competências em IA para Estudantes (Capítulos 4 e 5)
- **Silveira, P.** — *Educar com IA* (framework de cocriação)
