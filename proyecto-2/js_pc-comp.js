import './styles_pc-comp.css'

// Array de productos
// Nombre, imagen, precio y oferta
const products = [
  {
    name: 'Gigabyte GeForce RTX 4060 EAGLE OC 8GB GDDR6 DLSS3',
    image:
      'https://img.pccomponentes.com/articles/1073/10739332/1318-gigabyte-geforce-rtx-4060-eagle-oc-8gb-gddr6-dlss3.jpg',
    price: 349.99,
    offSale: 299.99
  },
  {
    name: 'Logitech MK270 Combo Teclado y Ratón Inalámbrico',
    image:
      'https://img.pccomponentes.com/articles/5/56614/1707-logitech-wireless-combo-mk270-teclado-inalambrico.jpg',
    price: 24.99,
    offSale: 17.49
  },
  {
    name: 'Sony Pack PlayStation 5 Slim + 50€ PlayStation Store',
    image:
      'https://img.pccomponentes.com/articles/1080/10802389/1846-sony-pack-playstation-5-50eur-playstation-store.jpg',
    price: 599.99,
    offSale: 549.99
  },
  {
    name: 'Kioxia EXCERIA PLUS G3 1TB SSD M.2 2280 PCIe Gen4',
    image:
      'https://img.pccomponentes.com/articles/1079/10790120/1235-kioxia-exceria-plus-g3-1tb-ssd-m2-2280-pcie-gen4-x4.jpg',
    price: 59.99,
    offSale: 39.99
  },
  {
    name: 'Tempest MS300 Soldier RGB Ratón Gaming 4.000 DPI',
    image:
      'https://img.pccomponentes.com/articles/31/313178/1544-tempest-ms-300-rgb-soldier-raton-gaming-4000dpi.jpg',
    price: 5.49,
    offSale: 4.99
  },
  {
    name: 'Alurin Flex Intel Core i3-10110U / 8GB / 128GB SSD / 14"',
    image:
      'https://img.pccomponentes.com/articles/58/585688/1219-alurin-flex-intel-core-i3-10110u-8gb-128gb-ssd-14.jpg',
    price: 469,
    offSale: 439
  },
  {
    name: 'Asus ROG Strix Go Auriculares Gaming USB-C Negros',
    image:
      'https://img.pccomponentes.com/articles/32/324963/193-asus-rog-strix-go-auriculares-gaming-usb-c-negros.jpg',
    price: 85.59,
    offSale: 75.99
  },
  {
    name: 'LG OLED65C34LA 65" OLED evo UltraHD 4K HDR10',
    image:
      'https://img.pccomponentes.com/articles/1071/10718149/1533-lg-oled65c34la-65-oled-evo-ultrahd-4k-hdr10.jpg',
    price: 1748.99,
    offSale: 1499.99
  },
  {
    name: 'Motorola Moto G73 5G 8/256GB Midnight Blue Libre',
    image:
      'https://img.pccomponentes.com/articles/1067/10671107/1243-motorola-moto-g73-5g-8-256gb-midnight-blue-libre.jpg',
    price: 185,
    offSale: 155
  },
  {
    name: 'Cecotec Conga 7490 Immortal Genesis Robot Aspirador',
    image:
      'https://img.pccomponentes.com/articles/1076/10767546/1500-cecotec-conga-7490-immortal-genesis-robot-aspirador.jpg',
    price: 169.01,
    offSale: 139.49
  }
]

// Objeto con las clases necesarias para los estilos de un producto
const classesProduct = {}

// Array de vendedores
const sellers = [
  'PcComponentes',
  'Espaciados',
  'Tecno Out',
  'Infopavon',
  'Bighub'
]

const mediaQuery = window.matchMedia('(max-width: 1199px)')
const body = document.body

// Header
addHeaderTag()
// Main
addMainTag()
// Footer
addFooterTag()

// Eventos
addEvents()

