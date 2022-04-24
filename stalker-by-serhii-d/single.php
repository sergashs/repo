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
		while ( have_posts() ) :
			the_post();

			get_template_part( 'template-parts/content', get_post_type() );

			the_post_navigation(
				array(
					'prev_text' => '<span class="nav-subtitle">' . esc_html__( 'Previous:', 'stalker-by-serhii-d' ) . '</span> <span class="nav-title">%title</span>',
					'next_text' => '<span class="nav-subtitle">' . esc_html__( 'Next:', 'stalker-by-serhii-d' ) . '</span> <span class="nav-title">%title</span>',
				)
			);

			// If comments are open or we have at least one comment, load up the comment template.
			if ( comments_open() || get_comments_number() ) :
				comments_template();
			endif;

		endwhile; // End of the loop.
		?>
   </div>
   </div>

   <div class="col-md-4 col-lg-3"><?php get_sidebar();?></div>

   </div>
   </div>
	</main><!-- #main -->
	

<?php

get_footer();

