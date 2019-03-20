"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var uuid = require("uuid");
var TokenSchema = new mongoose.Schema({
    _id: {
        type: String
    },
    name: {
        type: String,
        index: true
    },
    symbol: {
        type: String,
        index: true
    },
    logo_url: {
        type: String,
        default: ''
    },
    decimals: {
        type: Number,
        default: 0
    },
    type: {
        type: String,
        enum: ['ERC20', 'NATIVE_COIN', 'ERC223', 'NEP5']
    },
    address: {
        type: String,
        index: true
    },
    chain_id: {
        type: String,
        index: true
    },
    is_verified: {
        type: Boolean,
        default: false
    },
    is_enable: {
        type: Boolean,
        default: true
    },
    is_on_cmc: {
        type: Boolean,
        default: false
    },
    is_default: {
        type: Boolean,
        default: false
    }
}, {
    versionKey: false,
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});
TokenSchema.pre('save', function (next) {
    if (!this._id) {
        this._id = uuid.v4();
    }
    next();
});
TokenSchema.index({ address: 1, symbol: 1, chain_id: 1 }, { unique: true, name: 'TokenUniqueIndex' });
exports.default = TokenSchema;
