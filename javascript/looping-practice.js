let todo = [
    "clean room",
    "brush teeth",
    "exercise",
    "study js",
    "eat healthy"
];

for (let i=0; i < todo.length; i++){
    todo[i] += "!";
}

console.log(todo);

todo.forEach((todo, item) => {
    // item = item[-1];
    rmchr = todo.search("!");
    todoNew = todo.slice(0,rmchr);
    todo.replace(todoNew, todo);
    console.log(rmchr, todoNew);

});
console.log(todo);