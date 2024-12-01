const express = require('express');
const server = express();
const PORT = 3000;

// function to display the name
function displayName(name){
    return `Hello ${name}`;
}

// server routes to display the name in the browser
server.get('/',(req,res)=>{
    res.send(displayName('Mohamed Ajardeen'));
});

// server listens to the port
server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

