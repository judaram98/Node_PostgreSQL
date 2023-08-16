const { User, UserSchema } = require('./user.model');
const { Customer, CustomerSchema } = require('./customer.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  // Product.init(productsSchema, Product.config(sequelize));
  // Categorie.init(categorieSchema, Categorie.config(sequelize));

  //Relaciones
  Customer.associate(sequelize.models);
}

module.exports = setupModels;
