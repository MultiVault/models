"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var ChainSchema = new mongoose.Schema({
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
exports.default = ChainSchema;
