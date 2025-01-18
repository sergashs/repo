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
									<?php if (is_singular()): ?>
										<img data-src="<?php the_post_thumbnail_url(); ?>" src="#" alt="<?php the_title() ?>" loading="lazy" class="lazyload">
									<?php else: ?>
										<img data-src="<?php the_post_thumbnail_url('large'); ?>" src="#" alt="<?php the_title() ?>" loading="lazy" class="lazyload">
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