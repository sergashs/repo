<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package stalker-by-serhii.D
 */

?>
<footer id="colophon" class="site-footer">
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-6 col-lg-3">
				<div class="text-holder">
					<p class="light-text">© 2024 Stalker-News</p>
					<p>Авторське право на гру і використані в ній матеріали належить компанії GSC Game World</p>
					<p>Design by Serhii D.</p>
				</div>
			</div>
			<div class="col-md-6 col-lg-3 d-lg-flex justify-content-lg-center">
				<ul class="footer-menu">
					<li class="menu-item">
						<a href="/forum/k/anomalii-pomylky-na-sajti-fiks-bahiv/" class="menu-link d-inline-flex align-items-center">
							<span class="d-inline-block" style="width: 15px;margin-right:5px;">
								<i class="fas fa-bug"></i>
							</span>
							Повідомити про помилку
						</a>
					</li>
					<li class="menu-item">
						<a href="/forum/pravyla/" class="menu-link d-inline-flex align-items-center">
							<span class="d-inline-block" style="width: 15px;margin-right:5px;">
								<i class="far fa-file-alt"></i>
							</span>
							Правила сайту
						</a>
					</li>
					<li class="menu-item">
						<a href="/forum/k/administratorskyj-i-moderatorskyj-sklad-nashoho-sajtu/" class="menu-link d-inline-flex align-items-center">
							<span class="d-inline-block" style="width: 15px;margin-right:5px;font-size: 13px;">
								<i class="fas fa-users"></i>
							</span>
							Наша команда
						</a>
					</li>
					<!-- <li class="menu-item">
						<a href="/forum/k/nabir-v-komandu-sajtu/" class="menu-link">
							<i class="bi bi-collection"></i>
							Набір в команду
						</a>
					</li> -->
				</ul>
			</div>
			<div class="col-md-6 col-lg-3 d-lg-flex justify-content-lg-center">
				<div>
					<h3 class="h3">Ми в соціальних мережах</h3>
					<ul class="social-links">
						<li>
							<a href="https://www.youtube.com/channel/UCerdfFvztagv6-T6CoLDVag">
								<span class="icon-holder">
									<img data-src="<?php echo get_template_directory_uri(); ?>/assets/images/icon-youtube.svg" src="#" alt="Наш Youtube канал" loading="lazy" class="lazyload">
								</span>
							</a>
						</li>
						<li>
							<a href="https://t.me/stalker_news_ua">
								<span class="icon-holder">
									<img data-src="<?php echo get_template_directory_uri(); ?>/assets/images/icon-telegram.svg" src="#" alt="Наш Telegram канал" loading="lazy" class="lazyload">
								</span>
							</a>
						</li>
						<li>
							<a href="https://discord.gg/XHYyFcdx">
								<span class="icon-holder">
									<img data-src="<?php echo get_template_directory_uri(); ?>/assets/images/icon-discord.svg" src="#" alt="Наш Discord канал" loading="lazy" class="lazyload">
								</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="col-md-6 col-lg-3 d-lg-flex align-items-lg-start justify-content-lg-end">
				<span class="counter-holder">
					<!-- MyCounter v.2.0 -->
					<script type="text/javascript">
						my_id = 176189;
						my_width = 88;
						my_height = 51;
						my_alt = "MyCounter - счётчик и статистика";
					</script>
					<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/assets/js/counter2.0.js">
						// <script type="text/javascript" src="https://get.mycounter.ua/counter2.0.js">
					</script>
					<noscript>
						<a target="_blank" href="https://mycounter.ua/"><img src="https://get.mycounter.ua/counter.php?id=176189" title="MyCounter - счётчик и статистика" alt="MyCounter - счётчик и статистика" width="88" height="31" border="0" /></a>
					</noscript>
					<!--/ MyCounter -->
				</span>
			</div>
		</div>
	</div>
	<div class="footer-bg">
		<img data-src="<?php echo get_template_directory_uri(); ?>/assets/images/bg.jpg" src="#" alt="footer background" loading="lazy" class="lazyload">
	</div>
