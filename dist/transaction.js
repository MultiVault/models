"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var TransactionSchema = new mongoose.Schema({
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
exports.default = TransactionSchema;
