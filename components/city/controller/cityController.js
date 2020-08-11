const db = require("../../../service/db")
const cityModle = require("../model/CityModel")

var lowerLimit=0, upperLimit=10

var CityController = {}

CityController.getCity =(req,res)=>{

 /*   var limit= 10;
    var offset=0;
cityModle.findAndCountAll()
    .then((data)=>{
        let page =req.params.page;
        let pages = Math.ceil(data.count / limit);
        offset = limit * (page-1);
        cityModle.findAll({
            limit: limit,
            offset: offset,
            $sort: {id: 1}
        }).then((cities)=>{
            //res.status(200).json(cities)
            res.render('index', {data: cities})
        })
    }) */
   if(!req.body){
        res.status(501).json("Bad Request")
    }else {
        cityModle.findAll().then((data)=>{
             console.log(data)
             res.header("Access-Control-Allow-Origin", "*");

             return res.json(data)
        })
    }
}

module.exports = CityController