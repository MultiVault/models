import * as mongoose from 'mongoose';
declare const AddressSchema: mongoose.Schema;
export interface AddressInterface extends mongoose.Document {
    address: string;
    chain_id: string;
    devices: [string];
    is_synced: boolean;
}
export default AddressSchema;
