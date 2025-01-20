$(function () {
  // 변수 선언에 var 키워드 추가
  var win_w, win_h, scr_t;

  win_info();

  function win_info() {
    win_w = $(window).width();
    win_h = $(window).height();
    scr_t = $(window).scrollTop();
  }

  $(window).scroll(function () {
    win_info();
    scrollSpy(); // scrollSpy 함수 호출
  });

  $(window).resize(function () {
    win_info();
    scrollSpy(); // scrollSpy 함수 호출
  });

  function scrollSpy() {
    var viewH = $(window).height() / 3; // 지역 변수로 변경
    var obj1 = $("#j_box01").offset().top;
    var obj2 = $("#j_box02").offset().top;
    var obj3 = $("#j_box03").offset().top;
    var obj4 = $("#j_box04").offset().top;

    // 항상 첫 번째 figure에 'view' 클래스가 있도록 설정
    $(".stick_box figure").removeClass("view");
    $(".stick_box figure").eq(0).addClass("view");

    // 스크롤 위치에 따라 다른 figure에 'view' 클래스를 설정
    if (scr_t >= obj2 - viewH && scr_t < obj3 - viewH) {
      $(".stick_box figure").eq(1).addClass("view");
    } else if (scr_t >= obj3 - viewH && scr_t < obj4 - viewH) {
      $(".stick_box figure").eq(2).addClass("view");
    } else if (scr_t >= obj4 - viewH) {
      $(".stick_box figure").eq(3).addClass("view");
    }

    // 'view' 클래스에 따라 비디오 재생 제어
    $(".stick_box figure").each(function (index) {
      var video = $(this).find("video").get(0); // 비디오 요소 가져오기
      if ($(this).hasClass("view")) {
        if (video) video.play(); // 'view' 클래스가 있으면 재생
      } else {
        if (video) {
          video.pause(); // 'view' 클래스가 없으면 일시정지
          video.currentTime = 0; // 비디오 시간 초기화
        }
      }
    });
  }
});