import * as mongoose from 'mongoose';

const ExchangerSchema = new mongoose.Schema({
    name: {
        type: String
    },
    slug: {
        type: String,
        unique: true
    },

    logo: {
        type: String
    }
}, {
    versionKey: false,
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

export interface EchangerInterface extends mongoose.Document {
    name: string
    slug: string
    logo: string
}

export default ExchangerSchema;