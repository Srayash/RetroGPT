const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const OpenAI = require("openai");
const z = require("zod");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const payloadSchema = z.object({
    question: z.string()
})

// POST endpoint to handle chat
app.post("/chat", async (req, res) => {

    const {success} = payloadSchema.safeParse(req.body)
    if(!success){
        return res.status(411).json({
            message: "Invalid Inputs"
        })
    }

    const question = req.body.question;
  
    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.GROQ_API_KEY}`
        },
        body: JSON.stringify({
          "model": "mixtral-8x7b-32768",
          "messages": [
            {
              "role": "system",
              "content": "You are retroGPT, an alien that has infested the user's computer. Speak in quirky, cryptic, and playful language, but try to give extremely short answers. Stay mysterious but helpful, and truthful!."
            },
            {
              "role": 'user',
              "content": question
            }
          ]
        })
    });
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong with GROQ'})
    }

});


const PORT = process.env.PORT || 2738;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});