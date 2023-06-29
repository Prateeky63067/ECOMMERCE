const express=require('express');
const { getAllProduct,createProoduct, updateProduct, deleteProduct, getProductDetails, createProductReview, deleteReview, getProductReviews } = require('../controllers/productControllers');
const { isAuthenticatedUser,authorizeRoles } = require('../middleware/auth');

const router=express.Router();
router.route('/products').get(getAllProduct);

router.route('/products/new').post(isAuthenticatedUser,authorizeRoles("admin"),createProoduct);

router.route('/products/:id').put(isAuthenticatedUser,authorizeRoles("admin"),updateProduct).delete(isAuthenticatedUser,authorizeRoles("admin"),deleteProduct);

router.route('/products/:id').get(getProductDetails);
router.route("/review").put(isAuthenticatedUser, createProductReview);
router.route("/reviews")
  .get(getProductReviews)
  .delete(isAuthenticatedUser, deleteReview);
module.exports=router; 
