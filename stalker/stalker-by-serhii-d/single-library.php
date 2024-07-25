<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package stalker-by-serhii.D
 */

get_header();
?>
<?php $additional_info = get_field('additional_info'); ?>
<main id="primary" class="site-main">
	<div class="library-single">
		<div class="container-fluid">
			<div class="row flex-column-reverse flex-md-row">
				<div class="<?php echo empty($additional_info) ? 'col-12' : 'col-md-8 col-lg-9 informer-row-border'; ?>">
					<div class="single-post">
						<?php if( $additional_info ): ?>
						<?php
						if (have_posts()):
							while (have_posts()):
								the_post();
								echo '<h1 class="d-none d-md-block pt-1 pb-1 fs-2">' . get_the_title() . '</h1>';

							endwhile;
						endif;
						?>
						<?php endif; ?>
						<?php if( !$additional_info ): ?>
						<?php
						if (have_posts()):
							while (have_posts()):
								the_post();
								echo '<h1 class="pt-1 pb-1 fs-2">' . get_the_title() . '</h1>';

							endwhile;
						endif;
						?>
						<?php
						$thumbnail_url = get_the_post_thumbnail_url(get_the_ID(), 'full');
						if (!empty($thumbnail_url)) {
						?>
						<div class="row">
							<div class="col-md-6">
								<img data-src="<?php echo esc_url($thumbnail_url); ?>" src="#" alt="<?php echo esc_attr(get_the_title()); ?>" loading="lazy" class="lazyload w-100 mb-1">
							</div>
						</div>
						<?php
						}
						?>
						<?php endif; ?>
						<?php
						while (have_posts()):
							the_post();

							get_template_part('template-parts/content-library', get_post_type());


							if (comments_open() || get_comments_number()):
								comments_template();
							endif;

						endwhile;
						?>
					</div>
				</div>
				<?php if( $additional_info ): ?>
				<div class="col-md-4 col-lg-3 py-md-2 pb-3">
					<?php
					if (have_posts()):
						while (have_posts()):
							the_post();
							echo '<span class="d-block h1 d-md-none pt-1 pb-1 fs-2">' . get_the_title() . '</span>';
						endwhile;
					endif;
					?>
					<?php
					$thumbnail_url = get_the_post_thumbnail_url(get_the_ID(), 'full');
					if (!empty($thumbnail_url)) {
					?>
					<img data-src="<?php echo esc_url($thumbnail_url); ?>" src="#" alt="<?php echo esc_attr(get_the_title()); ?>" loading="lazy" class="lazyload w-100 mb-1">
					<?php
					}
					?>
					<?php
					if ($additional_info) {
						echo $additional_info;
					}
					?>
				</div>
				<?php endif; ?>
			</div>
		</div>
	</div>
</main><!-- #main -->
<?php

get_footer();