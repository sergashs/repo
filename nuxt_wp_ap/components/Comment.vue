<template>
	<div :id="`comment-${comment.id}`" class="comment byuser comment-author-rihannon even thread-even depth-1">
		<article :id="`div-comment-${comment.id}`" class="comment-body">
			<footer class="comment-meta">
				<div class="comment-author vcard">
					<img alt="" :src="comment.author_avatar_urls[96]" srcset="https://stalker2-fenomen.info/wp-content/uploads/avatars/3038/1677215106-bpfull.jpg 2x" class="avatar avatar-32 photo" height="32" width="32" loading="lazy" decoding="async" />
					<b class="fn"
						><a href="https://stalker2-fenomen.info/members/rihannon/" class="url" rel="ugc">{{ comment.author_name }}</a></b
					>
				</div>
				<div class="comment-metadata">
					<time :datetime="comment.date">{{ dateConvert(comment.date) }}</time>
					<!-- <span class="edit-link"><a class="comment-edit-link" href="https://stalker2-fenomen.info/wp-admin/comment.php?action=editcomment&amp;c=770">Редагувати</a></span> -->
				</div>
			</footer>
			<div class="comment-content">
				<p v-html="comment.content.rendered"></p>
				<!-- <div class="cld-like-dislike-wrap cld-template-1">
					<div class="cld-like-wrap cld-common-wrap">
						<a href="javascript:void(0)" class="cld-like-trigger cld-like-dislike-trigger" title="" data-comment-id="770" data-trigger-type="like" data-restriction="user" data-already-liked="0"> <i class="fas fa-thumbs-up"></i> </a> <span class="cld-like-count-wrap cld-count-wrap">4 </span>
					</div>
					<div class="cld-dislike-wrap cld-common-wrap">
						<a href="javascript:void(0)" class="cld-dislike-trigger cld-like-dislike-trigger" title="" data-comment-id="770" data-trigger-type="dislike" data-restriction="user" data-already-liked="0"> <i class="fas fa-thumbs-down"></i> </a> <span class="cld-dislike-count-wrap cld-count-wrap"></span>
					</div>
				</div> -->
			</div>
			<!-- <div class="reply"><a rel="nofollow" class="comment-reply-link" href="#comment-770" data-commentid="770" data-postid="5208" data-belowelement="div-comment-770" data-respondelement="respond" data-replyto="Відповісти Дмитро" aria-label="Відповісти Дмитро">Відповіcти</a></div> -->
		</article>
	</div>
</template>

<script>
export default {
	props: {
		comment: {
			type: Object,
			default: () => ({})
		}
	},
	methods: {
		dateConvert(dateString) {
			const date = new Date(dateString);
			const year = date.getFullYear();
			const month = ("0" + (date.getMonth() + 1)).slice(-2);
			const day = ("0" + date.getDate()).slice(-2);
			const hours = ("0" + date.getHours()).slice(-2);
			const minutes = ("0" + date.getMinutes()).slice(-2);

			return `${day}.${month}.${year} о ${hours}:${minutes}`;
		}
	}
};
</script>

<style lang="scss" scoped>
.comment {
	position: relative;
	padding: 1.5rem;
	background: $tuatara;

	.comment-author {
		max-width: 5rem;
		display: flex;
		align-items: center;

		img {
			width: 100%;
			height: auto;
		}

		.fn {
			margin-left: 1rem;
		}
	}

	.comment-meta {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 1.5rem;
		border-bottom: solid 0.1rem #323232;
		padding-bottom: 1.5rem;
	}
}
</style>
