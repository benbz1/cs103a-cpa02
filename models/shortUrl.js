const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const shortId = require('shortid')

const shortUrlSchema = new mongoose.Schema({
    full: {
        type: String,
        required: true,
    },
    short: {
        type: String,
        required: true,
        default: shortId.generate
    },
    clicks: {
        type:Number,
        required: true,
        default:0
    },
    userId:ObjectId
})

module.exports = mongoose.model('ShortUrl', shortUrlSchema)