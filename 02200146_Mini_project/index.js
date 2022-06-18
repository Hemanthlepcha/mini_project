const express=require('express')
const user = require('/config')
const app = express()
app.use(express.json())
app.use(cors())

app.post("/create",async(req, res)=>{
     const data = req.body
     await user.add(data)
     res.send({msg:"User added"})
}
)
app.listen(4000,()=>console.log("Up & Running *4000"))