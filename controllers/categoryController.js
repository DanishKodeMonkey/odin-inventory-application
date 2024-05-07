// import model to be used for various operations
const Category = require('../models/category');
const Item = require('../models/item');

// import asyncHandler manage error handling as a wrapper, voiding alot of boiletplate.
const asyncHandler = require('express-async-handler');

// display list of all categories
exports.category_list = asyncHandler(async (req, res, next) => {
    const allCategories = await Category.find().sort({ title: 1 }).exec();

    res.render('category_list', {
        title: 'Categories list',
        category_list: allCategories,
    });
});

// Display detail page for specific category
exports.category_detail = asyncHandler(async (req, res, next) => {
    const [category, allItemsInCategory] = await Promise.all([
        Category.findById(req.params.id).exec(),
        Item.find({ category: req.params.id }, 'name url').exec(),
    ]);

    res.render('category_detail', {
        title: 'Category details',
        category: category,
        category_items: allItemsInCategory,
    });
});

// display category create form on GET
exports.category_create_get = asyncHandler(async (req, res, next) => {
    res.send('NOT IMPLEMENTED: Category create GET');
});

// handle category create on POST
exports.category_create_post = asyncHandler(async (req, res, next) => {
    res.send('NOT IMPLEMENTED: Category create POST');
});

// display category delete form on GET
exports.category_delete_get = asyncHandler(async (req, res, next) => {
    res.send('NOT IMPLEMENTED: Category delete GET');
});

// handle category delete on POST
exports.category_delete_post = asyncHandler(async (req, res, next) => {
    res.send('NOT IMPLEMENTED: Category delete POST');
});

// display category update form on GET
exports.category_update_get = asyncHandler(async (req, res, next) => {
    res.send('NOT IMPLEMENTED: Category update GET');
});

// handle category update on POST
exports.category_update_post = asyncHandler(async (req, res, next) => {
    res.send('NOT IMPLEMENTED: Category update POST');
});
