
$(document).ready(function () {
  //save boolean
  var pause = false;
  //save items that with number
  var item=  $('.select-item');
  //save blocks
  var block=  $('.bg-block');
  //variable for counter
  var k =0;
  
  
   //interval function works only when pause is false
    setInterval(function () {
        if (!pause) {
            var $this = item.eq(k);
          
          if (item.hasClass('active'))  {
            item.removeClass('active');
          };
           block.removeClass('active').eq(k).addClass('active');
            $this.addClass('active');
          //increase k every 1.5 sec
            k++;
          //if k more then number of blocks on page
            if (k >= block.length ) {
              //rewrite variable to start over
                k = 0;
            }
        }
      //every 1.5 sec
    }, 3000);


  item.hover(function () {
    //remove active class from all except this
        $(this).siblings().removeClass("active");
       $(this).addClass('active');
      //remove active class from all
      block.removeClass('active');
    //add active class to block item which is accounted as index cliked item
      block.eq($(this).index()).addClass('active');
    //on hover stop interval function
        pause = true;
    }, function () {
    
    //when hover event ends, start interval function
        pause = false;
    });

});
