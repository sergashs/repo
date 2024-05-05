// /*!/wp-content/uploads/custom-css-js/9269.js*/
// var slides = document.getElementsByClassName("video-section");
// for (var i = 0; i < slides.length; i++) {
// 	console.log(settings);
// 	var settings = JSON.parse(slides[i].getAttribute("data-settings"));
// 	var video = slides[i].querySelector("video");
// 	var video_container = slides[i].querySelector(".elementor-background-video-container");
// 	video.setAttribute("preload", "none");
// 	video.style.height = video_container.offsetHeight + "px";
// 	video.style.minHeight = video_container.offsetHeight + "px";
// 	video.setAttribute("src", settings.background_video_link);
// }

function loadScript(url, callback) {
	var script = document.createElement("script");
	script.type = "text/javascript";
	if (script.readyState) {
		script.onreadystatechange = function () {
			if (script.readyState == "loaded" || script.readyState == "complete") {
				script.onreadystatechange = null;
				callback();
			}
		};
	} else {
		script.onload = function () {
			callback();
		};
	}
	script.src = url;
	document.getElementsByTagName("head")[0].appendChild(script);
}
// function swiperInit(selector) {
// 	var elements = document.querySelectorAll(selector);
// 	var swipers = [];
// 	elements.forEach(function (element, index) {
// 		var parentElement = element.closest(".elementor-element");
// 		if (parentElement) {
// 			var settings = parentElement.getAttribute("data-settings");
// 			var settingsObj = JSON.parse(settings);
// 			let size = settingsObj.space_between && settingsObj.space_between.size ? settingsObj.space_between.size : 0;
// 			let slides_per_view = settingsObj.slides_per_view ? settingsObj.slides_per_view : settingsObj.slides_to_show;
// 			let slides_mobile_per_view = settingsObj.slides_per_view_mobile;
// 			swipers[index] = new Swiper(element, {
// 				autoHeight: !0,
// 				autoplay: !0,
// 				speed: 500,
// 				loop: !0,
// 				spaceBetween: size,
// 				slidesPerView: slides_mobile_per_view,
// 				breakpoints: { 320: { slidesPerView: slides_mobile_per_view }, 768: { slidesPerView: slides_per_view }, 1025: { slidesPerView: slides_per_view } },
// 				navigation: { nextEl: ".elementor-swiper-button-next", prevEl: ".elementor-swiper-button-prev" },
// 				pagination: { el: ".swiper-pagination", clickable: !0 },
// 			});
// 		}
// 	});
// }
// function initTabs(tabSelector) {
// 	const tabs = document.querySelectorAll(tabSelector);
// 	tabs.forEach((tab) => {
// 		const tabTitles = tab.querySelectorAll(".e-n-tab-title");
// 		tabTitles[0].classList.add("e-active");
// 		if (tab.querySelector("." + tabTitles[0].id)) {
// 			tab.querySelector("." + tabTitles[0].id).classList.add("e-active");
// 		}
// 		const tabContent = tab.querySelector(".e-n-tabs-content");
// 		tabTitles.forEach((tabTitle) => {
// 			tabTitle.addEventListener("click", () => {
// 				tabTitles.forEach((title) => {
// 					title.classList.remove("e-active");
// 					title.classList.remove("e-active");
// 					title.setAttribute("aria-selected", "false");
// 				});
// 				tabContent.querySelectorAll(".e-active").forEach((activeContent) => {
// 					activeContent.classList.remove("e-active");
// 				});
// 				const tabId = tabTitle.getAttribute("id").replace("-accordion", "");
// 				tabTitle.classList.add("e-active");
// 				tabTitle.setAttribute("aria-selected", "true");
// 				tabContent.querySelector("." + tabId).classList.add("e-active");
// 			});
// 		});
// 	});
// }
// let globalMenu;
// function toggleMenuInit(toggleMenuSelector) {
// 	const toggleMenu = document.querySelectorAll(toggleMenuSelector);
// 	if (typeof toggleMenu != "undefined" && toggleMenu != null) {
// 		toggleMenu.forEach((item) => {
// 			let open = item.querySelectorAll(".elementor-menu-toggle__icon--open")[0];
// 			let close = item.querySelectorAll(".elementor-menu-toggle__icon--close")[0];
// 			globalMenu = item.closest(".elementor-nav-menu--dropdown-tablet").querySelectorAll(".elementor-nav-menu--dropdown.elementor-nav-menu__container")[0];
// 			open.addEventListener("click", (a) => {
// 				globalMenu.style.transform = "scaleY(1)";
// 				globalMenu.style.top = "30px";
// 				globalMenu.style.maxHeight = "1000vmax";
// 				globalMenu.style.width = window.screen.width + "px";
// 				if (globalMenu.offsetLeft == 0) {
// 					globalMenu.style.left = "-" + globalMenu.getBoundingClientRect().left + "px";
// 				}
// 				if (globalMenu.getBoundingClientRect().left > 1) {
// 					let distance = globalMenu.getBoundingClientRect().left - globalMenu.offsetLeft;
// 					globalMenu.style.left = "-" + distance + "px";
// 				}
// 				if (globalMenu.getBoundingClientRect().left < -1) {
// 					let distance = globalMenu.getBoundingClientRect().left - globalMenu.offsetLeft;
// 					globalMenu.style.left = "-" + distance + "px";
// 				}
// 				close.style.display = "block";
// 				open.style.display = "none";
// 			});
// 			close.addEventListener("click", (a) => {
// 				globalMenu.style.maxHeight = "0";
// 				globalMenu.style.transform = "scaleY(0)";
// 				close.style.display = "none";
// 				open.style.display = "block";
// 			});
// 		});
// 	}
// }
// function galleryInit(gallerySelector) {
// 	var elements = document.querySelectorAll(gallerySelector);
// 	for (var i = 0; i < elements.length; i++) {
// 		var thumbnail = elements[i].getAttribute("data-thumbnail");
// 		var img = document.createElement("img");
// 		img.src = thumbnail;
// 		img.alt = "Thumbnail image";
// 		img.className = "thumbnail-img";
// 		elements[i].appendChild(img);
// 	}
// }
function load_js(url) {
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = url;
	document.head.appendChild(script);
}
function load_css(url) {
	var elem = document.createElement("link");
	elem.rel = " stylesheet";
	elem.href = url;
	document.head.appendChild(elem);
}
// function load_swiper_js_css(selector) {
// 	load_css("/wp-content/plugins/elementor/assets/lib/swiper/v8/css/swiper.min.css");
// 	loadScript("/wp-content/plugins/elementor/assets/lib/swiper/v8/swiper.min.js", function () {
// 		swiperInit(selector);
// 	});
// }
// function load_jquery_script() {
// 	loadScript("/wp-includes/js/jquery/jquery.min.js", function () {
// 		load_css("/wp-content/plugins/jet-popup/assets/css/jet-popup-frontend.css");
// 		jQuery(".jet-popup__close-button").click(function () {
// 			jQuery(this).closest(".jet-popup").toggleClass("jet-popup--hide-state jet-popup--show-state");
// 			jQuery(this).parent(".jet-popup__container").css("opacity", "0");
// 			jQuery(this).parent(".jet-popup__overlay").css("opacity", "0");
// 		});
// 		jQuery(".jet-popup__overlay").click(function () {
// 			jQuery(this).closest(".jet-popup").toggleClass("jet-popup--hide-state jet-popup--show-state");
// 			jQuery(this).parent(".jet-popup__container").css("opacity", "0");
// 			jQuery(this).css("opacity", "0");
// 		});
// 		jQuery(".jet-popup").each(function (index) {
// 			const options = JSON.parse(jQuery(this).attr("data-settings"));
// 			if (options["open-trigger"] == "page-load") {
// 				var jet_popup_count = getCookie("jet_popup_count_" + options.id);
// 				if (jet_popup_count != 1) {
// 					const popup_class = jQuery("#jet-popup-" + options.id);
// 					popup_class.toggleClass("jet-popup--hide-state jet-popup--show-state");
// 					popup_class.find(".jet-popup__overlay").css("opacity", "1");
// 					popup_class.find(".jet-popup__container").css("opacity", "1");
// 					popup_class.css("zIndex", "1005");
// 				}
// 				setCookie("jet_popup_count_" + options.id, 1, 1);
// 			}
// 			if (options["open-trigger"] == "custom-selector") {
// 				jQuery(options["custom-selector"]).on("click", function (e) {
// 					e.preventDefault();
// 					const popup_class = jQuery("#jet-popup-" + options.id);
// 					console.log(popup_class);
// 					popup_class.toggleClass("jet-popup--hide-state jet-popup--show-state");
// 					popup_class.find(".jet-popup__overlay").css("opacity", "1");
// 					popup_class.find(".jet-popup__container").css("opacity", "1");
// 					popup_class.css("zIndex", "1005");
// 				});
// 			}
// 		});
// 		jQuery("document").ready(function () {
// 			if (document.querySelector(".gform_wrapper")) {
// 				if (typeof wp === "undefined" || typeof wp.a11y === "undefined" || typeof wp.a11y.speak !== "function") {
// 					if (typeof wp === "undefined") {
// 						window.wp = {};
// 					}
// 					if (typeof wp.a11y === "undefined") {
// 						wp.a11y = {};
// 					}
// 					wp.a11y.speak = function (message, ariaLive) {
// 						console.log("Mock speak:", message, ariaLive);
// 					};
// 				}
// 				var gform_theme_config = { common: { form: { honeypot: { version_hash: "28a9d3a5fd2a3272f71146cc2558b19f" } } }, hmr_dev: "", public_path: "https://www.jacquesbrasserie.com/wp-content/plugins/gravityforms/assets/js/dist/" };
// 				gform.initializeOnLoaded(function () {
// 					gformInitSpinner(7, "/wp-content/plugins/gravityforms/images/spinner.svg", !0);
// 					jQuery("#gform_ajax_frame_7").on("load", function () {
// 						var contents = jQuery(this).contents().find("*").html();
// 						var is_postback = contents.indexOf("GF_AJAX_POSTBACK") >= 0;
// 						if (!is_postback) {
// 							return;
// 						}
// 						var form_content = jQuery(this).contents().find("#gform_wrapper_7");
// 						var is_confirmation = jQuery(this).contents().find("#gform_confirmation_wrapper_7").length > 0;
// 						var is_redirect = contents.indexOf("gformRedirect(){") >= 0;
// 						var is_form = form_content.length > 0 && !is_redirect && !is_confirmation;
// 						var mt = parseInt(jQuery("html").css("margin-top"), 10) + parseInt(jQuery("body").css("margin-top"), 10) + 100;
// 						if (is_form) {
// 							jQuery("#gform_wrapper_7").html(form_content.html());
// 							if (form_content.hasClass("gform_validation_error")) {
// 								jQuery("#gform_wrapper_7").addClass("gform_validation_error");
// 							} else {
// 								jQuery("#gform_wrapper_7").removeClass("gform_validation_error");
// 							}
// 							setTimeout(function () {
// 								jQuery(document).scrollTop(jQuery("#gform_wrapper_7").offset().top - mt);
// 							}, 50);
// 							if (window.gformInitDatepicker) {
// 								gformInitDatepicker();
// 							}
// 							if (window.gformInitPriceFields) {
// 								gformInitPriceFields();
// 							}
// 							var current_page = jQuery("#gform_source_page_number_7").val();
// 							gformInitSpinner(7, "/wp-content/plugins/gravityforms/images/spinner.svg", !0);
// 							jQuery(document).trigger("gform_page_loaded", [7, current_page]);
// 							window.gf_submitting_7 = !1;
// 						} else if (!is_redirect) {
// 							var confirmation_content = jQuery(this).contents().find(".GF_AJAX_POSTBACK").html();
// 							if (!confirmation_content) {
// 								confirmation_content = contents;
// 							}
// 							setTimeout(function () {
// 								jQuery("#gform_wrapper_7").replaceWith(confirmation_content);
// 								jQuery(document).scrollTop(jQuery("#gf_7").offset().top - mt);
// 								jQuery(document).trigger("gform_confirmation_loaded", [7]);
// 								window.gf_submitting_7 = !1;
// 								wp.a11y.speak(jQuery("#gform_confirmation_message_7").text());
// 							}, 50);
// 						} else {
// 							jQuery("#gform_7").append(contents);
// 							if (window.gformRedirect) {
// 								gformRedirect();
// 							}
// 						}
// 						jQuery(document).trigger("gform_post_render", [7, current_page]);
// 						gform.utils.trigger({ event: "gform/postRender", native: !1, data: { formId: 7, currentPage: current_page } });
// 					});
// 				});
// 				load_css("/wp-content/plugins/gravityforms/assets/css/dist/basic.min.css");
// 				load_js("/wp-content/plugins/gravityforms/js/gravityforms.min.js");
// 				load_js("/wp-content/plugins/gravityforms/assets/js/dist/vendor-theme.min.js");
// 				load_js("/wp-content/plugins/gravityforms/assets/js/dist/utils.min.js");
// 				load_js("/wp-content/plugins/gravityforms/js/jquery.json.min.js");
// 				load_js("/wp-content/plugins/gravityforms/js/placeholders.jquery.min.js");
// 				load_js("/wp-content/plugins/gravityforms/js/vendor/simplebar.js");
// 				load_css("/wp-content/plugins/gravityforms/assets/css/dist/theme.min.css");
// 				load_css("/wp-content/plugins/gravityforms/assets/css/dist/theme-components.min.css");
// 				load_css("/wp-content/plugins/gravityforms/assets/css/dist/theme-ie11.min.css");
// 				load_css("/wp-content/plugins/gravityforms/assets/css/dist/gravity-forms-orbital-theme.min.css");
// 				load_css("/wp-content/plugins/gravityforms/assets/css/dist/gravity-forms-theme-foundation.min.css");
// 				load_css("/wp-content/plugins/gravityforms/assets/css/dist/gravity-forms-theme-framework.min.css");
// 				load_css("/wp-content/plugins/gravityforms/assets/css/dist/gravity-forms-theme-reset.min.css");
// 			}
// 		});
// 	});
// }



