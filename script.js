
window.addEventListener("load",()=>{
    const input=document.querySelector("#add-task");
    const submit=document.querySelector("#submit");
    const task_list=document.querySelector(".task-list");
    submit.addEventListener("click",(e)=>{
     e.preventDefault();
     if(!input){
        alert("Please fill some todo!");
     }
     else{
        const content=input.value;
        console.log(content);
        const task_div=document.createElement("div");
        task_div.setAttribute("class","task");
        const task_content=document.createElement("div");
        const task_text=document.createElement("input");
        task_text.setAttribute("class","text");
        task_content.setAttribute("class","content");
        task_text.value=content;
        task_text.setAttribute("readonly","readonly");
        task_content.appendChild(task_text);
        const task_actions=document.createElement("div");
        task_actions.setAttribute("class","actions");
        const edit=document.createElement("input");
        const del=document.createElement("input");
        edit.setAttribute("type","button");
        edit.setAttribute("value","Edit");
        edit.setAttribute("id","edit");
        del.setAttribute("type","button");
        del.setAttribute("value","Delete");
        del.setAttribute("id","delete");
        task_actions.appendChild(edit);
        task_actions.appendChild(del);
        task_div.appendChild(task_content);
        task_div.appendChild(task_actions);
        task_list.appendChild(task_div);
        input.value="";
        edit.addEventListener("click",()=>{
         if(edit.value==="Edit"){
            edit.value="Save";
            task_text.removeAttribute("readonly");
            task_text.focus();
         }
         else{
            edit.value="Edit";
            task_text.setAttribute("readonly","readonly");

         }
        })
        del.addEventListener('click', (e) => {
			task_list.removeChild(task_div);
		});
       }
    })
})