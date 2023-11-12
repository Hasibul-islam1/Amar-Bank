document.getElementById("Deposit-btn").addEventListener("click",()=>{
    let depositMoeny=document.getElementById("Deposit")
    let mainMoeny=depositMoeny.innerText
    let depositBox=document.getElementById("Deposit-box")
    let mainDeposite=depositBox.value
    let total=Number(mainMoeny)+Number(mainDeposite);
    depositMoeny.innerText=total
    let balanceMoeny=document.getElementById("Balance")
    let mainbalance=balanceMoeny.innerText
    let full_total=Number(mainDeposite)+Number(mainbalance)
    balanceMoeny.innerText=full_total;
    const currentDate = new Date();
    const formattedDate = formatDate(currentDate);
    const currentTime = new Date();
    const formattedTime = formatTime(currentTime);
    let table=document.getElementById("table")
     let makeTr=document.createElement("tr");
     makeTr.innerHTML=`
            <td>${formattedDate}</td>
                <td>${formattedTime}</td>
                <td>save money</td>
                <td>${mainDeposite}</td>
                <td>Deposite</td>
                <td>Completed</td>
     `
     table.appendChild(makeTr);
     depositBox.value=""
})