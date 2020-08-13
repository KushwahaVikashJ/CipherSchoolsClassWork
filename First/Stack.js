class StackStructure {
    constructor(){
        this.items= [];
    }

    push(value){
        return this.items.push(value)
    }

    pop(){
        if(this.items.length==0){
            return;
        }
        else{
          return this.items.pop()
        }        
    }
}

var stack = new StackStructure();

console.log(stack);
console.log(stack.push(20));
console.log(stack.push(10));
console.log(stack.push(30));
console.log(stack.pop());