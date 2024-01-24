<?php
?>
<?php
if (is_singular()):
	echo '<div>';
else:
	echo '<div class="col-sm-6 col-md-4 mb-3">';
endif; ?>
<div class="card-video">
	<?php
	if (is_singular()):
		echo the_title('<h1 class="pt-1 fs-2">', '</h1>');
	endif; ?>
	<?php
	$post_id = get_the_ID();

	$picture_id = get_post_meta($post_id, 'picture', true);

	$is_singular = is_singular();

	if (!empty($picture_id)) {
		if (!$is_singular) {
			$image_url = wp_get_attachment_image_url($picture_id, 'large');
			echo '<a href="' . esc_url(get_permalink()) . '" class="img-holder">';
			echo wp_get_attachment_image($picture_id, 'large');
			echo '</a>';
		} else {
			$full_image_url = wp_get_attachment_image_url($picture_id, 'full');
			$post_permalink = get_permalink($post_id);
			echo '<a href="' . esc_url($full_image_url) . '" class="img-holder" data-fancybox="wp-gallery" data-src="' . esc_url($full_image_url) . '"><img src="' . esc_url($full_image_url) . '"></a>';
		}
	}
	?>
	<?php
	if (!is_singular()):
		the_title('<h3 class="card-title"><a href="' . esc_url(get_permalink()) . '" rel="bookmark">', '</a></h3>');
	endif; ?>
	<?php
	if (is_singular()) {
		echo '<div class="text-holder">' . wp_kses_post(get_the_content()) . '</div>';
	}
	?>
	<?php
	$post_id = get_the_ID();
	$picture_id = get_post_meta($post_id, 'picture', true);
	$is_singular = is_singular();

	if (!empty($picture_id) && $is_singular) {
		$full_image_url = wp_get_attachment_image_url($picture_id, 'full');
		$post_title = 'Завантажити ' . get_the_title();

		$file_size = filesize(get_attached_file($picture_id));
		$formatted_file_size = size_format($file_size);

		echo '<a class="btn btn-primary with-icon d-flex mb-1" href="' . esc_url($full_image_url) . '" download="' . esc_attr($post_title) . '"><span class="icon-holder"><i class="bi bi-download"></i></span> <span class="button-text p-1">';
		echo esc_html($post_title);
		echo ' (' . esc_html($formatted_file_size) . ')';
		echo '</span> <span class="button-after"></span></a>';
	}
	?>
	<ul class="card-info">
		<li class="info-item">
			<span class="with-dot">
				Переглядів:
				<?php
				if (get_post_meta(get_the_ID(), 'entry_views', true)) {
					echo get_post_meta(get_the_ID(), 'entry_views', true);
				} else {
					echo "0";
				}
				?>
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
			$primary_category_id = get_post_meta(get_the_ID(), '_yoast_wpseo_primary_category', true); // Отримуємо ID основної категорії
			
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