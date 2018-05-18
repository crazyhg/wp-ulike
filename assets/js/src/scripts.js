/* Run :) */
;(function($){

    // on document ready
    $(function(){
        // Upgrading 'WordpressUlike' datasheets when new DOM has been inserted
        $(this).bind('DOMNodeInserted', function(e) {
            $(".wpulike").WordpressUlike();
        });
    });
    
    // init WordpressUlike
    $(".wpulike").WordpressUlike();

    // removes "empty" paragraphs
    $('p').filter(function () { return this.innerHTML == "" }).remove();

    var $wpUlikeAjax = $('.wp-ulike-ajax');
    if ($wpUlikeAjax.length) {
        var postId = $wpUlikeAjax.data('post-id');
        $.ajax({
            type:'POST',
            url: wp_ulike_params.ajax_url,
            data: {
                action:'wp_ulike_ajax_output',
                post_id: postId,
            },
            success: function(data) {
                $wpUlikeAjax.each(function() {
                    $(this).html(data);
                });
            }
        });
    }
})( jQuery );
