/*
	Custom radio & checkbox jQuery plugin;
	by N0r8 millianorb@gmail.com;
	usage:
	$('your checkbox or radio selector').Custom({
		customStyleClass:'classForcustomView',
		customHeight:'height of checkbox or radio'
	});
	
	example:
	$('input[type="checkbox"]').Custom({
		customStyleClass:'checkbox',
		customHeight:'16'
	});
*/
(function($){
 
    $.fn.extend({
        
        Custom: function(options) {
 
			var elements = this;
			
            var defaults = {
				customStyleClass:"checkbox",
				customHeight:"16"
            }
                 
            var options =  $.extend(defaults, options);
		
			var pushed = function(){
	
				var element = $(this).children('input');
				if(element.is(':checked')){
					$(this).css('backgroundPosition', "0 -" + options.customHeight*3 + "px");
				}else{
					$(this).css('backgroundPosition', "0 -" + options.customHeight + "px");
				};
			
			};
			
			var check = function(){
				var element = $(this).children('input');
				if(element.is(':checked') && element.attr('type') === 'checkbox'){
					$(this).css('backgroundPosition', '0 0');
					$(this).children('input').attr('checked', false).change();
				}else{
					if(element.attr('type') === 'checkbox'){
						$(this).css('backgroundPosition', "0 -" + options.customHeight*2 + "px");
					}else{
						$(this).css('backgroundPosition', "0 -" + options.customHeight*2 + "px");
						$('input[name='+ element.attr('name')+']').not(element).parent().css('backgroundPosition', '0 0');
					};
					$(this).children('input').attr('checked','checked').change();
				};
			
			};
			
			var clear = function(){
				elements.each(function(){
					if($(this).is(':checked')){
						$(this).parent().css('backgroundPosition', "0 -" + options.customHeight*2 + "px");
					}else{
						$(this).parent().css('backgroundPosition', "0 0");
					};
					
				});
			
			};
			
 
            return this.each(function() {
				$(this).wrap('<span/>');
				var span = $(this).parent().addClass(options.customStyleClass);
				if($(this).is(':checked') === true) {
					span.css('backgroundPosition', "0 -" + (options.customHeight*2) + "px");
				};
				
				$(this).change(clear);
				
				if(!$(this).prop('disabled')){
					span.mousedown(pushed);
					span.mouseup(check);
				}else{
					span.addClass('disabled');
				};

				$(document).mouseup(clear);
             
            });
        }
    });
     
})(jQuery);