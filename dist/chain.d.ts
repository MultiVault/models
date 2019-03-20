import * as mongoose from 'mongoose';
declare const ChainSchema: mongoose.Schema;
export interface ChainInterface extends mongoose.Document {
    _id: string;
    name: string;
    type: string;
    is_mainnet: boolean;
}
export default ChainSchema;
