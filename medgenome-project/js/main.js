
(function () {
      var clickItems= document.querySelectorAll('.ngs-inner-tab-btn li a');
      var skillItems = document.querySelectorAll('.ngs-inner-tab-content-wrap');
        	// console.log(skillItems);

        var i = 0;
        for(i; i < clickItems.length; i++){

          clickItems[i].onclick = function(){

            var thisAttr = this.getAttribute('trgt_link');

            var x = 0;
            for(x; x < skillItems.length; x++){

              var skillsAttr = skillItems[x].getAttribute('trgt_item');

              if(thisAttr == skillsAttr){
                skillItems[x].style.display ='inline-block';
              }

              // else if(this.textContent == 'All'){
              //   skillItems[x].style.display = 'inline-block';
              // }

              else{
                skillItems[x].style.display ='none';
              }
              
            }
          }
        }

  })();





$(document).ready(function() {


	$('.hamburger-btn').click(function(){
		$('.site-nav').toggleClass('d_block');
	});


// script for tab
(function(){

	const $tabBtn = $('.mdgo-tab-btn');
	const $tabContent = $('.mdgo-tab-content-wrap');
	const $tabArrow = $('.tab-arrow');

		$tabBtn.click(function(){
			let $this = $(this);
		
			$tabContent.slideUp('slow');
			$tabArrow.css({'transform': 'rotate(0deg)'});

			if($this.next().is(':visible')){
				$this.next().slideUp('slow');
				$this.children('.tab-arrow').css({'transform': 'rotate(0deg)'});
			}else{
				$this.next().slideDown('slow');
				$this.children('.tab-arrow').css({'transform': 'rotate(180deg)'});
			}
			
		});

})();
	
//end script for tab


//script for ngs inner tab 
(function(){

	const $ngsInnerTabBtn = $('.ngs-inner-tab-btn li');
	const $ngsInnerTabBtnAtag = $('.ngs-inner-tab-btn li a');

    if ($(window).width() <= 992){       	
     	$ngsInnerTabBtn.click(function(){
				$(this).appendTo($(this).parent());
 			});
    }
    $ngsInnerTabBtnAtag.each(function(){
	    
	    $(this).click(function(event){
				event.preventDefault();
				$this = $(this);
				$ngsInnerTabBtnAtag.css({'background-color':'#efefef','color':'#000'});
				$this.css({'background-color':'#3bb0d5','color':'#fff'});
				$('.down-Arrow').css({'display':'none'});			
				$this.children('.down-Arrow').css({'display':'block'});

				// const $thisAttr =	$this.attr('trgt_link');
				// console.log($thisAttr);

				// const $ngsTabContentWrap = $('.ngs-inner-tab-content-wrap');

				// $ngsTabContentWrap.each(function(){
				// 	const $contentWrapAttr = $(this).attr('trgt_item');
				// 	console.log($contentWrapAttr);
				// });

			});

    });

})();
//end script for ngs inner tab


});