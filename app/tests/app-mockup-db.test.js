const request = require('supertest')
const express = require('express')

const app = require('../app')

const categories = [
  {
    categoriaID: 1,
    categoria: 'Tapas y raciones',
  },
]

// Mock de la función de consulta de la base de datos
jest.mock('mysql2', () => {
  return {
    createConnection: jest.fn(() => {
      return {
        connect: jest.fn(),
        query: jest.fn((sql, callback) => {
          // Simula el comportamiento de la consulta
          if (sql === 'SELECT * FROM categorias') {
            callback(null, categories)
          }
        }),
      }
    }),
  }
})

describe('GET /categories', () => {
  it('should respond with status 200 and return categories', async () => {
    const res = await request(app).get('/categories')
    expect(res.status).toBe(200)
    expect(res.body).toEqual(categories)
  })
})

// Agrega tests similares para otros endpoints
