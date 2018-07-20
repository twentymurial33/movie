import mongoose,{Schema} from "mongoose";

var movieSchema=new Schema({
  title:{
    type:String,
    unique:true,
  },
poster:String,
genre:String


});

export default mongoose.model("Movie",movieSchema);