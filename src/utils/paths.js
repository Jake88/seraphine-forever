const PATHS = {
  HOME: '/',
  PRODUCTS: '/products',
  BLOG: '/blog'
}

export const getNavConfig = path => ([
  {
    name: 'Home',
    to: PATHS.HOME,
    selected: path === PATHS.HOME
  },
  {
    name: 'Products',
    to: PATHS.PRODUCTS,
    selected: path.includes(PATHS.PRODUCTS)
  },
  {
    name: 'Blog',
    to: PATHS.BLOG,
    selected: path.includes(PATHS.BLOG)
  }
])

export default PATHS
