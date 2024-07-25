<?php
/**
 * The template for displaying comments
 *
 * This is the template that displays the area of the page that contains both the current comments
 * and the comment form.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package stalker-by-serhii.D
 */

/*
 * If the current post is protected by a password and
 * the visitor has not yet entered the password we will
 * return early without loading the comments.
 */
if (post_password_required()) {
	return;
}
?>
<div id="comments" class="comments-area review-area">
	<?php
	// You can start editing here -- including this comment!
	if (have_comments()):
		?>
		<span class="comments-title h2 d-block">
			<?php
			$stalker_by_serhii_d_comment_count = get_comments_number();
			if ('1' === $stalker_by_serhii_d_comment_count) {
				printf(
					/* translators: 1: title. */
					esc_html__('Рецензії до &ldquo;%1$s&rdquo;', 'stalker-by-serhii-d'),
					'<span>' . wp_kses_post(get_the_title()) . '</span>'
				);
			} else {
				printf(
					/* translators: 1: comment count number, 2: title. */
					esc_html(_nx('Рецензії до &ldquo;%2$s&rdquo;', 'Рецензії до &ldquo;%2$s&rdquo;', $stalker_by_serhii_d_comment_count, 'comments title', 'stalker-by-serhii-d')),
					number_format_i18n($stalker_by_serhii_d_comment_count),
					// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
					'<span>' . wp_kses_post(get_the_title()) . '</span>'
				);
			}
			?>
		</span><!-- .comments-title -->
		<?php the_comments_navigation(); ?>
		<ol class="comment-list">
			<?php
			wp_list_comments(
				array(
					'style' => 'ol',
					'short_ping' => true,
					'container_class' => 'border-content'
				)
			);
			?>
		</ol><!-- .comment-list -->
		<?php
		the_comments_navigation();

		// If comments are closed and there are comments, let's leave a little note, shall we?
		if (!comments_open()):
			?>
			<p class="no-comments">
				<?php esc_html_e('Можна залишити лише одну рецензію', 'stalker-by-serhii-d'); ?>
			</p>
			<?php
		endif;

	endif; // Check for have_comments().
	
	comment_form();
	?>
</div><!-- #comments -->