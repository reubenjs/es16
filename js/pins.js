$(document).ready(function(){
  $(function () {
    $('[data-toggle="popover"]').popover({ trigger: "hover", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title no-pad-bottom"></h3><div class="popover-content"></div></div>' });
    
    $('[data-toggle="popover-title-only"]').popover({ trigger: "hover", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3></div>' });
    
    $(function() {
        $('.btn-campus').matchHeight();
    });
    
  })
});