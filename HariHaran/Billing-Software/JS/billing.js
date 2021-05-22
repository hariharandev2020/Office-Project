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


    //  Form Validation

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

    // cart
    //.............................................................

     let text = document.createTextNode(productName);
     var li           = document.createElement("li");
     li.appendChild(text);
     document.querySelector(".row-1").appendChild(li);
         
     // ...............................................................
     
     let text1 = document.createTextNode(quantity);
     var li           = document.createElement("li");
     li.appendChild(text1);
     document.querySelector(".row-2").appendChild(li);
     
     //.................................................................
     
     let text2 = document.createTextNode(quantity * unitPrice);
     var li           = document.createElement("li");
     li.appendChild(text2);
     document.querySelector(".row-3").appendChild(li);

     //.....................................................................
     
    //  Billing

    var ncid = document.querySelector("#cusid").innerHTML   =  "Customer Id :" + " " + cid;
    cid = ncid;
    document.querySelector("#cusname").innerHTML =   "Customer Name :" + " " + customerName;
    document.querySelector("#content-2-header-1").style.backgroundColor = "white";

    //....................................................................... 
    
    let text5 = document.createTextNode(productCode);
    var li5           = document.createElement("li");
    li5.appendChild(text5);
    document.querySelector(".row-5").appendChild(li5);

    //.......................................................................
     let text6 = document.createTextNode(productName);
     var li6           = document.createElement("li");
     li6.appendChild(text6);
     document.querySelector(".row-6").appendChild(li6);

    //......................................................................
    
     let text7 = document.createTextNode(quantity);
     var li7          = document.createElement("li");
     li7.appendChild(text7);
     document.querySelector(".row-7").appendChild(li7);

    //.........................................................................

     let text8 = document.createTextNode(quantity * unitPrice);
     var li8           = document.createElement("li");
     li8.appendChild(text8);
     document.querySelector(".row-8").appendChild(li8).setAttribute("class","total-amount");
          
     //.................................................................

     productName  = document.querySelector("#pname").value = ' ' ;
     productCode  = document.querySelector("#pcode").value = ' ' ;
     unitPrice    = document.querySelector("#ppu").value   = ' ' ;
     quantity     = document.querySelector("#qty").value   = ' ' ;
     amount       = document.querySelector("#amt").value   = ' ' ;

     //..................................................
     
       
}  

 function gstCalc(){
        
    //Adding Total 

    a = document.querySelectorAll(".total-amount");
    let ans = 0; 
   
   for( var i= 0; i<a.length;i++){

            let p = Number(a[i].textContent);
            ans += p;
            
    }
     document.querySelector("#total-value").innerHTML = ans;

     //  GST Calc

    var x  = (ans * 12)/100;
    // alert(x);
    var y = Number(ans) + x;
    document.querySelector("#gst-text").innerHTML =  x;
    // alert(y);
    document.querySelector("#gt-text").innerHTML ="Rs"+ Math.round(y);     
 
    }

    //Removing Item


   function remove(){
        var r = document.querySelector("#edit-option").value;
        var a = document.querySelector(".row-1").querySelectorAll(["li"]);
        // alert(a.length);

        var b = document.querySelector(".row-2").querySelectorAll(["li"]);
        // alert(b.length);
        var c = document.querySelector(".row-3").querySelectorAll(["li"]);
        // alert(c.length);
        var d = document.querySelector(".row-5").querySelectorAll(["li"]);
        // alert(d.length);
        var e = document.querySelector(".row-6").querySelectorAll(["li"]);
        // alert(e.length);
        var f = document.querySelector(".row-7").querySelectorAll(["li"]);
        // alert(f.length);
        var g = document.querySelector(".row-8").querySelectorAll(["li"]); 
        // alert(g.length);

         a[r].remove();
         b[r].remove();
         c[r].remove();
         d[r].remove();
         e[r].remove();
         f[r].remove();
         g[r].remove();
         
        
   }
   