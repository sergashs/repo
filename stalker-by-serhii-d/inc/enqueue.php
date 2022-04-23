<?php

function stalker_by_serhii_d__scripts() {

    // // Load the html5 IE.
    // wp_enqueue_script('iceers-html5', 'https://cdnjs.cloudflare.com/ajax/libs/html5shiv/r29/html5.min.js', array(), '');
    // wp_script_add_data('iceers-html5', 'conditional', 'lt IE 9');

    // wp_enqueue_style(
    //     'wow_book',
    //     get_stylesheet_directory_uri() . '/assets/css/wow_book.css'
    // );

    // Add theme stylesheet.
    wp_enqueue_style('theme-styles', get_template_directory_uri() . '/assets/css/style.css', null, null);
    wp_enqueue_style('theme-style', get_stylesheet_uri(), null, null);

    // Add theme bootstrap script.
    wp_enqueue_script('theme-bootstrap', get_template_directory_uri() . '/assets/js/bootstrap.bundle.min.js', array('jquery'), false, true);
    // Add theme webfontloader script.
    wp_enqueue_script('theme-webfontloader', get_template_directory_uri() . '/assets/js/webfontloader.js', array('jquery'), false, true);
    // Add theme swiper-bundle script.
    wp_enqueue_script('theme-swiper-bundle', get_template_directory_uri() . '/assets/js/swiper-bundle.min.js', array('jquery'), false, true);
    // Add theme polyfilled script.
    // wp_enqueue_script('theme-polyfilled', get_template_directory_uri() . '/assets/js/plyr.polyfilled.min.js', array('jquery'), false, true);
    // Add theme smoothscrollpolyfill script.
    wp_enqueue_script('theme-smoothscrollpolyfill', get_template_directory_uri() . '/assets/js/smoothscrollpolyfill.js', array('jquery'), false, true);

    // wp_enqueue_script(
    //     'wow_book',
    //     get_template_directory_uri() . '/assets/js/wow_book.min.js',
    //     array('jquery'), false, true
    // );
    // wp_enqueue_script(
    //     'pdf_combined',
    //     get_template_directory_uri() . '/assets/js/pdf.combined.min.js',
    //     array('jquery'), false, true
    // );

    // Add theme jquery.zoom script.
    // wp_enqueue_script('theme-jquery-zoom', get_template_directory_uri() . '/assets/js/jquery.zoom.min.js', array('jquery'), false, true);

    // $localize_arr = array(
    //     'home_url' => home_url(),
    //     'home_path' => get_stylesheet_directory_uri(),
    //     'ajax_url' => admin_url('admin-ajax.php'),
    //     'nonce' => wp_create_nonce('view-nonce')
    // );

    // global $wp_query;
    // $localize_arr['posts'] = json_encode($wp_query->query_vars);
    // $localize_arr['current_page'] = get_query_var('paged') ? get_query_var('paged') : 1;
    // $localize_arr['max_page'] = $wp_query->max_num_pages;
    // $localize_arr['nonce'] = wp_create_nonce('view-nonce');

    wp_enqueue_script('theme-scripts', get_template_directory_uri() . '/assets/js/scripts.js', array('jquery'), false, true);

    // wp_localize_script('theme-scripts', 'wp_helper', $localize_arr);

    // wp_enqueue_script('marcdomenech', get_template_directory_uri() . '/assets/js/marcdomenech.js', array('jquery', 'theme-scripts'), false, true);
}

add_action('wp_enqueue_scripts', 'stalker_by_serhii_d__');
