const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();
app.use(cors())
app.use(bodyParser.json())


const users =["korim", "rohim", "mojiz"];

app.get('/', (req, res) => {
    res.send("plzasdasdf iiiiiii Thanks you God. I love you all, please help me GOD. I really need your help");
});

app.get('/fruits/banana', (req, res)=>{
    res.send({fruit:'banana', quantity: 1000, price: 10000});
});

app.get('/users/:id', (req, res) =>{
    const id = req.params.id;
    const name = users[id];
    res.send({id, name});
});

//post

app.post('/addUser', (req, res)=> {
    // console.log('data received', req.body);

    // saved to database
    const user = req.body;
    user.id = 33
    res.send(user);
})


app.listen(3000, ()=> {console.log('Listenting to port 3000');
}); 