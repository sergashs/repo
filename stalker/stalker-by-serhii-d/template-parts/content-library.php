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
if (!is_singular()):
	?>
	<div class="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-2">
		<a href="<?php echo esc_url(get_permalink()); ?>" class="d-flex flex-column p-1 border text-decoration-none">
			<?php
			$thumbnail_url = wp_get_attachment_image_src(get_post_thumbnail_id(), 'thumbnail');
			$medium_large_url = wp_get_attachment_image_src(get_post_thumbnail_id(), 'medium_large');
			?>
			<?php if ($medium_large_url[0]): ?>
				<img data-src="<?php echo esc_url($medium_large_url[0]); ?>" src="#" alt="<?php the_title(); ?>" loading="lazy" class="mb-1 w-100 lazyload">
			<?php elseif ($thumbnail_url[0]): ?>
				<img data-src="<?php echo esc_url($thumbnail_url[0]); ?>" src="#" alt="<?php the_title(); ?>" loading="lazy" class="mb-1 w-100 lazyload">
			<?php endif; ?>
			<?php
			the_title('<h3 class="d-inline-block h4 text-truncate text-decoration-none"></h3>');
			?>
		</a>
	</div>
	<?php
else:
	?>
	<?php
	the_content();

	wp_link_pages(
		array(
			'before' => '<div class="page-links">' . esc_html__('Pages:', 'yourtheme'),
			'after' => '</div>',
		)
	);
?>
<?php
endif;
?>
<!-- #post-<?php the_ID(); ?> -->