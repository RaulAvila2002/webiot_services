
function hello() {
    setTimeout(() => {
     console.log("no hacemos nada");
         hello();
    }, 1000);
}
hello();