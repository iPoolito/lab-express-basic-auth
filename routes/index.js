const router = require('express').Router()

const userController = require('./../controllers/userController')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index')
})
router.get('/signup', userController.signup)
router.post('/signup', userController.signupForm)

router.get('/login', userController.loginUser)
router.post('/login', userController.loginUserForm)

router.get('/profile', userController.createProfile)
module.exports = router
