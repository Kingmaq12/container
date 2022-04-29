const path = require('path');
const dotenv = require('dotenv');
const envConfig = dotenv.config({ path: path.resolve(__dirname, process.env.NODE_ENV + '.env') });

module.exports = {
    envConfig: envConfig,
};
