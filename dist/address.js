"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var uuid = require("uuid");
var AddressSchema = new mongoose.Schema({
    _id: {
        type: String
    },
    address: {
        type: String,
        index: true
    },
    chain_id: {
        type: String,
        index: true
    },
    devices: {
        type: [String],
        default: []
    },
    is_synced: {
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
AddressSchema.pre('save', function (next) {
    if (!this._id) {
        this._id = uuid.v4();
    }
    next();
});
AddressSchema.index({ address: 1, chain_id: 1 }, { unique: true, name: 'AddressIndex' });
exports.default = AddressSchema;
