const Category = require('./Category');
const Item = require('./Item');
const User = require('./User');

// Creating associations betweeen models
User.hasMany(Item, {
  foreignKey: "user_id",
});

Item.belongsTo(User, {
  foreignKey: "user_id",
});

Category.hasMany(Item, {
  foreignKey: "category_id",
});

Item.belongsTo(Category, {
  foreignKey: "category_id",
});

module.exports = { Category, Item, User };