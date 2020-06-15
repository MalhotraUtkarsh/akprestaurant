//tester()

// NAVBAR TOGGLE FUNCTION BEIGNS
function toggle() {
    // $(".navbar").removeClass("hide")
     var element = document.getElementById('nav') ;
     element.classList.toggle('display') ;
     element.style.transition = "all 1s " ;
     
 }
 // SLIDESHOW FUNCTIONS BEGINS
 var myIndex = 1 ;
 carousel()
 
 function carousel(){ 
 var i = 0 ;
 var x = document.getElementsByClassName('slides') ;
 var y = document.getElementsByClassName('caption') ;
 
 for (var i = 0; x.length > i; i++) {
    x[i].style.opacity = "0" ;
    y[i].style.transition = "all 0.7s ease-in-out" ;
   y[i].style.transform = "translateY(30px)";
    y[i].style.opacity = "0" ;
 }
 myIndex++;
 
 if (myIndex > x.length) {myIndex = 1}   
 x[myIndex-1].style.opacity = "1"; 
 x[myIndex-1].style.transition = "all 0.7s ease-in-out" ;
  y[myIndex-1].style.opacity = "1"; 
  y[myIndex-1].style.transform = "translateY(-30px)";
  y[myIndex-1].style.transition = "all 0.7s ease-in-out" 
 
 setTimeout(carousel, 3000)
 
 }
 
 
 var about_index = 1 ;
 about_slideshow()
 
 function about_slideshow(){ 
 var i = 0 ;
 var x = document.getElementsByClassName('about_slides') ;
 var y = document.getElementsByClassName('about_slides_2') ;
 var z = document.getElementsByClassName('content')
 
 
 for (var i = 0; x.length > i; i++) {
    x[i].style.opacity = "0" ;
    y[i].style.opacity = "0" ;
    z[i].style.opacity = "0" ;
    z[i].style.transform = "scale(0)" ;
 
 }
 about_index++;
 
 if (about_index> x.length) {about_index = 1}   
 x[about_index-1].style.opacity = "1";
 x[about_index-1].style.transition = " all 1s";
 y[about_index-1].style.opacity = "1";
 y[about_index-1].style.transition = " all 1s";
 z[about_index-1].style.opacity = "1";
 z[about_index-1].style.transform = "scale(1)" ;
 z[about_index-1].style.transition = " all 2s";
  
 
 setTimeout(about_slideshow, 3000)
 
 }
 
 
 
 //tester()
 function tester()  {
  var x = document.getElementById("menu").parentElement.nodeName;
  console.log(x)
 
 
 }
 
 /* 
 maxwidth = screen.width
 maxheight = screen.height
 console.log(maxwidth)
 console.log(maxheight)
 
 */
 
 navChange()
 // NAV COLOR CHANGE FUNCTION 
 
 function navChange() {
 
    $(window).scroll(function() {    
       var scroll = $(window).scrollTop();
       var width =  $(document). width();
       console.log(width)
       //console.log(scroll)
       
       if (scroll > 300) {
 
          $(".header_container").addClass("navChange");
          
          $(".hamburger").css("color", "black")
 
          if(width > 1000) {
 
             $(".navlist").addClass("grey");
            
          }
          
       } 
       else {
 
          $(".header_container").removeClass("navChange");
 
          $(".hamburger").css("color", "white")
 
          if(width > 1000) {
 
             $(".navlist").removeClass("grey");
            
          }
 
         
          
       }
 
 
    })
 
 }
 
 
 // GALLERY FUNCTIONS BEGINS 
 
   // ALL IMAGES FUNCTION 
 
   function image() {
 
    let image = ["img1","img2","img3","img4","img5" ,"img6","img7","img8","img9"]
    //console.log(image) 
 
    for (let x = 0; x < image.length; x++) {
       var element = document.getElementById(image[x]) ;
       element.style.display = "block" 
       element.style.opacity = "1"
       element.style.transition = "all 2.0s"
       setTimeout(function(){document.getElementById(image[x]).style.transform = "scale(1)"});
       
       
    }
   }
   // RESTURANT FUNCTION 
 
   function restaurant() {
 
    let food = ["img1","img4","img6","img8","img9"] 
    let others = ["img2","img3","img5","img7"] 
    console.log(food)
    
    for (let x = 0; x < food.length; x++) {
 
       var element = document.getElementById(food[x]) ;
       element.style.transform = "scale(0.6)"
       element.style.opacity = "0"
       element.style.transition = "all 1.2s"
       setTimeout(function(){document.getElementById(food[x]).style.display = "none"},1000);
       
       
    }
 
    for (let x = 0; x < others.length; x++) {
 
       var element = document.getElementById(others[x]) ;
       element.style.display = "block" 
       //element.style.transform = "scale(1)"
       element.style.opacity = "1"
       element.style.transition = "all 2.0s"
       setTimeout(function(){document.getElementById(others[x]).style.transform = "scale(1)"});
      
      
       
    }
      
   }
 
 
   function deserts() {
 
    let food = ["img1","img4","img2","img5","img7"] 
    let deserts = ["img3","img6","img8","img9"] 
    console.log(food)
    
    for (let x = 0; x < food.length; x++) {
 
       var element = document.getElementById(food[x]) ;
       element.style.transform = "scale(0.6)"
       element.style.opacity = "0"
       element.style.transition = "all 1.2s"
       setTimeout(function(){document.getElementById(food[x]).style.display = "none"},1000);
       
       //setTimeout(function(){element.style.display = "none" ; return 0 },1000); 
       
    }
 
    for (let x = 0; x < deserts.length; x++) {
 
       var element = document.getElementById(deserts[x]) ;
       element.style.display = "block" 
       element.style.opacity = "1"
       element.style.transition = "all 2.0s"
       setTimeout(function(){document.getElementById(deserts[x]).style.transform = "scale(1)"});
       
       
    }
      
   }
 
 
   function kawab() {
 
    let food = ["img1","img4","img8","img7","img9"] 
    let kawab = ["img2","img3","img5","img6"] 
    
    for (let x = 0; x < food.length; x++) {
 
       var element = document.getElementById(food[x]) ;
       element.style.transform = "scale(0.6)"
       element.style.opacity = "0"
       element.style.transition = "all 1.2s"
       setTimeout(function(){document.getElementById(food[x]).style.display = "none"},1000);
       
       //setTimeout(function(){element.style.display = "none" ; return 0 },1000); 
       
    }
 
    for (let x = 0; x < kawab.length; x++) {
 
       var element = document.getElementById(kawab[x]) ;
       element.style.display = "block"
       element.style.opacity = "1"
       element.style.transition = "all 2.0s"
       setTimeout(function(){document.getElementById(kawab[x]).style.transform = "scale(1)"});
       
       
    }
      
   }
 
   
 //GALLERY FUNCTION ENDS
   
 // ACTIVE CLASS NAVBAR GALLERY 
 
 function gallerynav(id) {
 
    console.log(id)
    var element = document.getElementsByClassName("navlink")
    var add = document.getElementById(id)
    console.log(element)
    for (let x = 0; x < element.length; x++) {
       
       element[x].classList.remove("active") ;
       
    }
 
    add.classList.add("active")
 }
 
 // TESTING MODE => THIS FUNCTION ADD THE CLASS WHICH CHANGE COLOR OF MENU ITEMS
 function nav(id) {
 
   /* console.log(id)
    var element = document.getElementsByClassName("navlist")
    var add = document.getElementById(id)
    console.log(element)
    console.log(add)
 
    for (let x = 0; x < element.length; x++) {
       
       element[x].classList.remove("dynamic") ;
       console.log(element[x])
       
    }
 
    add.classList.add("dynamic")
 
    */
   
 }
 
 
 // VANISH THE THE NAVbar ON CLICKING ONE OF THE MENU OTIONS
 function off() {
    var width =  $(document). width();
    if (width < 1000) {
 
      // $(".navbar").addClass("hide")
 
    }
 
    
 }



 

 
 