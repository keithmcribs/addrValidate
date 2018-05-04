
var http = new XMLHttpRequest();
var url = "http://production.shippingapis.com/ShippingAPI.dll";
var params = "?API=Verify&XML=<AddressValidateRequest USERID="526UNIVE2226"><Revision>1</Revision><Address ID="0"><Address1></Address1><Address2>4800 Calhoun Rd</Address2><City></City><State>Tx</State><Zip5>77004</Zip5><Zip4></Zip4></Address></AddressValidateRequest>";
http.open("POST", url, true);

//Send the proper header information along with the request
http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

http.onreadystatechange = function() {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) {
        alert(http.responseText);
    }
}
http.send(params);