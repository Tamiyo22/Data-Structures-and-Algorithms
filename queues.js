//queues
//fifo first in first out

function createQueue(){
 const queue =[];
	return{
	 
		//add to the front
	 enqueue(item){
		queue.unshift(item)
	},

	//remove or dequeue
	dequeue(){
		return queue.pop()
	},

	//peek what is next to be removed
	peek(){
		return queue[queue.length-1]
	},

	//length getter function
  get Length(){
		return queue.length
	},

	//isEmpty
	isEmpty(){
		return queue.length === 0;
	},

	}

	
}

const q = createQueue()

q.enqueue('Study in the morning')
q.enqueue('Study in the evening')
q.enqueue('Study at supper time')


console.log(q.isEmpty())

// q.dequeue()
console.log(q.peek())







