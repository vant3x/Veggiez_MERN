const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const uploader = require('../models/Uploader');
const slugify = require('../plugins/slugify');

// const User = require('./User');
const Visit = require('./Visit');

let placeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    slug:{
        type:String,
        unique: true
    },
    address: String,
    description: String,
    acceptsCreditCard: {
        type: Boolean,
        default: false
    },
    coverImage:String,
    avatarImage: String,
    openHour: Number,
    closeHour: Number,
    _user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        requiered: true
    }

});

placeSchema.methods.updateImage = function(path,imageType){
    // Primero subir la imagen

    // Guardar el lugar
    return uploader(path)
        .then(secure_url => this.saveImageUrl(secure_url,imageType));
        
}

placeSchema.methods.saveImageUrl = function(secureUrl,imageType){
    this[imageType+'Image'] = secureUrl;
    return  this.save();
}

placeSchema.pre('save',function(next){
    if(this.slug) return next();
    generateSlugAndContinue.call(this,0,next);
});

placeSchema.statics.validateSlugCount = function(slug){
   return Place.count({slug: slug}).then(count=>{
        if(count > 0) return false;
        return true;
    })
}

placeSchema.virtual('visits').get(function(){
    return Visit.find({'_place': this._id}).sort('-id');
});

//------ usuarios favoritos ----- --
// placeSchema.virtual('users').get(function(){
//     return FavoritePlace.find({'_place':this._id},{'_user': true})
//             .then(users => {
//                 let usersIds = favs.map(fav => fav._user);
                
//                 return User.find({'_id': {$in: usersIds }})
//             })
// })

//----- usuarios favoritos ----- --


placeSchema.plugin(mongoosePaginate);

function generateSlugAndContinue(count,next){
    this.slug = slugify(this.title);
    if(count != 0)
        return next();
    this.slug = this.slug + "-"+count;

    Place.validateSlugCount(this.slug).then(isValid=>{
        if(!isValid)
            return  generateSlugAndContinue.call(this,count+1,next);

         next();
    })

}

let Place = mongoose.model('Place', placeSchema);

module.exports = Place;