import * as mongoose from 'mongoose';
declare const TransactionSchema: mongoose.Schema;
export interface TransactionInterface extends mongoose.Document {
    txid: string;
    block: number;
    from: string;
    to: string;
    chain_id: string;
    amount: string;
    nonce: number;
    time: string;
    token_id: string;
}
export default TransactionSchema;
