export const PATHS = {
  HOME: '/',
  BLOG: '/blog',
  CART: '/cart',
  CONTACT: '/contact',
  PRODUCTS: '/products',
  CUSTOM_DESIGNS: '/products/custom',
  PRODUCT_DETAILS: '/products/:id/details',
  COLOUR_PICKER: '/products/:id/colour',
  PERSONALISE: '/products/:id/personalise',
  CONFIRM: '/products/:id/confirm',
  THANKS: '/products/:id/thanks',

}

export const getNavConfig = path => ([
  {
    name: 'Home',
    to: PATHS.HOME,
    selected: path === PATHS.HOME
  },
  {
    name: 'Blog',
    to: PATHS.BLOG,
    selected: path.includes(PATHS.BLOG)
  },
  {
    name: 'Cart',
    to: PATHS.CART,
    selected: path.includes(PATHS.CART),
    hidden: true
  },
  {
    name: 'Contact',
    to: PATHS.CONTACT,
    selected: path.includes(PATHS.CONTACT)
  },
  {
    name: 'Products',
    to: PATHS.PRODUCTS,
    selected: path.includes(PATHS.PRODUCTS)
  },
  {
    name: 'Custom Designs',
    to: PATHS.CUSTOM_DESIGNS,
    selected: path.includes(PATHS.CUSTOM_DESIGNS),
    hidden: true
  },
  {
    name: 'Product Details',
    to: PATHS.PRODUCT_DETAILS,
    selected: path.includes(PATHS.PRODUCT_DETAILS),
    hidden: true
  },
  {
    name: 'Colour Picker',
    to: PATHS.COLOUR_PICKER,
    selected: path.includes(PATHS.COLOUR_PICKER),
    hidden: true
  },
  {
    name: 'Personalise',
    to: PATHS.PERSONALISE,
    selected: path.includes(PATHS.PERSONALISE),
    hidden: true
  },
  {
    name: 'Confirm',
    to: PATHS.CONFIRM,
    selected: path.includes(PATHS.CONFIRM),
    hidden: true
  },
  {
    name: 'Thank you',
    to: PATHS.THANKS,
    selected: path.includes(PATHS.THANKS),
    hidden: true
  }
])

export default PATHS
