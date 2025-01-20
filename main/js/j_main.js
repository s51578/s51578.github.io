$(function () {
  win_info();
  common_motion();
  checkOffset();
  function win_info() {
    win_w = $(window).width();
    win_h = $(window).height();
    scr_t = $(window).scrollTop();
  }

  $(window).scroll(function () {
    win_info();
    common_motion();
	common_motion02();
	common_motion03();
	checkOffset();
  });

  $(window).resize(function () {
    win_info();
    common_motion();
	common_motion02();
	common_motion03();
	checkOffset();
  });

  function common_motion() {
    $(".j_motion").each(function () {
      t = $(this).offset().top;

      if (scr_t >= t - win_h * 1.1) {
        $(this).addClass("on");
      }
    });
  }

  function common_motion02() {
    $(".j_motion02").each(function () {
      t = $(this).offset().top;

      if (scr_t >= t - win_h * 1.2) {
        $(this).addClass("on");
      }
    });
  }
   function common_motion03() {
    $(".j_motion03").each(function () {
      t = $(this).offset().top;

      if (scr_t >= t - win_h * 0.9) {
        $(this).addClass("on");
      }
    });
  }



  $("#j_header").mouseenter(function () {
    $(this).addClass("on4");
  });

  $("#j_header").mouseleave(function () {
    $(this).removeClass("on4");
  });


	/*-- 2024.03.18 - K --*/
	let headerObj = $('#j_header');
	let preScroll = 0;
	
	window.addEventListener('scroll',() => {
		
		let thisScroll = window.scrollY;
		
		if(thisScroll > 0){
			
			headerObj.addClass("scr_on");

			if(preScroll < thisScroll){
			
				headerObj.removeClass('fixed');
			}else{
				
				headerObj.addClass('fixed');
			};
			preScroll = thisScroll;

		}else{
			
			headerObj.addClass('fixed').removeClass("scr_on");
		};
	});
	
	$(".top_btn").on('click', function(){
		
		$("html, body").animate({'scrollTop': 0}, 500, function(){
		
			headerObj.addClass('fixed');
		});

		return false;
	});

/*header*/

  $(".web_btn").mouseenter(function () {
	 $(this).find(".web_depth").stop().slideDown(300);
  });
   $(".web_btn").mouseleave(function () {
	 $(this).find(".web_depth").stop().slideUp(300);
  });


  $("#j_header > .j_hd_con > .hd_right_box > .j_gnb").mouseenter(function () {
	 $(this).parents(".j_hd_con").siblings('.nav_2depth_bg').stop().fadeIn('3000');
  });

  $("#j_header > .j_hd_con > .hd_right_box > .j_gnb").mouseleave(function () {
	 $(this).parents(".j_hd_con").siblings('.nav_2depth_bg').stop().fadeOut('1000');
  });



/*mobile_wrap*/

	$('.nav_btn').click(function () {
		$(this).toggleClass('on');
		$(this).siblings('.lang_box').toggleClass('on');	
		$(this).parents('#j_header').toggleClass('on');
		$(this).parents('.hd_m_box').siblings('.mobile_wrap').toggleClass('active');
		$(this).parents('.hd_m_box').siblings('.hd_logo').toggleClass('active');
		$(this).parents('.hd_m_box').siblings('.mobile_wrap').slideToggle();
	});

	$(".mo_gnb>ul>li>a").click(function () {
	$(this).stop().parent().addClass('on').siblings().removeClass('on');
	$(this).siblings('.depth02').toggleClass("active");
	$(this).stop().parent().siblings('li').children('.depth02').slideUp();
	$(this).stop().siblings(".depth02").stop().slideToggle(500);
	return false;
	
  });

  $(".lang_box").mouseenter(function () {
	 $(this).children("ul").stop().slideDown(300);
  });
   $(".lang_box").mouseleave(function () {
	 $(this).children("ul").stop().slideUp(300);
  });

/*main03*/



/*main04 swiper*/

	    var swiper = new Swiper(".main04_swip", {
		slidesPerView: 3.2,
		loop: true,
		autoHeight : true,
		spaceBetween: 30,
  		autoplay: {
		delay: 6000, // 시간 설정          
		disableOnInteraction: false,},
	    breakpoints: {	
			0: {
            slidesPerView: 1.1,  //브라우저가 768보다 클 때
			spaceBetween: 15,
			},

          768: {
            slidesPerView: 3.2,  //브라우저가 768보다 클 때
            spaceBetween: 30,
          },
        },
    });


//$(document).ready(function() {
//    $(window).scroll(function() {
//        // main02 섹션의 위치를 가져옴
//        var main02Element = $('.main02');
//        
//        // main02 요소가 존재하는지 확인
//        if (main02Element.length > 0) {
//            var main02Offset = main02Element.offset().top;
//
//            // 화면의 상단에서 main02 섹션까지의 거리 계산
//            var scrollDistance = $(window).scrollTop() + $(window).height();
//
//            // main02 섹션 진입 시
//            if (scrollDistance > main02Offset * 0.65) {
//                var no = 1;
//                var intervalSpeed = 2000; // 기본 속도
//
//                // 윈도우 넓이가 767 밑인 경우 속도를 400으로 설정
//                if ($(window).width() <= 767) {
//                    intervalSpeed = 400;
//                }
//
//                // jQuery 애니메이션 및 클래스 추가
//                var tid0 = setInterval(function() {
//                    $('.main01_list>li.listCount' + no).addClass('on');
//                    no = no + 1;
//                    if (no > 4)
//                        clearInterval(tid0); // 반복 초기화
//                }, intervalSpeed);
//
//                // CSS 애니메이션 적용
//                $('.progressbar').addClass('progress-started');
//                $('.mo_progressbar').addClass('mo_progress-started');
//            }
//        }
//    });
//});
	
	
//$(document).ready(function() {
//	 // Define the animation function
//	function startAnimation() {
//		// Reset the 'on' class for all listCount elements
//		$('.main01_list>li.listCount1').removeClass('on');
//		$('.main01_list>li').removeClass('on');
//
//		// Add 'on' class to the first listCount element immediately
//		$('.main01_list>li.listCount1').addClass('on');
//
//		var no = 2; // Start from the second element
//		var intervalSpeed = 2000; // Default speed
//
//		// If the window width is less than 767, set the speed to 3 seconds
//		if ($(window).width() <= 767) {
//			intervalSpeed = 3000;
//		}
//
//		// jQuery animation and class addition for the remaining elements
//		var tid0 = setInterval(function() {
//			$('.main01_list>li.listCount' + no).addClass('on');
//			no++;
//			if (no > 4) {
//				clearInterval(tid0); // Reset the interval
//				if ($(window).width() <= 767){
//						setTimeout(function() {
//						// Re-run the animation after a delay
//						startAnimation();
//					}, 3000); // Delay for 3 seconds before re-running the animation
//				}
//
//			}
//		}, intervalSpeed);
//
//		// Apply CSS animation
//		$('.progressbar').addClass('progress-started');
//		$('.mo_progressbar').addClass('mo_progress-started');
//		
//		
//	}
//
//	// Call the animation function
//	startAnimation();
//
//	// Function for infinite repetition
//	function repeatAnimation() {
//		var repeatInterval = 8000; // Default repeat interval
//
//
//		// If the window width is less than or equal to 767, change the repeat interval to 12 seconds
//		if ($(window).width() <= 767) {
//			repeatInterval = 12000;
//		}
//
//		// Reinitialize and re-execute all functions after the total running time
//		setTimeout(function() {
//			startAnimation();
//			repeatAnimation(); // Call itself to repeat the animation
//		}, repeatInterval);
//	}
//
//	// Call the function for infinite repetition
//	repeatAnimation();
//
//
//});


$(document).ready(function() {
    // Function for starting PC animation
    function startPCAnimation() {
        var repeatInterval = 8000;

        pcAnimation(); // Start PC animation

        // Re-execute PC animation after repeatInterval
        setInterval(pcAnimation, repeatInterval);
    }

    // PC version animation
    function pcAnimation() {
        $('.main01_list>li.listCount1').removeClass('on');
        $('.main01_list>li').removeClass('on');
        $('.main01_list>li.listCount1').addClass('on');

        var no = 2;
        var intervalSpeed = 2000;

        var tid0 = setInterval(function() {
            $('.main01_list>li.listCount' + no).addClass('on');
            no++;
            if (no > 4) {
                clearInterval(tid0);
            }
        }, intervalSpeed);

        $('.progressbar').addClass('progress-started');
    }
	
	startPCAnimation();
	
});
	
$(document).ready(function() {
	
  	// Function for starting mobile animation
    function startMobileAnimation() {
        var repeatInterval2 = 8000;

        mobileAnimation(); // Start PC animation

        // Re-execute PC animation after repeatInterval
        setInterval(mobileAnimation, repeatInterval2);
    }

	
	
	// Mobile version animation
    function mobileAnimation() {
        $('.main01_list_mo>li.mo_listCount1').removeClass('on');
        $('.main01_list_mo>li').removeClass('on');
        $('.main01_list_mo>li.mo_listCount1').addClass('on');

        var no = 2;
        var intervalSpeed2 = 2000;

        var tid1 = setInterval(function() {
            $('.main01_list_mo>li.mo_listCount' + no).addClass('on');
            no++;
            if (no > 4) {
                clearInterval(tid1);
            }
        }, intervalSpeed2);

        $('.mo_progressbar').addClass('mo_progress-started');
    }
	
	startMobileAnimation();

    

});
	
	
	
	
	
	
	
	
	
	

	$('.side_close').click(function () {
		$(this).toggleClass('on');
		$(this).siblings('ul').stop().slideToggle(300);
		return false;
	});


	/*footer 위에 탑 버튼 멈추기*/
	function checkOffset() {
		var a=$(document).height()-$(window).height();
		var b=$('footer').height();

		if (scr_t > a-b) {
		$(".side_bar").css("position","absolute").addClass('on');
		}else {
		$(".side_bar").css("position","fixed").removeClass('on');;
		}
	}
		$(window).scroll(function() {
			// '.sub_visual' 요소의 높이를 가져옵니다
			var sv = $('.sub_visual').height();

			// 현재 스크롤 위치인 'scr_t'가 '.sub_visual'의 높이의 조건에 따라 값을 설정합니다
			var multiplier = ($(window).width() <= 767) ? 1.2 : 1.1;

			if (scr_t > sv * multiplier) {
				// 참이면, CSS position 속성을 "sticky"로 설정하고 '.sub_common'에 'top' 클래스를 추가합니다
				$('.sub_common').css("position", "sticky").addClass('top');
			} else {
				// 거짓이면, CSS position 속성을 "sticky"로 설정하고 '.sub_common'에서 'top' 클래스를 제거합니다
				$(".sub_common").css("position", "sticky").removeClass('top');
			}

			// 현재 스크롤 위치를 가져옵니다
			var scrolltop = $(document).scrollTop();
		});

	let lastScroll02 = 0;

	$(window).on('scroll', function(){
		let scrollTop = $(this).scrollTop();
		if(scrollTop > lastScroll02) {
			//down
			$('.sub_common').addClass('up');
		} else {
			// up
			$('.sub_common').removeClass('top');
		}
		lastScroll02 = scrollTop;
	});



});
