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
<main id="primary" class="site-main">
	<div class="library-single">
		<div class="container-fluid">
			<div class="row flex-column-reverse flex-md-row">
				<div class="col-md-8 col-lg-9 informer-row-border">
					<div class="single-post">
						<?php
						if (have_posts()):
							while (have_posts()):
								the_post();
								echo '<h1 class="d-none d-md-block pt-1 pb-1 fs-2">' . get_the_title() . '</h1>';

							endwhile;
						endif;
						?>
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
				<div class="col-md-4 col-lg-3 py-2">
					<?php
					if (have_posts()):
						while (have_posts()):
							the_post();
							echo '<span class="d-block h1 d-md-none pt-1 pb-1 fs-2">' . get_the_title() . '</span>';
						endwhile;
					endif;
					?>
					<img data-src="<?php the_post_thumbnail_url('full'); ?>" src="#" alt="<?php the_title() ?>" loading="lazy" class="lazyload w-100 mb-1">
					<?php
					$additional_info = get_field('additional_info');

					if ($additional_info) {
						echo $additional_info;
					}
					?>
				</div>
			</div>
		</div>
	</div>
</main><!-- #main -->
<?php

get_footer();