import express from 'express'
import connectToMongo from './connectDB.js'
import dotenv from 'dotenv'
import News from './routes/News.mjs'
import cors from 'cors'

dotenv.config()
const Mongo_DB_URI = process.env.NEWS_WALLAH_MONGO_DB_URI;

connectToMongo(Mongo_DB_URI)

const app = express()
const port = 5000
app.use(cors(
	{
		origin: ["https://newswallah-aman.vercel.app"],
		methods: ["POST","GET"],
		credentials: true
	}
));
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("This is News Wallah Backend")
});
app.use("/news", News)

app.listen(port,()=>{
    console.log(`notebook backend listening on port ${port}`);
})
