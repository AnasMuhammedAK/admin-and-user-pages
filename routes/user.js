var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  
  let user=req.session.user

  let product=[
    {
      name:"HP Pavilion Laptop 15-eg2039TU",
      description:"12th Generation Intel® Core™ i7 processor Windows 11 Home 1 TB PCIe® NVMe™ M.2 SSD 39.62 cm (15.6) Intel Iris Xᵉ",
      price:"₹89,999",
      img:"https://in-media.apjonlinecdn.com/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/c/0/c06723364_1_7.png",
      no:1
      
    },
    {
      name:"HP Pavilion Laptop 15-eg2039TU",
      description:"12th Generation Intel® Core™ i7 processor Windows 11 Home 1 TB PCIe® NVMe™ M.2 SSD 39.62 cm (15.6) Intel Iris Xᵉ",
      price:"₹89,999",
      img:"https://in-media.apjonlinecdn.com/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/c/0/c06723364_1_7.png",
      no:2
    
    },
    {
      name:"HP Pavilion Laptop 15-eg2039TU",
      description:"12th Generation Intel® Core™ i7 processor Windows 11 Home 1 TB PCIe® NVMe™ M.2 SSD 39.62 cm (15.6) Intel Iris Xᵉ",
      price:"₹89,999",
      img:"https://in-media.apjonlinecdn.com/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/c/0/c06723364_1_7.png",
      no:3
    
    },
    {
      name:"HP Pavilion Laptop 15-eg2039TU",
      description:"12th Generation Intel® Core™ i7 processor Windows 11 Home 1 TB PCIe® NVMe™ M.2 SSD 39.62 cm (15.6) Intel Iris Xᵉ",
      price:"₹89,999",
      img:"https://in-media.apjonlinecdn.com/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/c/0/c06723364_1_7.png",
      no:4
    
    },
    {
      name:"HP Pavilion Gaming Laptop 15-dk2096TX",
      description:"11th Generation Intel® Core™ i7 processor Windows 11 Home 512 GB PCIe® NVMe™ M.2 SSD 39.62 cm (15.6) Nvidia Geforce RTX 3050",
      price:"₹94,999",
      img:"https://in-media.apjonlinecdn.com/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/c/0/c06404594_1_1_3_2.png",
      no:5
    
    },
    {
      name:"HP Pavilion Gaming Laptop 15-dk2096TX",
      description:"11th Generation Intel® Core™ i7 processor Windows 11 Home 512 GB PCIe® NVMe™ M.2 SSD 39.62 cm (15.6) Nvidia Geforce RTX 3050",
      price:"₹94,999",
      img:"https://in-media.apjonlinecdn.com/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/c/0/c06404594_1_1_3_2.png",
      no:6
    
    },
    {
      name:"HP Pavilion Gaming Laptop 15-dk2096TX",
      description:"11th Generation Intel® Core™ i7 processor Windows 11 Home 512 GB PCIe® NVMe™ M.2 SSD 39.62 cm (15.6) Nvidia Geforce RTX 3050",
      price:"₹94,999",
      img:"https://in-media.apjonlinecdn.com/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/c/0/c06404594_1_1_3_2.png",
      no:7
    
    },
    {
      name:"HP Pavilion Gaming Laptop 15-dk2096TX",
      description:"11th Generation Intel® Core™ i7 processor Windows 11 Home 512 GB PCIe® NVMe™ M.2 SSD 39.62 cm (15.6) Nvidia Geforce RTX 3050",
      price:"₹94,999",
      img:"https://in-media.apjonlinecdn.com/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/c/0/c06404594_1_1_3_2.png",
      no:8
    
    },
  ]

  res.render('index', { product,user});
});

module.exports = router;
