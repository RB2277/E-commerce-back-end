const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

//Get all categories
router.get('/', (req, res) => {
  Category.findAll({
    include: [
     {
       model: Product,
     },
    ]
   },
   ).then((categories) => {
   res.json(categories)
   })
});

//Get one category by id
router.get('/:id', (req, res) => {
  Category.findByPk(req.params.id,{
    include: [
     {
       model: Product,
     },
    ]
   },
   ).then((categories) => {
   res.json(categories)
   })
});

router.post('/', (req, res) => {
  Category.create(
    req.body,
  ).then((newCategory) => {
    res.json(newCategory)
  })
  .catch((err) => res.json(err))
});

router.put('/:id', (req, res) => {
  Category.update(
    req.body,
    {where: {
      id: req.params.id
    },
  })
  .then((updatedCategory) => {
    res.json(updatedCategory);
  })
  .catch((err) => res.json(err))
});

router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
  .then((deletedCategory) => {
  res.json(deletedCategory)
  })
  .catch((err) => res.json(err))
});

module.exports = router;
