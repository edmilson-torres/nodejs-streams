import 'dotenv/config';

export default {
    port: Number(process.env.PORT || 3000),
    mongoUrl: process.env.MONGO_URL
};
