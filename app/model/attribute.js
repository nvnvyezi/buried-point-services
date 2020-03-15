module.exports = app => {
  const { mongoose } = app
  const { Schema } = mongoose

  const AttributeSchema = new Schema({
    name: String,
    type: String || Boolean || Number,
    describe: String,
    createTime: Date,
    creator: String,
  })

  return mongoose.model('attribute', AttributeSchema)
}