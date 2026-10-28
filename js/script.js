$(document).ready(function () {
  let doorOpen = false;

  // 기본 나비
  let butterfly1 = 1;

  // 왼쪽 나비
  let butterfly2 = 1;

  // 오른쪽 나비
  let butterfly3 = 1;

  // 왼쪽 꽃
  let flowerNumber = 1;

  // 오른쪽 꽃
  let rightNumber = 1;

  // 물 클릭 파동
  let waterNumber = 1;

  // 첫 번째 나비
  $(".butterfly-1").on("click", function () {
    if (butterfly1 === 1) {
      $(".butterfly-1 .butterfly-img").css("animation-name", "big1");
      $(".butterfly-1 .light-img").css("animation-name", "light1");

      butterfly1 = 2;
    } else {
      $(".butterfly-1 .butterfly-img").css("animation-name", "big2");
      $(".butterfly-1 .light-img").css("animation-name", "light2");

      butterfly1 = 1;
    }
  });

  // 두 번째 나비
  $(".butterfly-2").on("click", function () {
    if (butterfly2 === 1) {
      $(".butterfly-2 .butterfly-img").css("animation-name", "big1");
      $(".butterfly-2 .light-img").css("animation-name", "light1");

      butterfly2 = 2;
    } else {
      $(".butterfly-2 .butterfly-img").css("animation-name", "big2");
      $(".butterfly-2 .light-img").css("animation-name", "light2");

      butterfly2 = 1;
    }
  });

  // 세 번째 나비
  $(".butterfly-3").on("click", function () {
    if (butterfly3 === 1) {
      $(".butterfly-3 .butterfly-img").css("animation-name", "big1");
      $(".butterfly-3 .light-img").css("animation-name", "light1");

      butterfly3 = 2;
    } else {
      $(".butterfly-3 .butterfly-img").css("animation-name", "big2");
      $(".butterfly-3 .light-img").css("animation-name", "light2");

      butterfly3 = 1;
    }
  });

  // 한옥 문 열고 닫기
  $(".hanok").on("click", function () {
    if (doorOpen === false) {
      $(".poster").addClass("open");

      $(".door-sound")[0].currentTime = 0;
      $(".door-sound")[0].play();

      $(".poster-bottom").html(
        "물 위로 마우스를 움직여 빛의 반사를 만나보세요",
      );

      doorOpen = true;
    } else {
      $(".poster").removeClass("open");

      $(".poster-bottom").html("한옥을 클릭해 빛을 깨워보세요");
      $(".water-view, .water-light").css("opacity", 0);

      doorOpen = false;
    }
  });

  // 왼쪽 꽃
  $(".flower-left").on("click", function () {
    if (flowerNumber === 1) {
      $(".flower-left").css("animation-name", "left-move1");

      $(".petal-left").css("animation-name", "flower1");
      $(".petal-left img").css("animation-name", "petal1");

      $(".flower-wave-left").css("animation-name", "flower-water1");

      flowerNumber = 2;
    } else {
      $(".flower-left").css("animation-name", "left-move2");

      $(".petal-left").css("animation-name", "flower2");
      $(".petal-left img").css("animation-name", "petal2");

      $(".flower-wave-left").css("animation-name", "flower-water2");

      flowerNumber = 1;
    }
  });

  // 오른쪽 꽃
  $(".flower-right").on("click", function () {
    if (rightNumber === 1) {
      $(".flower-right").css("animation-name", "right-move1");

      $(".petal-right").css("animation-name", "right1");
      $(".petal-right img").css("animation-name", "petal1");

      $(".flower-wave-right").css("animation-name", "flower-water1");

      rightNumber = 2;
    } else {
      $(".flower-right").css("animation-name", "right-move2");

      $(".petal-right").css("animation-name", "right2");
      $(".petal-right img").css("animation-name", "petal2");

      $(".flower-wave-right").css("animation-name", "flower-water2");

      rightNumber = 1;
    }
  });

  // 물 클릭: 파동
  $(".water").on("click", function (event) {
    let waterX = event.pageX;
    let waterY = event.pageY - $(window).height() * 0.66;

    $(".water-wave").css("left", waterX + "px");
    $(".water-wave").css("top", waterY + "px");

    if (waterNumber === 1) {
      $(".water-wave").css("animation-name", "water1");
      waterNumber = 2;
    } else {
      $(".water-wave").css("animation-name", "water2");
      waterNumber = 1;
    }
  });

  // 물 위에서 마우스를 움직일 때
  $(document).on("mousemove", function (event) {
    let mouseX = event.pageX;
    let mouseY = event.pageY - $(window).height() * 0.66;

    $(".water-light").css("left", mouseX + "px");
    $(".water-light").css("top", mouseY + "px");

    if (doorOpen === false) {
      $(".water-view, .water-light").css("opacity", 0);
    } else if (mouseY < 0) {
      $(".water-view, .water-light").css("opacity", 0);
    } else if (mouseY > $(".water").height()) {
      $(".water-view, .water-light").css("opacity", 0);
    } else {
      $(".water-view").css("opacity", 1);
      $(".water-light").css("opacity", 0.5);

      $(".water-cut").css(
        "mask-image",
        `radial-gradient(
          ellipse 290px 180px at ${mouseX}px ${mouseY}px,
          black 0%,
          rgba(0, 0, 0, 0.85) 30%,
          rgba(0, 0, 0, 0.28) 70%,
          transparent 100%
        )`,
      );
    }
  });
});
