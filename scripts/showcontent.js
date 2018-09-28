$( document ).on("mouseover", ".fs_item", function() {
    $(this).find('.fs_tooltip').css('display', 'block');
  });
  $( document ).on("mouseleave", ".fs_item", function() {
      $(this).find('.fs_tooltip').css('display', 'none');
    });
