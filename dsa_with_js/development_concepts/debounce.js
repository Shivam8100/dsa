function test(){
    console.log("hello there ")
}
function getData(cb,delay){
    let timer
    return function(){
        if(timer){
            clearTimeout(timer)
        }

     timer =setTimeout(()=>{
        cb();

     },delay)
    }
}



const batterFunction=getData(test,1000)
// const batterFunction=getData(test,1000)