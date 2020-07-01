$(document).ready(function(){
	let $title = $('#title');

var firebaseConfig = {
    apiKey: "AIzaSyBCGHdKMkIViWhOrAdKC02VosmlFiDhES0",
    authDomain: "htmlfinal123.firebaseapp.com",
    databaseURL: "https://htmlfinal123.firebaseio.com",
    projectId: "htmlfinal123",
    storageBucket: "htmlfinal123.appspot.com",
    messagingSenderId: "525039044147",
    appId: "1:525039044147:web:b0423ae0c83c7e342f4546",
    measurementId: "G-Q4NF3RKNWG"
  };
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

let db = firebase.firestore();
let userRef = db.collection("user1");


    $('#buy').click(function(){ 
		var selecteItem1 = document.getElementById("spinner1");//拿到select1物件
		var selecteItem2 = document.getElementById("spinner2");//拿到select2物件
		var selecteItem3 = document.getElementById("spinner3");//拿到select3物件
		var selecteItem4 = document.getElementById("spinner4");//拿到select4物件
		var selecteItem5 = document.getElementById("spinner5");//拿到select5物件
		var selecteItem6 = document.getElementById("spinner6");//拿到select6物件
		var value1 = parseInt(selecteItem1.options[selecteItem1.selectedIndex].value);//拿到選中項options1的value
		var value2 = parseInt(selecteItem2.options[selecteItem2.selectedIndex].value);//拿到選中項options2的value
		var value3 = parseInt(selecteItem3.options[selecteItem3.selectedIndex].value);//拿到選中項options3的value
		var value4 = parseInt(selecteItem4.options[selecteItem4.selectedIndex].value);//拿到選中項options4的value
		var value5 = parseInt(selecteItem5.options[selecteItem5.selectedIndex].value);//拿到選中項options5的value
		var value6 = parseInt(selecteItem6.options[selecteItem6.selectedIndex].value);//拿到選中項options6的value
		console.log(value1,value2,value3,value4,value5,value6);var str = "";
		str+="確定要購買\n"
		if(value1>0) str += "海陸鯛魚漢堡排 "+value1+" 個\n";
		if(value2>0) str += "鮭魚佐蒜檸奶油醬 "+value2+" 個\n"
		if(value3>0) str += "韓式炸雞 "+value3+" 個\n"
		if(value4>0) str += "三色魚排 "+value4+" 個\n"
		if(value5>0) str += "西班牙風味大蒜蝦 "+value5+" 個\n"
		if(value6>0) str += "泰式時蔬米披薩 "+value6+" 個\n"
		str += "總共 " + String(value1*125+value2*150+value3*80+value4*100+value5*200+value6*250) + " 元嗎"
		var r=confirm(str);
		if(r == true){
		$("#selectTest option:selected").val()
			userRef.doc("Dish1").set({
				"num": value1,
				"price": 125,
				"totalprice":value1*125
		});
			userRef.doc("Dish2").set({
				"num": value2,
				"price": 150,
				"totalprice":value2*150
		});
			userRef.doc("Dish3").set({
				"num": value3,
				"price": 80,
				"totalprice":value3*80
		});
			userRef.doc("Dish4").set({
				"num": value4,
				"price": 100,
				"totalprice":value4*100
		});
			userRef.doc("Dish5").set({
				"num": value5,
				"price": 200,
				"totalprice":value5*200
		});
			userRef.doc("Dish6").set({
				"num": value6,
				"price": 250,
				"totalprice":value6*250
		});
			userRef.doc("totalprice").set({
				"totalprice":value1*125+value2*150+value3*80+value4*100+value5*200+value6*250
		});
	}
	else{
		console.log("fuck");
	}
})






$(function(){
	$("#order").click(function(){
		console.log("fuckyou3");
		$("#orderlist").fadeIn("fast");
	})
	$(".cross").click(function(){
		console.log("fuckyou4");
	   $("#orderlist").fadeOut("fast")
	})
	$("#buy").click(function(){
		console.log("fuckyou5");
	   $("#orderlist").fadeOut("fast")
	})
});






// $("#order").click(function(){
// 	$("#orderlist").fadeIn(1000);
// })

// $("#buy").click(function(){
// 	$("#orderlist").fadeOut(1000);
// })








});


