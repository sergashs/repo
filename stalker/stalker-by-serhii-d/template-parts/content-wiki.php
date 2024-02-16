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
	echo '<div>';
else:
	echo '<div class="col-sm-6 col-md-4 mb-3">';
endif; ?>
<?php
if (is_singular()):
	?>
	<div class="card card-article">
		<?php
else:
	?>
		<div class="card-news mb-1 item border-content h-100">
			<?php
endif;
?>
		<?php
		if (is_singular()):
			the_title('<h1 class="pt-1 fs-2">', '</h1>');
		else:
			the_title('<h3 class="mb-0 pb-0 border-bottom-0 fs-4"><a href="' . esc_url(get_permalink()) . '" rel="bookmark">', '</a></h3>');
		endif; ?>
		<? if (!is_singular()): ?>
			<img src="https://stalker-news.info/wp-content/uploads/2023/10/orange-line.svg" alt="orange line" class="width-max-100">
		<? endif; ?>
		<? if (!is_singular()): ?>
			<figure class="flex-column mb-0">
				<div class="img-holder mw-100 me-0">
					<a href="<?php echo esc_url(get_permalink()) ?>">
						<img data-src="<?php the_post_thumbnail_url(); ?>" src="#" alt="<?php the_title() ?>" loading="lazy" class="lazyload position-relative">
					</a>
				<? else: ?>
					<figure class="flex-column">
						<div class="img-holder mr-0 mb-1 mw-100">
							<a href="<?php the_post_thumbnail_url('full'); ?>" class="img-holder" data-fancybox="wp-gallery" data-src="<?php the_post_thumbnail_url('full'); ?>">
								<img data-src="<?php the_post_thumbnail_url('large'); ?>" src="#" alt="<?php the_title() ?>" loading="lazy" class="lazyload">
							</a>
						<? endif; ?>
					</div>
					<figcaption <?php if (!empty(get_the_content()))
						echo 'class="pt-1"'; ?>>
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
			</div>
	</div>
	<!-- #post-<?php the_ID(); ?> -->