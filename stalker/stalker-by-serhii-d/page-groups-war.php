<?php
/*
Template Name: groups war
*/

get_header(); ?>
<main id="primary" class="site-main pt-0">
	<div class="container-fluid">
		<?php
		$positions_and_images = [
			'Сталкери-одинаки' => 'group-3.jpg',
			'Бандити' => 'group-4.jpg',
			'Військові' => 'group-9.jpg',
			'Воля' => 'group-2.jpg',
			'Вчені' => 'group-10.jpg',
			'Долг' => 'group-7.jpg',
			'Моноліт' => 'group-8.jpg',
			'Найманці' => 'group-1.jpg',
			'Ренегати' => 'group-6.jpg',
			'Чисте небо' => 'group-5.jpg',
		];

		$users = get_users([
			'number' => -1,
		]);


		$positions_count = array_fill_keys(array_keys($positions_and_images), 0);

		foreach ($users as $user) {
			$wpforo_member_data = wpforo_member($user->ID);

			if ($wpforo_member_data) {
				$field_bd6de31_value = !empty($wpforo_member_data['field_bd6de31']) ? $wpforo_member_data['field_bd6de31'] : '';

				if (array_key_exists($field_bd6de31_value, $positions_and_images)) {
					$positions_count[$field_bd6de31_value]++;
				}
			}
		}

		arsort($positions_count);

		$item_number = 1;

		$total_users_count = count($users);

		echo '<ul class="list-groups mx-minus">';
		foreach ($positions_count as $position => $count) {
			echo '<li class="px-2 py-1">';
			echo '<span class="item-number text-center" style="min-width:41px;">' . esc_html($item_number) . '.</span>';
			echo '<span class="d-block" style="min-width:181px;">';
			echo '<span class="item-title d-block">' . esc_html($position) . '</span>';
			echo '<span class="d-block fst-italic item-members">Кількість учасників: ' . esc_html($count) . '</span>';
			echo '</span>';
			echo '<span class="item-scale">';
			echo '<span class="scale-inner" data-position="' . $count / $total_users_count * 100 . '"></span>';
			// echo '<span class="scale-inner" style="width: ' . ($count / $total_users_count * 100) . '%;"></span>';
			echo '</span>';

			$image_path = $positions_and_images[$position];
			echo '<img src="https://stalker-news.info/wp-content/themes/stalker-by-serhii-d/assets/images/groups/' . esc_attr($image_path) . '" alt="...">';

			echo '</li>';
			$item_number++;
		}
		echo '</ul>';
		?>
	</div>
	<script>
		document.addEventListener("DOMContentLoaded", function () {
			const scaleInnerElements = document.querySelectorAll(".item-scale .scale-inner");
			scaleInnerElements.forEach((element, index) => {
				const widthPercentage = element.getAttribute("data-position");
				element.style.width = widthPercentage + "%";
			});
		});
	</script>
</main>
<?php get_footer(); ?>