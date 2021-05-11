//CRUD => create, read, update, delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const{MongoClient, ObjectID} = require('mongodb')


const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'
const port = process.env.PORT || 3000


MongoClient.connect(connectionURL, {useNewUrlParser:true}, (error, client) => {
  if (error) {
    return console.log('conection to database failed')
  }
  const db = client.db(databaseName)
  db.collection('users').insertOne({
    name: 'Osemeke',
    email: 'smeks22@gmail.com',
    country: 'Nigeria',
  }, (error, result) => {
      if (error) {
        console.log('unable to insert user')
      }
      console.log(result.ops)
  })

  //read

  db.collection('users').findOne({name: 'Osemeke', _id: new ObjectID("60969003b2ab273e54cdd7c2") }, (error, user) => {
    if (error) {
      console.log('unable to read data')
    }
    console.log(user)
  })

  //update

  const updatePromise = db.collection('users').updateOne({
    _id: new ObjectID("609683b318247c38748677fc")
  }, {
    $set: {
      name: 'Echenim',
      email: 'echenim.osemeke@gmail.com',
      country: 'Finland Hopefully'
    }
  })
  updatePromise.then((result) => {
    console.log(result)
  }).catch ((error) => {
    console.log(error)
  })

 //delete
 
  db.collection('users').deleteOne({
    _id: new ObjectID("60968126de43c31dc4348028")
  }).then((result) => {
    console.log(result)
  }).catch((error) => {
    console.log(error)
  }) 

})

  app.listen(port, () => {
    console.log('Server is up on port ' + port)
  })
