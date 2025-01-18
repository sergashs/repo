<?php
/**
 * Template part for displaying a message that posts cannot be found
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package stalker-by-serhii.D
 */

?>
<section class="no-results not-found">
	<header class="page-header">
		<h1 class="page-title pt-1 mb-1">
			<?php esc_html_e('Нічого не знайдено', 'stalker-by-serhii-d'); ?>
		</h1>
	</header><!-- .page-header -->
	<div class="page-content">
		<?php
		if (is_home() && current_user_can('publish_posts')):

			printf(
				'<p>' . wp_kses(
					/* translators: 1: link to WP admin new post page. */
					__('Ready to publish your first post? <a href="%1$s">Get started here</a>.', 'stalker-by-serhii-d'),
					array(
						'a' => array(
							'href' => array(),
						),
					)
				) . '</p>',
				esc_url(admin_url('post-new.php'))
			);

		elseif (is_search()):
			?>
			<p>
				<?php esc_html_e('Вибачте, але нічого не відповідає вашим умовам пошуку. Спробуйте ще раз із іншими ключовими словами.', 'stalker-by-serhii-d'); ?>
			</p>
			<?php
			get_search_form();

		else:
			?>
			<p>
				<?php esc_html_e('Здається, ми не можемо знайти те, що ви шукаєте. Можливо, пошук зможе допомогти.', 'stalker-by-serhii-d'); ?>
			</p>
			<?php
			get_search_form();

		endif;
		?>
	</div><!-- .page-content -->
</section><!-- .no-results -->