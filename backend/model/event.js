var eventSchema= new mongoose.Schema({
  name: {type: String, trim: true, required: true},
  description: {type:String, trim:true},
  date: {type: Date, required:true},
  isOnline: {type: Boolean, required: true },
  type: {type: String, trim:true, required: true},
  subject:{type:String, trim:true, required:true},
  keyword: {type:[String]}
});

var event = mongoose.model('Events', eventSchema);
