const express = require('express');
const listingRoutes = express.Router();
const Listings = require('../models/models');

listingRoutes.get('/', (req, res) => {
    Listings.find({}, (err, listingz) => {
        if(err) return res.status(500).send(err);
        return res.send(listingz);
    })
});

listingRoutes.post('/', (req, res) => {
    const newListing = new Listings(req.body);
    newListing.save((err) => {
        if (err) return res.status(500).send(err);
        return res.send(newListing);
    })
});

listingRoutes.get('/:id', (req, res) => {
    Listings.findById(req.params.id, (err, listing) => {
        if (err) return res.status(500).send(err);
        return res.send(listing);
    })
});

listingRoutes.put('/:id', (req, res) => {
    Listings.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedListing) => {
        if (err) return res.status(500).send(err);
        return res.send(updatedListing);
    })
});

listingRoutes.delete('/:id', (req, res) => {
    Listings.findByIdAndRemove(req.params.id, (err, deletedListing) =>{
        if (err) return res.status(500).send(err);
        return res.send(deletedListing);
    })
});

module.exports = listingRoutes;