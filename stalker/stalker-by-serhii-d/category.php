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
			<?php if (is_category('70') || is_category('69') || is_category('74')): ?>
				<header class="page-header">
					<?php
					the_archive_title('<h1 class="page-title">', '</h1>');
					the_archive_description('<div class="archive-description">', '</div>');
					?>
				</header><!-- .page-header -->
				<?php if (have_posts()): ?>
					<?php while (have_posts()):
						the_post(); ?>
						<?php get_template_part('template-parts/content', get_post_type()); ?>
					<?php endwhile; ?>
					<?php wp_pagenavi(); ?>
				<?php else: ?>
					<?php get_template_part('template-parts/content', 'none'); ?>
				<?php endif; ?>
			<?php else: ?>
				<div class="col-md-8 col-lg-9 informer-row-border">
					<div class="informer-last-news">
						<header class="page-header">
							<?php
							the_archive_title('<h1 class="page-title">', '</h1>');
							the_archive_description('<div class="archive-description">', '</div>');
							?>
						</header>
						<div class="row">
							<?php if (have_posts()): ?>
								<?php while (have_posts()):
									the_post(); ?>
									<?php get_template_part('template-parts/content', get_post_type()); ?>
								<?php endwhile; ?>
								<?php wp_pagenavi(); ?>
							<?php else: ?>
								<?php get_template_part('template-parts/content', 'none'); ?>
							<?php endif; ?>
						</div>
					</div>
				</div>
				<div class="col-md-4 col-lg-3">
					<?php get_sidebar(); ?>
				</div>
			<?php endif; ?>
		</div>
	</div>
</main><!-- #main -->
<?php


get_footer();