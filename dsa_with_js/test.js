function foo(){
    throw new Error("opps!")
}
function bar(){
    foo()
}
function baz(){
    bar()
}
baz()