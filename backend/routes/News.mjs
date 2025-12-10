import express from 'express'
import businesses from '../models/business.mjs';
import entertainments from '../models/entertainment.mjs'
import sports from '../models/sport.mjs'
import topheadlines from '../models/topheadline.mjs'

const router = express()

router.get("/topheadlines", async (req, res) => {
    try {
        const news_top_headlines = await topheadlines.find({})
        res.json({ success: true, message: news_top_headlines })
    } catch (error) {
        res.status(500).json({ success: false, message: "Some error occured" })
    }
})
router.get("/sports", async (req, res) => {
    try {
        const news_sports = await sports.find({})
        res.json({ success: true, message: news_sports })
    } catch (error) {
        res.status(500).json({ success: false, message: "Some error occured" })
    }
})
router.get("/entertainment", async (req, res) => {
    try {
        const news_entertainment = await entertainments.find({})
        res.json({ success: true, message: news_entertainment })
    } catch (error) {
        res.status(500).json({ success: false, message: "Some error occured" })
    }
})
router.get("/business", async (req, res) => {
    try {
        const news_business = await businesses.find({})
        res.json({ success: true, message: news_business })
    } catch (error) {
        res.status(500).json({ success: false, message: "Some error occured" })
    }
})

 
export default router