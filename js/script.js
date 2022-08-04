window.addEventListener('load',function(){

  let searchIcon = document.getElementById("searchIcon");
  let searchBar = document.getElementById("searchBar");
  let searchBtn = document.getElementById("searchBtn");

  searchIcon.addEventListener('click',function(){
    searchIcon.style.display = "none";
    searchBar.style.display="inline-block";
    searchBar.focus();
    searchBar.style.width="196px";
    searchBtn.style.display="inline-block";
  });
  window.addEventListener('click', function(){
    if(document.activeElement != searchBar){
      searchIcon.style.display = "inline-block";
      searchBar.style.width="0";
      searchBar.style.display="none";
      searchBtn.style.display="none";
    }

  });


  //services section shuffle

  function getActiveInShuffle(){
    var current = Array.from(document.getElementsByClassName("active"));
    current = current.filter(function(el){
      if (el.parentElement == allShuffleList[0]){
        return el;
      }
    });
    return current;
  }



  function displayShuffle(str){
      let boxes = Array.from(document.getElementsByClassName("box")); //all boxes
      if (Boolean(str) == false){

        boxes.forEach(function(el){
          let parent = el.parentElement;
          parent.style.display="block"; //display them all
          console.log("all");
        });
      }
      else{ //display only those of that class
        boxes.forEach(function(el){
          let parent = el.parentElement;
          if (parent.className.indexOf(str)!=-1){
            parent.style.display="block";
            console.log(str);
          }
          else{
            parent.style.display="none";
          }
        });
      }
  }

  let allShuffleList = document.getElementsByClassName("shuffle");
  let shuffleItems = Array.from(allShuffleList[0].children);
  shuffleItems.forEach(function(element){
    element.addEventListener('click',function(){
    //get the currently active element
    let current = getActiveInShuffle();
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";

    //switch between objects to be displayed
    let active = getActiveInShuffle();
    let c = shuffleMap.get(active[0].id);
    displayShuffle(c);
  });


});

  const shuffleMap = new Map(
    [
      ["skinshuffle","face"],
      ["bodyshuffle","body"],
      ["hairshuffle","hair"],
      ["makeupfashshuffle","makeup-fash"],
      ["all","all"]

    ]
  );




});
