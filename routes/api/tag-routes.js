const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

//Get all tags 
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

});

//Get one tag by id
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
});

//Create a new tag
router.post('/', (req, res) => {
  Tag.create(
    req.body,
  ).then((newCategory) => {
    res.json(newCategory)
  })
  .catch((err) => res.json(err))
});

//Update an existing tag
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

//Delete a tag
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
