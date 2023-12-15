require('dotenv').config()

const {default: OpenAI}=require('openai')
const OPENAI_API_KEY = process.env.OPENAI_API_KEY
const openai = new OpenAI(OPENAI_API_KEY)
const express=require('express')
const app=express()
const cors = require('cors');

app.use(express.json())
app.use(cors());

app.post('/pergunte-ao-gpt' , async (req, res) =>{
    const {prompt} = req.body
    const model='gpt-3.5-turbo'
    const role='user'
    const max_tokens=50
    const completion = await openai.chat.completions.create({
        messages:[{role: role, content: prompt}],
        model: model,
        max_tokens: max_tokens
    })

    
    console.log(prompt)

    res.json({completion: completion.choices[0].message.content})
})



app.listen(4000, () => console.log('chat gpt 4000'))