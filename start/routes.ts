import router from '@adonisjs/core/services/router'

router.get('/', async ({ view, request }) => {
  return view.render('pages/login', { current: request.parsedUrl.pathname })
})

router.get('/home', async ({ view, request }) => {
  return view.render('pages/home', { current: request.parsedUrl.pathname })
}).as('home')

router.get('/game', async ({ view, request }) => {
  return view.render('pages/game', { current: request.parsedUrl.pathname })
})

router.get('/news', async ({ view, request }) => {
  return view.render('pages/news', { current: request.parsedUrl.pathname })
})

router.get('/promo', async ({ view, request }) => {
  return view.render('pages/promo', { current: request.parsedUrl.pathname })
})

router.get('/cart', async ({ view, request }) => {
  return view.render('pages/cart', { current: request.parsedUrl.pathname })
})

router.get('/seller/dashboard', async ({ view }) => {
    
  const dummyProducts = [
      {
          id: 1,
          name: 'Steam Wallet IDR 100k',
          price: 105000,
          stock: 50,
          image_url: 'https://via.placeholder.com/80x60/FF0000/FFFFFF?text=Steam'
      },
      {
          id: 2,
          name: 'Valorant Points 1250',
          price: 120000,
          stock: 30,
          image_url: 'https://via.placeholder.com/80x60/0000FF/FFFFFF?text=Valorant'
      }
  ]

  return view.render('pages/seller_dashboard', {
      products: dummyProducts // Kirim data products ke view
  })
})

// Rute POST: Menangani data dari form 'Add New Product'
router.post('/seller/products', async ({ request, response }) => {
  
  // Mengambil semua data dari form
  const data = request.all()

  console.log('Data produk baru:', data)

  return response.redirect().toRoute('/seller/dashboard')
})

