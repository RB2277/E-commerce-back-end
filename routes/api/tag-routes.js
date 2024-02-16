const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll({
    include: [
     {
       model: Product,
     },
    ]
   },
   ).then((tags) => {
   res.json(tags)
   })
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  Tag.findByPk(req.params.id,{
    include: [
     {
       model: Product,
     },
    ]
   },
   ).then((tags) => {
   res.json(tags)
   })
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  Tag.create(
    req.body,
  ).then((newCategory) => {
    res.json(newCategory)
  })
  .catch((err) => res.json(err))
});

router.put('/:id', (req, res) => {
  Tag.update(
    req.body,
    {where: {
      id: req.params.id
    },
  })
  .then((updatedTag) => {
    res.json(updatedTag)
  })
  .catch((err) => res.json(err))
});

router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
  .then((deletedTag) => {
  res.json(deletedTag)
  })
  .catch((err) => res.json(err))
});

module.exports = router;
