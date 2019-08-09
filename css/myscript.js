// document.getElementById("mostrar").append("hola mundo
//var a=document.getElementById("mostrar")
// a.style.color="red";


var numero=5;
/*var numero2=25;
while(numero==10){
alert("hola :<")

}
*/
var mostrar=document.getElementById("mostrar");
mostrar.innerHTML+="<div class='row'>",
mostrar.innerHTML+="<div class='col-lg-2' style='background-color: green'>"
for (var i =1; i<=12;i++ ) {
	//console.log(numero+"x"+i+"="+numero*i)
	mostrar.innerHTML+=numero+"x"+i+"="+numero*i+"<br>";
}
mostrar.innerHTML+="</div></div>"


