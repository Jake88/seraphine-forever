export const PATHS = {
  HOME: {
    to: '/',
    relative: '/'
  },
  BLOG: {
    to: '/blog',
    relative: 'blog'
  },
  CART: {
    to: '/cart',
    relative: 'cart'
  },
  CONTACT: {
    to: '/contact',
    relative: 'contact'
  },
  PRODUCTS: {
    to: '/products',
    relative: 'products'
  },
  PRODUCT: {
    to: '/product',
    relative: 'product'
  },
  CUSTOM_DESIGNS: {
    to: '/product/designs',
    relative: 'designs'
  },
  PRODUCT_DETAILS: {
    to: '/product/details',
    relative: 'details'
  },
  COLOUR_PICKER: {
    to: '/product/colours',
    relative: 'colours'
  },
  PERSONALISE: {
    to: '/product/customise',
    relative: 'customise'
  },
  CONFIRM: {
    to: '/product/summary',
    relative: 'summary'
  },
  THANKS: {
    to: '/product/thanks',
    relative: 'thanks'
  }
}

export const getNavConfig = path => ([
  {
    name: 'Home',
    to: PATHS.HOME.to,
    selected: path === PATHS.HOME.relative
  },
  {
    name: 'Products',
    to: PATHS.PRODUCTS.to,
    selected: path.includes(PATHS.PRODUCT.relative)
  },
  {
    name: 'Blog',
    to: PATHS.BLOG.to,
    selected: path.includes(PATHS.BLOG.relative)
  },
  {
    name: 'Contact',
    to: PATHS.CONTACT.to,
    selected: path.includes(PATHS.CONTACT.relative)
  },
  {
    name: 'Cart',
    to: PATHS.CART.to,
    selected: path.includes(PATHS.CART.relative),
    hidden: true
  },
  {
    name: 'Product',
    to: PATHS.PRODUCT.to,
    selected: path.includes(PATHS.PRODUCT.relative),
    hidden: true
  },
  {
    name: 'Custom Designs',
    to: PATHS.CUSTOM_DESIGNS.to,
    selected: path.includes(PATHS.PRODUCT.relative),
    hidden: true
  },
  {
    name: 'Product Details',
    to: PATHS.PRODUCT_DETAILS.to,
    selected: path.includes(PATHS.PRODUCT.relative),
    hidden: true
  },
  {
    name: 'Colour Picker',
    to: PATHS.COLOUR_PICKER.to,
    selected: path.includes(PATHS.PRODUCT.relative),
    hidden: true
  },
  {
    name: 'Personalise',
    to: PATHS.PERSONALISE.to,
    selected: path.includes(PATHS.PRODUCT.relative),
    hidden: true
  },
  {
    name: 'Confirm',
    to: PATHS.CONFIRM.to,
    selected: path.includes(PATHS.PRODUCT.relative),
    hidden: true
  },
  {
    name: 'Thank you',
    to: PATHS.THANKS.to,
    selected: path.includes(PATHS.PRODUCT.relative),
    hidden: true
  }
])

export default PATHS
