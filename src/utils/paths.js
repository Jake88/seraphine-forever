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
  CUSTOM_DESIGNS: {
    to: '/products/designs',
    relative: 'designs'
  },
  PRODUCT: {
    to: productId => `/product/${productId}`,
    relative: `product/:productId`
  },
  PRODUCT_DETAILS: {
    to: productId => `/product/${productId}/details`,
    relative: '/details'
  },
  COLOUR_PICKER: {
    to: productId => `/product/${productId}/colours`,
    relative: 'colours'
  },
  PERSONALISE: {
    to: productId => `/product/${productId}/customise`,
    relative: 'customise'
  },
  CONFIRM: {
    to: productId => `/product/${productId}/summary`,
    relative: 'summary'
  },
  THANKS: {
    to: productId => `/product/${productId}/thanks`,
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
    selected: path.includes('/product') || path.includes(PATHS.PRODUCTS.relative),
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
  }
])

export default PATHS
