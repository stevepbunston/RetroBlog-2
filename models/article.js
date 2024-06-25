const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Review = require('./review');

const ImageSchema = new Schema({
    url: String,
    filename: String
});

const MovieSchema = new Schema({
    title: String,
    image: ImageSchema // Include image schema
});

const ArticleSchema = new Schema({
    title: String,
    game: String,
    release: String,
    description: String,
    blog: String,
    console: String,
    movies: [MovieSchema], // Array of movies with title and image
    images: [ImageSchema], // Array of images with URL and filename
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: "Review"
    }]
});

ArticleSchema.post('findOneAndDelete', async function (doc) {
    if (doc) {
        await Review.deleteMany({
            _id: {
                $in: doc.reviews
            }
        });
    }
});

module.exports = mongoose.model('Article', ArticleSchema);
