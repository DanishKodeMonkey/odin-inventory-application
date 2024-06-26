// import the express toolset
const express = require('express');
// set express.Router() as router for easy reference
const router = express.Router();

// require controller modules.
const category_controller = require('../controllers/categoryController');
const item_controller = require('../controllers/itemController');

/// ITEM ROUTES ///

// GET catalog home page
router.get('/', item_controller.index);

// GET request for creating a new item
router.get('/items/create', item_controller.item_create_get);

// POST request for creating a item
router.post('/items/create', item_controller.item_create_post);

// NOTE --- references with dynamic URLs (e.g :id) MUST come after any static URLs to avoid match
// conflicts! That means anything that interacts with a specific id item for instance.

// GET request to delete a item
router.get('/items/:id/delete', item_controller.item_delete_get);

// POST request to delete an item
router.post('/items/:id/delete', item_controller.item_delete_post);

// GET request to update an item
router.get('/items/:id/update', item_controller.item_update_get);

// POST request to update an item
router.post('/items/:id/update', item_controller.item_update_post);

// GET request for ONE item
router.get('/items/:id', item_controller.item_detail);

// GET request to list ALL items
router.get('/items', item_controller.item_list);

/// CATEGORY ROUTES ///
// GET catalog home page
router.get('/', item_controller.index);

// GET request for creating a new item
router.get('/categories/create', category_controller.category_create_get);

// POST request for creating a category
router.post('/categories/create', category_controller.category_create_post);

// NOTE --- references with dynamic URLs (e.g :id) MUST come after any static URLs to avoid match
// conflicts! That means anything that interacts with a specific id category for instance.

// GET request to delete a category
router.get('/categories/:id/delete', category_controller.category_delete_get);

// POST request to delete an category
router.post('/categories/:id/delete', category_controller.category_delete_post);

// GET request to update an category
router.get('/categories/:id/update', category_controller.category_update_get);

// POST request to update an category
router.post('/categories/:id/update', category_controller.category_update_post);

// GET request for ONE category
router.get('/categories/:id', category_controller.category_detail);

// GET request to list ALL categorys
router.get('/categories', category_controller.category_list);

module.exports = router;
