const express = require('express'),
  app = express(),
  router = express.Router(),
  knex = require('../db/knex')

router.get('/', (req, res) => {
  knex.select().from('api_list').orderBy('id').then((data) => {
    res.send(data)
  })
});

router.post('/', (req, res) => {
  knex.insert(req.body).returning('*').into('api_list').then((data) => {
    res.send(data)
  })
});

router.patch('/:id', (req, res) => {
  knex('api_list').where({
    id: req.params.id
  }).update({
    name: req.body.name || null,
    description: req.body.description || null,
    link: req.body.link || null
  }).returning('*').then((data) => {
    res.send(data)
  })
})

router.delete('/:id', (req, res) => {
  knex('api_list').where({
    id: req.params.id
  }).del().then(() => {
    res.send('deleted')
  })
})

router.get('/:id', (req, res) => {
  knex('api_list').where({
    id: req.params.id
  }).select().then((data) => {
    res.send(data);
  })
})

module.exports = router
