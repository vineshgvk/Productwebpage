

  (function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
      (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
    var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
    var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
  })(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-E26WCXZROOUQ-2");

function login()
    {
        var username=document.getElementById("username").value;
        var password=document.getElementById("password").value;
      const myaccount = {
        a1: "PX_Company-1",
        a2: "PX_Company-2",
        a3: "PX_Company-3",
        a4: "PX_Company-4"

    }
        if(username=="demouser1@gmail.com"||username=="demouser2@gainsight.com" ||username=="demouser3@gmail.com")
        {
          b = username.substr(5, 6);
            var id = b;
        if(username=="demouser1@gmail.com"){
          
         //passing user and account objects:
aptrinsic("identify",
  {
  //User Fields
    "id": id, // Required for logged in app users
    "email": username,
    "customAttributes" : {
                                                
           "college_id" :"1209A"
          }
  },
  {
  //Account Fields
    "id": myaccount.a4, //Required
    "name": myaccount.a4,
 });
        }else if(username=="demouser2@gainsight.com"){
          
         //passing user and account objects:
aptrinsic("identify",
  {
  //User Fields
    "id": id, // Required for logged in app users
    "email": username,
  },
  {
  //Account Fields
    "id": myaccount.a3, //Required
    "name": myaccount.a3,
 });
        }
          else if(username=="demouser3@gmail.com"){
          
         //passing user and account objects:
aptrinsic("identify",
  {
  //User Fields
    "id": id, // Required for logged in app users
    "email": username,
  },
  {
  //Account Fields
    "id": myaccount.a2, //Required
    "name": myaccount.a2,
 });
        }
        // location.href ="home.html";
        }
        else
        {
                    aptrinsic('identify', {
                            //User Fields
                            "id": id, // Required for logged in app users
                            "email": username

                            // "userHash": hash.toString()// optional transient for HMAC identification
                        },

                        {
                            //Account Fields
                            "id": myaccount.a1, //Required
                            "name": myaccount.a1,
                            // flat custom attributes
                        });
                }

            alert("Logged in user id :" + b);
            //window.open("/HTML/home.html");
           // window.location = "https://vineshgvk.github.io/px/home.html"; //https://vineshgvk.github.io/Productwebpage/login.html
            window.location = "https://vineshgvk.github.io/Productwebpage/login.html";
      
            return false;
    }
    
function deleteAllCookies() {
    window.aptrinsic('reset');
    counter = 0;
}

var Productname = "T.V";
var Productbrand = "Panasonic";
var Productprice = 90000;
var transactionStatus = "Success";


let purchaseinitiated = new CustomEvent('purchaseinitiated', {
    detail: {
        itemName: this.Productname,
        itemBrand: this.Productbrand
    }
})
let transactionsuccess = new CustomEvent('transactionsuccess', {
    detail: {
        Amountdeducted: this.Productprice,
        Paymentstatus: this.transactionStatus
    }
})
document.addEventListener('DOMContentLoaded', function () {
    let m = document.getElementById('paymentbtn');
    addButton(m);
    m.addEventListener('click', function (ev) {

        addPaymentStatus(m);
    });

});

function addButton(parent) {
    let b = document.createElement('button');
    b.setAttribute("id", "Buynow");
    b.setAttribute("class", "btn btn-primary");
    b.textContent = "Make Payment";
    parent.appendChild(b);
    return b;
}

function addPaymentStatus(parent) {
    let p = document.createElement('p');
    p.textContent = "Your Transaction is being Proccessed.....";
    p.setAttribute("id", "tStatus");
    parent.appendChild(p);
    p.addEventListener('purchaseinitiated', purchasedone);
    p.dispatchEvent(purchaseinitiated);
    setTimeout(printreciept, 2000);


}
function purchasedone(ev) {

    console.log(ev.type, ev.detail);
    // Write your PX code here to track the custom events 
    aptrinsic('track', 'purchaseinitiated', {
        itemName: ev.detail.itemName,
        itemBrand: ev.detail.itemBrand
    });
}

function printreciept() {
    var p1 = document.getElementById("tStatus");
    document.addEventListener('transactionsuccess', transactiondone);
    document.dispatchEvent(transactionsuccess);
    p1.textContent = "Transaction Success";

}


function transactiondone(ev1) {

    console.log(ev1.type, ev1.detail);
    // Write your PX code here to track the custom events
    aptrinsic('track', 'transactionsuccess', {
        Amountdeducted: ev1.detail.Amountdeducted,
        Paymentstatus: ev1.detail.Paymentstatus
    });
}

