const fetch = require('node-fetch');



function getFromServer(req){
  return  fetch('http://localhost:8080/')
    .then((res) => res.json());
}


function postToServer(req){
    fetch('http://localhost:8080/', {
            method: 'post',
            body:    JSON.stringify(req.body.todoList),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(checkStatus);
}

function checkStatus(res){
    if(res.ok){
        return res.json();
    }
    else{
        console.log("Error fethcing data");
    }
}

module.exports = {
    getFromServer,
    postToServer
};