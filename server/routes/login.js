const express = require('express'),
  app = express(),
  router = express.Router(),
  knex = require('../db/knex')

router.get('/', (req, res) => {
  res.send('login page')
});


module.exports = router;
