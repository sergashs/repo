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
						$parent_category_id = get_term_by('slug', 'news', 'category')->term_id;
						$current_category = get_queried_object();
						$subcategories = get_categories(array('child_of' => $current_category->term_id));
						$is_home_category = is_category($parent_category_id);

						if (($is_home_category && $current_category->slug === 'news') || !empty($subcategories)) {
							?>
							<div class="mb-2">
								<span class="mb-0 pb-0 border-bottom-0 fs-5 pt-1 h3 d-block">Категорії:</span>
							</div>
							<div>
								<div class="block-border-1 pt-1 pe-1 ps-1 mb-2">
									<?php
									echo '<ul class="d-flex flex-wrap m-0 p-0" style="list-style:none;">';

									if ($is_home_category && $current_category->slug === 'news') {
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
				<div class="mb-2">
					<span class="mb-0 pb-0 border-bottom-0 fs-3 pt-1 h3 d-block">Популярні публікації</span>
					<img src="https://stalker-news.info/wp-content/uploads/2023/10/orange-line.svg" alt="orange line" class="width-max-100">
				</div>
				<?php
				$args = array(
					'post_type' => 'news',
					'posts_per_page' => 5,
					'meta_key' => 'entry_views',
					'orderby' => 'meta_value_num',
					'order' => 'DESC',
				);

				$news_query = new WP_Query($args);

				if ($news_query->have_posts()) {
					while ($news_query->have_posts()) {
						$news_query->the_post();
						?>
						<div class="card card-news p-1 card-article mb-2 block-border-1">
							<figure class="flex-column mb-1">
								<a href="<?php the_permalink(); ?>" class="img-holder me-0 mb-0" style="max-width: 100%;">
									<?php
									$thumbnail_url = wp_get_attachment_image_src(get_post_thumbnail_id(), 'thumbnail');
									$medium_large_url = wp_get_attachment_image_src(get_post_thumbnail_id(), 'medium_large');
									?>
									<?php if ($medium_large_url[0]): ?>
										<img data-src="<?php echo esc_url($medium_large_url[0]); ?>" src="#" alt="<?php the_title(); ?>" loading="lazy" class="lazyload">
									<?php elseif ($thumbnail_url[0][0]): ?>
										<img data-src="<?php echo esc_url($thumbnail_url[0][0]); ?>" src="#" alt="<?php the_title(); ?>" loading="lazy" class="lazyload">
									<?php endif; ?>
								</a>
							</figure>
							<?php the_title('<h3 class="mb-1"><a href="' . esc_url(get_permalink()) . '" rel="bookmark">', '</a></h3>'); ?>
							<ul class="meta-info pt-1">
								<li data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Перегляди">
									<div class="icon-holder">
										<i class="fa fa-eye"></i>
									</div>
									<?php
									$views = get_post_meta(get_the_ID(), 'entry_views', true);
									echo $views ? $views : "0";
									?>
								</li>
								<li data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Коментарі">
									<div class="icon-holder">
										<i class="fa fa-comments"></i>
									</div>
									<?php
									$post_id = get_the_ID();
									$comments_count = get_comments_number($post_id);
									echo $comments_count;
									?>
								</li>
							</ul>
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