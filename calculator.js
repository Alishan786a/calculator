var display=document.getElementById('cal_display');

function num(a){
display.value+=a;
}
//below function clear all data

function clr(){
	 store=display.value;
	display.value="";

	
}

// this function delete one by one value
function del(){
	var dl=display.value;
	var newdl=dl.slice(0,-1);
	display.value=newdl;
}
//this function is use for eval
 function equal(){
 	var a=display.value; 

 	if(a.includes("sin")){
 		//prompt("ksdh")
 		display.value=Math.sin(a.slice(3,a.length));

 		

 	}else if(a.includes("cos")){
       display.value=Math.cos(a.slice(3,a.length));

       // prompt("yes ")
    
 	}
 	else if(a.includes("tan")){
       display.value=Math.tan(a.slice(3,a.length));

       // prompt("yes ")
    
 	}
 	else if(a.includes("pow")){
 		var p=a.indexOf("pow");
 		var p1=a.slice(0,p);
 		var p2=a.slice(p+3,a.length)
        display.value=Math.pow(p1,p2);


       // prompt("yes ")
    
 	}else{
 	display.value=eval(display.value);
 	}
  var store=display.value;
  localStorage.setItem("store",JSON.stringify(store))


 }
 //this function is use for squre root
 function sroot(){
 	var vlu=display.value;
 	display.value=Math.sqrt(vlu);
 }
  //this function is use  for cube root
   function croot(){
   	var vlu=display.value;
   	display.value=Math.cbrt(vlu);
   }

// this function is use for power
 // function power(){
 // 	display.value=`power ${display.value}, ${}`;
 // }
function sine(){
	display.value+="sin";
}
function cose() {
     display.value+="cos";


	}
	
function tane() {
     display.value+="tan";


	}
function power(){
	display.value+="pow";
}	

// function store(){
//   var getstore=JSON.parse(localStorage.getItem("store"));
//   display.value=getstore

// }


















