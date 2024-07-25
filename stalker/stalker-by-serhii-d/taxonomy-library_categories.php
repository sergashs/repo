<?php
/**
 * The template for displaying archive pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package stalker-by-serhii.D
 */

get_header();
?>
<main id="primary" class="site-main">
	<div class="container-fluid">
		<div class="row">
			<div class="col-12 informer-row-border">
				<div class="informer-last-news">
					<?php if (have_posts()): ?>
						<header class="page-header pt-1 pb-1 visually-hidden-focusable">
							<?php
							the_archive_title('<h1 class="page-title fs-5 mb-0">', '</h1>');
							the_archive_description('<div class="archive-description">', '</div>');
							?>
						</header>
						<?php
						$parent_category_id = get_term_by('slug', 'library', 'category')->term_id;
						$current_category = get_queried_object();
						$subcategories = get_categories(array('child_of' => $current_category->term_id));
						$is_home_category = is_category($parent_category_id);

						if (($is_home_category && $current_category->slug === 'library') || !empty($subcategories)) {
							?>
							<div class="mb-2">
								<h3 class="mb-0 pb-0 border-bottom-0 fs-5 pt-1">Категорії:</h3>
							</div>
							<div>
								<div class="block-border-1 p-1 mb-2">
									<?php
									echo '<ul class="d-flex flex-wrap m-0 p-0" style="list-style:none;">';

									if ($is_home_category && $current_category->slug === 'library') {
										$categories = get_categories(array('parent' => $parent_category_id));

										if (!empty($categories)) {
											foreach ($categories as $category) {
												echo '<li><a class="btn btn-primary me-1 mb-1" href="' . get_category_link($category->term_id) . '"><span class="button-before"></span> <span class="button-text">' . $category->name . '</span> <span class="button-after"></span> </a></li>';
											}
										}
									} elseif (!empty($subcategories)) {
										foreach ($subcategories as $subcategory) {
											echo '<li><a class="btn btn-primary me-1 mb-1" href="' . get_category_link($subcategory->term_id) . '"><span class="button-before"></span> <span class="button-text">' . $subcategory->name . '</span> <span class="button-after"></span> </a></li>';
										}
									}

									echo '</ul>';
									?>
								</div>
							</div>
							<hr class="mb-3">
							<?php
						} else {
							echo '<div class="mb-2"></div>';
						}
						?>
						<div class="row">
						<?php
						/* Start the Loop */
						while (have_posts()):
							the_post();

							/*
							 * Include the Post-Type-specific template for the content.
							 * If you want to override this in a child theme, then include a file
							 * called content-___.php (where ___ is the Post Type name) and that will be used instead.
							 */

							get_template_part('template-parts/content', get_post_type());


						endwhile;

						wp_pagenavi();

					else:

						get_template_part('template-parts/content', 'none');

					endif;
					?>
						</div>
				</div>
			</div>
			
		</div>
	</div>
</main><!-- #main -->
<?php


get_footer();