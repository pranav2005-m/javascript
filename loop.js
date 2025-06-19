console.log("break");
let a = 100;
while(a>10){
    if(a===50){
        a--;
        continue
    }
    if(a===30){
        break;
    }
    console.log(a);
    a--;
    
}