function addHeaderTag() {
  const header = document.createElement('header')
  // H1
  header.innerHTML += '<h1 class="oculto">Pc-Componentes</h1>'

  const divCabecera = document.createElement('div')
  divCabecera.classList.add('cabecera')

  const divLogoMenuCabecera = document.createElement('div')
  divLogoMenuCabecera.classList.add('flex', 'container')
  // Logo
  divLogoMenuCabecera.innerHTML +=
    '<a href="#" title="PcComponentes"><img src="https://cdn.pccomponentes.com/img/logos/logo-pccomponentes.svg" alt="PcComponentes" /></a>'

  // Menú de cabecera
  const nav = document.createElement('nav')
  nav.classList.add('menu-cabecera')

  const ul = document.createElement('ul')
  ul.classList.add('flex', 'container')

  // Se añaden los elementos a la lista del menú de cabecera
  const liCompromisos =
    '<li class="compromisos before"><a href="#" title="Compromisos">Compromisos</a></li>'
  ul.innerHTML += liCompromisos
  ul.innerHTML += addLi('cuenta', true)
  ul.innerHTML += addLi('cesta', true)
  ul.innerHTML += addLi('categorias', false)

  nav.appendChild(ul)
  divLogoMenuCabecera.appendChild(nav)
  divCabecera.appendChild(divLogoMenuCabecera)

  const divMensajeCabecera = document.createElement('div')
  divMensajeCabecera.classList.add('mensaje-cabecera')
  // Mensaje de cabecera
  divMensajeCabecera.innerHTML +=
    '<p><span>Expertos en tecnología</span> con un servicio 5 estrellas</p>'
  divCabecera.appendChild(divMensajeCabecera)

  header.appendChild(divCabecera)
  body.appendChild(header)

  initHeaderMenuStyles()
}

// Añade un elemento a la lista del menú de cabecera
function addLi(liName, pintarSpan) {
  let liTitle = `Mi ${liName}`
  if (liName === 'categorias') {
    liTitle = 'Todas las categorías'
  }

  let span = ''
  if (pintarSpan) {
    span = `<span>${liTitle}</span>`
  }

  return `<li class="${liName}"><a href="#" title="${liTitle}"><img src="assets/images/${liName}.png" alt="${liTitle}" />${span}</a></li>`
}

// Inicializa los estilos del menú de cabecera
function initHeaderMenuStyles() {
  if (mediaQuery.matches) {
    document
      .querySelectorAll('.compromisos, .cuenta span, .cesta span')
      .forEach((element) => element.classList.add('oculto'))
  } else {
    document
      .querySelectorAll('.cuenta img, .cesta img, .categorias')
      .forEach((element) => element.classList.add('oculto'))
    document
      .querySelectorAll('.cuenta, .cesta')
      .forEach((element) => element.classList.add('before'))
  }
}

function addMainTag() {
  const main = document.createElement('main')
  main.classList.add('flex', 'container')

  // Sección de filtros
  main.appendChild(addFiltersSection())
  // Listado de productos
  initProducts()
  main.appendChild(addProductsSection(products))

  body.appendChild(main)
}

