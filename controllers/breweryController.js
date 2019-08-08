const Brewery = require('../models/Brewery')

const breweryController = {
    index: (req, res) =>{
        Brewery.find().then((breweries) =>{
            res.send(breweries)
        })
    },

    create: (req, res) =>{
        Brewery.create(req.body)
        .then((brewery)=>{
            res.send(brewery)
        })
    },

    show: (req, res) => {
        Brewery.findById(req.params.BreweryId)
        .then((brewery) =>{
            res.send(brewery)
        })
    },

    update: (req, res) => {
        Brewery.findByIdAndUpdate(req.params.BreweryId)
        .then((updatedBrewery)=>{
            updatedBrewery.save()
            res.send(updatedBrewery)
        })
    },

    delete: (req, res) => {
        Brewery.findByIdAndDelete(req.params.BreweryId)
        .then(()=>{
            res.send(200)
        })
    }
}


module.exports = breweryController