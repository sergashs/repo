<?php
// Exit if accessed directly
if (!defined('ABSPATH'))
    exit;
?>
<div class="wpfl-1">
    <div class="wpforo-post-head">
        <div class="wpf-left">&nbsp;
            <a href="<?php echo esc_url((string) wpforo_post($topic['last_post'], 'url')); ?>" class="wpfcl-2"><i class="far fa-caret-square-down wpfsx wpfcl-3"></i> &nbsp; <span class="wpfcl-3">
                    <?php wpforo_phrase('Last Post'); ?>
                </span></a>
            <?php do_action('wpforo_topic_head_left', $forum, $topic) ?>
        </div>
        <div class="wpf-right">
            <?php do_action('wpforo_topic_head_right', $forum, $topic) ?>
            <?php wpforo_post_buttons('icon-text', 'tools', $forum); ?>&nbsp;
            <?php wpforo_feed_link(); ?>
        </div>
        <br class="wpf-clear" />
    </div>
    <?php wpforo_moderation_tools(); ?>
    <?php

    foreach ($posts as $key => $post): ?>
        <?php $member = wpforo_member($post);
        $post_url = wpforo_post($post['postid'], 'url'); ?>
        <div id="post-<?php echo wpforo_bigintval($post['postid']) ?>" data-postid="<?php echo wpforo_bigintval($post['postid']) ?>" data-userid="<?php echo wpforo_bigintval($member['userid']) ?>" data-mention="<?php echo esc_attr((wpforo_setting('profiles', 'mention_nicknames') ? $member['user_nicename'] : '')) ?>" data-isowner="<?php echo esc_attr((int) (bool) wpforo_is_owner($member['userid'])) ?>" class="post-wrap wpfn-<?php echo ($key + 1); ?><?php if ($post['is_first_post'])
                                       echo ' wpfp-first' ?>">
            <?php wpforo_share_toggle($post_url, $post['body']); ?>
            <div class="wpforo-post wpfcl-1">
                <div class="wpf-left">
                    <div class="author-name" style="margin-bottom:5px;"><span>
                            <?php WPF()->member->show_online_indicator($member['userid']) ?>
                        </span>&nbsp;
                        <?php wpforo_member_link($member); ?>
                    </div>
                    <?php if (WPF()->usergroup->can('va') && wpforo_setting('profiles', 'avatars')): ?>
                        <div class="author-avatar" style="margin-bottom:5px;">
                            <?php echo wpforo_user_avatar($member, 80) ?>
                        </div>
                    <?php endif ?>
                    <?php
                    if (!empty($member['field_b215b51'])): ?>
                        <div class="author-title" style="margin-bottom:5px;">
                            Автор моду: <br>
                            <b>
                                <?php echo $member['field_b215b51']; ?>
                            </b>
                        </div>
                    <?php endif; ?>
                    <div class="author-data">
                        <!-- <?php wpforo_member_nicename($member, '@'); ?> -->
                        <div class="author-title">
                            Ранг: <br>
                            <b>
                                <?php echo $member['rating']['title']; ?>
                            </b>
                        </div>
                        <div class="author-title" style="margin-bottom:5px;">
                            <?php wpforo_member_badge($member) ?>
                        </div>
                        <!-- <div class="author-title">
                            <?php wpforo_member_title($member) ?>
                        </div> -->
                        <div class="author-title" style="margin-bottom:5px;">
                            Роль: <br>
                            <b>
                                <?php echo $member['group_name']; ?>
                            </b>
                        </div>
                        <?php
                        if (!empty($member['field_bd6de31'])): ?>
                            <div class="author-title" style="margin-bottom:5px;">
                                Угруповання: <br>
                                <b>
                                    <?php echo $member['field_bd6de31']; ?>
                                </b>
                            </div>
                        <?php endif; ?>
                        <div class="author-posts" style="margin-bottom:5px;">
                            <?php wpforo_phrase('Posts') ?>:
                            <br>
                            <b>
                                <?php echo intval($member['posts']) ?>
                            </b>
                        </div>
                        <div class="author-joined">
                            <?php wpforo_phrase('Joined') ?>: <br>
                            <b>
                                <?php wpforo_date($member['user_registered']); ?>
                            </b>
                        </div>
                    </div>
                    <div class="wpf-clear"></div>
                    <div id="wpforo-memberinfo-toggle-<?php echo intval($post['postid']) ?>" class="wpforo-membertoggle" title="<?php wpforo_phrase('More') ?>">
                        <i class="fas fa-caret-down" aria-hidden="true"></i>
                    </div>
                    <div id="wpforo-memberinfo-<?php echo intval($post['postid']) ?>" class="wpforo-memberinfo">
                        <div class="wpf-member-profile-buttons">
                            <?php WPF()->tpl->member_buttons($member) ?>
                            <?php WPF()->tpl->member_social_buttons($member) ?>
                        </div>
                    </div>
                    <?php do_action('wpforo_post_left_end', $post, $topic, $forum, 1); ?>
                </div><!-- left -->
                <div class="wpf-right">
                    <div class="wpforo-post-content-top">
                        <?php if ($post['status']): ?>
                            <span class="wpf-mod-message"><i class="fas fa-exclamation-circle" aria-hidden="true"></i>
                                <?php wpforo_phrase('Awaiting moderation') ?>
                            </span>
                        <?php endif; ?>
                        <?php wpforo_topic_starter($topic, $post) ?>
                        <span class="wpf-post-date">
                            <?php wpforo_date($post['created'], 'd/m/Y g:i a'); ?>
                        </span> &nbsp;
                        <?php wpforo_post_buttons('icon-text', 'link', $forum, $topic, $post); ?>
                        <?php wpforo_share_toggle($post_url, $post['body'], 'top'); ?>
                    </div><!-- wpforo-post-content-top -->
                    <div class="wpforo-post-content">
                        <?php wpforo_content($post); ?>
                    </div>
                    <?php wpforo_post_edited($post); ?>
                    <?php do_action('wpforo_tpl_post_loop_after_content', $post, $member) ?>
                    <?php if (wpforo_setting('profiles', 'signature')): ?>
                        <?php if ($member['signature']): ?>
                            <div class="wpforo-post-signature">
                                <?php wpforo_signature($member) ?>
                            </div>
                        <?php endif; ?>
                    <?php endif; ?>
                </div><!-- right -->
                <br class="wpf-clear" />
                <div class="bottom">
                    <?php do_action('wpforo_post_bottom_start', $post, $topic, $forum, 1); ?>
                    <div class="bright">
                        <?php if ($post['is_first_post']) {
                            $buttons = ['reply', 'quote', 'solved', 'sticky', 'private', 'close', 'report', 'approved', 'edit', 'delete'];
                        } else {
                            $buttons = ['reply', 'quote', 'report', 'approved', 'edit', 'delete'];
                        }
                        wpforo_post_buttons('icon-text', $buttons, $forum, $topic, $post); ?>
                    </div>
                    <div class="wpf-clear"></div>
                </div><!-- bottom -->
            </div><!-- wpforo-post -->
        </div><!-- post-wrap -->
        <?php if ($post['is_first_post']): ?>
            <div class="wpforo-topic-meta">
                <?php wpforo_tags($topic); ?>
            </div>
        <?php endif; ?>
        <?php do_action('wpforo_loop_hook', $key) ?>
    <?php endforeach; ?>
</div><!-- wpfl-1 -->