

$(document).ready(function(){

  $(".requestQuotePopupClick").click(function(){
    $('.PopUpWrap').load("request-quote-popup.html");
  });
  
});


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
	// const $tabArrow = $('.tab-arrow');

		$tabBtn.click(function(){
			let $this = $(this);
		
			$tabContent.slideUp('slow');
			// $tabArrow.css({'transform': 'rotate(0deg)'});

			if($this.next().is(':visible')){
				$this.next().slideUp('slow');
				// $this.children('.tab-arrow').css({'transform': 'rotate(0deg)'});
			}else{
				$this.next().slideDown('slow');
				// $this.children('.tab-arrow').css({'transform': 'rotate(180deg)'});
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


(function(){

	if($(window).width() <= 992){

		$('.smooth-up1').click(function(){
      $("html, body").animate({ scrollTop: 700 }, 500);
      return false;
    });

    $('.smooth-up2').click(function(){
      $("html, body").animate({ scrollTop: 830 }, 500);
      return false;
    });

    $('.smooth-up3').click(function(){
      $("html, body").animate({ scrollTop: 945 }, 500);
      return false;
    });

    $('.smooth-up4').click(function(){
      $("html, body").animate({ scrollTop: 1085 }, 500);
      return false;
    });
	}

	if($(window).width() >= 992){

		$('.smooth-up1').click(function(){
      $("html, body").animate({ scrollTop: 290 }, 500);
      return false;
    });

    $('.smooth-up2').click(function(){
      $("html, body").animate({ scrollTop: 430 }, 500);
      return false;
    });

    $('.smooth-up3').click(function(){
      $("html, body").animate({ scrollTop: 540 }, 500);
      return false;
    });

    $('.smooth-up4').click(function(){
      $("html, body").animate({ scrollTop: 650 }, 500);
      return false;
    });
	}   

})();


	// $(window).scroll(function(){
  //       if ($(this).scrollTop() > 0) {
  //           $('#backToTop').fadeIn('slow');
  //       } else {
  //           $('#backToTop').fadeOut('slow');
  //       }
  //   });

   
  // script for LightBox

  $('.lightbox-click').click(function() {
  	$(this).next().css({'display':'block'});
  	$(this).next().find('.lightbox-inner-wrap').addClass('lightboxSlide');
  });

  $('.lightbox-close').click(function() {
  	$(this).parents('.lightbox-target').css({'display':'none'});
  	$(this).siblings('.lightbox-inner-wrap').removeClass('lightboxSlide');
  });



  // end script for LightBox



/*================================================
    =           Script For Select Option             =
    ================================================*/


    $('select.rw-select-box').each(function(){
      var $this = $(this), numberOfOptions = $(this).children('option').length;

      $this.addClass('select-hidden');
      $this.wrap('<div class="select"></div>');
      $this.after('<div class="select-styled"></div>');

      var $styledSelect = $this.next('div.select-styled');
      $styledSelect.text($this.children('option').eq(0).text());

      var $list = $('<ul />', {
          'class': 'select-options'
      }).insertAfter($styledSelect);

      for (var i = 0; i < numberOfOptions; i++) {
          $('<li />', {
              text: $this.children('option').eq(i).text(),
              rel: $this.children('option').eq(i).val()
          }).appendTo($list);
      }

      var $listItems = $list.children('li');

      $styledSelect.click(function(e) {
          e.stopPropagation();
          $('div.select-styled.active').not(this).each(function(){
              $(this).removeClass('active').next('ul.select-options').hide();
          });
          $(this).toggleClass('active').next('ul.select-options').toggle();
      });

      $listItems.click(function(e) {
          e.stopPropagation();
          $styledSelect.text($(this).text()).removeClass('active');
          $this.val($(this).attr('rel'));
          $this.trigger('change');
          $list.hide();
          //console.log($this.val());
      });

      $(document).click(function() {
          $styledSelect.removeClass('active');
          $list.hide();
      });

    });


  /*=====  End of Script For Select Option   ====*/



  (function(){

    $('.whole-genome-trans-tcr-nav ul li a').click(function(event){

        if($(this).attr('href') == '#'){
          event.preventDefault();
        }

    });

  })();


  (function($) {

    $.fn.drags = function(opt) {

        opt = $.extend({handle:"",cursor:"move"}, opt);

        if(opt.handle === "") {
            var $el = this;
        } else {
            var $el = this.find(opt.handle);
        }

        return $el.css('cursor', opt.cursor).on("mousedown", function(e) {
            if(opt.handle === "") {
                var $drag = $(this).addClass('draggable');
            } else {
                var $drag = $(this).addClass('active-handle').parent().addClass('draggable');
            }
            var z_idx = $drag.css('z-index'),
                drg_h = $drag.outerHeight(),
                drg_w = $drag.outerWidth(),
                pos_y = $drag.offset().top + drg_h - e.pageY,
                pos_x = $drag.offset().left + drg_w - e.pageX;
            $drag.css('z-index', 1000).parents().on("mousemove", function(e) {
                $('.draggable').offset({
                    top:e.pageY + pos_y - drg_h,
                    left:e.pageX + pos_x - drg_w
                }).on("mouseup", function() {
                    $(this).removeClass('draggable').css('z-index', z_idx);
                });
            });
            e.preventDefault(); // disable selection
        }).on("mouseup", function() {
            if(opt.handle === "") {
                $(this).removeClass('draggable');
            } else {
                $(this).removeClass('active-handle').parent().removeClass('draggable');
            }
        });

    }

  })(jQuery);

  $('.lightbox-img').drags();





});




