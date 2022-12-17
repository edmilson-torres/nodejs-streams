import { MongoClient } from 'mongodb';
import env from '../config/env';

class MongoConnection {
    public async connect(): Promise<void> {
        try {
            await MongoClient.connect(`${env.mongoUrl}`, {});
            console.log(
                `[\x1b[34mSERVER\x1b[37m] Database connected! 💾 \x1b[37m`
            );
        } catch (err) {
            console.error((err as Error).message);
            process.exit(1);
        }
    }
}

export default MongoConnection;
