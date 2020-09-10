$( document ).ready(function() {

let moreLessToggle = 0;
  $(".moreLessButton").click(function() {
    if (moreLessToggle === 0) {
      $(".selectors").animate({height: '200px'});
      moreLessToggle = 1;
      $(this).text("Hide options");
    } else {
      $(".selectors").animate({height: "100px"});
      moreLessToggle = 0;
      $(this).text("Show more options");
    }
 
});

});
    
 

  /* drawBarChart(data, options, element) {

  }; */
  
  
 
