var express = require('express');
var router = express.Router();

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const allUsers = await prisma.users.findMany();

  return res.render('users', { title: 'Users', results: allUsers });
});

module.exports = router;
