 // fine some think for html text 
 function fineSome(idname) {
    let getid=document.getElementById(idname)
    let findNum=getid.innerText;
    return findNum;
}
// find some think for input value 
function boxValue(idname) {
    let getid=document.getElementById(idname)
    let findNum=getid.value;
    getid.value=""
    return findNum;
}
// set value in main value 
function addnewNumber(id,value) {
    let getnumber=document.getElementById(id);
    getnumber.innerText=value;
}
document.getElementById("withdraw-btn").addEventListener("click",()=>{
   
    let balance=fineSome("Balance")
    let withdraw=fineSome("Withdraw")
    let withdraw_box=boxValue("Withdraw-box")
    let total=Number(withdraw)+Number(withdraw_box)
    addnewNumber("Withdraw",total);
    let fullTotal=Number(balance)-Number(withdraw_box);
    addnewNumber("Balance",fullTotal);
    
     const currentDate = new Date();
    const formattedDate = formatDate(currentDate);
    const currentTime = new Date();
    const formattedTime = formatTime(currentTime);
    let table=document.getElementById("table")
     let makeTr=document.createElement("tr");
     makeTr.innerHTML=`
            <td>${formattedDate}</td>
                <td>${formattedTime}</td>
                <td>need money</td>
                <td>${withdraw_box}</td>
                <td>Withdraw</td>
                <td>Completed</td>
     `
     table.appendChild(makeTr);
    
})