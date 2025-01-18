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

						get_template_part('template-parts/content', get_post_type());

						// If comments are open or we have at least one comment, load up the comment template.
						if (comments_open() || get_comments_number()):
							comments_template();
						endif;

					endwhile; // End of the loop.
					?>
				</div>
			</div>
			<div class="col-md-4 col-lg-3">
				<div class="mb-2">
					<h3 class="mb-0 pb-0 border-bottom-0 fs-3 pt-1">Дивіться також</h3>
					<img src="https://stalker-news.info/wp-content/uploads/2023/10/orange-line.svg" alt="orange line" class="width-max-100">
				</div>
				<?php
				$args = array(
					'post_type' => 'photos',
					'posts_per_page' => 5,
					'orderby' => 'rand'
				);

				$news_query = new WP_Query($args);

				if ($news_query->have_posts()) {
					while ($news_query->have_posts()) {
						$news_query->the_post();
						?>
						<div class="card card-news p-0 mb-2">
							<figure class="flex-column mb-0">
								<?php
								$post_id = get_the_ID();
								$picture_id = get_post_meta($post_id, 'picture', true);
								$image_size = 'medium'; // Використовуйте розмір 'medium'
								$medium_image_url = wp_get_attachment_image_url($picture_id, $image_size);
								$post_permalink = get_permalink($post_id);
								?>
								<a href="<?php echo esc_url($post_permalink); ?>" class="img-holder me-0 mb-0">
									<img src="<?php echo esc_url($medium_image_url); ?>">
								</a>
							</figure>
						</div>
						<?php
					}
					wp_reset_postdata();
				} else {
					echo "Записів не знайдено.";
				}
				?>
			</div>
		</div>
	</div>
</main><!-- #main -->
<?php

get_footer();