import * as mongoose from 'mongoose';

const ChainSchema = new mongoose.Schema({
    _id: String,
    name: {
        type: String
    },

    type: {
        type: String,
        index: true
    },

    is_mainnet: {
        type: Boolean,
        index: true
    }
}, {
    versionKey: false,
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

export interface ChainInterface extends mongoose.Document {
    _id: string
    name: string;
    type: string;
    is_mainnet: boolean;
}

export default ChainSchema;