import mongoose from 'mongoose'

let uri_link = process.env.URI_LINK

mongoose.connect(uri_link)
    .then(() => console.log('database connected'))
    .catch(err => console.log(err))