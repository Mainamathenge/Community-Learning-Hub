const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');
//const ngrok = require('ngrok');

dotenv.config({ path: './config.env' });

const DB = process.env.DB_LINK;
mongoose.set('strictQuery', false);
mongoose.connect(DB).then(() => console.log('DB connection successful!'));

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on ${port}...`);
});
// ngrok.connect({
//   proto : 'http',
//   addr : process.env.PORT,
// }, (err, url) => {
//   if (err) {
//       console.error('Error while connecting Ngrok',err);
//     }
//     console.log("connected to NGROCK");
//   });
