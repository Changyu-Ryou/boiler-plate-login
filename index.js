const express = require('express')
const app = express()
const port=5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://ycg02116:abcd1234@boilerplate-j0sts.mongodb.net/test?retryWrites=true&w=majority', {
	useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true, useFindAndModify: false

}).then(()=> console.log('mongoDB Connected...'))
.catch(err=>console.log(err))

app.get('/', (req,res) => res.send('hellow world! 안녕하세요'))
app.listen(port, () => console.log('example app listening on port ${port}!'))