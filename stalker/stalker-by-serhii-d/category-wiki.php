<?php
/**
 * The template for displaying archive pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package stalker-by-serhii.D
 */

get_header();
?>
<main id="primary" class="site-main">
	<div class="container-fluid">
		<div class="row">
			<?php if (have_posts()): ?>
				<header class="page-header pt-1 pb-1 visually-hidden-focusable">
					<?php
					the_archive_title('<h1 class="page-title fs-5 mb-0">', '</h1>');
					the_archive_description('<div class="archive-description">', '</div>');
					?>
				</header>
				<div class="pt-1"></div>
				<?php
				/* Start the Loop */
				while (have_posts()):
					the_post();

					/*
					 * Include the Post-Type-specific template for the content.
					 * If you want to override this in a child theme, then include a file
					 * called content-___.php (where ___ is the Post Type name) and that will be used instead.
					 */

					get_template_part('template-parts/content', get_post_type());


				endwhile;

				wp_pagenavi();

			else:

				get_template_part('template-parts/content', 'none');

			endif;
			?>
		</div>
	</div>
</main><!-- #main -->
<?php


get_footer();