export const VINYL_TYPES = {
  FILM: Symbol('basic'),
  STRETCH: Symbol('stretch'),
  METALLIC: Symbol('metallic'),
  GLITTER: Symbol('glitter')
}

export default [
  {
    types: [VINYL_TYPES.BASIC],
    name: 'Red',
    cost: 1,
    hex: '#ff0000',
    stock: true
  },
  {
    types: [VINYL_TYPES.METALLIC, VINYL_TYPES.STRETCH],
    name: 'Metallic Blue',
    cost: 1,
    hex: '#123456',
    stock: true
  },
  {
    types: [VINYL_TYPES.GLITTER],
    name: 'Glitter Gold',
    cost: 2,
    hex: '#FFD700',
    stock: true
  },
  {
    types: [VINYL_TYPES.GLITTER],
    name: 'Glitter Silver',
    cost: 2,
    hex: '#C0C0C0',
    stock: true
  },
  {
    types: [VINYL_TYPES.GLITTER],
    name: 'Glitter Blue',
    cost: 2,
    hex: 'blue',
    stock: true
  },
  {
    types: [VINYL_TYPES.GLITTER],
    name: 'Glitter Pink',
    cost: 2,
    hex: 'pink',
    stock: true
  }
]
