<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package stalker-by-serhii.D
 */

get_header();
?>
<main id="primary" class="site-main pt-0">
	<div class="main-page">
		<div class="container-fluid">
			<div class="informer-buy-game new-mods section-bg p-2 pb-3 mx-minus overflow-hidden">
				<img data-src="https://stalker-news.info/wp-content/uploads/2023/10/bg-01.webp" loading="lazy" class="lazyload lazyload-bg" src="#" alt="background">
				<div class="swiper swiper-container swiper-new-mods overflow-visible">
					<div class="d-flex flex-column align-items-center pt-1 mb-2 mb-md-3">
						<span class="pb-0 border-bottom-0 text-center fs-3 mb-1 d-block h3">Нові модифікації</span>
						<img data-src="https://stalker-news.info/wp-content/uploads/2023/10/radiation-line.svg" src="#" alt="Radiation line" class="ms-auto me-auto width-max-100 lazyload" loading="lazy">
					</div>
					<div class="swiper-wrapper">
						<?php
						$args = array(
							'post_type' => 'mods',
							'posts_per_page' => 6,
						);

						$news_query = new WP_Query($args);

						if ($news_query->have_posts()) {
							while ($news_query->have_posts()) {
								$news_query->the_post();
								?>
								<div class="swiper-slide">
									<div class="card-news mb-2">
										<div class="item border-content">
											<figure class="flex-column mb-1">
												<a href="<?php the_permalink(); ?>" class="img-holder me-0 mb-0" style="max-width: 100%;">
													<?php
													$thumbnail_url = wp_get_attachment_image_src(get_post_thumbnail_id(), 'thumbnail');
													$medium_large_url = wp_get_attachment_image_src(get_post_thumbnail_id(), 'medium_large');
													?>
													<?php if ($medium_large_url[0]): ?>
														<img data-src="<?php echo esc_url($medium_large_url[0]); ?>" src="#" alt="<?php the_title(); ?>" loading="lazy" class="lazyload">
													<?php elseif ($thumbnail_url[0][0]): ?>
														<img data-src="<?php echo esc_url($thumbnail_url[0][0]); ?>" src="#" alt="<?php the_title(); ?>" loading="lazy" class="lazyload">
													<?php endif; ?>
													<span class="visually-hidden"><?php the_title(); ?></span>
												</a>
											</figure>
											<img data-src="https://stalker-news.info/wp-content/uploads/2023/10/orange-line.svg" src="#" alt="orange line" class="width-max-100 lazyload" loading="lazy">
											<?php the_title('<h3><a href="' . esc_url(get_permalink()) . '" rel="bookmark">', '</a></h3>'); ?>
										</div>
									</div>
								</div>
								<?php
							}
							wp_reset_postdata();
						}
						?>
					</div>
					<div class="swiper-pagination"></div>
				</div>
			</div>
			<div class="mx-minus">
				<hr>
			</div>
			<div class="row section-bg">
				<img data-src="https://stalker-news.info/wp-content/uploads/2023/10/bg-03.webp" loading="lazy" class="lazyload lazyload-bg" src="#" alt="background">
				<div class="col-lg-6 informer-row-border d-flex flex-column">
					<div class="mb-2">
						<span class="mb-0 pb-0 border-bottom-0 fs-3 pt-1 h3 d-block">Новини</span>
						<img data-src="https://stalker-news.info/wp-content/uploads/2023/10/orange-line.svg" src="#" alt="orange line" class="width-max-100 lazyload" loading="lazy">
					</div>
					<?php
					$args = array(
						'post_type' => 'news',
						'posts_per_page' => 7,
					);

					$news_query = new WP_Query($args);

					if ($news_query->have_posts()) {
						while ($news_query->have_posts()) {
							$news_query->the_post();
							?>
							<div class="card card-news block-border-1 p-1">
								<?php the_title('<h3><a href="' . esc_url(get_permalink()) . '" rel="bookmark">', '</a></h3>'); ?>
								<figure>
									<div class="img-holder img-small">
										<?php
										$thumbnail_url = wp_get_attachment_image_src(get_post_thumbnail_id(), 'thumbnail');
										$medium_large_url = wp_get_attachment_image_src(get_post_thumbnail_id(), 'medium_large');
										?>
										<?php if ($medium_large_url[0]): ?>
											<img data-src="<?php echo esc_url($medium_large_url[0]); ?>" src="#" alt="<?php the_title(); ?>" loading="lazy" class="lazyload">
										<?php elseif ($thumbnail_url[0][0]): ?>
											<img data-src="<?php echo esc_url($thumbnail_url[0][0]); ?>" src="#" alt="<?php the_title(); ?>" loading="lazy" class="lazyload">
										<?php endif; ?>
									</div>
									<figcaption>
										<?php
										the_content(
											sprintf(
												wp_kses(
													__('', 'stalker-by-serhii-d'),
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
										<a href="<?php the_permalink(); ?>" class="read-more-link">Читати далі</a>
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
										$views = get_post_meta(get_the_ID(), 'entry_views', true);
										echo $views ? $views : "0";
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
							<?php
						}
						wp_reset_postdata();
					}
					?>
					<div class="mx-minus">
						<hr>
					</div>
					<div class="section-bg mx-minus text-center flex-grow-1">
						<img data-src="https://stalker-news.info/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/04/S2HoC_GSCGameWorld_Ferris_wheel-1200x675.jpg.webp" src="#" alt="background" loading="lazy" class="lazyload lazyload-bg">
						<div class="bg-dark py-5 py-md-4 bg-opacity-50 h-100 d-flex flex-column justify-content-center">
							<div class="mb-3 d-flex flex-column">
								<span class="mb-1 pb-0 border-bottom-0 fs-3 pt-0 h3 d-block">До виходу S.T.A.L.K.E.R. 2</span>
								<img data-src="https://stalker-news.info/wp-content/uploads/2023/10/radiation-line.svg" src="#" alt="Radiation line" class="ms-auto me-auto width-max-100 lazyload" loading="lazy">
							</div>
							<div id="countdown-timer" class="text-white d-flex justify-content-center">
								<div class="flex-column align-items-center mx-1 mb-1">
									<div id="days" class="h3 fs-3 mb-1"> 0</div> <span class="slim-countdown-text">Д<span class="hide-words">нів</span><span class="timer"></span></span>
								</div>
								<div class="flex-column align-items-center mx-1 mb-1">
									<div id="hours" class="h3 fs-3 mb-1"> 0</div> <span class="slim-countdown-text">Г<span class="hide-words">один</span><span class="timer"></span></span>
								</div>
								<div class="flex-column align-items-center mx-1 mb-1">
									<div id="mins" class="h3 fs-3 mb-1"> 0</div> <span class="slim-countdown-text">Х<span class="hide-words">вилин</span><span class="timer"></span></span>
								</div>
								<div class="flex-column align-items-center mx-1 mb-1">
									<div id="seconds" class="h3 fs-3 mb-1"> 0</div> <span class="slim-countdown-text">С<span class="hide-words">екунд</span></span><span class="timer"></span></span>
								</div>
							</div>
						</div>
					</div>
					<div class="mx-minus d-lg-none">
						<hr>
					</div>
				</div>
				<div class="col-lg-6">
					<div class="row h-100">
						<div class="col-md-6 informer-row-border">
							<div class="mb-2">
								<span class="mb-0 pb-0 border-bottom-0 fs-3 pt-1 h3 d-block">Статті</span>
								<img src="https://stalker-news.info/wp-content/uploads/2023/10/orange-line.svg" alt="orange line" class="width-max-100">
							</div>
							<?php
							$args = array(
								'post_type' => 'articles',
								'posts_per_page' => 5,
							);

							$news_query = new WP_Query($args);

							if ($news_query->have_posts()) {
								while ($news_query->have_posts()) {
									$news_query->the_post();
									?>
									<div class="card card-news p-1 card-article mb-2 block-border-1">
										<figure class="flex-column mb-1">
											<a href="<?php the_permalink(); ?>" class="img-holder me-0 mb-0" style="max-width: 100%;">
												<img data-src="<?php the_post_thumbnail_url('medium_large'); ?>" src="#" alt="<?php the_title() ?>" loading="lazy" class="lazyload">
											</a>
										</figure>
										<?php the_title('<h3><a href="' . esc_url(get_permalink()) . '" rel="bookmark">', '</a></h3>'); ?>
									</div>
									<?php
								}
								wp_reset_postdata();
							}
							?>
							<div class="mx-minus">
								<hr>
							</div>
							<div class="mb-2">
								<span class="mb-0 pb-0 border-bottom-0 fs-3 pt-1 h3 d-block">Рецензійна Еліта</span>
								<img src="https://stalker-news.info/wp-content/uploads/2023/10/orange-line.svg" alt="orange line" class="width-max-100">
							</div>
							<?php

							$users = get_users();
							$user_comments_count = array();
							$item_count = 0;


							foreach ($users as $user) {
								$user_id = $user->ID;

								$args = array(
									'user_id' => $user_id,
									'post_type' => 'mods',
								);
								$comments = get_comments($args);


								$user_comments_count[$user_id] = count($comments);
							}

							arsort($user_comments_count);
							$total_items = count($user_comments_count);

							foreach ($user_comments_count as $user_id => $comments_count) {
								$user_info = get_userdata($user_id);
								$user_name = $user_info->display_name;
								$user_url = get_author_posts_url($user_id);
								$user_avatar = get_avatar_url($user_id, array('size' => 48));

								echo '<div class="card card-news p-0 mb-0 d-flex align-items-center">';
								echo '<a href="' . esc_url($user_url) . '"><img data-src="' . esc_url($user_avatar) . '" src="#" width="54" height="54" class="rounded-2 object-fit-cover lazyload" loading="lazy" alt="' . esc_attr($user_name) . '"></a>';
								echo '<div class="ps-1">';
								echo '<a href="' . esc_url($user_url) . '">' . esc_html($user_name) . '</a>';
								echo '<div><i class="fas fa-pencil-alt"></i> Рецензій: ' . esc_html($comments_count) . '</div>';
								echo '</div>';
								echo '</div>';
								if ($item_count < 4) {
									echo '<hr class="pb-1 mb-1">';
								}

								$item_count++;
								if ($item_count >= 5) {
									break;
								}
							}
							?>
							<div class="pb-2"></div>
						</div>
						<div class="col-md-6">
							<div class="mx-minus d-md-none">
								<hr>
							</div>
							<div class="mb-2">
								<span class="mb-0 pb-0 border-bottom-0 fs-3 pt-1 h3 d-block">Відео</span>
								<img data-src="https://stalker-news.info/wp-content/uploads/2023/10/orange-line.svg" src="#" alt="orange line" loading="lazy" class="width-max-100 lazyload">
							</div>
							<ul class="informer-new-videos mb-2">
								<?php
								$args = array(
									'post_type' => 'videos',
									'posts_per_page' => 3,
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
								}
								?>
							</ul>
							<div class="mx-minus">
								<hr>
							</div>
							<div class="mb-2">
								<span class="mb-0 pb-0 border-bottom-0 fs-3 pt-1 h3 d-block">Фото</span>
								<img data-src="https://stalker-news.info/wp-content/uploads/2023/10/orange-line.svg" src="#" alt="orange line" loading="lazy" class="lazyload width-max-100">
							</div>
							<?php
							$posts = wp_get_recent_posts([
								'post_type' => 'photos',
								'numberposts' => 3,
							]);

							foreach ($posts as $post) {
								$post_id = $post['ID'];
								$post_permalink = get_permalink($post_id);

								?>
								<div class="card card-news p-0 mb-2">
									<figure class="flex-column mb-0">
										<a href="<?php echo esc_url($post_permalink); ?>" class="img-holder scale-animation me-0 mb-0">
											<?php
											$picture_id = get_post_meta($post_id, 'picture', true);

											if (!empty($picture_id)) {
												$image_url = wp_get_attachment_image_url($picture_id, 'thumbnail');

												echo wp_get_attachment_image($picture_id, 'thumbnail');

												echo '<span class="visually-hidden">' . get_the_title($post_id) . '</span>';

											} else {
												echo "ID картинки не знайдено за полем 'picture'.";
											}
											?>
										</a>
									</figure>
								</div>
								<?php
							}
							?>
							<div class="mx-minus">
								<hr>
							</div>
							<div class="mb-2">
								<span class="mb-0 pb-0 border-bottom-0 fs-3 pt-1 h3 d-block">Коментарі</span>
								<img data-src="https://stalker-news.info/wp-content/uploads/2023/10/orange-line.svg" src="#" alt="orange line" loading="lazy" class="lazyload width-max-100">
							</div>
							<?php echo do_shortcode('[last_comments count=10]'); ?>
							<div class="mx-minus">
								<hr>
							</div>
							<div class="mb-2">
								<span class="mb-0 pb-0 border-bottom-0 fs-3 pt-1 h3 d-block">Статистика</span>
								<img data-src="https://stalker-news.info/wp-content/uploads/2023/10/orange-line.svg" src="#" alt="orange line" loading="lazy" class="lazyload width-max-100">
							</div>
							<?php echo do_shortcode('[cbxuseronline mostuseronline=0 mobile=0 memberlist=0]'); ?>
							<?php
							global $wpdb;
							$table_name = $wpdb->prefix . 'cbxuseronline';
							$results = $wpdb->get_results("SELECT * FROM $table_name");

							$unique_users = array();

							echo '<div class="d-flex flex-wrap">';

							if ($results) {
								$total_users = count($results);
								foreach ($results as $index => $result) {
									if ($result->user_type === 'user') {
										if (!in_array($result->user_name, $unique_users)) {
											$unique_users[] = $result->user_name;

											$wpf_member_obj = get_user_meta($result->userid, '_wpf_member_obj', true);
											$group_color = isset($wpf_member_obj['group_color']) ? $wpf_member_obj['group_color'] : '';
											$style = $group_color ? "style='color: $group_color;'" : '';
											$user_url = get_author_posts_url($result->userid);

											echo "<a href='$user_url' $style>" . $result->user_name . "</a>";


											if ($index < $total_users - 1) {
												echo '<span style="margin-right:0.3rem;">,</span>';
											}
										}
									}
								}
							}

							echo '</div>';
							?>
							<hr class="mt-1 mb-1">
							<a href="#" data-bs-toggle="modal" data-bs-target="#SiteVisitors">Хто нас сьогодні відвідав?</a>
							<div class="pb-2"></div>
						</div>
					</div>
				</div>
			</div>
			<div class="mx-minus">
				<hr>
			</div>
			<div class="section-bg p-2 mx-minus overflow-hidden">
				<img data-src="https://stalker-news.info/wp-content/uploads/2023/10/bg.webp" loading="lazy" class="lazyload lazyload-bg" src="#" alt="background">
				<div class="d-flex flex-column align-items-center mb-2 mb-md-3">
					<span class="pb-0 border-bottom-0 text-center fs-3 mb-1 h3 d-block">Нові рецензії</span>
					<img data-src="https://stalker-news.info/wp-content/uploads/2023/10/radiation-line.svg" src="#" alt="Radiation line" loading="lazy" class="lazyload ms-auto me-auto width-max-100">
				</div>
				<?php
				$content = do_shortcode('[last_comments_mods count=6]');
				echo $content;
				?>
			</div>
		</div>
	</div>
</main><!-- #main -->
<?php

get_footer();