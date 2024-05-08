const request = require('supertest')
const express = require('express')
const app = require('../app')

const categories = [
  {
    categoriaID: 1,
    categoria: 'Tapas y raciones',
  },
  {
    categoriaID: 2,
    categoria: 'Entrantes',
  },
  {
    categoriaID: 3,
    categoria: 'Pizzas',
  },
  {
    categoriaID: 4,
    categoria: 'Platos internacionales',
  },
  {
    categoriaID: 5,
    categoria: 'Bocadillos',
  },
  {
    categoriaID: 6,
    categoria: 'Guarniciones',
  },
  {
    categoriaID: 7,
    categoria: 'Carnes',
  },
  {
    categoriaID: 8,
    categoria: 'Pescados',
  },
  {
    categoriaID: 9,
    categoria: 'Postres',
  },
]

describe('GET /categories', () => {
  it('should respond with status 200 and return categories', async () => {
    const res = await request(app).get('/categories')
    expect(res.status).toBe(200)
    expect(res.body).toEqual(categories)
  })
})

// Similar tests for other endpoints: /restaurants, /dishes, /customers, /orders
