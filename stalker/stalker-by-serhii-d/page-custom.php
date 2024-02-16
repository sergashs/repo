<?php
/*
Template Name: Custom page
*/

get_header(); ?>
<main id="primary" class="site-main pt-0">
	<div class="container-fluid">
		<?php
		if (have_posts()) {
			while (have_posts()) {
				the_post();
				the_content();
			}
		}
		?>
	</div>
</main>
<?php get_footer(); ?>