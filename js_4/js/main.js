let soup = "chicken noodle soup";
let customerIsBanned = true;
let crackers = true;
let reply; 
if(customerIsBanned){
    reply = 'no soup for you';
}else if(soup&&crackers){
    reply = "got it and some crackers"
}else if(soup ){
    reply = "got it "
}
else{
    reply = "nope"
}
console.log('reply')