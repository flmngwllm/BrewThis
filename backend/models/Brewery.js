const mongoose = require("../../db/connection");
const Schema = mongoose.Schema;

const Brewery = new Schema({
  name: String,
  brewery_type: String,
  street: String,
  city: String,
  state: String,
  postal_code: String,
  website_url: String,
});

module.exports = mongoose.model("Brewery", Brewery);
