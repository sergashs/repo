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
					
						get_template_part('template-parts/content-mods', get_post_type());



						// the_post_navigation(
						// 	array(
						// 		'prev_text' => '<span class="nav-subtitle">' . esc_html__( 'Previous:', 'stalker-by-serhii-d' ) . '</span> <span class="nav-title">%title</span>',
						// 		'next_text' => '<span class="nav-subtitle">' . esc_html__( 'Next:', 'stalker-by-serhii-d' ) . '</span> <span class="nav-title">%title</span>',
						// 	)
						// );
					






						if (comments_open() || get_comments_number()) {
							comments_template('/comments-mods.php');
						}

					endwhile; // End of the loop.
					?>
					<!-- <?php
					// Get the current post ID
					$post_id = get_the_ID();

					// Get all post meta data for the post
					$meta_data = get_post_meta($post_id);

					// Check if meta data exists
					if (!empty($meta_data)) {
						echo "<h4>Post Meta Data:</h4>";
						echo "<ul>";

						// Loop through the meta data
						foreach ($meta_data as $meta_key => $meta_values) {
							foreach ($meta_values as $meta_value) {
								echo "<li><strong>$meta_key:</strong> $meta_value</li>";
							}
						}

						echo "</ul>";
					}
					?> -->
				</div>
			</div>
			<div class="col-md-4 col-lg-3">
				<div class="pt-1 mb-2">
					<h3 class="mb-0 pb-0 border-bottom-0 fs-4">Випадковий мод</h3>
					<img src="https://stalker-news.info/wp-content/uploads/2023/10/orange-line.svg" alt="orange line" class="width-max-100">
				</div>
				<?php
				$args = array(
					'post_type' => 'mods',
					'posts_per_page' => 1,
					'orderby' => 'rand',
				);
				$random_post = new WP_Query($args);

				$random_post->the_post();
				$post_id = get_the_ID();

				if ($post_id) {
					?>
					<div class="card card-news">
						<figure class="flex-column mb-0">
							<div class="img-holder mb-1">
								<a href="<?php echo get_permalink($post_id); ?>">
									<?php if (is_singular()): ?>
										<img data-src="<?php the_post_thumbnail_url(); ?>" src="#" alt="<?php the_title() ?>" loading="lazy" class="lazyload w-100">
									<?php else: ?>
										<img data-src="<?php the_post_thumbnail_url('large'); ?>" src="#" alt="<?php the_title() ?>" loading="lazy" class="lazyload w-100">
									<?php endif; ?>
								</a>
							</div>
							<?php the_title('<h3 class="fs-5 mb-0"><a href="' . esc_url(get_permalink()) . '" rel="bookmark">', '</a></h3>'); ?>
						</figure>
					</div>
					<?php
				} else {
					echo "Записів не знайдено.";
				}
				?>
				<div class="mx-minus mb-2">
					<hr>
				</div>
				<div class="mb-1">
					<h3 class="mb-0 pb-0 border-bottom-0 fs-4">Топ 10 модів</h3>
					<img src="https://stalker-news.info/wp-content/uploads/2023/10/orange-line.svg" alt="orange line" class="width-max-100">
				</div>
				<div class="mx-minus">
					<ul class="informer-top-10-mods mb-2">
						<?php
						$args = array(
							'post_type' => 'mods',
							'posts_per_page' => -1,
						);

						$news_query = new WP_Query($args);

						if ($news_query->have_posts()) {
							$posts_with_ratings = array();

							while ($news_query->have_posts()) {
								$news_query->the_post();

								$ratings = array();

								$comments = get_comments(
									array(
										'post_id' => get_the_ID(),
									)
								);

								foreach ($comments as $comment) {
									$rating = get_comment_meta($comment->comment_ID, 'rating', true);
									if ($rating) {
										$ratings[] = $rating;
									}
								}

								$average_rating = 0;
								$total_ratings = 0;

								if (!empty($ratings)) {
									$total_ratings = count($ratings);
									$sum_ratings = array_sum($ratings);
									$average_rating = $sum_ratings / $total_ratings;
								}

								$posts_with_ratings[] = array(
									'post_id' => get_the_ID(),
									'average_rating' => $average_rating,
									'comments_count' => count($comments),
									'entry_views' => get_post_meta(get_the_ID(), 'entry_views', true),
								);
							}

							usort($posts_with_ratings, function ($a, $b) {
								if ($a['average_rating'] == $b['average_rating']) {
									return 0;
								}
								return ($a['average_rating'] > $b['average_rating']) ? -1 : 1;
							});

							$top_10_posts = array_slice($posts_with_ratings, 0, 10);

							foreach ($top_10_posts as $post_data) {
								$post_id = $post_data['post_id'];
								$average_rating = $post_data['average_rating'];
								$comments_count = $post_data['comments_count'];
								$views_count = $post_data['entry_views'];

								?>
								<li class="list-item">
									<a href="<?php echo get_permalink($post_id); ?>" class="inner-holder">
										<span>
											<span class="item-title">
												<?php echo get_the_title($post_id); ?>
											</span>
											<span class="item-info">
												<span data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Перегляди" class="me-1"><i class="bi bi-eye"></i>
													<?php echo isset($views_count) ? $views_count : "0"; ?>
												</span>
												<span data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Кількість оцінок"><i class="bi bi-bar-chart-fill"></i>
													<?php echo $comments_count; ?>
												</span>
											</span>
										</span>
										<span class="item-rating" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Оцінка">
											<?php echo number_format($average_rating, 1); ?>
										</span>
									</a>
								</li>
								<?php
							}
							wp_reset_postdata();
						} else {
							echo "Записів не знайдено.";
						}
						?>
					</ul>
				</div>
			</div>
		</div>
	</div>
</main><!-- #main -->
<?php

get_footer();