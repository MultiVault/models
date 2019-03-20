import * as mongoose from 'mongoose';
declare const TokenSchema: mongoose.Schema;
export interface TokenInterface extends mongoose.Document {
    _id: string;
    name: string;
    symbol: string;
    logo_url: string;
    decimals: number;
    chain_id: string;
    type: string;
    address: string;
    is_verified: boolean;
    is_enable: boolean;
    is_on_cmc: boolean;
    is_default: boolean;
}
export default TokenSchema;
