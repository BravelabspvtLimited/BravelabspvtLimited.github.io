

$(document).ready(function(){

  $(".requestQuotePopupClick").click(function(){
    $('.PopUpWrap').load("request-quote-popup.html");
  });



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

            if(thisAttr == 'sequencing' || thisAttr == 'bioinformaticsAnalysis' || thisAttr == 'libraryPrep'){
              $('.ngs-service-figure1').css({'display':'none'});
            }else{
              $('.ngs-service-figure1').css({'display':'block'});

            }

          }
        }

  })();




(function(){

    window.onload = function(){
      // alert('yes');
      var $jobCartWrap = $('.job-cart-wrap');

      $jobCartWrap.each(function(){

        var $jobTitleText = $(this).find('.title').text();
        var $jobArea = $(this).find('.job-area').text();

        // console.log($jobTitleText);

        var $setAttrValJobTitle = $(this).attr('job_title', $jobTitleText.replace(/ +/g, "").toLowerCase());

        var $setAttrValJobArea = $(this).attr('job_area', $jobArea.replace(/ +/g, "").toLowerCase());

        // console.log($setAttrValJobArea.attr('job_area'));

        var $setAttrJobTitleArea = $(this).attr('job_title_area', $setAttrValJobTitle.attr('job_title') + $setAttrValJobArea.attr('job_area'));

        console.log($setAttrJobTitleArea.attr('job_title_area')); 

      });

    };

})();



  (function () {
    
      var clickItems = document.querySelectorAll('.sort-department .select-options li');

      var skillItems = document.querySelectorAll('.job-cart-wrap');

        var i = 0;
        for(i; i < clickItems.length; i++){

          clickItems[i].onclick = function(){

            var thisContent = this.textContent;
            // console.log(thisContent);
            var setAttr = this.setAttribute('rel', thisContent.replace(/ +/g, "").toLowerCase());

            var thisAttr = this.getAttribute('rel');
            // console.log(thisAttr);

            var x = 0;
            for(x; x < skillItems.length; x++){

              var skillsAttr = skillItems[x].getAttribute('job_title');

              // console.log(skillsAttr);              
              if(thisAttr == skillsAttr){
                skillItems[x].style.display ='block';
              }else if(thisAttr == 'department'){
                skillItems[x].style.display = 'block';

              }else{
                skillItems[x].style.display ='none';
              }
              
            }
          }
        }

  })();


   (function () {
    
      var clickItems = document.querySelectorAll('.sort-country .select-options li');

      var skillItems = document.querySelectorAll('.job-cart-wrap');

        var i = 0;
        for(i; i < clickItems.length; i++){

          clickItems[i].onclick = function(){

            var thisContent = this.textContent;
            // console.log(thisContent);
            var setAttr = this.setAttribute('rel', thisContent.replace(/ +/g, "").toLowerCase());

            var thisAttr = this.getAttribute('rel');
            // console.log(thisAttr);

            var x = 0;
            for(x; x < skillItems.length; x++){
            
              var jobAreaAttrCh = skillItems[x].getAttribute('job_area');

              if(thisAttr == jobAreaAttrCh){
                skillItems[x].style.display ='block';
              }else if(thisAttr == 'country'){
                skillItems[x].style.display = 'block';

              }else{
                skillItems[x].style.display ='none';
              }
              
            }
          }
        }

  })();


});



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

        return $el.css('cursor', opt.cursor).bind("mousedown", function(e) {
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
            $drag.css('z-index', 1000).parents().bind("mousemove", function(e) {
                $('.draggable').offset({
                    top:e.pageY + pos_y - drg_h,
                    left:e.pageX + pos_x - drg_w
                }).bind("mouseup", function() {
                    $(this).removeClass('draggable').css('z-index', z_idx);
                });
            });
            e.preventDefault(); // disable selection
        }).bind("mouseup", function() {
            if(opt.handle === "") {
                $(this).removeClass('draggable');
            } else {
                $(this).removeClass('active-handle').parent().removeClass('draggable');
            }
        });

    }

  })(jQuery);

  $('.lightbox-img').drags();


  (function(){

    const $formInput = $('.inputEmpt');
    const $formInquiry = $('.form-control textarea');

      $formInput.focusin(function(){
        var $this = $(this);
        $this.parent().addClass('onfocus');
        $this.siblings('.fm-mandatory').css({'display':'none'});
        $this.siblings('.error-alert').css({'display':'none'});
        $this.removeAttr('placeholder');
      });
      $formInquiry.focusin(function(){
        var $this = $(this);
        $this.parent().addClass('onfocus');
        $this.siblings('.fm-mandatory').css({'display':'none'});  
        $this.removeAttr('placeholder');
      });

      $formInput.focusout(function(){
        var $this = $(this);
        $this.parent().removeClass('onfocus');

        if($this.val() == ''){
          $this.siblings('.fm-mandatory').css({'display':'block'});
        }else{
          $this.siblings('.fm-mandatory').css({'display':'none'});
        }  
        $this.attr('placeholder',$this.attr('name'));
      });
      $formInquiry.focusout(function(){
        var $this = $(this);
        $this.parent().removeClass('onfocus');  
        $this.attr('placeholder',$this.attr('name'));
      });

      $('.select-styled').click(function(){
        var $this = $(this); 
        $this.parents('.select-control-wrap').find('.fm-mandatory').css({'display':'none'});
        $this.parents('.select-control-wrap').find('.error-alert').css({'display':'none'});

      });

      $('.select-options li').click(function(){
        var $this = $(this);
        if($this.text() === 'Interest'){
          $this.parents('.select-control-wrap').find('.fm-mandatory').css({'display':'block'});
        }
      });


      // const $mobile = $('');
      const $submitError = $('.submit-error-text');
      const $successMessage = $('.success-message');

      const $email = $('.form-control input[name="Email"]');
      const $emailRegex = /^\b[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,4}\b$/;


      $( ".validate-form" ).submit(function(event) {
        
        $formInput.each(function(){

          let $this = $(this);
          if($this.val() == ''){
            $this.siblings('.error-alert').css({'display':'block'});
            event.preventDefault();  
          }else{
            $this.siblings('.error-alert').css({'display':'none'});
            event.preventDefault();
          }

        });

          if(!$email.val().match($emailRegex)){
            $email.siblings('.error-alert').css({'display':'block'});
            event.preventDefault();          
          }
          
          if($('.select-styled').text() === 'Interest'){
            $('.select-styled').parents('.select-control-wrap').find('.error-alert').css({'display':'block'});
            event.preventDefault();          
          }else{
            $('.select-styled').parents('.select-control-wrap').find('.error-alert').css({'display':'none'});
            event.preventDefault();
          }        

      });


  })();



  // ========= Script For Careers Page =======
 


