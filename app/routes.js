var Product = require("./models/product");
const path = require('path');

module.exports = function(app) {
  app.get("/api/products", function(req, res) {
    Product.find(function(err, products) {
      if (err) res.send(err);
      res.json(products);
    });
  });

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
  })

};

