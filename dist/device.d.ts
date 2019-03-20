import * as mongoose from 'mongoose';
declare const DeviceSchema: mongoose.Schema;
export interface DeviceInterface extends mongoose.Document {
    _id: string;
    os: string;
    os_version: string;
    device_id: string;
    push_token: string;
    language: string;
    country: string;
    app_version: string;
    app_build: number;
    bundle_version: string;
    bundle_build: number;
}
export default DeviceSchema;
