<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package stalker-by-serhii.D
 */

get_header();
?>

	<main id="primary" class="site-main">
	<div class="container-fluid">
	<div class="row">
	<div class="col-md-8 col-lg-9 informer-row-border">
		<div class="informer-last-news">


		<section class="error-404 not-found">
			<header class="page-header">
				<h1 class="page-title"><?php esc_html_e( 'Oops! That page can&rsquo;t be found.', 'stalker-by-serhii-d' ); ?></h1>
			</header><!-- .page-header -->

			<p><?php esc_html_e( 'It looks like nothing was found at this location. Maybe try one of the links below or a search?', 'stalker-by-serhii-d' ); ?></p>

<?php
get_search_form();
?>

	
		</div>
    </div>

	<div class="col-md-4 col-lg-3">
	

			<div class="page-content">
			
			<?php the_widget( 'WP_Widget_Recent_Posts' );
			?>
			

					<div class="widget widget_categories">
						<h2 class="widget-title"><?php esc_html_e( 'Most Used Categories', 'stalker-by-serhii-d' ); ?></h2>
						<ul>
							<?php
							wp_list_categories(
								array(
									'orderby'    => 'count',
									'order'      => 'DESC',
									'show_count' => 1,
									'title_li'   => '',
									'number'     => 10,
								)
							);
							?>
						</ul>
					</div><!-- .widget -->



					<?php
					/* translators: %1$s: smiley */
					$stalker_by_serhii_d_archive_content = '<p>' . sprintf( esc_html__( 'Try looking in the monthly archives. %1$s', 'stalker-by-serhii-d' ), convert_smilies( ':)' ) ) . '</p>';
					the_widget( 'WP_Widget_Archives', 'dropdown=1', "after_title=</h2>$stalker_by_serhii_d_archive_content" );

					the_widget( 'WP_Widget_Tag_Cloud' );
					?>
</div>

</div>
</div>
			</div><!-- .page-content -->
		</section><!-- .error-404 -->

	</main><!-- #main -->

<?php
get_footer();
