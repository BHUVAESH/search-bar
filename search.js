let dept=['CSE','AIML','AIDS','IT','CSD']
let container=document.querySelector('.search-box')
let deptInput=container.querySelector('input')
let recommendation=container.querySelector('.recommendation_box')
let filteredResult=[]
deptInput.onkeyup=(e)=>{
    let givenInput=e.target.value
    if(givenInput){
        filteredResult=dept.filter((data)=>{
            return data.toLocaleLowerCase().startsWith(givenInput.toLocaleLowerCase());   
        })
        filteredResult=filteredResult.map((data)=>{
            return data='<li>'+ data +'</li>'
        })   
        console.log(filteredResult);
    }
    suggbox(givenInput)
}
let suggbox = (input)=>{
    let filteredList=filteredResult.join('')
    if(input!=0){
        recommendation.innerHTML=filteredList
    }
    else{
        recommendation.innerHTML=""
    }
}