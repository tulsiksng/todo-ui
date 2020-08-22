var express = require('express');
var router = express.Router();
var server= require('../public/js/server.js')


router.get('/', async function(req,res){
	const tasks = await server.getFromServer(req);
	res.json(tasks);
	
});

router.post('/', async function(req,res){
	tasks=await server.postToServer(req);
	res.send(tasks);
});

// router.get('/:id', function(req,res){
// 	let currTodo=todos.filter(function (todo){
// 		if(todo.id== req.params.id){
// 		return true;
// 		}
// 	});
// 	if(currTodo.length==1)
// 		res.json(currTodo[0]);
	
// });



// router.put('/:id', function(req,res){
// 	console.log(req.params.id);
// 	let currTodo= todos.filter(function(todo){
// 		if(todo.id==req.params.id){
// 			return true;
// 		}
// 	});
// 	if(currTodo.length==1){
// 		console.log("Todofound "+req.params.id);
// 		currTodo[0].tasks[0]= req.body.task1;
// 		currTodo[0].tasks[1]=req.body.task2;
// 		res.send(currTodo);
// 	}
// 	else{
// 		res.send("Unable to update data");
// 	}
// });

// router.delete('/:id', function(req,res){
// 	console.log("Deleeting" +req.params.id);
// 	let index= todos.findIndex(function(todo){
// 		if(todo.id==req.params.id){
// 			return true;
// 		}
// 	});
// 	if(index!=null && index!=-1){
// 		todos.splice(index,1);
// 		res.send(todos);
	
// 	}
// 	else{
// 		res.send("Unable to update data");
// 	}
// });


module.exports = router;