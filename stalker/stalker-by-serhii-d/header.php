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
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600&family=Rubik:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<?php wp_body_open(); ?>
	<div id="page" class="wrapper">
		<!-- <a class="skip-link screen-reader-text" href="#primary">
			<?php esc_html_e('Skip to content', 'stalker-by-serhii-d'); ?>
		</a> -->
		<header id="masthead" class="header">
			<div class="main-nav">
				<div class="container-fluid">
					<div class="row">
						<div class="col-4 col-md-8 col-lg-9 d-flex align-items-center">
							<div class="dropdown-menu-wrapper">
								<a href="#" class="open-menu-wrapper d-inline-flex d-lg-none">
									<span class="open-menu" href="#">
										<span></span>
										<span></span>
										<span class="visually-hidden">Open Mobile Nav</span>
									</span>
									<span class="open-menu-title">Menu</span>
								</a>
								<nav id="site-navigation" class="main-navigation">
									<?php
									wp_nav_menu(
										array(
											'theme_location' => 'menu-1',
											'menu_id' => 'primary-menu',
										)
									);
									?>
									<div class="d-lg-none border-top">
										<?php
										wp_nav_menu(
											array(
												'theme_location' => 'menu-2',
												'menu_id' => 'secondary-menu',
											)
										);
										?>
									</div>
								</nav>
							</div>
						</div>
						<div class="col-8 col-md-4 col-lg-3 d-flex flex-sm-column align-items-center align-items-sm-end justify-content-end">
							<form role="search" method="get" class="search-form" action="<?php echo home_url('/'); ?>">
								<input type="search" class="form-control" placeholder="Пошук …" value="<?php the_search_query(); ?>" name="s">
								<button type="submit" class="btn btn-primary">
									<span class="button-before"></span>
									<span class="button-text">Шукати</span>
									<span class="button-after"></span>
								</button>
							</form>
						</div>
					</div>
				</div>
				<div class="illustration-holder">
					<img data-src="<?php echo get_template_directory_uri(); ?>/assets/images/header-1.jpg" src="#" loading="lazy" class="lazyload lazyload-bg" alt="background">
					<div class="logo">
						<a href="<?php echo get_home_url(); ?>">
							<img data-src="<?php echo get_template_directory_uri(); ?>/assets/images/logo.png" alt="logo" src="#" loading="lazy" class="lazyload">
						</a>
					</div>
					<div class="d-flex align-self-end align-self-sm-start align-items-center p-2">
						<?php
						if (is_user_logged_in()) {
							$current_user = wp_get_current_user();
							$avatar_url = get_avatar_url($current_user->ID);

							// global $wpdb;
						
							// $user_id = get_current_user_id();
						
							// $query = $wpdb->prepare(
							// 	"SELECT COUNT(*)
							// 	FROM {$wpdb->prefix}wpforo_activity
							// 	WHERE userid = %d
							// 	AND type = 'new_pm'",
							// 	$user_id
							// );
						
							// $items_count = $wpdb->get_var($query);
							?>
							<div class="dropdown dropdown-profile">
								<button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
									<span class="button-before"></span>
									<span class="button-text d-inline-flex align-items-center">
										<img src="<?php echo $avatar_url; ?>" class="profile-avatar me-1" alt="аватар <?php echo $current_user->user_login; ?>">
										<span class="button-title me-1">
											<?php echo $current_user->user_login; ?>
										</span>
										<i class="fas fa-chevron-down d-inline-flex"></i>
									</span>
									<span class="button-after"></span>
								</button>
								<ul class="dropdown-menu">
									<li><a class="dropdown-item text-decoration-none" href="<?php echo get_author_posts_url($user->ID); ?>">Мій профіль</a></li>
									<li><a class="dropdown-item text-decoration-none" href="<?php echo wp_logout_url(); ?>">Вихід</a></li>
								</ul>
							</div>
							<?php
						} else {
							?>
							<a href="/sign-in" class="btn btn-primary">
								<span class="button-before"></span>
								<span class="button-text">
									Реєстрація / Вхід
								</span>
								<span class="button-after"></span>
							</a>
							<?php
						}
						?>
						<?php
						if (is_user_logged_in()) {
							?>
							<span data-bs-toggle="tooltip">
								<button type="button" class="btn btn-primary ms-2" data-bs-toggle="modal" data-bs-target="#ThemeSettings">
									<span class="button-before"></span>
									<span class="button-text">
										<i class="fas fa-paint-brush"></i>
										<span class="visually-hidden">налаштування теми</span>
									</span>
									<span class="button-after"></span>
								</button>
							</span>
							<?php
						}
						?>
					</div>
				</div>
				<hr>
				<div class="main-nav border-0 d-none d-lg-flex p-0">
					<div class="dropdown-menu-wrapper">
						<nav id="site-navigation" class="main-navigation">
							<?php
							wp_nav_menu(
								array(
									'theme_location' => 'menu-2',
									'menu_id' => 'secondary-menu',
									'container_class' => 'p-1',
								)
							);
							?>
						</nav>
					</div>
				</div>
				<?php
				if (function_exists('yoast_breadcrumb')) {
					yoast_breadcrumb('<p class="breadcrumb" id="breadcrumbs">', '</p>');
				}
				?>
			</div>
		</header><!-- #masthead -->