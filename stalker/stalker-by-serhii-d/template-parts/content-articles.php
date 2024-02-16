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
					<img data-src="<?php the_post_thumbnail_url(); ?>" src="#" alt="<?php the_title() ?>" loading="lazy" class="lazyload">
				<? else: ?>
					<figure class="flex-column">
						<div class="img-holder mr-0 mb-2" style="max-width: 100%;">
							<img data-src="<?php the_post_thumbnail_url('large'); ?>" src="#" alt="<?php the_title() ?>" loading="lazy" class="lazyload">
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
					<li data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Категорія">
						<div class="icon-holder">
							<i class="fa fa-bars"></i>
						</div>
						<?php $categories = get_the_category();
						if (!empty($categories)) {
							echo '<a href="' . esc_url(get_category_link($categories[0]->term_id)) . '">' . esc_html($categories[0]->name) . '</a>';
						} ?>
					</li>
					<li data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Дата публікації">
						<div class="icon-holder">
							<i class="fa fa-calendar"></i>
						</div>
						<?php echo get_the_date(); ?>
					</li>
					<li data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Автор публікації">
						<div class="icon-holder">
							<i class="fa fa-user"></i>
						</div>
						<?php
						$author_id = get_the_author_meta('ID');
						$author_link = get_author_posts_url($author_id);
						echo '<a href="' . $author_link . '">' . get_the_author() . '</a>';
						?>
					</li>
					<li data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Перегляди">
						<div class="icon-holder">
							<i class="fa fa-eye"></i>
						</div>
						<?php
						if (get_post_meta(get_the_ID(), 'entry_views', true)) {
							echo get_post_meta(get_the_ID(), 'entry_views', true);
						} else {
							echo "0";
						}
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
			<!-- #post-<?php the_ID(); ?> -->