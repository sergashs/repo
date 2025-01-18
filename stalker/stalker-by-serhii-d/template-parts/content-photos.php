<?php
if (is_singular()):
	echo '<div>';
else:
	echo '<div class="col-sm-6 col-md-4 mb-3">';
endif;
?>
<div class="card-video">
	<?php if (is_singular()): ?>
		<h1 class="pt-1 fs-2">
			<?php the_title(); ?>
		</h1>
	<?php endif; ?>
	<?php
	$post_id = get_the_ID();
	$picture_id = get_post_meta($post_id, 'picture', true);
	$is_singular = is_singular();
	$full_image_url = $is_singular ? wp_get_attachment_image_url($picture_id, 'full') : esc_url(get_permalink());
	$img_size = $is_singular ? 'full' : 'medium_large';
	?>
	<div class="img-holder ratio ratio-16x9 bg-black">
		<a href="<?php echo $full_image_url; ?>" <?php echo $is_singular ? 'data-fancybox="wp-gallery"' : ''; ?>>
			<?php if (has_post_thumbnail()): ?>
				<?php the_post_thumbnail($img_size, ['class' => 'position-absolute top-0 start-0 h-100', 'style' => 'object-fit: contain;']); ?>
			<?php else: ?>
				<?php
				$post_id = get_the_ID();
				$picture_id = get_post_meta($post_id, 'picture', true);
				if (!empty($picture_id)) {
					echo wp_get_attachment_image($picture_id, $img_size, false, ['class' => 'position-absolute top-0 start-0 h-100', 'style' => 'object-fit: contain;']);
				}
				?>
			<?php endif; ?>
		</a>
	</div>
	<?php if (!is_singular()): ?>
		<h3 class="card-title"><a href="<?php echo esc_url(get_permalink()); ?>" rel="bookmark">
				<?php the_title(); ?>
			</a></h3>
	<?php endif; ?>
	<?php if (is_singular()): ?>
		<div class="text-holder">
			<?php echo wp_kses_post(get_the_content()); ?>
		</div>
	<?php endif; ?>
	<!-- <?php
	if (!empty($picture_id) && $is_singular) {
		$post_title = 'Завантажити ' . get_the_title();
		$file_size = filesize(get_attached_file($picture_id));
		$formatted_file_size = size_format($file_size);

		echo '<a class="btn btn-primary with-icon d-flex mb-1" href="' . esc_url($full_image_url) . '" download="' . esc_url($full_image_url) . '">';
		echo '<span class="icon-holder"><i class="fas fa-download"></i></span> <span class="button-text p-1">';
		echo esc_html($post_title) . ' (' . esc_html($formatted_file_size) . ')';
		echo '</span> <span class="button-after"></span></a>';
	}
	?> -->
	<?php
	if (!empty($picture_id) && $is_singular) {
		$post_title = 'Завантажити ' . get_the_title();

		$original_image_url = wp_get_attachment_url($picture_id);
		$original_image_url = str_replace('-scaled', '', $original_image_url);

		echo '<a class="btn btn-primary with-icon d-flex mb-1" href="' . esc_url($original_image_url) . '" download="' . esc_url($original_image_url) . '">';
		echo '<span class="icon-holder"><i class="fas fa-download"></i></span> <span class="button-text p-1">';
		echo esc_html($post_title);
		echo '</span> <span class="button-after"></span></a>';
	}
	?>
	<ul class="card-info">
		<li class="info-item">
			<span class="with-dot">
				Переглядів:
				<?php echo get_post_meta(get_the_ID(), 'entry_views', true) ?: "0"; ?>
			</span>
			Додав:
			<?php
			$author_id = get_the_author_meta('ID');
			$author_link = get_author_posts_url($author_id);
			echo '<a href="' . $author_link . '">' . get_the_author() . '</a>';
			?>
		</li>
		<li class="info-item">Дата додавання:
			<?php echo get_the_date(); ?>
		</li>
		<li class="info-item">Категорія:
			<?php
			$primary_category_id = get_post_meta(get_the_ID(), '_yoast_wpseo_primary_category', true);

			if (!empty($primary_category_id)) {
				$primary_category = get_category($primary_category_id);
				echo '<a href="' . esc_url(get_category_link($primary_category->term_id)) . '">' . esc_html($primary_category->name) . '</a>';
			}
			?>
		</li>
	</ul>
</div>
</div>
<!-- #post-<?php the_ID(); ?> -->