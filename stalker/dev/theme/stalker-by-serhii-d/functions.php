<?php
/**
 * stalker-by-serhii.D functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package stalker-by-serhii.D
 */

if (!defined('_S_VERSION')) {
	// Replace the version number of the theme on each release.
	define('_S_VERSION', '1.0.0');
}

/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function stalker_by_serhii_d_setup()
{
	/*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 * If you're building a theme based on stalker-by-serhii.D, use a find and replace
	 * to change 'stalker-by-serhii-d' to the name of your theme in all the template files.
	 */
	load_theme_textdomain('stalker-by-serhii-d', get_template_directory() . '/languages');

	// Add default posts and comments RSS feed links to head.
	add_theme_support('automatic-feed-links');

	/*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support('title-tag');

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
	 */
	add_theme_support('post-thumbnails');

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus(
		array(
			'menu-1' => esc_html__('Primary', 'stalker-by-serhii-d'),
			'menu-2' => esc_html__('Secondary', 'stalker-by-serhii-d'),
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
	add_theme_support('customize-selective-refresh-widgets');

	/**
	 * Add support for core custom logo.
	 *
	 * @link https://codex.wordpress.org/Theme_Logo
	 */
	add_theme_support(
		'custom-logo',
		array(
			'height' => 250,
			'width' => 250,
			'flex-width' => true,
			'flex-height' => true,
		)
	);
}
add_action('after_setup_theme', 'stalker_by_serhii_d_setup');

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function stalker_by_serhii_d_content_width()
{
	$GLOBALS['content_width'] = apply_filters('stalker_by_serhii_d_content_width', 640);
}
add_action('after_setup_theme', 'stalker_by_serhii_d_content_width', 0);

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function stalker_by_serhii_d_widgets_init()
{
	register_sidebar(
		array(
			'name' => esc_html__('Sidebar', 'stalker-by-serhii-d'),
			'id' => 'sidebar-1',
			'description' => esc_html__('Add widgets here.', 'stalker-by-serhii-d'),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget' => '</section>',
			'before_title' => '<h2 class="widget-title">',
			'after_title' => '</h2>',
		)
	);
}
add_action('widgets_init', 'stalker_by_serhii_d_widgets_init');





/**
 * Enqueue scripts and styles.
 */
function stalker_by_serhii_d_scripts()
{





	wp_enqueue_style('theme-styles', get_template_directory_uri() . '/assets/css/styles.css', null, null);

	wp_enqueue_script('theme-bootstrap', get_template_directory_uri() . '/assets/js/bootstrap.bundle.min.js', array('jquery'), true, ['in_footer' => true, 'strategy' => 'defer']);

	wp_enqueue_script('theme-swiper-bundle', get_template_directory_uri() . '/assets/js/swiper-bundle.min.js', array('jquery'), true, ['in_footer' => true, 'strategy' => 'defer']);

	wp_enqueue_script('theme-fancybox', get_template_directory_uri() . '/assets/js/fancybox.umd.js', array('jquery'), true, ['in_footer' => true, 'strategy' => 'defer']);

	wp_enqueue_script('theme-simplebar', get_template_directory_uri() . '/assets/js/simplebar.min.js', array('jquery'), true, ['in_footer' => true, 'strategy' => 'defer']);

	$localize_arr = array(
		'home_url' => home_url(),
		'home_path' => get_stylesheet_directory_uri(),
		'ajax_url' => admin_url('admin-ajax.php'),
		'nonce' => wp_create_nonce('view-nonce')
	);

	global $wp_query;
	$localize_arr['posts'] = json_encode($wp_query->query_vars);
	$localize_arr['current_page'] = get_query_var('paged') ? get_query_var('paged') : 1;
	$localize_arr['max_page'] = $wp_query->max_num_pages;
	$localize_arr['nonce'] = wp_create_nonce('view-nonce');

	wp_enqueue_script('theme-scripts', get_template_directory_uri() . '/assets/js/scripts.js', array('jquery'), false, true);

	wp_localize_script('theme-scripts', 'wp_helper', $localize_arr);

	if (is_singular() && comments_open() && get_option('thread_comments')) {
		wp_enqueue_script('comment-reply');
	}
}
add_action('wp_enqueue_scripts', 'stalker_by_serhii_d_scripts');

add_action('pre_get_posts', 'add_my_post_types_to_query');

function add_my_post_types_to_query($query)
{
	if (is_home() && $query->is_main_query())
		$query->set('post_type', array('post', 'news'));
	return $query;
}

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
if (defined('JETPACK__VERSION')) {
	require get_template_directory() . '/inc/jetpack.php';
}

function my_login_stylesheet()
{
	wp_enqueue_style('custom-login', get_stylesheet_directory_uri() . '/assets/css/style-login.css');
}
add_action('login_enqueue_scripts', 'my_login_stylesheet');


function my_cptui_add_post_types_to_archives($query)
{
	// We do not want unintended consequences.
	if (is_admin() || !$query->is_main_query()) {
		return;
	}

	if (is_category() || is_tag() && empty($query->query_vars['suppress_filters'])) {
		$cptui_post_types = cptui_get_post_type_slugs();

		$query->set(
			'post_type',
			array_merge(
				array('post'),
				$cptui_post_types
			)
		);
	}
}
add_filter('pre_get_posts', 'my_cptui_add_post_types_to_archives');


function restrict_users($open, $post_id)
{
	$post_type = get_post_type($post_id);

	if ($post_type === 'mods' && intval($post_id) && get_post($post_id)) {
		$args = array('post_id' => $post_id, 'count' => true);
		$user = wp_get_current_user();

		if ($user && intval($user->ID)) {
			$skip = false;
			$ignoreTheseRoles = array();

			if ($user->roles && is_array($user->roles)) {
				foreach ($user->roles as $role) {
					if (in_array($role, $ignoreTheseRoles)) {
						$skip = true;
						break;
					}
				}
			}

			if (!$skip) {
				$args['user_id'] = $user->ID;
				$open = get_comments($args) ? false : true;
			}
		} else { // for guests
			$commenter = wp_get_current_commenter();

			if ($commenter && is_array($commenter) && isset($commenter['comment_author_email'])) {
				$args['author_email'] = $commenter['comment_author_email'];
				$open = get_comments($args) ? false : true;
			}
		}
	}

	return $open;
}

add_filter('comments_open', 'restrict_users', 10, 2);



add_filter('pre_comment_on_post', 'validate_comment_meta_data');


function validate_comment_meta_data($comment_data)
{
	$post_id = $_POST['comment_post_ID'];

	if (get_post_type($post_id) === 'mods' && empty($_POST['passing_time'])) {
		wp_die(__("Поле час проходження є обов'язковим для заповнення") . ' <a href="javascript:history.back()">Назад</a>');
	}

	return $comment_data;
}

function modify_comment_form_defaults($defaults)
{
	// Перевірка, чи це запис типу "mods"
	if (is_singular('mods')) {
		$defaults['title_reply'] = 'Залишіть рецензію';
		$defaults['label_submit'] = 'Відправити рецензію';
	}
	return $defaults;
}
add_filter('comment_form_defaults', 'modify_comment_form_defaults');


// // Increase the image resize threshold to 4000px on the longest edge
// function smartwp_big_image_size_threshold($threshold)
// {
// 	return 4000;
// }
// add_filter('big_image_size_threshold', 'smartwp_big_image_size_threshold', 999, 1);


function get_template_for_category($template)
{

	if (basename($template) === 'category.php') { // No custom template for this specific term, let's find it's parent
		// get the current term, e.g. red
		$term = get_queried_object();

		// check for template file for the page category
		$slug_template = locate_template("category-{$term->slug}.php");
		if ($slug_template)
			return $slug_template;

		// if the page category doesn't have a template, then start checking back through the parent levels to find a template for a parent slug
		$term_to_check = $term;
		while ($term_to_check->parent) {
			// get the parent of the this level's parent
			$term_to_check = get_category($term_to_check->parent);

			if (!$term_to_check || is_wp_error($term_to_check))
				break; // No valid parent found

			// Use locate_template to check if a template exists for this categories slug
			$slug_template = locate_template("category-{$term_to_check->slug}.php");
			// if we find a template then return it. Otherwise the loop will check for this level's parent
			if ($slug_template)
				return $slug_template;
		}
	}

	return $template;
}
add_filter('category_template', 'get_template_for_category');

// function thumbnail_sizes()
// {
// 	add_image_size('post-thumbnail', 9999, 9999, false);
// }
// add_action('after_setup_theme', 'thumbnail_sizes');

function remove_image_sizes()
{
	remove_image_size('1536x1536');

	remove_image_size('2048x2048');
}

add_action('init', 'remove_image_sizes');

function custom_comment_author_link($author_link, $author_id, $comment_id)
{

	$user_id = get_comment($comment_id)->user_id;


	if ($user_id) {

		$profile_url = esc_url(get_author_posts_url($user_id));


		return sprintf('<a href="%s">%s</a>', $profile_url, get_comment_author());
	} else {

		return $author_link;
	}
}

add_filter('get_comment_author_link', 'custom_comment_author_link', 10, 3);



