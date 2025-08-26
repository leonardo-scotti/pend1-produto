'use strict'

import products from '../produtos.json' with { type: 'json' }

function showDatas(product) {
    const cards = document.getElementById('cards')
    const card = document.createElement('div')
    card.classList.add('card')
    const divImg = document.createElement('div')
    card.classList.add('divImg')
    const img = document.createElement('img')
    const desc = document.createElement('div')
    desc.classList.add('desc')
    const h2 = document.createElement('h2')
    const p = document.createElement('p')
    const priceAval = document.createElement('div')
    priceAval.classList.add('price-aval')
    const h3 = document.createElement('h3')
    const pPrice = document.createElement('p')

    const pathImage = `../assets/img/${product.imagem}`
    img.src = pathImage

    h2.textContent = product.nome

    p.textContent = product.descricao

    h3.textContent = `R$${product.preco}`

    pPrice.textContent = `Avaliação: ${product.classificacao}/5`

    priceAval.append(h3, pPrice)
    desc.append(h2, p, priceAval)
    divImg.append(img)
    card.append(divImg, desc, priceAval)
    cards.appendChild(card)
}



products.forEach(showDatas)