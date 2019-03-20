import * as mongoose from 'mongoose';

const PriceSchema = new mongoose.Schema({
    token: {
        type: String
    },

    currency: {
        type: String
    },
    price: {
        type: Number
    },
	change: {
		type: Number
	}
    
}, {
    versionKey: false,
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

PriceSchema.index({ token: 1, currency: 1 }, { unique: true, name: 'PriceIndex' });

export interface PriceInterface extends mongoose.Document {
    token: string;
    currency: string;
    price: number;
	change: number;
}

export default PriceSchema;
