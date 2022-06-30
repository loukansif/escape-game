import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import routerSalle from './routes/salle.js'
dotenv.config({ path: "./config.env" })

const app = express();
const port = process.env.PORT;
const URI = process.env.ATLAS_URI

app.use('/salles', routerSalle)
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


main().catch(err => console.error(err))
async function main() {
    await mongoose.connect('mongodb+srv://loukansi:Ssalam46@cluster0.2pf9yjw.mongodb.net/escapeGameDB?retryWrites=true&w=majority');
    console.log("connection réussi");

}

app.listen(port, () => {

    console.log(`Server is running on port: ${port}`);

});