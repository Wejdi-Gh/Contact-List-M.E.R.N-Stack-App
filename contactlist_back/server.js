const express = require( 'express')
const bodyParser = require('body-parser')
const app = express();

const {MongoClient,ObjectID} = require('mongodb')
const assert = require('assert')

app.use(bodyParser.json())

const MongoUrl = 'mongodb://localhost:27017'
const database = 'ContactList'

MongoClient.connect (MongoUrl, { useNewUrlParser: true },(err ,client) => {

    assert.equal(err,null,'database connection failed')

     const db = client.db(database)

app.post('/addcontact', (req,res)=>{

let newcontact= req.body

db.collection('contactlist').insertOne(newcontact,(err,data) =>{

if (err) res.send('cant add contact')
else  res.send('new contact added')

})
})

app.get('/contactlist', (req,res)=>{
    
    db.collection('contactlist').find().toArray((err,data) =>{
    
    if (err) res.send('cant get contactlist')
    else  res.send(data)
    })
})



app.delete('/removecontact/:id', (req,res)=>{
    
    let romovedID = ObjectID(req.params.id)

    db.collection('contactlist').findOneAndDelete({_id :romovedID} ,(err,data) =>{
    
    if (err) res.send('cant delete contact')
    else  res.send('Contact Deleted')
    })
})


app.put("/modifycontact/:id", (req,res) => { 

    let modifiedcontact=req.body
    let modifiedcontactid=ObjectID(req.params.id)

    db.collection('contactlist').update({_id:modifiedcontactid},modifiedcontact,(err,data)=>{
      if (err) res.send('contact cant be modified')
      else  res.send('contact modified')

    })

})

})



app.listen(3700, (err) => {
   if (err) console.log(`connection failed`)
   else console.log(`server is running`)
})