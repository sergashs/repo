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
<div class="card-video">
	<?php
	if (is_singular()):
		the_title('<h1 class="pt-1 fs-2">', '</h1>');
	endif; ?>
	<?php
	if (!is_singular()) {
		echo '<a href="' . esc_url(get_permalink()) . '" class="img-holder">';
		$thumbnailUrl = get_the_post_thumbnail_url(get_the_ID(), 'large');
		$customImageUrl = get_post_meta(get_the_ID(), 'code_video_youtube', true);
		$fullImageUrl = 'https://i.ytimg.com/vi/' . $customImageUrl . '/hqdefault.jpg'; // maxresdefault.jpg
	
		$imageUrl = !empty($thumbnailUrl) ? $thumbnailUrl : $fullImageUrl;

		if (!empty($imageUrl)) {
			echo '<img data-src="' . esc_url($imageUrl) . '" src="#" alt="' . get_the_title() . '" loading="lazy" class="lazyload">';
			$videoDuration = get_post_meta(get_the_ID(), 'duration', true);

			if (!empty($videoDuration)) {
				$videoDurationFormatted = preg_replace('/^00:/', '', $videoDuration);
				echo '<span class="video-duration">' . esc_html($videoDurationFormatted) . '</span>';
			}
		}
		echo '</a>';
	}
	?>
	<?php
	if (is_singular()) {
		$customVideoCode = get_post_meta(get_the_ID(), 'code_video_youtube', true);
		if (!empty($customVideoCode)) {
			$plyrOptions = 'origin=https://plyr.io&iv_load_policy=3&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1';
			?>
			<link rel="stylesheet" href="https://cdn.plyr.io/3.7.8/plyr.css" />
			<script src="https://cdn.plyr.io/3.7.8/plyr.js"></script>
			<div class="plyr__video-embed" style="position:relative;margin-bottom:1rem;" id="player">
				<iframe src="https://www.youtube.com/embed/<?php echo esc_attr($customVideoCode); ?>?<?php echo $plyrOptions; ?>" allowfullscreen allowtransparency allow="autoplay"></iframe>
			</div>
			<?php
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