# Guia de estudos do pensamento social brasileiro

Site de estudo com linha do tempo do pensamento social brasileiro (contexto, temas, autores e leituras) e uma parte sobre como o próprio campo estuda essa tradição. Cada visitante pode escrever as próprias notas, sem login.

## Arquivos

- `index.html`: o site inteiro, em um único arquivo (página e conteúdo juntos).
- `README.md`: este texto (pode ficar no repositório ou ser apagado, não afeta o site).

Antes de publicar, abra o `index.html` num editor de texto, procure `CONTEÚDO DO SITE` e troque, no `rodape`, `[SEU NOME]` e `[ESCOLHA UMA LICENÇA]`.

## Como publicar no GitHub Pages

Os nomes dos menus do GitHub podem mudar um pouco; a ideia é esta:

1. Crie uma conta no GitHub (github.com), se ainda não tiver.
2. Crie um repositório **público** novo (botão "New"), por exemplo `pensamento-social`.
3. Dentro do repositório, use "Add file" > "Upload files" e envie `index.html` e `README.md` (arraste os arquivos, não a pasta). Confirme com "Commit changes".
4. Vá em "Settings" > "Pages". Em "Build and deployment", escolha "Deploy from a branch", branch `main` e pasta `/ (root)`, e salve.
5. Aguarde alguns minutos. O endereço aparece na própria tela de Pages, no formato `https://SEU-USUARIO.github.io/pensamento-social/`.

## Como atualizar o conteúdo

1. No repositório, abra `index.html`, clique no ícone de lápis (editar) e procure o trecho `CONTEÚDO DO SITE`, perto do começo do bloco de script.
2. Mude o texto, acrescente autores às listas ou crie novos períodos copiando um bloco `P(...)` existente. Em listas, cada linha é um item, e o que vem antes dos dois-pontos aparece em negrito.
3. Clique em "Commit changes". O site se atualiza em poucos minutos.

Cuidado: as notas dos visitantes são ligadas ao **nome** de cada período. Se você renomear um período, as notas que as pessoas escreveram nele deixam de aparecer para elas. Para renomear sem esse efeito, acrescente ao período um campo `id` com o nome antigo (por exemplo, `id:"periodo-colonial-e-formacao-da-sociedade-escravista"`). Isso evita perder as notas.

## Perfis dos autores (páginas de autor)

Cada autor pode ter uma página com **Biografia**, **Resumo da obra** e **Referências bibliográficas**. Esse texto é fixo e aparece para todos os visitantes (ao contrário das notas, que são privadas).

1. Abra o `index.html` no editor do GitHub e procure `PERFIS`.
2. Copie o modelo que está em comentário (linhas começadas por `//`), apague as duas barras do começo de cada linha e troque o texto.
3. A primeira linha do bloco é o nome do autor em minúsculas, sem acentos e com hífens (por exemplo, `"sergio-buarque-de-holanda"`). Ela precisa bater com o nome em `AUTORES`.
4. Salve com "Commit changes". O texto aparece na página do autor, e o aviso de "perfil em construção" some.

Cuidados: não apague aspas, chaves nem a vírgula do fim de cada bloco, e não use o caractere de crase (`) dentro do texto. Uma linha em branco separa os parágrafos, e em `referencias` vai uma referência por linha.

Todos os autores da lista já têm página e link: sem texto, a página mostra "perfil em construção". Para incluir um autor que não está na lista, acrescente `"Nome Sobrenome",` em `AUTORES`.

## Aba 3. Autores

Lista os autores em ordem alfabética pelo **primeiro nome**, exatamente como está escrito em `AUTORES` (André Botelho em A, Lilia Schwarcz em L). Todos os nomes são links para a página do autor. Por padrão, a aba lista todos; se preferir listar apenas os autores que já têm perfil escrito, troque `mostrarSemPerfil:true` por `false` no começo do conteúdo.

## Linha do tempo visual

É um desenho dos períodos da Parte 1, no fim da página (não clicável), com os anos de início e fim definidos em `TEMPO`. Se criar ou renomear um período, acrescente ou ajuste a linha correspondente em `TEMPO`, usando as mesmas "datas" do período. Antes de 1800 a escala é comprimida.

## Sobre as notas dos visitantes

- Ficam guardadas **no navegador de cada pessoa**, neste aparelho. Não há servidor, conta nem login, e ninguém (nem você) vê as notas dos outros.
- Somem se a pessoa limpar os dados do navegador, usar janela anônima, trocar de navegador ou de aparelho. Não há recuperação.
- A página tem botões para **exportar** (cópia de segurança em arquivo, ou em texto) e **importar** (para restaurar ou levar a outro aparelho). A explicação aparece para o visitante no topo do site.

## Licença e créditos

Escolha uma licença para o conteúdo antes de divulgar (por exemplo, Creative Commons CC BY 4.0, que permite o uso com crédito à autoria) e informe no rodapé. O site creativecommons.org tem um seletor que ajuda a escolher a licença e fornece o texto e o selo para colocar no rodapé. Se quiser guardar a licença no repositório, crie um arquivo `LICENSE` ("Add file" > "Create new file") com esse texto.
