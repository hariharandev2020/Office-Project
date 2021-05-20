// Billing Js//


function add(){

    let cid = 1;
    let customerName = document.querySelector("#cname").value;
    let productName  = document.querySelector("#pname").value;
    let productCode  = document.querySelector("#pcode").value;
    let unitPrice    = document.querySelector("#ppu").value;
    let quantity     = document.querySelector("#qty").value;
    

     document.querySelector("#cusid").innerHTML   =  "Customer Id :" + " " + cid;
     document.querySelector("#cusname").innerHTML =   "Customer Name :" + " " + customerName;
     document.querySelector("#content-1-header-1").style.backgroundColor = "white";

     let text = document.createTextNode(productCode);
     var li           = document.createElement("li");
     li.appendChild(text);
     document.querySelector(".row-1").appendChild(li);
    
     // ...............................................................
     
     let text1 = document.createTextNode(productName);
     var li           = document.createElement("li");
     li.appendChild(text1);
     document.querySelector(".row-2").appendChild(li);

     //.................................................................

     let text2 = document.createTextNode(quantity);
     var li           = document.createElement("li");
     li.appendChild(text2);
     document.querySelector(".row-3").appendChild(li);

     //...................................................................


     let text3 = document.createTextNode(quantity * unitPrice);
     var li           = document.createElement("li");
     li.appendChild(text3);
     document.querySelector(".row-4").appendChild(li);

     //...................................................................

}
