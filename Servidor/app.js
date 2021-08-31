const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const cors =  require("cors")
const Movies=  require('./Movies.json')


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


const whiteList = ['http://localhost:3000']
const corsOptions ={
    origin : (origin , callback) => {
        if(whiteList.indexOf(origin) !== -1 ){
            callback(null, true)
        }else{
            callback(new Error("Not allowed by CORS"))
        }
    }
}


const PORT = 3001
app.listen(PORT , ()=>{
    console.log(`Servidor corriendo en puerto ${PORT}`)
})


app.post('/api/Movies', cors(corsOptions) , (req, res)=>{
    const {akelab} = req.body
    if(akelab === "123456789"){
        res.json(Movies)
    }
})