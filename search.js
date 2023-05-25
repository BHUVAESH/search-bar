let dept=['CSE','AIML','AIDS','IT','CSD']
let cont=document.querySelector('.search-box')
let deptInput=document.getElementById("userInput")
let recommendation=document.getElementsByClassName('.recommendation_box')
deptInput.onkeyup=(e)=>{
    let givenInput=e.target.value
    let emptyArray=[]
    if(givenInput){
        emptyArray=dept.filter((data)=>{
            return data.toLocaleLowerCase().startsWith(givenInput.toLocaleLowerCase());   
        })
        emptyArray=emptyArray.map((data)=>{
            return data='<li>'+ data +'</li>'
        })        
    }
    suggbox(emptyArray,givenInput)
}
let suggbox = (element,userInput)=>{
    let array;
    
    if(element.length!=0){
        array=element       
    }
    else{
        array=element.join(userInput)
        console.log(array);
    }   
    recommendation.innerHTML=array
}