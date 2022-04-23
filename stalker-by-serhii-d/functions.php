<?php
/**
 * stalker-by-serhii.D functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package stalker-by-serhii.D
 */

if ( ! defined( '_S_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( '_S_VERSION', '1.0.0' );
}

/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function stalker_by_serhii_d_setup() {
	/*
		* Make theme available for translation.
		* Translations can be filed in the /languages/ directory.
		* If you're building a theme based on stalker-by-serhii.D, use a find and replace
		* to change 'stalker-by-serhii-d' to the name of your theme in all the template files.
		*/
	load_theme_textdomain( 'stalker-by-serhii-d', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
		* Let WordPress manage the document title.
		* By adding theme support, we declare that this theme does not use a
		* hard-coded <title> tag in the document head, and expect WordPress to
		* provide it for us.
		*/
	add_theme_support( 'title-tag' );

	/*
		* Enable support for Post Thumbnails on posts and pages.
		*
		* @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		*/
	add_theme_support( 'post-thumbnails' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus(
		array(
			'menu-1' => esc_html__( 'Primary', 'stalker-by-serhii-d' ),
		)
	);

	/*
		* Switch default core markup for search form, comment form, and comments
		* to output valid HTML5.
		*/
	add_theme_support(
		'html5',
		array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
			'style',
			'script',
		)
	);

	// Set up the WordPress core custom background feature.
	add_theme_support(
		'custom-background',
		apply_filters(
			'stalker_by_serhii_d_custom_background_args',
			array(
				'default-color' => 'ffffff',
				'default-image' => '',
			)
		)
	);

	// Add theme support for selective refresh for widgets.
	add_theme_support( 'customize-selective-refresh-widgets' );

	/**
	 * Add support for core custom logo.
	 *
	 * @link https://codex.wordpress.org/Theme_Logo
	 */
	add_theme_support(
		'custom-logo',
		array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		)
	);
}
add_action( 'after_setup_theme', 'stalker_by_serhii_d_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function stalker_by_serhii_d_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'stalker_by_serhii_d_content_width', 640 );
}
add_action( 'after_setup_theme', 'stalker_by_serhii_d_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function stalker_by_serhii_d_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Sidebar', 'stalker-by-serhii-d' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Add widgets here.', 'stalker-by-serhii-d' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
}
add_action( 'widgets_init', 'stalker_by_serhii_d_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function stalker_by_serhii_d_scripts() {
	// wp_enqueue_style( 'stalker-by-serhii-d-style', get_stylesheet_uri(), array(), _S_VERSION );
	// wp_style_add_data( 'stalker-by-serhii-d-style', 'rtl', 'replace' );

	// wp_enqueue_script( 'stalker-by-serhii-d-navigation', get_template_directory_uri() . '/js/navigation.js', array(), _S_VERSION, true );

	wp_enqueue_style('theme-styles', get_template_directory_uri() . '/assets/css/styles.css', null, null);
    // wp_enqueue_style('theme-style', get_stylesheet_uri(), null, null);

    // Add theme bootstrap script.
    wp_enqueue_script('theme-bootstrap', get_template_directory_uri() . '/assets/js/bootstrap.bundle.min.js', array('jquery'), false, true);
    // Add theme webfontloader script.
    wp_enqueue_script('theme-webfontloader', get_template_directory_uri() . '/assets/js/webfontloader.js', array('jquery'), false, true);
    // Add theme swiper-bundle script.
    wp_enqueue_script('theme-swiper-bundle', get_template_directory_uri() . '/assets/js/swiper-bundle.min.js', array('jquery'), false, true);
   
    // Add theme smoothscrollpolyfill script.
    wp_enqueue_script('theme-smoothscrollpolyfill', get_template_directory_uri() . '/assets/js/smoothscrollpolyfill.js', array('jquery'), false, true);

    wp_enqueue_script('scripts', get_template_directory_uri() . '/assets/js/scripts.js', array('jquery'), false, true);



	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'stalker_by_serhii_d_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}