</footer>
<!-- modal theme settings -->
<div class="modal fade" id="ThemeSettings" tabindex="-1" aria-labelledby="ThemeSettingsTitle" aria-modal="true" role="dialog">
	<div class="modal-dialog modal-dialog-centered">
		<div class="modal-content">
			<div class="modal-header px-1 px-md-2 pt-1 pt-md-2 border-bottom-0">
				<span class="modal-title h3 fs-4 mb-0" id="ThemeSettingsTitle">Налаштування дизайну сайту</span>
				<button type="button" class="btn-close m-0" data-bs-dismiss="modal" aria-label="Close">
					<i class="fas fa-times"></i>
				</button>
			</div>
			<div class="px-1 px-md-2"><img data-src="https://stalker-news.info/wp-content/uploads/2023/10/orange-line.svg" src="#" alt="orange line" loading="lazy" class="width-max-100 mb-1 lazyload"></div>
			<div class="modal-body px-1 pb-1 px-md-2 pb-md-2">
				<span class="d-block h3 fs-4 mb-0">Налаштування шапки</span>
				<hr class="hr mt-1 mb-2">
				<div class="row row-gutter-2">
					<div class="col-4 col-sm-3">
						<label class="design-picker mb-2" for="header-bg-1" header-customize>
							<input type="radio" name="header-bg" id="header-bg-1" class="visually-hidden">
							<div class="img-holder">
								<img src="#" data-src="/wp-content/themes/stalker-by-serhii-d/assets/images/header-1.jpg" alt="..." loading="lazy" class="lazyload">
							</div>
						</label>
					</div>
					<div class="col-4 col-sm-3">
						<label class="design-picker mb-2" for="header-bg-2" header-customize>
							<input type="radio" name="header-bg" id="header-bg-2" class="visually-hidden">
							<div class="img-holder">
								<img src="#" data-src="/wp-content/themes/stalker-by-serhii-d/assets/images/header-2.jpg" alt="..." loading="lazy" class="lazyload">
							</div>
						</label>
					</div>
					<div class="col-4 col-sm-3">
						<label class="design-picker mb-2" for="header-bg-3" header-customize>
							<input type="radio" name="header-bg" id="header-bg-3" class="visually-hidden">
							<div class="img-holder">
								<img src="#" data-src="/wp-content/themes/stalker-by-serhii-d/assets/images/header-3.jpg" alt="..." loading="lazy" class="lazyload">
							</div>
						</label>
					</div>
					<div class="col-4 col-sm-3">
						<label class="design-picker mb-2" for="header-bg-4" header-customize>
							<input type="radio" name="header-bg" id="header-bg-4" class="visually-hidden">
							<div class="img-holder">
								<img src="#" data-src="/wp-content/themes/stalker-by-serhii-d/assets/images/header-4.jpg" alt="..." loading="lazy" class="lazyload">
							</div>
						</label>
					</div>
					<div class="col-4 col-sm-3">
						<label class="design-picker mb-2" for="header-bg-5" header-customize>
							<input type="radio" name="header-bg" id="header-bg-5" class="visually-hidden">
							<div class="img-holder">
								<img src="#" data-src="/wp-content/themes/stalker-by-serhii-d/assets/images/header-5.jpg" alt="..." loading="lazy" class="lazyload">
							</div>
						</label>
					</div>
					<div class="col-4 col-sm-3">
						<label class="design-picker mb-2" for="header-bg-6" header-customize>
							<input type="radio" name="header-bg" id="header-bg-6" class="visually-hidden">
							<div class="img-holder">
								<img src="#" data-src="/wp-content/themes/stalker-by-serhii-d/assets/images/header-6.jpg" alt="..." loading="lazy" class="lazyload">
							</div>
						</label>
					</div>
					<div class="col-4 col-sm-3">
						<label class="design-picker mb-2" for="header-bg-7" header-customize>
							<input type="radio" name="header-bg" id="header-bg-7" class="visually-hidden">
							<div class="img-holder">
								<img src="#" data-src="/wp-content/themes/stalker-by-serhii-d/assets/images/header-7.jpg" alt="..." loading="lazy" class="lazyload">
							</div>
						</label>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- / modal theme settings -->
<!-- modal visitors -->
<div class="modal fade" id="SiteVisitors" tabindex="-1" aria-labelledby="SiteVisitorsTitle" aria-modal="true" role="dialog">
	<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
		<div class="modal-content">
			<div class="modal-header px-1 px-md-2 pt-1 pt-md-2 border-bottom-0">
				<span class="modal-title h3 fs-4 mb-0" id="ThemeSettingsTitle">Нас сьогодні відвідали</span>
				<button type="button" class="btn-close m-0" data-bs-dismiss="modal" aria-label="Close">
					<i class="fas fa-times"></i>
				</button>
			</div>
			<div class="modal-body px-1 pb-1 px-md-2 pb-md-2">
				<?php echo do_shortcode('[visitor_stats]'); ?>
			</div>
		</div>
	</div>
</div>
<!-- modal visitors -->
</div>
<?php wp_footer(); ?>
</body>

</html>