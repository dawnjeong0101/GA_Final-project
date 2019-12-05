(function(){

  // var visited = sessionStorage.getItem('qwe');
  //   //  document.getElementsByTagName('body')[0].appendChild(blackScreen);
  //   // hide other elements
  //
  //   if(visited){
  //     console.log('You already visited this website');
  //   }
  //   else {
sessionStorage.clear();
   if(!sessionStorage.getItem('lalala')){

    Array.from(document.querySelectorAll("header, main, footer")).map((el)=>el.style.display = "none");
    document.querySelector("#blackScreen").style.display = "block";

    setTimeout(function(){
    //  document.querySelector("#blackScreen").style.display= 'none';
      Array.from(document.querySelectorAll("header, main, footer")).map((el)=>el.style.display = "block");
      document.querySelector("#blackScreen").style.transform = "translateY(1000px)";
      setTimeout(function(){
        document.querySelector("#blackScreen").style.display = "none";
      },3500);

      //Save visited page Status
      sessionStorage.setItem('lalala', "done");

    },3500);
}

    //Array.from- create array from set of elements
    //map - apply function each element of an array
})();