// Se añaden los filtros de búsqueda
function addFiltersSection() {
  const section = document.createElement('section')
  section.classList.add('filters')
  // H2
  section.innerHTML += '<h2>Filtros de búsqueda</h2>'

  const form = document.createElement('form')
  form.classList.add('flex', 'container')
  form.action = '#'
  form.method = 'post'

  // Filtro de vendedores
  const fieldsetVendedor = document.createElement('fieldset')
  fieldsetVendedor.classList.add('flex', 'container')
  // Legend
  fieldsetVendedor.innerHTML +=
    '<legend class="oculto">Filtro de vendedor</legend>'
  // Label
  fieldsetVendedor.innerHTML += '<label for="seller">Vendedor</label>'

  // Selección del vendedor
  const select = document.createElement('select')
  select.name = 'seller'
  select.id = select.name

  const option = document.createElement('option')
  option.value = 'Todos'
  option.textContent = option.value
  option.selected = true
  select.appendChild(option)

  sellers.forEach((seller) => {
    const option = document.createElement('option')
    option.value = seller
    option.textContent = option.value
    select.appendChild(option)
  })

  fieldsetVendedor.appendChild(select)
  form.appendChild(fieldsetVendedor)

  // Filtro de precio
  const fieldsetPrecio = document.createElement('fieldset')
  fieldsetPrecio.classList.add('flex', 'container')
  // Legend
  fieldsetPrecio.innerHTML += '<legend class="oculto">Filtro de precio</legend>'
  // Label
  fieldsetPrecio.innerHTML += '<label for="price">Precio</label>'

  // Se añaden los input (campo numérico y botón) al filtro de precio
  fieldsetPrecio.appendChild(addInput('number', 'price', 0))
  fieldsetPrecio.appendChild(addInput('button', 'buscar', 'Buscar'))
  form.appendChild(fieldsetPrecio)

  // Botón para limpiar los filtros
  const fieldsetLimpiar = document.createElement('fieldset')
  fieldsetLimpiar.classList.add('flex', 'container')
  fieldsetLimpiar.innerHTML += '<legend class="oculto">Limpiar filtros</legend>'
  fieldsetLimpiar.appendChild(addInput('reset', 'limpiar', 'Limpiar Filtros'))
  form.appendChild(fieldsetLimpiar)

  section.appendChild(form)

  return section
}

// Añade un input a los filtros del formulario
function addInput(type, name, value) {
  const input = document.createElement('input')
  input.type = type
  input.name = name
  input.id = name
  if (type === 'number') {
    input.min = value
    input.defaultValue = value
  } else {
    input.value = value
  }

  return input
}

// Se inicializan los productos concatenando cada producto con el resto de sus características
function initProducts() {
  products.forEach((product) => {
    const features = {
      // Booleano aleatorio que indica si el producto muestra o no la etiqueta "Recomendamos"
      recommended: Math.floor(Math.random() * 2),
      // Booleano aleatorio que indica si el producto muestra o no la etiqueta "Trending"
      trending: Math.floor(Math.random() * 2),
      // Booleano aleatorio que indica si el producto tiene o no oferta en su precio
      isOffSale: Math.floor(Math.random() * 2),
      // Número aleatorio entre 1 y 5 que indica la valoración del producto
      stars: Math.floor(Math.random() * 5) + 1,
      // Número aleatorio entre 1 y 300 que indica el número de opiniones
      reviews: Math.floor(Math.random() * 300) + 1,
      // Vendedor aleatorio del array de vendedores
      seller: sellers[Math.floor(Math.random() * 5)],
      // Booleano aleatorio que indica si el producto tiene o no envío gratuito
      freeSending: Math.floor(Math.random() * 2)
    }

    product = Object.assign(product, features)
  })

  // Se inicializan las clases necesarias para los estilos de un producto
  // Se cogen las claves necesarias de un producto para generar el objeto de clases cuya clave y valor son iguales
  Object.keys(products[0]).forEach((key) => {
    if (
      key !== 'image' &&
      key !== 'recommended' &&
      key !== 'trending' &&
      key !== 'isOffSale'
    ) {
      eval(`classesProduct.${key} = '${key}'`)
    }
  })
}

