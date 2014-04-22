(function($, Drupal, window, document, undefined) {
  Drupal.behaviors.anchorlinks = {
    attach: function(context, settings) {
      $("[id*='Btn']").stop(true).on('click', function(e) {
        e.preventDefault();
        $(this).scrolld();
      });
    }
  };
})(jQuery, Drupal, this, this.document);
