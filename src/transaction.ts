import * as mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema({
    txid: {
        type: String
    },

    block: {
        type: Number
    },

    from: {
        type: String,
        index: true
    },

    to: {
        type: String,
        index: true
    },

    chain_id: {
        type: String,
        index: true
    },

    amount: {
        type: String
    },

    nonce: {
        type: Number,
        default: 0
    },

    time: {
        type: String
    },

    token_id: {
        type: String,
        index: true
    }
}, {
    versionKey: false,
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

TransactionSchema.index({ txid: 1, chain_id: 1, nonce: 1 }, { unique: true, name: 'TransactionUniqueIndex' });

export interface TransactionInterface extends mongoose.Document {
    txid: string
    block: number
    from: string
    to: string
    chain_id: string
    amount: string
    nonce: number
    time: string
    token_id: string
}

export default TransactionSchema;