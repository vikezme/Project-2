const router = require('express').Router();
const {User, Item, Category} = require('../../models')

router.get('/', async (req, res) =>{
    try {
        const userData = await User.findAll({
            attributes: {exclude: ['password']}
        })
        console.log(userData)
        console.info(userData)
        res.status(200).json(userData)
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/:id', async (req, res) =>{
    try {
        const userData = await User.findByPk(req.params.id, {
            attributes: {exclude: ['password']},
            where: {
                id: req.params.id
            },
            include: [{ model: Item,}, {model: Category}],
        })
        res.status(200).json(userData)
    } catch (err) {
        res.status(500).json(err);
    }
})

router.post('/', async (req, res) => {
    try {
      const userData = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        });
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
  
        res.status(200).json(userData);
      });
    } catch (err) {
      console.log("this is the signup route")
      console.log(req.body);
      res.status(400).json(err);
    }
  });

  router.post('/login', async (req, res) => {
    try {
      const userData = await User.findOne({ where: { email: req.body.email } });
  
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect email, please try again' });
        return;
      }
  
      const validPassword = await userData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect password, please try again' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        
        res.json({ user: userData, message: 'You are now logged in!' });
      });
  
    } catch (err) {
      console.log("this is the Login route")
      res.status(400).json(err);
    }
  });

  router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });

module.exports = router;