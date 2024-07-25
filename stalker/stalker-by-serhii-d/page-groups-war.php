<?php
/*
Template Name: groups war
*/

get_header(); ?>
<main id="primary" class="site-main pt-0">
	<div class="container-fluid">
		<?php
		$positions_and_images = [
			'Сталкери-одинаки' => ['image' => 'group-3.jpg', 'color' => '#f1c40f'],
			'Бандити' => ['image' => 'group-4.jpg', 'color' => '#c27c0e'],
			'Військові' => ['image' => 'group-9.jpg', 'color' => '#808000'],
			'Воля' => ['image' => 'group-2.jpg', 'color' => '#008f47'],
			'Вчені' => ['image' => 'group-10.jpg', 'color' => '#7b68ee'],
			'Долг' => ['image' => 'group-7.jpg', 'color' => '#992d22'],
			'Моноліт' => ['image' => 'group-8.jpg', 'color' => '#1abc9c'],
			'Найманці' => ['image' => 'group-1.jpg', 'color' => '#206694'],
			'Ренегати' => ['image' => 'group-6.jpg', 'color' => '#a84300'],
			'Чисте небо' => ['image' => 'group-5.jpg', 'color' => '#81eef3'],
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
			$group_info = $positions_and_images[$position];

			echo '<li class="px-2 py-1">';
			echo '<span class="item-number text-center" style="min-width:41px;">' . esc_html($item_number) . '.</span>';
			echo '<span class="d-block" style="min-width:181px;">';
			echo '<span class="item-title d-block">' . esc_html($position) . '</span>';
			echo '<span class="d-block fst-italic item-members">Кількість учасників: ' . esc_html($count) . '</span>';
			echo '</span>';
			echo '<span class="item-scale">';
			echo '<span class="scale-inner" data-position="' . $count / $total_users_count * 100 . '" style="background-color: ' . esc_attr($group_info['color']) . ';"></span>';
			echo '</span>';
			$image_path = $group_info['image'];
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