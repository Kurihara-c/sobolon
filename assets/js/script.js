// ドロワーメニュー開閉
jQuery("#js-drawer-icon").on("click", function (e) {
  e.preventDefault();
  jQuery("#js-drawer-icon").toggleClass("is-checked");
  jQuery("#js-drawer-content").toggleClass("is-checked");
});

jQuery('#js-drawer-content a[href^="#"]').on("click", function (e) {
  jQuery("#js-drawer-icon").removeClass("is-checked");
  jQuery("#js-drawer-content").removeClass("is-checked");
});

// ふわっとサイト表示
$(function () {
  setTimeout(function () {
    $(".u-fadein img").fadeIn(800);
  }, 500);
  setTimeout(function () {
    $(".u-fadein").fadeOut(1000);
  }, 2500);
});
