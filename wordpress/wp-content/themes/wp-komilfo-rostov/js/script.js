$(function(){$.datepicker.regional.ru={closeText:"Закрыть",prevText:"&#x3c;Пред",nextText:"След&#x3e;",currentText:"Сегодня",monthNames:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],monthNamesShort:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],dayNames:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"],dayNamesShort:["вск","пнд","втр","срд","чтв","птн","сбт"],dayNamesMin:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],weekHeader:"Нед",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},$.datepicker.setDefaults($.datepicker.regional.ru),$("a.fancy").fancybox();var e=$("body");e.on("mouseenter","ul > .menu-item > a",function(){jQuery(this).stop().animate({backgroundColor:"rgba(255, 255, 255, .15)"},250)}).on("mouseleave","ul.menu > .menu-item",function(){jQuery(this).children("a").stop().animate({backgroundColor:"transparent"},400)}).on("mouseenter","ul.menu > .menu-item > ul li",function(){jQuery(this).find("a").stop().animate({backgroundColor:"transparent"},300)}).on("mouseleave","ul.menu > .menu-item > ul li",function(){jQuery(this).find("a").stop().animate({backgroundColor:"rgba(255, 255, 255, .15)"},300)})}),$(document).ready(function(e){e.fn.my_cycle_slideshow=function(t){return my_defaults={effect:"fade"},my_settings=e.extend({},my_defaults,t),this.each(function(){var t=e(this),i=e("li",t);i.length>1&&t.cycle({fx:my_settings.effect,next:".next2",prev:".prev2"})})},e("div.single-gallery-image-container").length>0&&e("div.single-gallery-image-container > div.slideshow_container > ul.slideshow li").length>1&&($x=e("div.single-gallery-image-container > div.slideshow_container > ul.slideshow").attr("data-transition"),console.log($x),e("div.single-gallery-image-container > div.slideshow_container > ul.slideshow").my_cycle_slideshow({effect:$x}))}),$(document).ready(function(e){if(e("ul.cat-menu").length){var t=e("ul.cat-menu"),i=t.find("li"),n=i.find("a");n.click(function(){i.find(".active").removeClass("active"),e(this).find("span.arrow-down").addClass("active")}),animatedcollapse.init(),animatedcollapse.addDiv("categories","fade=0,speed=400,group=srv,hide=1"),animatedcollapse.addDiv("archives","fade=0,speed=400,group=srv,hide=1"),animatedcollapse.ontoggle=function(e,t,i){}}if(e("ul.j-load-all").length){var a=e("ul.j-load-all"),o=a.find("li"),l=o.find("a");a.find("a:first").addClass("active"),l.click(function(){o.find(".active").removeClass("active"),e(this).addClass("active")})}0==e("ul.j-default a.active").length&&e("ul.j-default a:first").addClass("active"),e("div#top-menu ul.menu ul").css({display:"none"}),e("div#top-menu ul.menu li").hover(function(){e(this).find("ul:first").css({visibility:"visible",display:"none"}).show(200)},function(){e(this).find("ul:first").css({visibility:"hidden"})});var s=e(".menu-main-menu-container").children("ul"),d='<option value="" selected>Навигация</option>';if(s.on("mouseenter","li",function(){var t=e(this),i=t.children("ul");i.length&&t.addClass("hover"),i.hide().stop(!0,!0).fadeIn(200)}).on("mouseleave","li",function(){e(this).removeClass("hover").children("ul").stop(!0,!0).fadeOut(50)}),s.find("li").each(function(){var t=e(this),i=t.children("a"),n=t.parents("ul").length-1,a="",o=i.html();if(o=o.replace(/<span>.*<\/span>/g,""),n)for(;n>0;)a+="--",n--;d+='<option value="'+i.attr("href")+'">'+a+" "+o+"</option>"}).end().after('<select class="responsive-nav">'+d+"</select>"),e(".responsive-nav").on("change",function(){window.location=e(this).val()}),e("#slider").length){var r={effects:"random",directionNav:!1,directionNavHide:!1,controlNav:!1,controlNavThumbs:!1,pauseOnHover:!0};"undefined"!=typeof r?e("#slider").nivoSlider(r):e("#slider").nivoSlider()}e(".tooltip-bottom").length&&e(".tooltip-bottom").each(function(){e(this).tipTip({maxWidth:"auto"})}),e(".tooltip-top").length&&e(".tooltip-top").each(function(){e(this).tipTip({maxWidth:"auto",defaultPosition:"top"})}),e(".tooltip-left").length&&e(".tooltip-left").each(function(){e(this).tipTip({maxWidth:"auto",defaultPosition:"left"})}),e(".tooltip-right").length&&e(".tooltip-right").each(function(){e(this).tipTip({maxWidth:"auto",defaultPosition:"right"})}),e(".testimonial-carousel").length&&e("ul.testimonial-carousel").jcarousel({scroll:1}),e("table").each(function(){e(this).find("tbody > tr:odd").addClass("odd"),e(this).find("tbody > tr:even").addClass("even"),e(this).find("thead tr").removeClass("even")}),e(".placeholder").each(function(){e(this).focus(function(){this.value==this.title&&e(this).val("")}).blur(function(){""==this.value&&e(this).val(this.title)})})});
//# sourceMappingURL=maps/script.js.map