// Se añaden los productos
// Params: products (array de productos)
function addProductsSection(products, noRes = false) {
  const section = document.createElement('section')
  section.classList.add('products')
  if (noRes) {
    section.innerHTML += '<div><p class="no-res">Sin resultados</p></div>'
    // H2
    section.innerHTML += '<h2>Productos sugeridos</h2>'
  } else {
    // H2
    section.innerHTML += '<h2>Nuestros productos</h2>'
  }

  const divSold = document.createElement('div')
  divSold.classList.add('flex', 'container', 'sold')

  products.forEach((product) => {
    const article = document.createElement('article')
    article.classList.add('flex', 'container', 'product')

    // Imagen
    const img = document.createElement('img')
    img.src = product.image
    img.alt = product.name
    article.appendChild(img)

    // Nombre
    article.innerHTML += `<div class="${classesProduct.name}"><p>${product.name}</p></div>`

    // Etiqueta "Recomendamos" y etiqueta "Trending"
    const divRecomendamos =
      '<span class="flex container title recommended">Recomendamos</span><p class="info">Producto recomendado por nuestros expertos, con la garantía de tu tienda online experta en tecnología con un servicio 5 estrellas.</p>'
    const divTrending =
      '<span class="flex container title trending">Trending</span><p class="info">Con esta etiqueta seleccionamos los productos que actualmente son tendencia, pero asegurando la mejor calidad y disponibilidad.</p>'
    const inicioDivUpperTooltip = '<div class="upper-tooltip">'
    const inicioDivLowerTooltip = '<div class="lower-tooltip">'
    const cierreDiv = '</div>'
    if (product.recommended && product.trending) {
      article.innerHTML += `${inicioDivUpperTooltip}${divRecomendamos}${cierreDiv}`
      article.innerHTML += `${inicioDivLowerTooltip}${divTrending}${cierreDiv}`
    } else {
      if (product.recommended) {
        article.innerHTML += `${inicioDivLowerTooltip}${divRecomendamos}${cierreDiv}`
      }
      if (product.trending) {
        article.innerHTML += `${inicioDivLowerTooltip}${divTrending}${cierreDiv}`
      }
    }

    // Precio
    const divPrice = document.createElement('div')
    divPrice.classList.add('flex', 'container', classesProduct.price)
    if (product.isOffSale) {
      divPrice.classList.add('price-off-sale')
    }
    // Se formatea el precio usando "," para el punto decimal y "." para los millares
    const formattedPrice = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR'
    }).format(product.price)
    divPrice.innerHTML += `<span>${formattedPrice}</span>`
    // Precio rebajado
    if (product.isOffSale) {
      const formattedOffSale = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR'
      }).format(product.offSale)
      divPrice.innerHTML += `<span class="${classesProduct.offSale}">${formattedOffSale}</span>`
    }
    article.appendChild(divPrice)

    // Valoración
    const divStars = document.createElement('div')
    divStars.classList.add('flex', 'container', classesProduct.stars)
    const spanStars = document.createElement('span')
    for (let index = 1; index <= 5; index++) {
      if (index <= product.stars) {
        spanStars.innerHTML += '<span class="fa fa-star checked"></span>'
      } else {
        spanStars.innerHTML += '<span class="fa fa-star"></span>'
      }
    }
    divStars.appendChild(spanStars)
    // Opiniones
    divStars.innerHTML += `<span class="${classesProduct.reviews}">(${product.reviews})</span>`
    article.appendChild(divStars)

    // Vendedor
    const sellerPcComponentes = sellers[0]
    const divSeller = document.createElement('div')
    if (product.seller === sellerPcComponentes) {
      divSeller.classList.add(classesProduct.seller, 'pccomp', 'before')
    } else {
      divSeller.classList.add(classesProduct.seller, 'marketplace', 'before')
    }
    divSeller.innerHTML += `<p>Vendido por <span>${product.seller}</span></p>`
    article.appendChild(divSeller)

    // Envío gratuito
    if (product.freeSending) {
      article.innerHTML += `<div class="${classesProduct.freeSending}"><p>Envío gratis</p></div>`
    }

    divSold.appendChild(article)
  })

  section.appendChild(divSold)

  return section
}

function addFooterTag() {
  body.innerHTML +=
    '<footer><div><p class="copy">PC Componentes y Multimedia SLU CIF B73347494. AVDA Europa, Parcela 2-5 y 2-6. Polígono industrial Las Salinas, 30840, Alhama de Murcia, Murcia. ESPAÑA.</p></div></footer>'
}

function addEvents() {
  addHeaderMenuStylesChangeEvent()

  addSellerFilterEvent()

  addPriceFilterEvent()

  addResetButtonFilter()
}

