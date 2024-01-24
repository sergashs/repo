<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package stalker-by-serhii.D
 */

?>
<?php
if (is_singular()):
	?>
	<div class="card card-article">
		<?php
else:
	?>
		<div class="card card-news card-article block-border-1 p-1">
			<?php
endif;
?>
		<?php
		if (is_singular()):
			the_title('<h1 class="pt-1 fs-2">', '</h1>');
		else:
			the_title('<h3><a href="' . esc_url(get_permalink()) . '" rel="bookmark">', '</a></h3>');
		endif; ?>
		<? if (!is_singular()): ?>
			<figure>
				<div class="img-holder">
					<?php
					$thumbnail_url = wp_get_attachment_image_src(get_post_thumbnail_id(), 'thumbnail');
					$medium_large_url = wp_get_attachment_image_src(get_post_thumbnail_id(), 'medium_large');
					?>
					<?php if ($medium_large_url[0]): ?>
						<img data-src="<?php echo esc_url($medium_large_url[0]); ?>" src="#" alt="<?php the_title(); ?>" loading="lazy" class="lazyload">
					<?php elseif ($thumbnail_url[0][0]): ?>
						<img data-src="<?php echo esc_url($thumbnail_url[0][0]); ?>" src="#" alt="<?php the_title(); ?>" loading="lazy" class="lazyload">
					<?php endif; ?>
				<? else: ?>
					<figure class="flex-column">
						<div class="img-holder mr-0 mb-2" style="max-width: 100%;">
							<img data-src="<?php the_post_thumbnail_url('full'); ?>" src="#" alt="<?php the_title() ?>" loading="lazy" class="lazyload">
						<? endif; ?>
					</div>
					<figcaption>
						<?php
						the_content(
							sprintf(
								wp_kses(
									/* translators: %s: Name of current post. Only visible to screen readers */
									__('Читати повністю<span class="screen-reader-text"> "%s"</span>', 'stalker-by-serhii-d'),
									array(
										'span' => array(
											'class' => array(),
										),
									)
								),
								wp_kses_post(get_the_title())
							)
						);

						wp_link_pages(
							array(
								'before' => '<div class="page-links">' . esc_html__('Pages:', 'stalker-by-serhii-d'),
								'after' => '</div>',
							)
						);
						?>
					</figcaption>
				</figure>
				<ul class="meta-info">
					<li>
						<div class="icon-holder">
							<i class="bi bi-grid"></i>
						</div>
						<?php $categories = get_the_category();
						if (!empty($categories)) {
							echo '<a href="' . esc_url(get_category_link($categories[0]->term_id)) . '">' . esc_html($categories[0]->name) . '</a>';
						} ?>
					</li>
					<li>
						<div class="icon-holder">
							<i class="bi bi-calendar4"></i>
						</div>
						<?php echo get_the_date(); ?>
					</li>
					<li>
						<div class="icon-holder">
							<i class="bi bi-person"></i>
						</div>
						<?php
						$author_id = get_the_author_meta('ID');
						$author_link = get_author_posts_url($author_id);
						echo '<a href="' . $author_link . '">' . get_the_author() . '</a>';
						?>
					</li>
					<li>
						<div class="icon-holder">
							<i class="bi bi-eye"></i>
						</div>
						<?php
						if (get_post_meta(get_the_ID(), 'entry_views', true)) {
							echo get_post_meta(get_the_ID(), 'entry_views', true);
						} else {
							echo "0";
						}
						?>
					</li>
					<li>
						<div class="icon-holder">
							<i class="bi bi-chat-dots"></i>
						</div>
						<?php
						$post_id = get_the_ID();
						$comments_count = get_comments_number($post_id);
						echo $comments_count;
						?>
					</li>
				</ul>
			</div>
			<!-- #post-<?php the_ID(); ?> -->