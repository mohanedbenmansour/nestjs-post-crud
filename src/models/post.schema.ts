import * as mongoose from 'mongoose';


export const PostSchema = new mongoose.Schema({
  title:String,
  uploadTime: String,
  content: String,
  image: String,

});