// Se añade el evento para, cuando cambie el valor de la MediaQuery, cambiar los estilos del menú de cabecera
function addHeaderMenuStylesChangeEvent() {
  mediaQuery.addEventListener('change', function () {
    document
      .querySelectorAll(
        '.compromisos, .cuenta img, .cuenta span, .cesta img, .cesta span, .categorias'
      )
      .forEach((element) => element.classList.toggle('oculto'))
    document
      .querySelectorAll('.cuenta, .cesta')
      .forEach((element) => element.classList.toggle('before'))
  })
}

// Se añade el evento para, cuando cambie el vendedor del filtro, mostrar los productos coincidentes
function addSellerFilterEvent() {
  const seller = document.querySelector('#seller')
  let filteredProducts
  const main = document.body.getElementsByTagName('main')[0]

  seller.addEventListener('change', function () {
    if (seller.selectedIndex === 0) {
      filteredProducts = products
    } else {
      filteredProducts = products.filter(
        (product) =>
          product.seller === seller.options[seller.selectedIndex].value
      )
    }

    main.lastChild.remove()
    // Si no hay resultados, se muestran los productos en oferta
    if (filteredProducts.length === 0) {
      let suggestedProducts = getOffSaleProducts(products)

      // Si no hay productos en oferta, se muestran productos aleatorios
      if (suggestedProducts.length === 0) {
        suggestedProducts = getRandomProducts(products)
      }

      main.appendChild(addProductsSection(suggestedProducts, true))
    } else {
      main.appendChild(addProductsSection(filteredProducts))
    }
  })
}

// Se añade el evento para mostrar los productos cuyo precio sea igual o inferior al del filtro del precio
function addPriceFilterEvent() {
  let filteredProducts
  const main = document.body.getElementsByTagName('main')[0]

  document.querySelector('#buscar').addEventListener('click', function () {
    const priceValue = parseFloat(document.querySelector('#price').value)

    if (priceValue === 0) {
      filteredProducts = products
    } else {
      filteredProducts = products.filter(
        (product) => parseFloat(product.price) < priceValue
      )
    }

    main.lastChild.remove()
    // Si no hay resultados, se muestran los productos en oferta
    if (filteredProducts.length === 0) {
      let suggestedProducts = getOffSaleProducts(products)

      // Si no hay productos en oferta, se muestran productos aleatorios
      if (suggestedProducts.length === 0) {
        suggestedProducts = getRandomProducts(products)
      }

      main.appendChild(addProductsSection(suggestedProducts, true))
    } else {
      main.appendChild(addProductsSection(filteredProducts))
    }
  })
}

// Devuelve un array con los productos en oferta
// Params: products (array de productos)
function getOffSaleProducts(products) {
  return products.filter((product) => product.isOffSale)
}

// Devuelve un array con un número aleatorio de productos y en un orden aleatorio
// Params: products (array de productos)
function getRandomProducts(products) {
  // Almacena productos aleatorios del array de productos
  const randomProducts = []
  // Almacena las posiciones (aleatorias) de los productos
  const randomIndexProducts = []

  for (let i = 0; i < products.length; i++) {
    randomIndexProducts.push(Math.floor(Math.random() * products.length))
  }

  // Se eliminan los duplicados
  for (let i = randomIndexProducts.length - 1; i >= 0; i--) {
    if (randomIndexProducts.indexOf(randomIndexProducts[i]) !== i) {
      randomIndexProducts.splice(i, 1)
    }
  }

  // Se genera el array de productos aleatorios en base al original
  randomIndexProducts.forEach((indexProduct) => {
    randomProducts.push(products[indexProduct])
  })

  return randomProducts
}

// Se añade el evento para, cuando se limpien los filtros, volver a mostrar todos los productos iniciales
function addResetButtonFilter() {
  const main = document.body.getElementsByTagName('main')[0]

  document.querySelector('#limpiar').addEventListener('click', function () {
    document.querySelector('#seller').selectedIndex = 0
    document.querySelector('#price').value = 0

    main.lastChild.remove()
    main.appendChild(addProductsSection(products))
  })
}
