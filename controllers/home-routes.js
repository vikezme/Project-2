const router = require('express').Router();
const { Category, User, Item } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
      const existingItems = await Item.findAll({
      limit:4,
      order: [['id','DESC']],
      include: [{model: User, attributes: ['id', 'username','email']}],
    });
    
    const editedItems = existingItems.map((item) => item.get({ plain: true }));
    
    res.render('home', { 
          editedItems, 
          logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/search', async (req, res) => {
  try {
      const existingItems = await Item.findAll({
      order: [['id','DESC']],
    });
    
    const editedItems = existingItems.map((item) => item.get({ plain: true }));
    
    res.render('search', { 
          editedItems, 
          logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/item/:id', async (req, res) => {
  try {
        const id = req.params.id;
        const itemData = await Item.findByPk(id,{
        include:[{model:User, attributes: ['id','username','email']}],
        });

    
        const editedItem = itemData.get({plain:true});

    res.render('item',{
      editedItem,
      logged_in:req.session.logged_in
    });

  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/userProfile', (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/login');
    return;
  }

  res.render('userProfile',{logged_in:req.session.logged_in});
});

router.post('/items/:category', async (req, res) => {
  try {
      const categoryId = req.params.category;
      const existingItems = await Item.findAll({
      where:{
          category_id : categoryId
      },
      order: [['id','DESC']],
    });
    
         res.json(existingItems);
    
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/categories', async (req, res) => {
  try {
      const existingItems = await Category.findAll();
      res.json(existingItems);
    
  } catch (err) {
    res.status(500).json(err);
  }
});


// Login route
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/userProfile');
    return;
  }

  res.render('login');
});

module.exports = router;
