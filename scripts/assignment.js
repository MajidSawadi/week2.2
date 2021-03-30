function randomNo(){
 console.log("random Number");

 for(let i=0;i <5; i++){
     console.log(Math.random());
 }

}
  randomNo();

function assign2(n){
    for(let i=1 ;i<n+1;i++){
        let el="";
        for(let b=0; b<i; b++){
            s=s+i+"";
        }
        console.log(s);
    }
}
//arrys
function leepYear(s,end){
    let i ;
    for(i=s ; i<end ;i++){
        if(i%4===0 && i%400!=0 ){
            console.log(i)
            
        }
    }

}
leepYear(1880, 1900);
