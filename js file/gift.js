 document.getElementById("Gift-btn").addEventListener("click",()=>{
    let balance=fineSome("Balance");
    let gift=fineSome("Gift");
    let gift_box=boxValue("Gift-box")
    let total=Number(gift)+Number(gift_box)
    addnewNumber("Gift",total)
    let full_total=Number(balance)-Number(gift_box)
    addnewNumber("Balance",full_total)
    
    const currentDate = new Date();
    const formattedDate = formatDate(currentDate);
    const currentTime = new Date();
    const formattedTime = formatTime(currentTime);
    let table=document.getElementById("table")
     let makeTr=document.createElement("tr");
     makeTr.innerHTML=`
            <td>${formattedDate}</td>
                <td>${formattedTime}</td>
                <td>Gift Someone</td>
                <td>${gift_box}</td>
                <td>Gift</td>
                <td>Completed</td>
     `
     table.appendChild(makeTr);
 })
 