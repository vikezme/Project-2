const router = require('express').Router();
const items = require('../../models/item');


router.get('/:id', async (req, res) => {
  try {
    const itemData = await User.findByPk(req.params.id);
    if (!userData) {
      res.status(404).json({ message: 'item is not available with this id!' });
      return;
    }
    res.status(200).json(itemData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.put('/:id', async (req, res) => {
  try {
    const itemData = await item.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!itemData[0]) {
      res.status(404).json({ message: 'item is not available with this id!' });
      return;
    }
    res.status(200).json(itemData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.delete('/:id', async (req, res) => {
  try {
    const itemData = await item.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!itemData) {
      res.status(404).json({ message: 'item is not available with this id!' });
      return;
    }
    res.status(200).json(itemData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
