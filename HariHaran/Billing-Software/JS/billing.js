// Billing Js//


function totalPrice(){

    let x = document.querySelector("#qty").value;
    let y = document.querySelector("#ppu").value;

    var price = x * y;

    document.querySelector("#amt").value = price;

}


function add(){

    // Variable Declaration

    let cid = 1;
    let customerName = document.querySelector("#cname").value;
    let productName  = document.querySelector("#pname").value;
    let productCode  = document.querySelector("#pcode").value;
    let unitPrice    = document.querySelector("#ppu").value;
    let quantity     = document.querySelector("#qty").value;
    let amount       = document.querySelector("#amt").value;


     // Form Validation

        var  textValidate = /[0-9]/;

     if ( textValidate.test(customerName) || customerName === "" ) {
            
            alert("Put the customer name in Alphabetical");
            return false;
        }
        else if(productCode == ""){

            alert(" Given a Product code ")
            return false;
        }else if ( textValidate.test(productName) || productName === "" ){

            alert("Put the Product Name in Alphabetical");  
            return false;
        }else if( quantity == ""){

            alert("Given a Quantity of a product")
            return false;  
        }
    
        else if (unitPrice == ""){

            alert("Given a Price Per Unit")
            return false;
        }

    //............................................................
     
    
     var ncid = document.querySelector("#cusid").innerHTML   =  "Customer Id :" + " " + cid;
     cid = ncid;
     document.querySelector("#cusname").innerHTML =   "Customer Name :" + " " + customerName;
     document.querySelector("#content-1-header-1").style.backgroundColor = "white";

    //.............................................................

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
        
    //Adding Total 

         // var totalamout = document.querySelector("#amt").value;
        // alert(amount);
        // document.querySelector("#total-vallue").innerHTML = amount;




     //...................................................................


     productName  = document.querySelector("#pname").value = ' ' ;
     productCode  = document.querySelector("#pcode").value = ' ' ;
     unitPrice    = document.querySelector("#ppu").value   = ' ' ;
     quantity     = document.querySelector("#qty").value   = ' ' ;
     amount       = document.querySelector("#amt").value   = ' ' ;

     //..................................................



}
