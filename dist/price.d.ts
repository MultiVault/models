import * as mongoose from 'mongoose';
declare const PriceSchema: mongoose.Schema;
export interface PriceInterface extends mongoose.Document {
    token: string;
    currency: string;
    price: number;
    change: number;
}
export default PriceSchema;
