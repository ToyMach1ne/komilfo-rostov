<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<html dir="ltr" lang="en-US"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <meta name="title" content="">
<meta name="description" content="">
<meta name="keywords" content="">
    <title><?php wp_title( '' ); ?><?php if ( wp_title( '', false ) ) { echo ' :'; } ?> <?php bloginfo( 'name' ); ?></title>


    <!--[if IE 7]><link rel="stylesheet" type="text/css" href="/css/ie7.css"/><![endif]-->
    <!--[if IE 8]><link rel="stylesheet" type="text/css" href="/css/ie8.css"/><![endif]-->
     <!--[if lt IE 9]>
    <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/html5shiv.js"></script>
    <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/selectivizr.js"></script>
    <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/respond.js"></script>
  <![endif]-->
  <!-- css + javascript -->

<!-- TEST -->
<?php wp_head(); ?>

<!-- TEST -->

    <!--[if IE]>
      <style type="text/css" media="screen"> .rounded-img, .rounded-img img, .ajax_previous, .ajax_next, #tiptip_content { behavior: url(/css/PIE.htc); }</style>
    <![endif]-->
<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/jquery-1.8.3.min.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/jquery-ui-1.10.1.custom.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/jquery.nivo.slider.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/jquery.tipTip.minified.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/animatedcollapse.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/jquery.jcarousel.min.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/jquery.fancybox.pack.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/script.js"></script>
  </head>

  <body class="home">

    <div id="header">
      <div class="logoContainer">
        <div class="logoOut"><div id="logo"><a href="<?php echo home_url(); ?>" title=""><img src="<?php echo get_template_directory_uri(); ?>/img/logo3.png" alt=""></a></div></div>
      </div>
      <div class="containerOut">
        <div class="container">


<div id="top-menu">
  <div class="menu-main-menu-container">
    <?php wpeHeadNav(); ?>
  </div>
</div>        </div>
      </div>
    </div>
