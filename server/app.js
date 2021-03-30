import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';

const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

// const server = app.listen(7000, () => {
//   console.log(`Running on port ${server.address().port}`)
// })

// app.get('/', (req, res) => {
//   res.send('hello world!');
// })

// https://www.mongodb.com/cloud/atlas


//
//
const CONNECTION_URL = 'mongodb+srv://codelazyguy-oneforall:codelazyguy-oneforall@codelazyguy-oneforall.dootw.mongodb.net/codelazyguy-oneforall?retryWrites=true&w=majority'
const PORT = process.env.PORT || 6000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);