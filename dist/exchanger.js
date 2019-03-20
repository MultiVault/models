"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var ExchangerSchema = new mongoose.Schema({
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
exports.default = ExchangerSchema;
