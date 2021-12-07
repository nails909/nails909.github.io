
function generate()
{
    var typeElement = document.getElementById("type");
    var type = typeElement.options[typeElement.selectedIndex].value;
    var quantityElement = document.getElementById("quantity");
    var quantity = quantityElement.options[quantityElement.selectedIndex].value;
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "";
    while (quantity--) {
        var value = "";
        switch (type) {
            case "medicareNumber":
                value = medicareNumber();
                break;
            case "providerNumber":
                value = providerNumber();
                break;
            case "IHI":
                value = hpi(0);
                break;
            case "HPI-I":
                value = hpi(1);
                break;
            case "HPI-O":
                value = hpi(2);
                break;
        }
        resultElement.innerHTML
            = resultElement.innerHTML + value + "\n";
    }
}
function medicareNumber()
{
    var mn = new Array();
    mn[0] = Math.floor(Math.random()*5) + 2;
    for (var i = 1; i < 8; i++) {
        mn[i] = Math.floor(Math.random()*10);
    }
    mn[8] = (mn[0]+mn[1]*3+mn[2]*7+mn[3]*9+mn[4]+mn[5]*3+mn[6]*7+mn[7]*9)%10;
    return mn.join("") + "1/1";
}
function providerNumber()
{
    var pn = new Array();
    for (var i = 0; i < 6; i++) {
        pn[i] = Math.floor(Math.random()*10);
    }
    var secondLast = new Array(
            "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
            "A", "B", "C", "D", "E", "F", "G", "H",
            "J", "K", "L", "M", "N",
            "P", "Q", "R",
            "T", "U", "V", "W", "X", "Y");
    var plv = Math.floor(Math.random()*32);
    pn[6] = secondLast[plv];
    var last = new Array(
            "Y", "X", "W", "T", "L", "K", "J", "H", "F", "B", "A");
    pn[7] = last[(pn[0]*3+pn[1]*5+pn[2]*8+pn[3]*4+pn[4]*2+pn[5]+plv*6)%11];
    return pn.join("");
}
function hpi(type)
{
    var hpi = new Array("8", "0", "0", "3", "6", type + "");
    for (var i = 6; i < 15; i++) {
        hpi[i] = Math.floor(Math.random()*10);
    }
    var check = 0;
    for (var i = 1; i < 16; i++) {
        digit = parseInt(hpi[i-1]);
        if (i % 2 == 0) {
            check = check + digit;
        } else {
            check = check + Math.floor((digit*2)/10) + (digit*2)%10;
        }
    }
    check = Math.abs((10 - (check % 10))%10);
    return hpi.join("") + check;
}
window.onload = generate;