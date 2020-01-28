# slider
Simple slide with HTML, CSS and Javascript

## Ferramentas utilizadas

* HTML
* SASS/CSS
* Javascript/ES6
* NodeJS v10.16.3 - Para rodar as tasks do Gulp.
* Gulp - Para automatizar as tarefas, tais como, converter o SASS para CSS e gerar o arquivo minificado, converter o script de ES6 para ES5 e gerar o arquivo minificado
* Babel - Transpila o script para um formato aceito por todos os navegadores.

## Tasks do Gulp

* sassDev - Converte o SASS para CSS.
* sassProd - Gera o arquivo CSS minificado.
* jsProd - Converte o script para um formato aceito por todos os navegadores utilizando o Babel e gera o arquivo minificado.
* watch - Monitora alterações nos arquivos e executa as tasks automaticamente.

Para visualizar o slider basta fazer o clone do repositório e abrir o arquivo `index.html` (localizado na raiz do projeto) no browser.

Todos os arquivos de assets (css, js e scss), estão dentro do diretório assets.

Para efetuar alterações no código é necessário ter o NodeJS instalado, caso não tenha, [clique aqui](https://nodejs.org/en/) e faça do download da versão de acordo com o seu sistema operacional.

Após efetuar o download do NodeJS, faça o clone do repositório, (caso não tenha o GIT instalado, [clique aqui](https://git-scm.com/downloads)) no seu terminal, execute o comando abaixo.

`git clone https://github.com/rsoliveira87/slider.git && cd slider`

Dentro da pasta slider, execute o comando abaixo para instalar as dependências do Node.

`npm install`

Depois execute a task do Gulp desejada.

`gulp` Executa a task default
`gulp sassProd`
`gulp sassProd`
`gulp jsProd`
`gulp watch`