$(document).ready(function(){
  // backgroundVideo()
  filmBox()
  photoBox()
   $('.photos').slick({
  })

  // delays the footer menu slide down
  setTimeout(
    function(){
      $("footer ul.start").removeClass("start")
    }, 2000
  )
})

function photoBox() {
  // opening the photos
  $(".container.photography ul .photo a").on("click", function() {
    var photo = $(this).parent().attr("id")
    $(".photos").show().children().show()
  })

  // clicking on the background
  $(".photos").on("click", function(e){
    if($(e.target).hasClass("photo")){
    } else {
      $(this).hide()
    }
  })
  // close button
  $(".photos .close").on("click", function(){
    $(this).parent().hide()
  })
}

function photos(){

}

function filmBox() {
  // FILM MODALS
  // opening the video
  $(".container.film ul .video a").on("click", function() {
    var video = $(this).parent().attr("id")
    $(".videos").show().children(".video."+video).show()
    sizeVideo()
  })

  // clicking on the background
  $(".videos").on("click", function(e){
    if($(e.target).hasClass("video")){
    } else {
      $(this).hide()
    }
  })
  // close button
  $(".videos .video .close").on("click", function(){
    $(this).parent().hide()
  })

  $(window).resize(function(){
    sizeVideo()
  })
}

// sizes the video
function sizeVideo() {
  var videoHeight = $(".content .videos .video").innerHeight(),
    videoWidth = $(".content .videos .video").innerWidth()
  $(".content .videos .video iframe").attr({"width":videoWidth+"px","height":videoHeight+"px"})
}

function backgroundVideo() {
  var min_w = 300,
    vid_w_orig,
    vid_h_orig

  $(function() { // runs after DOM has loaded
      vid_w_orig = parseInt($('body .content .background video').attr('width'))
      vid_h_orig = parseInt($('body .content .background video').attr('height'))
      $(window).resize(function () {
        resizeToCover()
      })
      $(window).trigger('resize')
  })

  function resizeToCover() {

    // set the video viewport to the window size
    $('.background').width($(window).width())
    $('.background').height($(window).height())

    // use largest scale factor of horizontal/vertical
    var scale_h = $(window).width() / vid_w_orig
    var scale_v = $(window).height() / vid_h_orig
    var scale = scale_h > scale_v ? scale_h : scale_v

    // don't allow scaled width < minimum video width
    if (scale * vid_w_orig < min_w)
      {
        scale = min_w / vid_w_orig
      }

    // now scale the video
    $('body .content .background video').width(scale * vid_w_orig)
    $('body .content .background video').height(scale * vid_h_orig)
    // and center it by scrolling the video viewport
    $('.background').scrollLeft(($('video').width() - $(window).width()) / 2)
    $('.background').scrollTop(($('video').height() - $(window).height()) / 2)
  }
}