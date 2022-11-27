var btnPlus1 = document.querySelector(".btnPlus1");
var count1 = document.querySelector(".count1");
var btnMoins1 = document.querySelector(".btnMoins1");
var price1 = document.querySelector(".price1");
var total1 = document.querySelector(".totalP1");
var nombreProduitDansPanier = document.querySelector(".nombreProduitDansPanier");
var PriceOfAllPurchases = document.querySelector(".PriceOfAllPurchases");
btnPlus1.addEventListener("click",function () {
    count1.innerHTML = parseInt(count1.innerHTML) + 1
    total1.innerHTML = parseInt(total1.innerHTML) + parseInt(price1.innerHTML)
    nombreProduitDansPanier.innerHTML=parseInt(nombreProduitDansPanier.innerHTML) + parseInt(1)
    PriceOfAllPurchases.innerHTML= parseInt(PriceOfAllPurchases.innerHTML) + parseInt(price1.innerHTML)
});
btnMoins1.addEventListener('click',function(){
    if(parseInt(count1.innerHTML) > 0){
        count1.innerHTML = parseInt(count1.innerHTML) - 1
        total1.innerHTML = parseInt(total1.innerHTML) - parseInt(price1.innerHTML)
        nombreProduitDansPanier.innerHTML=parseInt(nombreProduitDansPanier.innerHTML) - parseInt(1)
        PriceOfAllPurchases.innerHTML= parseInt(PriceOfAllPurchases.innerHTML) - parseInt(price1.innerHTML)
    } 
});
var btnPlus2 = document.querySelector(".btnPlus2");
var count2 = document.querySelector(".count2");
var btnMoins2 = document.querySelector(".btnMoins2");
var price2 = document.querySelector(".price2");
var total2 = document.querySelector(".totalP2");
var nombreProduitDansPanier = document.querySelector(".nombreProduitDansPanier");
btnPlus2.addEventListener("click",function () {
    count2.innerHTML = parseInt(count2.innerHTML) + 1
    total2.innerHTML = parseInt(total2.innerHTML) + parseInt(price2.innerHTML)
    nombreProduitDansPanier.innerHTML=parseInt(nombreProduitDansPanier.innerHTML) + parseInt(1)
    PriceOfAllPurchases.innerHTML= parseInt(PriceOfAllPurchases.innerHTML) + parseInt(price2.innerHTML)
});
btnMoins2.addEventListener('click',function(){
    if(parseInt(count2.innerHTML) > 0){
        count2.innerHTML = parseInt(count2.innerHTML) - 1
        total2.innerHTML = parseInt(total2.innerHTML) - parseInt(price2.innerHTML)
        nombreProduitDansPanier.innerHTML=parseInt(nombreProduitDansPanier.innerHTML) - parseInt(1)
        PriceOfAllPurchases.innerHTML= parseInt(PriceOfAllPurchases.innerHTML) - parseInt(price2.innerHTML)
    } 
});
var btnPlus3 = document.querySelector(".btnPlus3");
var count3 = document.querySelector(".count3");
var btnMoins3 = document.querySelector(".btnMoins3");
var price3 = document.querySelector(".price3");
var total3 = document.querySelector(".totalP3");
var nombreProduitDansPanier = document.querySelector(".nombreProduitDansPanier");
btnPlus3.addEventListener("click",function () {
    count3.innerHTML = parseInt(count3.innerHTML) + 1
    total3.innerHTML = parseInt(total3.innerHTML) + parseInt(price3.innerHTML)
    nombreProduitDansPanier.innerHTML=parseInt(nombreProduitDansPanier.innerHTML) + parseInt(1)
    PriceOfAllPurchases.innerHTML= parseInt(PriceOfAllPurchases.innerHTML) + parseInt(price3.innerHTML)
});
btnMoins3.addEventListener('click',function(){
    if(parseInt(count3.innerHTML) > 0){
        count3.innerHTML = parseInt(count3.innerHTML) - 1
        total3.innerHTML = parseInt(total3.innerHTML) - parseInt(price3.innerHTML)
        nombreProduitDansPanier.innerHTML=parseInt(nombreProduitDansPanier.innerHTML) - parseInt(1)
        PriceOfAllPurchases.innerHTML= parseInt(PriceOfAllPurchases.innerHTML) - parseInt(price3.innerHTML)
    } 
});
var btnPlus4 = document.querySelector(".btnPlus4");
var count4 = document.querySelector(".count4");
var btnMoins4 = document.querySelector(".btnMoins4");
var price4 = document.querySelector(".price4");
var total4 = document.querySelector(".totalP4");
var nombreProduitDansPanier = document.querySelector(".nombreProduitDansPanier");
btnPlus4.addEventListener("click",function () {
    count4.innerHTML = parseInt(count4.innerHTML) + 1
    total4.innerHTML = parseInt(total4.innerHTML) + parseInt(price4.innerHTML)
    nombreProduitDansPanier.innerHTML=parseInt(nombreProduitDansPanier.innerHTML) + parseInt(1)
    PriceOfAllPurchases.innerHTML= parseInt(PriceOfAllPurchases.innerHTML) + parseInt(price4.innerHTML)
});
btnMoins4.addEventListener('click',function(){
    if(parseInt(count4.innerHTML) > 0){
        count4.innerHTML = parseInt(count4.innerHTML) - 1
        total4.innerHTML = parseInt(total4.innerHTML) - parseInt(price4.innerHTML)
        nombreProduitDansPanier.innerHTML=parseInt(nombreProduitDansPanier.innerHTML) - parseInt(1)
        PriceOfAllPurchases.innerHTML= parseInt(PriceOfAllPurchases.innerHTML) - parseInt(price4.innerHTML)
    } 
});
var btnPlus5 = document.querySelector(".btnPlus5");
var count5 = document.querySelector(".count5");
var btnMoins5 = document.querySelector(".btnMoins5");
var price5 = document.querySelector(".price5");
var total5 = document.querySelector(".totalP5");
var nombreProduitDansPanier = document.querySelector(".nombreProduitDansPanier");
btnPlus5.addEventListener("click",function () {
    count5.innerHTML = parseInt(count5.innerHTML) + 1
    total5.innerHTML = parseInt(total5.innerHTML) + parseInt(price5.innerHTML)
    nombreProduitDansPanier.innerHTML=parseInt(nombreProduitDansPanier.innerHTML) + parseInt(1)
    PriceOfAllPurchases.innerHTML= parseInt(PriceOfAllPurchases.innerHTML) + parseInt(price5.innerHTML)
});
btnMoins5.addEventListener('click',function(){
    if(parseInt(count5.innerHTML) > 0){
        count5.innerHTML = parseInt(count5.innerHTML) - 1
        total5.innerHTML = parseInt(total5.innerHTML) - parseInt(price5.innerHTML)
        nombreProduitDansPanier.innerHTML=parseInt(nombreProduitDansPanier.innerHTML) - parseInt(1)
        PriceOfAllPurchases.innerHTML= parseInt(PriceOfAllPurchases.innerHTML) - parseInt(price5.innerHTML)
    } 
});
var btnPlus6 = document.querySelector(".btnPlus6");
var count6 = document.querySelector(".count6");
var btnMoins6 = document.querySelector(".btnMoins6");
var price6 = document.querySelector(".price6");
var total6 = document.querySelector(".totalP6");
var nombreProduitDansPanier = document.querySelector(".nombreProduitDansPanier");
btnPlus6.addEventListener("click",function () {
    count6.innerHTML = parseInt(count6.innerHTML) + 1
    total6.innerHTML = parseInt(total6.innerHTML) + parseInt(price6.innerHTML)
    nombreProduitDansPanier.innerHTML=parseInt(nombreProduitDansPanier.innerHTML) + parseInt(1)
    PriceOfAllPurchases.innerHTML= parseInt(PriceOfAllPurchases.innerHTML) + parseInt(price6.innerHTML)
});
btnMoins6.addEventListener('click',function(){
    if(parseInt(count6.innerHTML) > 0){
        count6.innerHTML = parseInt(count6.innerHTML) - 1
        total6.innerHTML = parseInt(total6.innerHTML) - parseInt(price6.innerHTML)
        nombreProduitDansPanier.innerHTML=parseInt(nombreProduitDansPanier.innerHTML) - parseInt(1)
        PriceOfAllPurchases.innerHTML= parseInt(PriceOfAllPurchases.innerHTML) - parseInt(price6.innerHTML)
    } 
});
var btnPlus7 = document.querySelector(".btnPlus7");
var count7 = document.querySelector(".count7");
var btnMoins7 = document.querySelector(".btnMoins7");
var price7 = document.querySelector(".price7");
var total7 = document.querySelector(".totalP7");
var nombreProduitDansPanier = document.querySelector(".nombreProduitDansPanier");
btnPlus7.addEventListener("click",function () {
    count7.innerHTML = parseInt(count7.innerHTML) + 1
    total7.innerHTML = parseInt(total7.innerHTML) + parseInt(price7.innerHTML)
    nombreProduitDansPanier.innerHTML=parseInt(nombreProduitDansPanier.innerHTML) + parseInt(1)
    PriceOfAllPurchases.innerHTML= parseInt(PriceOfAllPurchases.innerHTML) + parseInt(price7.innerHTML)
});
btnMoins7.addEventListener('click',function(){
    if(parseInt(count7.innerHTML) > 0){
        count7.innerHTML = parseInt(count7.innerHTML) - 1
        total7.innerHTML = parseInt(total7.innerHTML) - parseInt(price7.innerHTML)
        nombreProduitDansPanier.innerHTML=parseInt(nombreProduitDansPanier.innerHTML) - parseInt(1)
        PriceOfAllPurchases.innerHTML= parseInt(PriceOfAllPurchases.innerHTML) - parseInt(price7.innerHTML)
    } 
});
var btnPlus8 = document.querySelector(".btnPlus8");
var count8 = document.querySelector(".count8");
var btnMoins8 = document.querySelector(".btnMoins8");
var price8 = document.querySelector(".price8");
var total8 = document.querySelector(".totalP8");
var nombreProduitDansPanier = document.querySelector(".nombreProduitDansPanier");
btnPlus8.addEventListener("click",function () {
    count8.innerHTML = parseInt(count8.innerHTML) + 1
    total8.innerHTML = parseInt(total8.innerHTML) + parseInt(price8.innerHTML)
    nombreProduitDansPanier.innerHTML=parseInt(nombreProduitDansPanier.innerHTML) + parseInt(1)
    PriceOfAllPurchases.innerHTML= parseInt(PriceOfAllPurchases.innerHTML) + parseInt(price8.innerHTML)
});
btnMoins8.addEventListener('click',function(){
    if(parseInt(count8.innerHTML) > 0){
        count8.innerHTML = parseInt(count8.innerHTML) - 1
        total8.innerHTML = parseInt(total8.innerHTML) - parseInt(price8.innerHTML)
        nombreProduitDansPanier.innerHTML=parseInt(nombreProduitDansPanier.innerHTML) - parseInt(1)
        PriceOfAllPurchases.innerHTML= parseInt(PriceOfAllPurchases.innerHTML) - parseInt(price8.innerHTML)
    } 
});
var btnPlus9 = document.querySelector(".btnPlus9");
var count9 = document.querySelector(".count9");
var btnMoins9 = document.querySelector(".btnMoins9");
var price9 = document.querySelector(".price9");
var total9 = document.querySelector(".totalP9");
var nombreProduitDansPanier = document.querySelector(".nombreProduitDansPanier");
btnPlus9.addEventListener("click",function () {
    count9.innerHTML = parseInt(count9.innerHTML) + 1
    total9.innerHTML = parseInt(total9.innerHTML) + parseInt(price9.innerHTML)
    nombreProduitDansPanier.innerHTML=parseInt(nombreProduitDansPanier.innerHTML) + parseInt(1)
    PriceOfAllPurchases.innerHTML= parseInt(PriceOfAllPurchases.innerHTML) + parseInt(price9.innerHTML)
});
btnMoins9.addEventListener('click',function(){
    if(parseInt(count9.innerHTML) > 0){
        count9.innerHTML = parseInt(count9.innerHTML) - 1
        total9.innerHTML = parseInt(total9.innerHTML) - parseInt(price9.innerHTML)
        nombreProduitDansPanier.innerHTML=parseInt(nombreProduitDansPanier.innerHTML) - parseInt(1)
        PriceOfAllPurchases.innerHTML= parseInt(PriceOfAllPurchases.innerHTML) - parseInt(price9.innerHTML)
    } 
});
var btnPlus10 = document.querySelector(".btnPlus10");
var count10 = document.querySelector(".count10");
var btnMoins10 = document.querySelector(".btnMoins10");
var price10 = document.querySelector(".price10");
var total10 = document.querySelector(".totalP10");
var nombreProduitDansPanier = document.querySelector(".nombreProduitDansPanier");
btnPlus10.addEventListener("click",function () {
    count10.innerHTML = parseInt(count10.innerHTML) + 1
    total10.innerHTML = parseInt(total10.innerHTML) + parseInt(price10.innerHTML)
    nombreProduitDansPanier.innerHTML=parseInt(nombreProduitDansPanier.innerHTML) + parseInt(1)
    PriceOfAllPurchases.innerHTML= parseInt(PriceOfAllPurchases.innerHTML) + parseInt(price10.innerHTML)
});
btnMoins10.addEventListener('click',function(){
    if(parseInt(count10.innerHTML) > 0){
        count10.innerHTML = parseInt(count10.innerHTML) - 1
        total10.innerHTML = parseInt(total10.innerHTML) - parseInt(price10.innerHTML)
        nombreProduitDansPanier.innerHTML=parseInt(nombreProduitDansPanier.innerHTML) - parseInt(1)
        PriceOfAllPurchases.innerHTML= parseInt(PriceOfAllPurchases.innerHTML) - parseInt(price10.innerHTML)
    } 
});
var btnPlus11 = document.querySelector(".btnPlus11");
var count11 = document.querySelector(".count11");
var btnMoins11 = document.querySelector(".btnMoins11");
var price11 = document.querySelector(".price11");
var total11 = document.querySelector(".totalP11");
var nombreProduitDansPanier = document.querySelector(".nombreProduitDansPanier");
btnPlus11.addEventListener("click",function () {
    count11.innerHTML = parseInt(count11.innerHTML) + 1
    total11.innerHTML = parseInt(total11.innerHTML) + parseInt(price11.innerHTML)
    nombreProduitDansPanier.innerHTML=parseInt(nombreProduitDansPanier.innerHTML) + parseInt(1)
    PriceOfAllPurchases.innerHTML= parseInt(PriceOfAllPurchases.innerHTML) + parseInt(price11.innerHTML)
});
btnMoins11.addEventListener('click',function(){
    if(parseInt(count11.innerHTML) > 0){
        count11.innerHTML = parseInt(count11.innerHTML) - 1
        total11.innerHTML = parseInt(total11.innerHTML) - parseInt(price11.innerHTML)
        nombreProduitDansPanier.innerHTML=parseInt(nombreProduitDansPanier.innerHTML) - parseInt(1)
        PriceOfAllPurchases.innerHTML= parseInt(PriceOfAllPurchases.innerHTML) - parseInt(price11.innerHTML)
    } 
});
var btnPlus12 = document.querySelector(".btnPlus12");
var count12 = document.querySelector(".count12");
var btnMoins12 = document.querySelector(".btnMoins12");
var price12 = document.querySelector(".price12");
var total12 = document.querySelector(".totalP12");
var nombreProduitDansPanier = document.querySelector(".nombreProduitDansPanier");
btnPlus12.addEventListener("click",function () {
    count12.innerHTML = parseInt(count12.innerHTML) + 1
    total12.innerHTML = parseInt(total12.innerHTML) + parseInt(price12.innerHTML)
    nombreProduitDansPanier.innerHTML=parseInt(nombreProduitDansPanier.innerHTML) + parseInt(1)
    PriceOfAllPurchases.innerHTML= parseInt(PriceOfAllPurchases.innerHTML) + parseInt(price12.innerHTML)
});
btnMoins12.addEventListener('click',function(){
    if(parseInt(count12.innerHTML) > 0){
        count12.innerHTML = parseInt(count12.innerHTML) - 1
        total12.innerHTML = parseInt(total12.innerHTML) - parseInt(price12.innerHTML)
        nombreProduitDansPanier.innerHTML=parseInt(nombreProduitDansPanier.innerHTML) - parseInt(1)
        PriceOfAllPurchases.innerHTML= parseInt(PriceOfAllPurchases.innerHTML) - parseInt(price12.innerHTML)
    }
});

