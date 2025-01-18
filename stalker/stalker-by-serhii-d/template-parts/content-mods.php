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
	<div class="card card-mods">
		<?php
else:
	?>
		<div class="card card-mods block-border-1 p-1">
			<?php
endif;
?>
		<!-- <h3><a href="#">GSC Game World почали купляти рекламні інтеграції в ютуб блогерів</a></h3> -->
		<?php
		if (is_singular()):
			the_title('<h1 class="pt-1 fs-2">', '</h1>');
		else:
			the_title('<h3><a href="' . esc_url(get_permalink()) . '" rel="bookmark">', '</a></h3>');
		endif; ?>
		<figure>
			<div class="row">
				<div class="col-md-6">
					<div class="img-holder">
						<? if (is_singular()): ?>
							<img data-src="<?php the_post_thumbnail_url(); ?>" src="#" alt="<?php the_title() ?>" loading="lazy" class="lazyload">
						<? else: ?>
							<img data-src="<?php the_post_thumbnail_url('large'); ?>" src="#" alt="<?php the_title() ?>" loading="lazy" class="lazyload">
						<? endif; ?>
					</div>
				</div>
				<div class="col-md-6">
					<ul class="info-list">
						<li class="list-item">
							<div class="icon-holder">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grid" viewBox="0 0 16 16">
									<path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
								</svg>
							</div>
							<?php $categories = get_the_category();
							if (!empty($categories)) {
								echo '<a href="' . esc_url(get_category_link($categories[0]->term_id)) . '">' . esc_html($categories[0]->name) . '</a>';
							} ?>
						</li>
						<?php if (get_post_meta(get_the_ID(), 'data_vykhodu', true)): ?>
							<li class="list-item">
								<div class="icon-holder"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
										<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"></path>
									</svg></div>
								<?php
								$data_vykhodu = get_post_meta(get_the_ID(), 'data_vykhodu', true);

								if ($data_vykhodu) {
									$date = DateTime::createFromFormat('Ymd', $data_vykhodu);
									setlocale(LC_TIME, 'uk_UA.utf8');
									$formatted_date = strftime('%d %B %Y', $date->getTimestamp());

									echo $formatted_date;
								} ?>
							</li>
						<?php endif; ?>
						<?php if (get_post_meta(get_the_ID(), 'actual_version', true)): ?>
							<li class="list-item">
								<div class="icon-holder">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 -960 960 960">
										<path d="m200-120-80-480h720l-80 480H200Zm50-60h460l57-360H193l57 360Zm150-200h160q13 0 21.5-9t8.5-21q0-13-8.5-21.5T560-440H400q-12 0-21 8.5t-9 21.5q0 12 9 21t21 9ZM240-660q-12 0-21-9t-9-21q0-13 9-21.5t21-8.5h480q13 0 21.5 8.5T750-690q0 12-8.5 21t-21.5 9H240Zm80-120q-12 0-21-9t-9-21q0-13 9-21.5t21-8.5h320q13 0 21.5 8.5T670-810q0 12-8.5 21t-21.5 9H320Zm-70 600h460-460Z" />
									</svg>
								</div>
								<?php echo get_post_meta(get_the_ID(), 'actual_version', true); ?>
							</li>
						<?php endif; ?>
						<?php if (get_post_meta(get_the_ID(), 'author', true)): ?>
							<li class="list-item">
								<div class="icon-holder">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
										<path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
									</svg>
								</div>
								<?php echo get_post_meta(get_the_ID(), 'author', true); ?>
							</li>
						<?php endif; ?>
						<?php if (get_post_meta(get_the_ID(), 'size', true)): ?>
							<li class="list-item">
								<div class="icon-holder">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark" viewBox="0 0 16 16">
										<path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
									</svg>
								</div>
								<?php if (get_post_meta(get_the_ID(), 'size', true)): ?>
									<span class="me-2">
										<?php echo get_post_meta(get_the_ID(), 'size', true); ?>
									</span>
									<?php
									$file_hosting = get_post_meta(get_the_ID(), 'file_hosting', true);

									if (is_array($file_hosting)) {
										echo ' <ul style="list-style: none;" class="d-flex align-items-center m-0 p-0">';
										foreach ($file_hosting as $value) {
											echo '<li>';
											if ($value === 'Google Drive') {
												echo '
											<svg style="width: 18px; height: 18px;" class="me-1" viewBox="0 0 87.3 78" xmlns="http://www.w3.org/2000/svg">
												<path d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/>
												<path d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z" fill="#00ac47"/>
												<path d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z" fill="#ea4335"/>
												<path d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/>
												<path d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc"/>
												<path d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/>
											</svg>
											';
											}
											if ($value === 'Torrent') {
												echo '
											
											<?xml version="1.0" encoding="UTF-8" ?>
											<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
											<svg style="width: 18px; height: 18px;" width="48pt" height="48pt" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
											<g id="#ffffffff">
											<path fill="#ffffff" opacity="1.00" d=" M 19.44 0.00 L 28.55 0.00 C 33.03 1.60 37.42 3.79 40.84 7.16 C 44.21 10.57 46.39 14.97 48.00 19.44 L 48.00 28.55 C 46.40 33.03 44.21 37.42 40.84 40.84 C 37.42 44.21 33.03 46.39 28.56 48.00 L 19.45 48.00 C 14.97 46.39 10.57 44.21 7.15 40.84 C 3.78 37.43 1.61 33.03 0.00 28.56 L 0.00 19.45 C 1.60 14.97 3.78 10.57 7.16 7.16 C 10.58 3.79 14.96 1.61 19.44 0.00 M 2.69 23.01 C 2.14 32.19 8.56 41.23 17.26 44.01 C 15.08 34.46 9.81 25.88 7.93 16.25 C 10.02 15.13 12.40 15.06 14.71 15.11 C 16.23 17.76 17.36 20.60 18.36 23.48 C 19.40 26.24 20.63 29.43 23.62 30.58 C 27.22 32.51 32.44 30.18 32.96 26.03 C 31.83 21.28 28.76 17.19 28.07 12.30 C 29.87 11.90 31.68 11.55 33.50 11.26 C 36.04 15.61 37.32 20.60 40.11 24.81 C 41.16 26.52 43.08 27.23 45.01 27.25 C 47.32 15.27 36.98 3.15 25.00 2.69 C 13.74 1.97 3.14 11.81 2.69 23.01 M 30.04 34.98 C 27.68 35.82 25.12 35.50 22.66 35.51 C 23.66 38.96 24.95 42.35 26.99 45.33 C 34.58 43.87 40.99 38.42 44.05 31.39 C 41.29 31.21 38.55 30.82 35.86 30.17 C 33.95 31.80 32.28 33.78 30.04 34.98 Z" />
											</g>
											<g id="#00853eff">
											<path fill="#00853e" opacity="1.00" d=" M 2.69 23.01 C 3.14 11.81 13.74 1.97 25.00 2.69 C 36.98 3.15 47.32 15.27 45.01 27.25 C 43.08 27.23 41.16 26.52 40.11 24.81 C 37.32 20.60 36.04 15.61 33.50 11.26 C 31.68 11.55 29.87 11.90 28.07 12.30 C 28.76 17.19 31.83 21.28 32.96 26.03 C 32.44 30.18 27.22 32.51 23.62 30.58 C 20.63 29.43 19.40 26.24 18.36 23.48 C 17.36 20.60 16.23 17.76 14.71 15.11 C 12.40 15.06 10.02 15.13 7.93 16.25 C 9.81 25.88 15.08 34.46 17.26 44.01 C 8.56 41.23 2.14 32.19 2.69 23.01 Z" />
											<path fill="#00853e" opacity="1.00" d=" M 30.04 34.98 C 32.28 33.78 33.95 31.80 35.86 30.17 C 38.55 30.82 41.29 31.21 44.05 31.39 C 40.99 38.42 34.58 43.87 26.99 45.33 C 24.95 42.35 23.66 38.96 22.66 35.51 C 25.12 35.50 27.68 35.82 30.04 34.98 Z" />
											</g>
											</svg>

											';
											}


											echo '</li>';
										}
										echo '</ul>';
									}
									?>
								<?php endif; ?>
							</li>
						<?php endif; ?>
						<li class="list-item">
							<div class="icon-holder">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
									<path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
									<path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
								</svg>
							</div>
							<?php
							if (get_post_meta(get_the_ID(), 'entry_views', true)) {
								echo get_post_meta(get_the_ID(), 'entry_views', true);
							} else {
								echo "0";
							}
							?>
						</li>
						<li class="list-item">
							<div class="icon-holder">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 -960 960 960" width="48" fill="currentColor">
									<path d="M160-160v-440h140v440H160Zm250 0v-640h140v640H410Zm250 0v-280h140v280H660Z" />
								</svg>
							</div>
							<?php
							$ratings = array();

							$comments = get_comments(
								array(
									'post_id' => get_the_ID(),
								)
							);


							foreach ($comments as $comment) {
								$rating = get_comment_meta($comment->comment_ID, 'rating', true);
								if ($rating) {
									$ratings[] = $rating;
								}
							}

							$average_rating = 0;
							$total_ratings = 0;

							if (!empty($ratings)) {
								$total_ratings = count($ratings);
								$sum_ratings = array_sum($ratings);
								$average_rating = $sum_ratings / $total_ratings;
							}


							echo '' . number_format($average_rating, 1) . '/10.0 &nbsp;<small>(' . $total_ratings . ' оцінок)</small>';



							?>
						</li>
					</ul>
				</div>
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
		<?php
		// Get the current post ID
		$post_id = get_the_ID();

		// Custom taxonomy field name created by ACF
		$field_name = 'mods-feature';

		// Get the terms for the custom taxonomy associated with the post
		$terms = get_field($field_name, $post_id);

		// Check if terms exist
		if (!empty($terms)) {
			echo "<ul class='tags-list'>";

			// Loop through the terms
			foreach ($terms as $term) {
				echo "<li class='list-item'><a href='" . get_term_link($term) . "'>" . $term->name . "</a></li>";
			}

			echo "</ul>";
		}
		?>
		<?php
		if (is_singular()):
			?>
			<?php $download_link = get_post_meta(get_the_ID(), 'download_link', true);
			if ($download_link) {
				$post_title = get_the_title();
				echo '<a class="btn btn-primary with-icon d-flex mt-1" href="' . esc_url($download_link) . '">
							<span class="icon-holder"><i class="fas fa-download"></i></span>
							<span class="button-text p-1">Завантажити ' . esc_html($post_title) . '</span>
							<span class="button-after"></span></a>';
			} ?>
			<?php
		endif;
		?>
	</div>
	<!-- #post-<?php the_ID(); ?> -->