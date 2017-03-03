// JavaScript Document
$(".myherobtn").click(function() {
    $('html,body').animate({
        scrollTop: $("#wewe").offset().top},
        'slow');
});

$('body').on('hidden.bs.modal', '.modal', function () {
$('video').trigger('pause');
});

$('#myModal').on('show.bs.modal', function () {
  $('#sampleMovie')[0].play()
})

$('.myLink').on('click', function (e) {
    e.stopPropagation();
});


/* File: fixed.js
 * Fix shifting fixed navbar to the right 
 */

    $(document).ready(function(){
        $(window).load(function(){
            var oldSSB = $.fn.modal.Constructor.prototype.setScrollbar;
            $.fn.modal.Constructor.prototype.setScrollbar = function () 
            {
                oldSSB.apply(this);
                if(this.bodyIsOverflowing && this.scrollbarWidth) 
                {
                    $('.navbar-fixed-top, .navbar-fixed-bottom').css('padding-right', this.scrollbarWidth);
                }       
            }

            var oldRSB = $.fn.modal.Constructor.prototype.resetScrollbar;
            $.fn.modal.Constructor.prototype.resetScrollbar = function () 
            {
                oldRSB.apply(this);
                $('.navbar-fixed-top, .navbar-fixed-bottom').css('padding-right', '');
            }
        });
    });