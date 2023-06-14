const mongoose = require('mongoose');
//const ObjectID = mongoose.Schema.Types.ObjectId;

const categoriesSchema = new mongoose.Schema({
  categoryName: {
    type: String,
    enum: ['DataSience', 'WebDevelopment', 'BlockChain', 'MachineLearning'],
    required: true,
  },
});

const category = mongoose.model('Category', categoriesSchema);

module.exports = category;
