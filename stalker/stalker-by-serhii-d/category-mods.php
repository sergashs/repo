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
			<div class="col-md-8 col-lg-9 informer-row-border">
				<div class="informer-last-news">
					<?php if (have_posts()): ?>
						<header class="page-header pt-1 pb-1 visually-hidden-focusable">
							<?php
							the_archive_title('<h1 class="page-title fs-5 mb-0">', '</h1>');
							the_archive_description('<div class="archive-description">', '</div>');
							?>
						</header>
						<?php
						$parent_category_id = get_term_by('slug', 'mods', 'category')->term_id;
						$current_category = get_queried_object();
						$subcategories = get_categories(array('child_of' => $current_category->term_id));
						$is_home_category = is_category($parent_category_id);

						if (($is_home_category && $current_category->slug === 'mods') || !empty($subcategories)) {
							?>
							<div class="mb-2">
								<h3 class="mb-0 pb-0 border-bottom-0 fs-5 pt-1">Категорії:</h3>
							</div>
							<div>
								<div class="block-border-1 p-1 mb-2">
									<?php
									echo '<ul class="d-flex flex-wrap m-0 p-0" style="list-style:none;">';

									if ($is_home_category && $current_category->slug === 'mods') {
										$categories = get_categories(array('parent' => $parent_category_id));

										if (!empty($categories)) {
											foreach ($categories as $category) {
												echo '<li><a class="btn btn-primary me-1 mb-1" href="' . get_category_link($category->term_id) . '"><span class="button-before"></span> <span class="button-text">' . $category->name . '</span> <span class="button-after"></span> </a></li>';
											}
										}
									} elseif (!empty($subcategories)) {
										foreach ($subcategories as $subcategory) {
											echo '<li><a class="btn btn-primary me-1 mb-1" href="' . get_category_link($subcategory->term_id) . '"><span class="button-before"></span> <span class="button-text">' . $subcategory->name . '</span> <span class="button-after"></span> </a></li>';
										}
									}

									echo '</ul>';
									?>
								</div>
							</div>
							<hr class="mb-3">
							<?php
						} else {
							echo '<div class="mb-2"></div>';
						}
						?>
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
												<span data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Перегляди" class="me-1"><i class="fa fa-eye"></i>
													<?php echo isset($views_count) ? $views_count : "0"; ?>
												</span>
												<span data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Кількість оцінок"><i class="fas fa-chart-bar"></i>
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