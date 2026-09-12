# Como colocar as fotos reais no site

O site já está pronto para receber as imagens. Você **não precisa mexer em
nenhum código** — basta colocar os arquivos de foto dentro desta pasta
`images/`, exatamente com os nomes abaixo. Se um arquivo ainda não existir,
o site continua funcionando normalmente e mostra o quadro de placeholder
no lugar (nada quebra).

Formato recomendado: `.jpg` (ou `.webp`, trocando a extensão no nome).

---

## 1) Foto de destaque do Hero (topo do site)

```
images/hero.jpg
```
- Orientação vertical (retrato), proporção aproximada 4:5
- Essa é a primeira imagem que a pessoa vê ao abrir o site — escolha o
  trabalho mais impactante do portfólio

## 2) Foto da profissional (seção "Sobre")

```
images/sobre.jpg
```
- Pode ser vertical ou levemente retangular
- Foto da Nails Ranny (rosto, atendendo, ou nas mãos trabalhando)

## 3) Fotos do portfólio (carrossel principal)

Pasta: `images/portfolio/`

```
images/portfolio/look-01.jpg
images/portfolio/look-02.jpg
images/portfolio/look-03.jpg
images/portfolio/look-04.jpg
images/portfolio/look-05.jpg
images/portfolio/look-06.jpg
images/portfolio/look-07.jpg
images/portfolio/look-08.jpg
images/portfolio/look-09.jpg
images/portfolio/look-10.jpg
images/portfolio/look-11.jpg
images/portfolio/look-12.jpg
```
- Orientação vertical (retrato), proporção aproximada 5:8 — como uma foto
  de story bem enquadrada
- A ordem/categoria de cada "look" está definida no arquivo `js/script.js`,
  dentro da lista `PORTFOLIO_ITEMS` — se quiser trocar qual foto é qual
  categoria (Alongamento, Nail Art, Francesinha, Nude, Decoradas), é só
  reorganizar ali, ou renomear os arquivos para bater com a categoria
  desejada.
- Quer usar mais ou menos de 12 fotos? Copie ou remova um bloco `{ ... }`
  dentro de `PORTFOLIO_ITEMS` em `js/script.js` e ajuste o nome do arquivo
  de imagem correspondente.

## 4) Fotos dos serviços (carrossel menor, opcional)

Pasta: `images/servicos/`

```
images/servicos/alongamento.jpg
images/servicos/manutencao.jpg
images/servicos/nailart.jpg
images/servicos/esmaltacao.jpg
```
- Esses cards já ficam bonitos só com o degradê de cor (sem foto) — as
  imagens aqui são totalmente opcionais, para quem quiser deixar cada
  card com uma foto de fundo em vez do degradê.

---

### Resumo rápido
1. Salve suas fotos com os nomes exatos acima.
2. Arraste os arquivos para dentro das pastas correspondentes
   (`images/`, `images/portfolio/`, `images/servicos/`).
3. Abra o `index.html` de novo — as fotos aparecem automaticamente no
   lugar dos placeholders.
