"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var uuid = require("uuid");
var DeviceSchema = new mongoose.Schema({
    _id: String,
    os: {
        type: String,
        enum: ['iOS', 'Android']
    },
    os_version: {
        type: String
    },
    app_version: {
        type: String
    },
    app_build: {
        type: Number
    },
    bundle_version: {
        type: String
    },
    bundle_build: {
        type: Number
    },
    device_id: {
        type: String,
        unique: true
    },
    push_token: {
        type: String
    },
    language: {
        type: String,
        lowercase: true
    },
    country: {
        type: String,
        lowercase: true
    }
}, {
    versionKey: false,
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});
DeviceSchema.pre('save', function (next) {
    if (!this._id) {
        this._id = uuid.v4();
    }
    next();
});
exports.default = DeviceSchema;
