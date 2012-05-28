/*
 Custom radio & checkbox jQuery plugin;
 by N0r8 millianorb@gmail.com;
 https://github.com/n0r8/Custom-radio-checkbox
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
(function(a){a.CustomData={elements:a()};a.fn.extend({Custom:function(b){var c=this;a.CustomData.elements=a.CustomData.elements.add(c);var d={customStyleClass:"checkbox",customHeight:"16",enableHover:false};b=a.extend(d,b);var e=function(){var c=a(this).children("input");if(c.prop("checked")){a(this).css("backgroundPosition","0px -"+b.customHeight*3+"px")}else{a(this).css("backgroundPosition","0px -"+b.customHeight+"px")}};var f=function(){var c=a(this);var d=c.children("input");if(d.prop("checked")&&d.is(":checkbox")){c.css("backgroundPosition","0px 0px");d.prop("checked",false).change()}else{if(d.is(":checkbox")){c.css("backgroundPosition","0px -"+b.customHeight*2+"px")}else{c.css("backgroundPosition","0px -"+b.customHeight*2+"px");a('input[name="'+d.attr("name")+'"]').not(d).parent().css("backgroundPosition","0px 0px")}d.prop("checked",true).change()}};var g=function(){a.CustomData.elements.each(function(){var b=a(this);if(b.prop("checked")){b.parent().css("backgroundPosition","0px -"+b.attr("data-height")*2+"px")}else{b.parent().css("backgroundPosition","0px 0px")}})};var h=function(){var b=a(this);b.parent()[!b.prop("disabled")?"bind":"unbind"]({mousedown:e,mouseup:f})[!b.prop("disabled")?"removeClass":"addClass"]("disabled");!b.prop("disabled")?i(b):a("label[for="+b.attr("id")+"]").unbind("mouseenter.label").unbind("mouseout.label")};var i=function(c){var d=c;var e=d.parent();if(b.enableHover&&!d.prop("disabled")){a("label[for="+d.attr("id")+"]").bind({"mouseenter.label":function(){if(d.prop("checked")){e.css("backgroundPosition","0px -"+d.attr("data-height")*3+"px")}else{e.css("backgroundPosition","0px -"+d.attr("data-height")+"px")}},"mouseout.label":function(){if(d.prop("checked")){e.css("backgroundPosition","0px -"+d.attr("data-height")*2+"px")}else{e.css("backgroundPosition","0px 0px")}}})}};return this.each(function(){var c=a(this);if(c.attr("data-init")!="1"){c.attr({"data-init":"1","data-height":b.customHeight}).wrap("<span/>");var d=c.parent().addClass(b.customStyleClass);if(c.prop("checked")){d.css("backgroundPosition","0px -"+b.customHeight*2+"px")}i(c);c.bind({change:g,"custom.refresh":h});if(!c.prop("disabled")){d.parent("label").length?d.bind({mousedown:e}):d.bind({mousedown:e,mouseup:f})}else{d.addClass("disabled")}}})}})})(jQuery)