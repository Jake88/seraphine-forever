export const VINYL_TYPES = {
  FILM: Symbol('basic'),
  STRETCH: Symbol('stretch'),
  METALLIC: Symbol('metallic'),
  GLITTER: Symbol('glitter')
}

export const NAMES = {
  RED: 'Red',
  METALLIC_BLUE: 'Metallic Blue',
  GLITTER_GOLD: 'Glitter Gold',
  GLITTER_SILVER: 'Glitter Silver',
  GLITTER_BLUE: 'Glitter Blue',
  GLITTER_PINK: 'Glitter Pink'
}

export default [
  {
    types: [VINYL_TYPES.BASIC],
    name: NAMES.RED,
    cost: 0,
    hex: '#ff0000',
    stock: true
  },
  {
    types: [VINYL_TYPES.METALLIC, VINYL_TYPES.STRETCH],
    name: NAMES.METALLIC_BLUE,
    cost: 0,
    hex: '#123456',
    stock: true
  },
  {
    types: [VINYL_TYPES.GLITTER],
    name: NAMES.GLITTER_GOLD,
    cost: 2,
    hex: '#FFD700',
    stock: true
  },
  {
    types: [VINYL_TYPES.GLITTER],
    name: NAMES.GLITTER_SILVER,
    cost: 2,
    hex: '#C0C0C0',
    stock: true
  },
  {
    types: [VINYL_TYPES.GLITTER],
    name: NAMES.GLITTER_BLUE,
    cost: 2,
    hex: 'blue',
    stock: true
  },
  {
    types: [VINYL_TYPES.GLITTER],
    name: NAMES.GLITTER_PINK,
    cost: 2,
    hex: 'pink',
    stock: true
  }
]
