import * as mongoose from 'mongoose'; 
import * as uuid from 'uuid';

const DeviceSchema = new mongoose.Schema({
    _id: String,
    os: {
        type: String,
        enum: ['iOS', 'Android']
    },
    os_version: {
        type: String
    },

    app_version: {
        type: String
    },

    app_build: {
        type: Number
    },

    bundle_version: {
        type: String
    },

    bundle_build: {
        type: Number
    },

    device_id: {
        type: String,
		unique: true
    },

    push_token: {
        type: String
    },

    language: {
        type: String,
        lowercase: true
    },

    country: {
        type: String,
        lowercase: true
    }
}, {
    versionKey: false,
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});


DeviceSchema.pre('save', function(next) {
    if (!this._id) {
        this._id = uuid.v4();
    }
    next();
});

export interface DeviceInterface extends mongoose.Document {
    _id: string
    os: string
    os_version: string
    device_id: string
    push_token: string
    language: string
    country: string
    app_version: string
    app_build: number
    bundle_version: string
    bundle_build: number
}

export default DeviceSchema;
