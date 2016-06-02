$(function () {
  
  $.datepicker.regional['ru'] = {
    closeText: 'Закрыть',
    prevText: '&#x3c;Пред',
    nextText: 'След&#x3e;',
    currentText: 'Сегодня',
    monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
    'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
    monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
    'Июл','Авг','Сен','Окт','Ноя','Дек'],
    dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
    dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
    dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
    weekHeader: 'Нед',
    dateFormat: 'dd.mm.yy',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
  };
  
  $.datepicker.setDefaults($.datepicker.regional['ru']);

  
  

  $("a.fancy").fancybox();

  var $body = $('body');

  $body
  .on('mouseenter', 'ul > .menu-item > a', function () {
    jQuery(this).stop().animate({
      backgroundColor: "rgba(255, 255, 255, .15)"
    }, 250);
  })
  .on('mouseleave', 'ul.menu > .menu-item', function () {
    jQuery(this).children('a').stop().animate({
      backgroundColor: "transparent"
    }, 400);
  })
  .on('mouseenter', 'ul.menu > .menu-item > ul li', function () {
    jQuery(this).find('a').stop().animate({
      backgroundColor: "transparent"
    }, 300);
  })
  .on('mouseleave', 'ul.menu > .menu-item > ul li', function () {
    jQuery(this).find('a').stop().animate({
      backgroundColor: "rgba(255, 255, 255, .15)"
    }, 300);
  }) 

})


$(document).ready(function($){
  
  $.fn.my_cycle_slideshow = function(args){
    my_defaults = {
      effect:'fade'
    }
    my_settings = $.extend({}, my_defaults, args);
	
    return this.each(function(){
      var container = $(this),
      items     = $("li",container);
      if(items.length > 1) {
        container.cycle({
          fx: my_settings.effect,
          next: '.next2',
          prev: '.prev2'
        });
      }
    });
  }
	
  if( $("div.single-gallery-image-container").length > 0){
    if( $("div.single-gallery-image-container > div.slideshow_container > ul.slideshow li").length > 1){
      $x = $("div.single-gallery-image-container > div.slideshow_container > ul.slideshow").attr("data-transition");
      console.log($x);
      $("div.single-gallery-image-container > div.slideshow_container > ul.slideshow").my_cycle_slideshow({
        effect:$x
      });

    }
  }
  
});

  

$(document).ready(function($){
	
  if($("ul.cat-menu").length){
    var t_container = $("ul.cat-menu"),
    t_items = t_container.find("li"),
    t_anchor = t_items.find("a");
    t_anchor.click(function(){
      t_items.find('.active').removeClass('active');
      $(this).find("span.arrow-down").addClass("active");        
    });
	   
    //For Top slider menu at blog page and single post page
    animatedcollapse.init();	  
    //For Top slider menu at blog page and single post page
    animatedcollapse.addDiv('categories', 'fade=0,speed=400,group=srv,hide=1')
    animatedcollapse.addDiv('archives', 'fade=0,speed=400,group=srv,hide=1')
    animatedcollapse.ontoggle=function($, divobj, state){ //fires each time a DIV is expanded/contracted
    //$: Access to jQuery
    //divobj: DOM reference to DIV being expanded/ collapsed. Use "divobj.id" to get its ID
    //state: "block" or "none", depending on state
    }
		
  }
	
  //tpl-catalog
  if($('ul.j-load-all').length){
    var container = $('ul.j-load-all'),
    m_li = container.find("li"),
    m_item = m_li.find("a");
    container.find("a:first").addClass('active');
    m_item.click(function(){
      m_li.find('.active').removeClass('active');
      $(this).addClass("active");
    });
  }
		
  if($('ul.j-default a.active').length == 0){
    $('ul.j-default a:first').addClass('active');
  }
		
  
	
  //Menu
  $("div#top-menu ul.menu ul").css({
    display: "none"
  }); // Opera Fix
  $("div#top-menu ul.menu li").hover(function(){
    $(this).find('ul:first').css({
      visibility: "visible",
      display: "none"
    }).show(200);
  },function(){
    $(this).find('ul:first').css({
      visibility: "hidden"
    });
  });
  //Menuend
	
  // Responsive Menu
  var $mainNav    = $('.menu-main-menu-container').children('ul'),
  optionsList = '<option value="" selected>Навигация</option>';
	
  // Regular nav
  $mainNav.on('mouseenter', 'li', function() {
    var $this    = $(this),
    $subMenu = $this.children('ul');
    if( $subMenu.length ) $this.addClass('hover');
    $subMenu.hide().stop(true, true).fadeIn(200);
  }).on('mouseleave', 'li', function() {
    $(this).removeClass('hover').children('ul').stop(true, true).fadeOut(50);
  });

  // Responsive nav
  $mainNav.find('li').each(function() {
    var $this   = $(this),
    $anchor = $this.children('a'),
    depth   = $this.parents('ul').length - 1,
    indent  = '',
    text = $anchor.html();
    text = text.replace(/<span>.*<\/span>/g, '');

    if( depth ) {
      while( depth > 0 ) {
        indent += '--';
        depth--;
      }
    }
			
    optionsList += '<option value="' + $anchor.attr('href') + '">' + indent + ' ' + text + '</option>';
  }).end()
  .after('<select class="responsive-nav">' + optionsList + '</select>');

  $('.responsive-nav').on('change', function() {
    window.location = $(this).val();
  });
  //Responsive menu end	
	
  //Slider
  if($('#slider').length){
    
    var global_slider_settings = { 
      effects:'random', 
      directionNav: false, //!
      directionNavHide:false,
      controlNav: false, //!
      controlNavThumbs: false, //!
      pauseOnHover: true
    //manualAdvance:true
    };
    
		
    if(typeof  global_slider_settings != 'undefined') {
      
      $('#slider').nivoSlider(global_slider_settings);
    }else{
      $('#slider').nivoSlider();
    }
  }//Slider End
	
  //Tooltip
  if($(".tooltip-bottom").length){
    $(".tooltip-bottom").each(function(){ 
      $(this).tipTip({
        maxWidth: "auto"
      });
    });
  }

  if($(".tooltip-top").length){		
    $(".tooltip-top").each(function(){
      $(this).tipTip({
        maxWidth: "auto",
        defaultPosition: "top"
      });
    });
  }
	
  if($(".tooltip-left").length){
    $(".tooltip-left").each(function(){
      $(this).tipTip({
        maxWidth: "auto",
        defaultPosition: "left"
      });
    });
  }
		
  if($(".tooltip-right").length){
    $(".tooltip-right").each(function(){
      $(this).tipTip({
        maxWidth: "auto",
        defaultPosition: "right"
      });	
    });
  }
  //Tooltip End
	
    

  //Testimonial Carousel
  if($(".testimonial-carousel").length){
    $('ul.testimonial-carousel').jcarousel({
      scroll: 1
    });
  }

  $("table").each(function(){
	
    $(this).find('tbody > tr:odd').addClass('odd');
    $(this).find('tbody > tr:even').addClass('even');
    $(this).find("thead tr").removeClass('even');

  });


  //Placeholder
  $('.placeholder').each(function(){
    $(this).focus(function() {
      if (this.value == this.title) { 
        $(this).val("");
      }
    }).blur(function() {
      if (this.value == "") {
        $(this).val(this.title);
      }
    });
  });

});
  
