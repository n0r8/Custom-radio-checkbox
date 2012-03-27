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
			
			
			/*Дефолтные значения параметров*/
            var defaults = {
				customStyleClass:"checkbox",
				customHeight:"16"
            }
            
			/*Заменяем дефолтные опции на переданные если таковые есть*/
            var options =  $.extend(defaults, options);
		
			/*Вид при нажатии на активный и неактивный элементы*/
			var pushed = function(){
	
				var element = $(this).children('input');
				if(element.is(':checked')){
					/*смещения в спрайте*/
					$(this).css('backgroundPosition', "0px -" + options.customHeight*3 + "px"); 
				}else{
					$(this).css('backgroundPosition', "0px -" + options.customHeight + "px");
				};
			
			};
			
			/*Отмечаем нажатый елемент все остальные сбрасываем, если они в групе(radio)*/
			var check = function(){
				var element = $(this).children('input');
				if(element.is(':checked') && element.attr('type') === 'checkbox'){/*Отмеченный чекбокс*/
					$(this).css('backgroundPosition', '0px 0px');
					$(this).children('input').attr('checked', false).change();/*Меняем атрибут на неотмеченный и вызываем событие смены состояния элемента*/
				}else{
					if(element.attr('type') === 'checkbox'){/*Неотмеченный чекбокс*/
						$(this).css('backgroundPosition', "0px -" + options.customHeight*2 + "px");
					}else{
						/*Радиобатоны*/
						$(this).css('backgroundPosition', "0px -" + options.customHeight*2 + "px");
						$('input[name='+ element.attr('name')+']').not(element).parent().css('backgroundPosition', '0px 0px');
					};
					
					$(this).children('input').attr('checked','checked').change(); 
				};
			
			};
			
			
			/*Обновление картинки при клике по лейблу и загрузке документа*/
			var update = function(){
				elements.each(function(){ /*Проходим по всем елементам и проверяем их состояние*/
					if($(this).is(':checked')){
						$(this).parent().css('backgroundPosition', "0px -" + options.customHeight*2 + "px");
					}else{
						$(this).parent().css('backgroundPosition', "0px 0px");
					};
				});
			};
			
 
            return this.each(function() {
				$(this).wrap('<span/>');/*Оборачиваем в <span></span>*/
				var span = $(this).parent().addClass(options.customStyleClass);/*Приписываем класс оформления переданный в параметрах*/
				/*Задаем картинку еси элемент отмечен*/
				if($(this).is(':checked') === true) {
					span.css('backgroundPosition', "0px -" + (options.customHeight*2) + "px");
				};
				
				/*Бинд на изменение состояния элемента*/
				$(this).change(update);
				
				if(!$(this).prop('disabled')){
					/*Бинд функция на span*/
					span.mousedown(pushed);
					span.mouseup(check);
				}else{
					/*Добавление класса если элемент неактивен*/
					span.addClass('disabled');
				};
				
				/*Обновляем состояния (клика по лейблу)*/
				$(document).mouseup(update);
             
            });
        }
    });
     
})(jQuery);