(function(){

  const $jobCartCollapseBtn = $('.collapse-btn');
  // const $collapseJobCart = $('.collapseCart');    

   $jobCartCollapseBtn.click(function(){

    let $this = $(this);

    const $jobCart = $this.parents('.job-title-box').siblings('.collapseCart');

    if($jobCart.is(':visible')){
        $jobCart.slideUp('slow');
        $this.children('.addplus').css({'display':'block'});
      }else{
        $jobCart.slideDown('slow');
        $this.children('.addplus').css({'display':'none'});
      }

   });

})();


(function(){

  const $clickPopUp = $('#trgtBodalBox01');
  const $modal = $('#modalBox01');
  const $close = $('.close');

  $clickPopUp.click(function(){
    $modal.css({'display':'block'});
  });
  $close.click(function(){
    $modal.css({'display':'none'});
  });
  
})();


(function(){

  const $clickPopUp = $('#trgtBodalBox02');
  const $modal = $('#modalBox02');
  const $close = $('.close');

  $clickPopUp.click(function(){
    $modal.css({'display':'block'});
  });
  $close.click(function(){
    $modal.css({'display':'none'});
  });
  
})();


(function(){

  const $clickPopUp = $('#trgtBodalBox03');
  const $modal = $('#modalBox03');
  const $close = $('.close');

  $clickPopUp.click(function(){
    $modal.css({'display':'block'});
  });
  $close.click(function(){
    $modal.css({'display':'none'});
  });
  
})();


(function(){

  const $clickPopUp = $('#trgtBodalBox04');
  const $modal = $('#modalBox04');
  const $close = $('.close');

  $clickPopUp.click(function(){
    $modal.css({'display':'block'});
  });
  $close.click(function(){
    $modal.css({'display':'none'});
  });
  
})();


(function(){

  const $clickPopUp = $('#trgtBodalBox05');
  const $modal = $('#modalBox05');
  const $close = $('.close');

  $clickPopUp.click(function(){
    $modal.css({'display':'block'});
  });
  $close.click(function(){
    $modal.css({'display':'none'});
  });
  
})();

(function(){

  const $clickPopUp = $('#trgtBodalBox06');
  const $modal = $('#modalBox06');
  const $close = $('.close');

  $clickPopUp.click(function(){
    $modal.css({'display':'block'});
  });
  $close.click(function(){
    $modal.css({'display':'none'});
  });
  
})();




(function(){

  const $mdgJobType = $('.mdgJobType li');
  const $jobroles = $('.roles');

    $mdgJobType.each(function(){

      const $this = $(this);

      $this.click(function(){
        $(this).toggleClass('unselect-type');

        const $typeText = $(this).text().replace(/ +/g, "").toLowerCase();
        // console.log($typeText);

        $jobroles.each(function(){
         const $rolesAttr = $(this).attr('rolesTrgt');
         // console.log($rolesAttr);
          if($typeText == $rolesAttr){
            $(this).toggleClass('roles-d-none');
          }

        });

      });

    });


})();



// ========= Script For Careers Page =======



});



