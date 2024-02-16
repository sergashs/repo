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
				<ul class="informer-new-videos mb-2">
					<?php
					$args = array(
						'post_type' => 'videos',
						'posts_per_page' => 5,
						'orderby' => 'rand'
					);

					$news_query = new WP_Query($args);
					if ($news_query->have_posts()) {
						while ($news_query->have_posts()) {
							$news_query->the_post();
							?>
							<li class="list-item">
								<a href="<?php echo esc_url(get_permalink()); ?>" class="inner-holder">
									<?php
									$thumbnailUrl = get_the_post_thumbnail_url(get_the_ID(), 'large');
									$customImageUrl = get_post_meta(get_the_ID(), 'code_video_youtube', true);
									$fullImageUrl = 'https://i.ytimg.com/vi/' . $customImageUrl . '/hqdefault.jpg';

									$imageUrl = !empty($thumbnailUrl) ? $thumbnailUrl : $fullImageUrl;

									if (!empty($imageUrl)) {
										echo '<img data-src="' . esc_url($imageUrl) . '" src="#" alt="' . get_the_title() . '" loading="lazy" class="lazyload">';
									}

									$views = get_post_meta(get_the_ID(), 'entry_views', true);
									$comments_count = get_comments_number();

									echo '<span class="content-holder">';
									echo '<span class="item-title">' . get_the_title() . '</span>';
									echo '<span class="item-info">';
									echo '<span data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Перегляди" class="me-1"><i class="fa fa-eye"></i> ' . $views . '</span>';
									echo '<span data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Коментарі"><i class="fa fa-comments"></i> ' . $comments_count . '</span>';
									echo '</span>';
									echo '</span>';
									echo '</a></li>';


									?>
									<?php
						}
						wp_reset_postdata();
					} else {
						echo '<p class="mb-2">Записів не знайдено.</p>';
					}
					?>
				</ul>
			</div>
		</div>
	</div>
</main><!-- #main -->
<?php

get_footer();