function swiperInit(selector) {
	// var elements = document.querySelectorAll(selector);
	// var swipers = [];
	// elements.forEach(function (element, index) {
	// 	var parentElement = element.closest(".elementor-element");
	// 	if (parentElement) {
	// 		var settings = parentElement.getAttribute("data-settings");
	// 		var settingsObj = JSON.parse(settings);
	// 		let size = settingsObj.space_between && settingsObj.space_between.size ? settingsObj.space_between.size : 0;
	// 		let slides_per_view = settingsObj.slides_per_view ? settingsObj.slides_per_view : settingsObj.slides_to_show;
	// 		let slides_mobile_per_view = settingsObj.slides_per_view_mobile;
	// 		swipers[index] = new Swiper(element, {
	// 			autoHeight: !0,
	// 			autoplay: !0,
	// 			speed: 500,
	// 			loop: !0,
	// 			spaceBetween: size,
	// 			slidesPerView: slides_mobile_per_view,
	// 			breakpoints: { 320: { slidesPerView: slides_mobile_per_view }, 768: { slidesPerView: slides_per_view }, 1025: { slidesPerView: slides_per_view } },
	// 			navigation: { nextEl: "swiper-button-next", prevEl: ".swiper-button-prev" },
	// 			pagination: { el: ".swiper-pagination", clickable: !0 },
	// 		});
	// 	}
	// });

	const swiper = new Swiper('.swiper', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
}


function load_swiper_js_css(selector) {
	load_css("https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css");
	loadScript("https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js", function () {
		swiperInit();
	});
}



let functionLoaded = !1;
function loadFunctionOnce(event) {
	if (!functionLoaded) {
		functionLoaded = !0;
		const selectorFunctionCombos = [
			{ selector: ".swiper", functionName: "load_swiper_js_css" },
			// { selector: ".elementor-menu-toggle", functionName: "toggleMenuInit" },
			// { selector: ".e-n-tabs", functionName: "initTabs" },
			// { selector: ".e-gallery-image", functionName: "galleryInit" },
		];
		observeFunctions(selectorFunctionCombos);
		document.removeEventListener("mousemove", loadFunctionOnce);
		document.removeEventListener("touchstart", loadFunctionOnce);
		document.removeEventListener("click", loadFunctionOnce);
		window.removeEventListener("scroll", loadFunctionOnce);
		// load_jquery_script();

		loadScript("https://code.jquery.com/jquery-3.7.1.min.js", function () {
			console.log()
		});

	}
}
function observeFunctions(selectorsAndFunctions) {
	selectorsAndFunctions.forEach((combo) => {
		const { selector, functionName } = combo;
		const observer = new IntersectionObserver((entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const element = document.querySelector(selector);
					if (element) {
						console.log("Loaded " + selector);
						if (typeof window[functionName] === "function") {
							window[functionName](selector);
						}
						observer.unobserve(entry.target);
					}
				}
			});
		});
		const targetElement = document.querySelector(selector);
		if (targetElement) {
			observer.observe(targetElement);
		}
	});
}
document.addEventListener("DOMContentLoaded", function () {
	document.addEventListener("mousemove", loadFunctionOnce);
	document.addEventListener("touchstart", loadFunctionOnce);
	document.addEventListener("click", loadFunctionOnce);
	window.addEventListener("scroll", loadFunctionOnce);
});
