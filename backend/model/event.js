var eventSchema = new Mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true
    },
    date: {
        type: Date,
        required: true
    },
    type: {
        name: {
            type: String,
            trim: true,
            required: true
        },
        isOnline: {
            type: Boolean,
            required: true
        }
    },
    subject: {
        type: String,
        trim: true,
        required: true
    },
    keyword: {
        type: [String]
    }
});

var Event = Mongoose.model('events', eventSchema);
