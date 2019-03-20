import * as mongoose from 'mongoose';
declare const ExchangerSchema: mongoose.Schema;
export interface EchangerInterface extends mongoose.Document {
    name: string;
    slug: string;
    logo: string;
}
export default ExchangerSchema;
