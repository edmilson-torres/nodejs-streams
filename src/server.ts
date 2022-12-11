import app from './app';
import env from './config/env';

app.listen(env.port, () => {
    console.log(
        `[\x1b[34mSERVER\x1b[37m] Server running at \x1b[36mhttp://localhost:${env.port} 🤖  \x1b`
    );
});
