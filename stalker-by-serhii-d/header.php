<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package stalker-by-serhii.D
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="wrapper">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'stalker-by-serhii-d' ); ?></a>

	<header id="masthead" class="header">
	<div class="header-top">
		<div class="container-fluid">
			<strong class="logo">
			<?php
			the_custom_logo();
			if ( is_front_page() && is_home() ) :
				?>
				<a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a>
				<?php
			else :
				?>
				<p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
				<?php
			endif;
			$stalker_by_serhii_d_description = get_bloginfo( 'description', 'display' );
			if ( $stalker_by_serhii_d_description || is_customize_preview() ) :
				?>
				<p class="site-description"><?php echo $stalker_by_serhii_d_description; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></p>
			<?php endif; ?>
			</strong>
			<div class="user-profile">
				<div class="open-profile-dropdown">
					<div class="user-avatar">
						<img data-src="<?php echo get_stylesheet_directory_uri(); ?> /assets/images/496767602.png" src="#" alt="image description" loading="lazy" class="lazyload">
					
					</div>
					<span class="user-name">Stalker</span>
					<span class="dropdown-arrow"><i class="fas fa-chevron-down"></i></span>
				</div>
				<ul class="dropdown-ul">
					<li><a href="#"><i class="fas fa-user"></i> Профіль</a></li>
					<li><a href="#"><i class="fas fa-envelope"></i> Повідомлення</a></li>
					<li><a href="#"><i class="fas fa-user-edit"></i> Редагувати профіль</a></li>
					<li><a href="#"><i class="fas fa-door-open"></i> Вийти</a></li>
				</ul>
			</div>
		</div>
	</div>
	<div class="main-nav">
		<div class="container-fluid">
			<nav id="site-navigation" class="main-navigation">
			<?php
			wp_nav_menu(
				array(
					'theme_location' => 'menu-1',
					'menu_id'        => 'primary-menu',
				)
			);
			?>
			</nav>
		</div>
	</div>
	</header><!-- #masthead -->
