<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package stalker-by-serhii.D
 */

?>
<div class="item">
	<!-- <h3><a href="#">GSC Game World почали купляти рекламні інтеграції в ютуб блогерів</a></h3> -->
	<?php
	if (is_singular()):
		the_title('<h1>', '</h1>');
	else:
		the_title('<h3><a href="' . esc_url(get_permalink()) . '" rel="bookmark">', '</a></h3>');
	endif; ?>
	<figure>
		<div class="img-holder">
			<? if (is_singular()): ?>
				<img data-src="<?php the_post_thumbnail_url(); ?>" src="#" alt="<?php the_title() ?>" loading="lazy" class="lazyload">
			<? else: ?>
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
		<li>
			<?php $categories = get_the_category();
			if (!empty($categories)) {
				echo '<a href="' . esc_url(get_category_link($categories[0]->term_id)) . '">' . esc_html($categories[0]->name) . '</a>';
			} ?>
		</li>
		<li>Дата додавання
			<?php echo get_the_date(); ?>
		</li>
		<li>
			<?php stalker_by_serhii_d_posted_by(); ?>
		</li>
		<li>Переглядів:
			<?php
			if (get_post_meta(get_the_ID(), 'entry_views', true)) {
				echo get_post_meta(get_the_ID(), 'entry_views', true);
			} else {
				echo "0";
			}
			?>
		</li>
	</ul>
</div>
<!-- #post-<?php the_ID(); ?> -->