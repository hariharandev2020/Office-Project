// Billing Js//


function add(){

    let cid = 1;
    let customerName = document.querySelector("#cname").value;
    let productName  = document.querySelector("#pname").value;
    let productCode  = document.querySelector("#pcode").value;
    let pprice       = document.querySelector("#ppu").value;
    

     document.querySelector("#cusid").innerHTML   =  "Customer Id :" + " " + cid;
     document.querySelector("#cusname").innerHTML =   "Customer Name :" + " " + customerName;
     document.querySelector("#content-1-header-1").style.backgroundColor = "white";

     let text = document.createTextNode(productName);
     var li           = document.createElement("li");
     li.appendChild(text);
     document.querySelector(".row-1").appendChild(li);
 
}
