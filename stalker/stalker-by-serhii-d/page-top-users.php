<?php
/*
Template Name: top users
*/

get_header(); ?>
<main id="primary" class="site-main pt-0">
	<div class="container-fluid">
		<?php
		if (have_posts()) {
			while (have_posts()) {
				the_post();
				the_content();
			}
		}
		?>
		<nav>
			<div class="nav nav-tabs mb-1" id="nav-tab" role="tablist">
				<button class="btn btn-primary me-1 active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="false" tabindex="-1">
					<span class="button-before"></span>
					<span class="button-text">
						За місяць
					</span>
					<span class="button-after"></span>
				</button>
				<button class="btn btn-primary" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false" tabindex="-1">
					<span class="button-before"></span>
					<span class="button-text">
						За весь час
					</span>
					<span class="button-after"></span>
				</button>
			</div>
		</nav>
		<div class="tab-content" id="nav-tabContent">
			<div class="tab-pane fade active show" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
				<?php
				global $wpdb;

				$current_date = current_time('mysql');

				$first_day_of_month = date('Y-m-01', strtotime($current_date));
				$last_day_of_month = date('Y-m-t', strtotime($current_date));

				$users = get_users();

				if (!empty($users)) {
					$user_data = array();

					foreach ($users as $user) {
						$forum_topics_count = $wpdb->get_var(
							$wpdb->prepare(
								"SELECT COUNT(*) FROM {$wpdb->prefix}wpforo_topics WHERE userid = %d AND YEAR(created) = YEAR(CURRENT_DATE()) AND MONTH(created) = MONTH(CURRENT_DATE())",
								$user->ID
							)
						);

						$forum_posts_count = $wpdb->get_var(
							$wpdb->prepare(
								"SELECT COUNT(*) FROM {$wpdb->prefix}wpforo_posts WHERE userid = %d AND YEAR(created) = YEAR(CURRENT_DATE()) AND MONTH(created) = MONTH(CURRENT_DATE())",
								$user->ID
							)
						);


						$wpforo_member_data = wpforo_member($user->ID);
						$comments_count_all = get_comments(
							array(
								'user_id' => $user->ID,
								'count' => true,
								'status' => 'approve',
								'date_query' => array(
									array(
										'year' => date('Y'),
										'month' => date('m'),
									),
								),
							)
						);

						$args_mods = array(
							'user_id' => $user->ID,
							'count' => true,
							'status' => 'approve',
							'post_type' => 'mods',
							'date_query' => array(
								array(
									'year' => date('Y'),
									'month' => date('m'),
								),
							),
						);

						$comments_count_mods = get_comments($args_mods);
						$comments_count_others = $comments_count_all - $comments_count_mods;

						$points = ($forum_topics_count * 1) + ($forum_posts_count * 0.5) + ($comments_count_others * 1) + ($comments_count_mods * 2.5);


						$user_data[$user->ID] = array(
							'forum_posts' => $forum_posts_count,
							'forum_topics' => $forum_topics_count,
							'comments_count_others' => $comments_count_others,
							'comments_count_mods' => $comments_count_mods,
							'points' => $points,
						);

					}


					uasort($user_data, function ($a, $b) {
						return $b['points'] <=> $a['points'];
					});

					$user_data = array_slice($user_data, 0, 20, true);

					?>
					<div class="table-holder">
						<table class="table w-100 mb-2">
							<thead>
								<tr>
									<th class="border p-1" style="color: #cdcdcd;">#</th>
									<th class="border p-1" style="color: #cdcdcd;">Нікнейм</th>
									<th class="border p-1" style="color: #cdcdcd;">Рецензії</th>
									<th class="border p-1" style="color: #cdcdcd;">Теми на форумі</th>
									<th class="border p-1" style="color: #cdcdcd;">Повідомлення на форумі</th>
									<th class="border p-1" style="color: #cdcdcd;">Коментарі</th>
									<th class="border p-1" style="color: #cdcdcd;">Бали</th>
								</tr>
							</thead>
							<tbody>
								<?php
								$user_number = 1;

								foreach ($user_data as $user_id => $data) {
									$user_info = get_userdata($user_id);
									$user_profile_url = get_author_posts_url($user_id);
									?>
									<tr>
										<td class="border p-1"><?php echo esc_html($user_number); ?></td>
										<td class="border p-1"><a href="<?php echo esc_url($user_profile_url); ?>"><?php echo esc_html($user_info->display_name); ?></a></td>
										<td class="border p-1"><?php echo esc_html($data['comments_count_mods']); ?></td>
										<td class="border p-1"><?php echo esc_html($data['forum_topics']); ?></td>
										<td class="border p-1"><?php echo esc_html($data['forum_posts']); ?></td>
										<td class="border p-1"><?php echo esc_html($data['comments_count_others']); ?></td>
										<td class="border p-1">🏆<?php echo number_format($data['points'], 1); ?></td>
									</tr>
									<?php
									$user_number++;
								}
								?>
							</tbody>
						</table>
					</div>
					<?php
				} else {
					echo 'Користувачів не знайдено.';
				}
				?>
			</div>
			<div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
				<?php
				global $wpdb;

				$users = get_users();

				if (!empty($users)) {
					$user_data_all_time = array();

					foreach ($users as $user) {
						$forum_topics_count_all_time = $wpdb->get_var(
							$wpdb->prepare(
								"SELECT COUNT(*) FROM {$wpdb->prefix}wpforo_topics WHERE userid = %d",
								$user->ID
							)
						);

						$forum_posts_count_all_time = $wpdb->get_var(
							$wpdb->prepare(
								"SELECT COUNT(*) FROM {$wpdb->prefix}wpforo_posts WHERE userid = %d",
								$user->ID
							)
						);

						$wpforo_member_data = wpforo_member($user->ID);
						$comments_count_all_time = get_comments(
							array(
								'user_id' => $user->ID,
								'count' => true,
								'status' => 'approve',
							)
						);

						$args_mods_all_time = array(
							'user_id' => $user->ID,
							'count' => true,
							'status' => 'approve',
							'post_type' => 'mods',
						);

						$comments_count_mods_all_time = get_comments($args_mods_all_time);
						$comments_count_others_all_time = $comments_count_all_time - $comments_count_mods_all_time;

						$points_all_time = ($forum_topics_count_all_time * 1) + ($forum_posts_count_all_time * 0.5) + ($comments_count_others_all_time * 1) + ($comments_count_mods_all_time * 2.5);

						$user_data_all_time[$user->ID] = array(
							'forum_posts' => $forum_posts_count_all_time,
							'forum_topics' => $forum_topics_count_all_time,
							'comments_count_others' => $comments_count_others_all_time,
							'comments_count_mods' => $comments_count_mods_all_time,
							'points' => $points_all_time,
						);
					}

					uasort($user_data_all_time, function ($a, $b) {
						return $b['points'] <=> $a['points'];
					});

					$user_data_all_time = array_slice($user_data_all_time, 0, 20, true);
					?>
					<div class="table-holder">
						<table class="table w-100 mb-2">
							<thead>
								<tr>
									<th class="border p-1" style="color: #cdcdcd;">#</th>
									<th class="border p-1" style="color: #cdcdcd;">Нікнейм</th>
									<th class="border p-1" style="color: #cdcdcd;">Рецензії</th>
									<th class="border p-1" style="color: #cdcdcd;">Теми на форумі</th>
									<th class="border p-1" style="color: #cdcdcd;">Повідомлення на форумі</th>
									<th class="border p-1" style="color: #cdcdcd;">Коментарі</th>
									<th class="border p-1" style="color: #cdcdcd;">Бали</th>
								</tr>
							</thead>
							<tbody>
								<?php
								$user_number = 1;

								foreach ($user_data_all_time as $user_id => $data) {
									$user_info = get_userdata($user_id);
									$user_profile_url = get_author_posts_url($user_id);
									?>
									<tr>
										<td class="border p-1"><?php echo esc_html($user_number); ?></td>
										<td class="border p-1"><a href="<?php echo esc_url($user_profile_url); ?>"><?php echo esc_html($user_info->display_name); ?></a></td>
										<td class="border p-1"><?php echo esc_html($data['comments_count_mods']); ?></td>
										<td class="border p-1"><?php echo esc_html($data['forum_topics']); ?></td>
										<td class="border p-1"><?php echo esc_html($data['forum_posts']); ?></td>
										<td class="border p-1"><?php echo esc_html($data['comments_count_others']); ?></td>
										<td class="border p-1">🏆<?php echo number_format($data['points'], 1); ?></td>
									</tr>
									<?php
									$user_number++;
								}
								?>
							</tbody>
						</table>
					</div>
					<?php
				} else {
					echo 'Користувачів не знайдено.';
				}
				?>
			</div>
		</div>
		<p style="font-size: 12px;margin-bottom: 0.1rem;">* Правила нарахування балів:</p>
		<ul class="list-unstyled" style="font-size: 12px;">
			<li>1 Тема на форумі 1 бал</li>
			<li>2 Відповідь на форумі 0.5 бала</li>
			<li>3 Коментар 1 бал</li>
			<li>4 Рецензія 2.5 бала</li>
		</ul>
	</div>
</main>
<?php get_footer(); ?>