module.exports = {
  volume: {
    type: 'log',
    min: 2,
    max: 100000000,
  },
  negativity: {
    type: 'linear',
    min: 0,
    max: 1,
  },
  permanence: {
    type: 'log',
    min: 10,
    max: 1000,
  },
  price: {
    type: 'log',
    min: 3,
    max: 3000,
  },
}
