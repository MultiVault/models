"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var PriceSchema = new mongoose.Schema({
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
exports.default = PriceSchema;
