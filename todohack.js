showtask();
let input1 = document.getElementById("input1");
let addbtn = document.getElementById("addbtn");


addbtn.addEventListener("click",function(){
    let nolists = document.getElementById("nolist");
    let uli = document.getElementById("ul");
    nolists.style.display="none";
    uli.style.display="block";
    inputval = input1.value;
    if(inputval.trim()!=0){
        
        let webtask = localStorage.getItem("localtask");
        if(webtask == null){
            taskObj =[];
        }
        else{
            taskObj = JSON.parse(webtask);
        }
        taskObj.push(inputval);
        localStorage.setItem("localtask",JSON.stringify(taskObj));
    }
showtask();
})

function showtask(){
    let webtask = localStorage.getItem("localtask");
if(webtask == null){
    taskObj =[];
}
else{
    taskObj = JSON.parse(webtask);
}
let html = ""; 
let addedtodolist = document.getElementById("listss");
taskObj.forEach((item,index) => {
    html += `
    <ul >
    <div class="flex">

        <li class="complete" id="listss"> ${index+1}.  ${item}  </li>
        
        <div class="btns">
            

            
            <button  type="button" onclick="done(${index})"
            class="save"> <span class="material-symbols-outlined">
            done
        </span></button>
            
            <button class="edit" onclick="edittask(${index})">Edit</button>
            
          
            <button  type="button" onclick="deleteitem(${index})"
            class="delete"><span class="material-symbols-outlined">
            close
        </span></button>
        </div>
        </div> <br>`
        ;


    
    
});
addedtodolist.innerHTML = html;


}



// edit task
let editbtn = document.getElementById("editbtn");
// addbtn.addEventListener("click",function edittask(index)
function edittask(index)
    {
    let edit_task =document.getElementById("edit_task");
    let saveindex =document.getElementById("saveindex");
    saveindex.value= index;
    let webtask = localStorage.getItem("localtask");
    let taskObj= JSON.parse(webtask);
    saveindex.value = taskObj[index];
    edit_task.style.display="flex";
}


// savetask
let savebtn =document.getElementById("savebtn");
savebtn.addEventListener("click",function(index){
    let webtask = localStorage.getItem("localtask");
    let taskObj= JSON.parse(webtask);
    let saveindex =document.getElementById("saveindex").value;
    taskObj[saveindex]= input1.value;
    // console.log(taskObj)
    taskObj.splice(index,1)
    taskObj.push(saveindex);
    localStorage.setItem("localtask",JSON.stringify(taskObj));
   
    input1.value="";
    showtask();
})



    // delete
    function deleteitem(index){
        let webtask = localStorage.getItem("localtask");
        let taskObj= JSON.parse(webtask);
        taskObj.splice(index,1);
        localStorage.setItem("localtask",JSON.stringify(taskObj));
        showtask();
    }


    //cancel
    function cancel(){
        let edit_task = document.getElementById("edit_task");

        edit_task.style.display="none";
    }
    

    function done(){
        let listsss = document.getElementById("listss")
        // if(listsss.style.textDecoration = "line-through"){
        //     listsss.style.textDecoration = "none";
        // }else{
        //     element.style.textDecoration = "line-through";
        // }
        
        listsss.style.textDecoration="line-through";
    }