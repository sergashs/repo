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
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-8 col-lg-9 informer-row-border">
				<div class="single-post">
					<?php
					while (have_posts()):
						the_post();

						// the_content();
					
						get_template_part('template-parts/content', get_post_type());



						// the_post_navigation(
						// 	array(
						// 		'prev_text' => '<span class="nav-subtitle">' . esc_html__( 'Previous:', 'stalker-by-serhii-d' ) . '</span> <span class="nav-title">%title</span>',
						// 		'next_text' => '<span class="nav-subtitle">' . esc_html__( 'Next:', 'stalker-by-serhii-d' ) . '</span> <span class="nav-title">%title</span>',
						// 	)
						// );
					

						// if (in_category(array(75,51,50,143,128,54,78,84,76,83,85,90,82,81,80,79,11,42,91,86,87,142,65,63,56,62,58,59,57,64,89,61,13,43,67,92,66,60,141,74,72,68,71,70,88,69,12,44,93,73))) {
						// 	echo '<h2 class="comments-title">Відгуки до ' . get_the_title() . '</h2>';
						// 	echo do_shortcode('[wp-reviews]');
						// }
					



						// If comments are open or we have at least one comment, load up the comment template.
						if (comments_open() || get_comments_number()):
							comments_template();
						endif;

					endwhile; // End of the loop.
					?>
				</div>
			</div>
			<div class="col-md-4 col-lg-3">
				<?php get_sidebar(); ?>
			</div>
		</div>
	</div>
</main><!-- #main -->
<?php

get_footer();