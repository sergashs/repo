document.addEventListener('DOMContentLoaded', () => {
	correctVh();
	dropdown();
	headerMenu();
	// initSwiper();
	pageScroll();
	initSwiperCards();
	videoBlocks();
	gsapAnimations();
	// scrollToSection();
});

window.addEventListener('resize', () => {
	correctVh();
	// initSwiper();
});

window.addEventListener('scroll', () => {
	headerOnScroll();
});


function headerOnScroll() {
	const scroll = window.scrollY;
	const header = document.querySelector('.site-header');
	if (scroll >= 60) {
		header.classList.add("scrolled");
	} else {
		header.classList.remove("scrolled");
	}
}

let swiper;

function initSwiper() {
	let scrollToFirstSlideBtn = document.querySelector('[data-scroll-next-section]');

	if (scrollToFirstSlideBtn) {
		scrollToFirstSlideBtn.addEventListener('click', function () {

			if (window.innerWidth > 992) {
				swiper.slideTo(1);
			} else {
				window.scroll({
					top: document.querySelector('.section-intro').offsetHeight,
					left: 0,
					behavior: "smooth",
				});
			}
		});
	}

	if (window.innerWidth > 992 && !swiper) {
		swiper = new Swiper(".swiper-scroll-page", {
			direction: "vertical",
			slidesPerView: 1,
			spaceBetween: 0,
			mousewheel: true,
			speed: 1000,
			slidesOffsetAfter: 258 - window.innerHeight,
			allowTouchMove: false,
			on: {
				slideChange: function () {
					let currentSlideIndex = this.activeIndex;

					console.log(currentSlideIndex)

					if (currentSlideIndex > 0) {
						document.querySelector('.site-header').classList.add('scrolled');
					} else if (currentSlideIndex === 0) {
						document.querySelector('.site-header').classList.remove('scrolled');
					}

					if (this.isBeginning) {
						console.log('Це перший слайд');

					}

					if (this.isEnd) {
						console.log('Слайдер прокручений до кінця');

					}
				}
			}
		});
	} else if (window.innerWidth <= 992 && swiper) {
		swiper.destroy(true, true);
		swiper = null;
	}
}

function initSwiperCards() {
	const swiperCards = new Swiper(".swiper-cards", {
		slidesPerView: "auto",
		spaceBetween: 30,
		speed: 400,
	});
}

function headerMenu() {
	const btnOpen = document.querySelector('.btn-menu-open');
	const btnClose = document.querySelector('.btn-menu-close');

	if (btnOpen) {
		btnOpen.addEventListener('click', () => {
			document.body.classList.add('menu-opened');
		});
	}

	if (btnClose) {
		btnClose.addEventListener('click', () => {
			document.body.classList.remove('menu-opened');
		});
	}

}

function correctVh() {
	const vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', vh + 'px');
}

function dropdown() {
	const activeClass = 'show';
	const select = '[data-lang-select]';

	document.addEventListener('click', function (e) {
		let shareEl = e.target.closest(select);
		if (!shareEl && e.target.classList.contains(select)) {
			shareEl = e.target;
		} else if (shareEl) {
			shareEl.classList.toggle(activeClass);
		}

		document.querySelectorAll(select + '.' + activeClass).forEach(el => {
			if (!shareEl || el !== shareEl) {
				el.classList.remove(activeClass);
			}
		});
	});
}

function videoBlocks() {
	const blocks = document.querySelectorAll('[data-video-block]');

	if (blocks.length > 0) {
		blocks.forEach((block) => {
			block.addEventListener('click', () => {
				if (block.classList.contains('playning')) {
					block.querySelector('video').pause();
					block.classList.remove('playning');
				} else {
					block.querySelector('video').play();
					block.classList.add('playning');
				}
			});
		})
	}
}

// gsap.registerPlugin(ScrollToPlugin);

// const mm = gsap.matchMedia();

// mm.add("(min-width: 992px)", () => {
// 	const sections = gsap.utils.toArray("[data-scroll-section]");

// 	if (sections.length === 0) {
// 		return;
// 	}

// 	let currentSection = 0;

// 	const scrollToSection = (index) => {
// 		if (index < 0 || index >= sections.length) return;
// 		currentSection = index;

// 		gsap.to(window, {
// 			scrollTo: { y: sections[index].offsetTop },
// 			duration: 0.6,
// 			ease: "power2.inOut",
// 		});
// 	};

// 	const handleScroll = (event) => {
// 		if (gsap.isTweening(window)) return;
// 		const direction = event.deltaY > 0 ? 1 : -1;
// 		scrollToSection(currentSection + direction);
// 	};

// 	window.addEventListener("wheel", handleScroll, { passive: false });
// 	window.addEventListener("keydown", (event) => {
// 		if (event.key === "ArrowDown") scrollToSection(currentSection + 1);
// 		if (event.key === "ArrowUp") scrollToSection(currentSection - 1);
// 	});

// 	// Cleanup function in case the screen size changes
// 	return () => {
// 		window.removeEventListener("wheel", handleScroll);
// 		window.removeEventListener("keydown", handleScroll);
// 	};
// });

function scrollToSection() {
	const scrolls = document.querySelectorAll("[scroll-to]");

	if (scrolls) {
		for (const scroll of scrolls) {
			scroll.addEventListener("click", clickHandler);
		}

		function clickHandler(e) {
			document.body.classList.remove('menu-opened');
			e.preventDefault();
			const dataScroll = this.getAttribute("scroll-to");
			const targetElement = document.querySelector(`#${dataScroll}`);

			if (targetElement) {
				gsap.to(window, {
					scrollTo: {
						y: targetElement,
						offsetY: 0,
						autoKill: false
					},
					duration: 0.85,
					ease: "power2.out",
					onStart: () => {

						ScrollTrigger.getAll().forEach((trigger) => trigger.disable());
					},
					onComplete: () => {
						ScrollTrigger.getAll().forEach((trigger) => trigger.enable());
					}
				});
			}
		}
	}
}

// плавний скрол на гсап, секція на секцію накладається
function pageScroll() {
	// const panelWrappers = document.querySelectorAll(".smooth-scroll-page");

	// if (panelWrappers.length > 0) {

	// 	panelWrappers.forEach((wrapper) => {
	// 		if (window.innerWidth > 991) {
	// 			const panels = gsap.utils.toArray(wrapper.querySelectorAll("[data-scroll-section]"));
	// 			const scrollNormalizer = ScrollTrigger.normalizeScroll(true);
	// 			let activeScroll = null;


	// 			document.addEventListener(
	// 				"touchstart",
	// 				(e) => {
	// 					if (activeScroll) {
	// 						e.preventDefault();
	// 						e.stopImmediatePropagation();
	// 					}
	// 				},
	// 				{ capture: true, passive: false }
	// 			);


	// 			panels.forEach((panel, index) => {
	// 				ScrollTrigger.create({
	// 					trigger: panel,
	// 					start: "top bottom",
	// 					end: "+=199%",
	// 					onToggle: (self) => {
	// 						if (self.isActive && !activeScroll) {
	// 							activeScroll = gsap.to(window, {
	// 								scrollTo: { y: index * window.innerHeight, autoKill: false },
	// 								onStart: () => {
	// 									scrollNormalizer.disable();
	// 									scrollNormalizer.enable();
	// 								},
	// 								duration: 1,
	// 								onComplete: () => {
	// 									activeScroll = null;
	// 								},
	// 								overwrite: true,
	// 							});
	// 						}
	// 					},
	// 				});
	// 			});
	// 		}
	// 	});
	// }


	// let panels = gsap.utils.toArray("[data-scroll-section]");
	// // we'll create a ScrollTrigger for each panel just to track when each panel's top hits the top of the viewport (we only need this for snapping)
	// let tops = panels.map(panel => ScrollTrigger.create({ trigger: panel, start: "top top" }));

	// panels.forEach((panel, i) => {
	// 	ScrollTrigger.create({
	// 		trigger: panel,
	// 		start: () => panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom", // if it's shorter than the viewport, we prefer to pin it at the top
	// 		pin: true,
	// 		pinSpacing: false
	// 	});
	// });

	// ScrollTrigger.create({
	// 	snap: {
	// 		snapTo: (progress, self) => {
	// 			let panelStarts = tops.map(st => st.start), // an Array of all the starting scroll positions. We do this on each scroll to make sure it's totally responsive. Starting positions may change when the user resizes the viewport
	// 				snapScroll = gsap.utils.snap(panelStarts, self.scroll()); // find the closest one
	// 			return gsap.utils.normalize(0, ScrollTrigger.maxScroll(window), snapScroll); // snapping requires a progress value, so convert the scroll position into a normalized progress value between 0 and 1
	// 		},
	// 		duration: 0.5
	// 	}
	// });





	// gsap.registerPlugin(ScrollTrigger);

	// // Select all panels
	// let panels = gsap.utils.toArray("[data-scroll-section]");

	// // Create ScrollTrigger for each panel
	// panels.forEach((panel, index) => {
	// 	ScrollTrigger.create({
	// 		trigger: panel,
	// 		start: () =>
	// 			panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom",
	// 		pin: true,
	// 		pinSpacing: index === panels.length - 1,
	// 		scrub: true
	// 	});
	// });

	// // Snap only when a panel is in view
	// ScrollTrigger.create({
	// 	trigger: panels[0], // Start snapping only when the first panel is in view
	// 	start: "top top",
	// 	endTrigger: panels[panels.length - 1], // End snapping after the last panel
	// 	end: "bottom bottom",
	// 	markers: true,
	// 	snap: {
	// 		snapTo: 1 / (panels.length - 1),
	// 		duration: 0.5
	// 	}
	// });


	// gsap.registerPlugin(ScrollTrigger);

	// // Select all panels
	// const panelWrappers = document.querySelectorAll(".smooth-scroll-page");

	// if (panelWrappers.length > 0) {
	// 	panelWrappers.forEach((wrapper) => {
	// 		// Use matchMedia to check the screen size
	// 		ScrollTrigger.matchMedia({
	// 			// For screens larger than 991px
	// 			"(min-width: 992px)": () => {
	// 				const panels = gsap.utils.toArray(wrapper.querySelectorAll("[data-scroll-section]"));
	// 				const scrollNormalizer = ScrollTrigger.normalizeScroll(true);
	// 				let activeScroll = null;

	// 				// Disable touch start when scroll is active
	// 				document.addEventListener(
	// 					"touchstart",
	// 					(e) => {
	// 						if (activeScroll) {
	// 							e.preventDefault();
	// 							e.stopImmediatePropagation();
	// 						}
	// 					},
	// 					{ capture: true, passive: false }
	// 				);

	// 				// Create ScrollTrigger for each panel for smooth scroll effect
	// 				panels.forEach((panel, index) => {
	// 					ScrollTrigger.create({
	// 						trigger: panel,
	// 						start: "top bottom",
	// 						end: "+=199%",
	// 						onToggle: (self) => {
	// 							if (self.isActive && !activeScroll) {
	// 								activeScroll = gsap.to(window, {
	// 									scrollTo: { y: index * window.innerHeight, autoKill: false },
	// 									onStart: () => {
	// 										scrollNormalizer.disable();
	// 										scrollNormalizer.enable();
	// 									},
	// 									duration: 1,
	// 									onComplete: () => {
	// 										activeScroll = null;
	// 									},
	// 									overwrite: true,
	// 								});
	// 							}
	// 						},
	// 					});

	// 					// ScrollPin for each panel
	// 					ScrollTrigger.create({
	// 						trigger: panel,
	// 						start: () =>
	// 							panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom",
	// 						pin: true,
	// 						pinSpacing: index === panels.length - 1,
	// 						scrub: true
	// 					});
	// 				});

	// 				// Snap only when a panel is in view
	// 				ScrollTrigger.create({
	// 					trigger: panels[0], // Start snapping only when the first panel is in view
	// 					start: "top top",
	// 					endTrigger: panels[panels.length - 1], // End snapping after the last panel
	// 					end: "bottom bottom",
	// 					// markers: true,
	// 					snap: {
	// 						snapTo: 1 / (panels.length - 1),
	// 						duration: 0.5
	// 					}
	// 				});
	// 			},

	// 			// For smaller screens (less than 992px) you can implement custom behavior if needed
	// 			"(max-width: 991px)": () => {
	// 				// You can add alternative behavior for smaller screens if needed
	// 			}
	// 		});
	// 	});
	// }


	gsap.registerPlugin(ScrollTrigger);

	// Select all panels
	const panelWrappers = document.querySelectorAll(".smooth-scroll-page");

	if (panelWrappers.length > 0) {
		panelWrappers.forEach((wrapper) => {
			ScrollTrigger.matchMedia({
				"(min-width: 992px)": () => {
					const panels = gsap.utils.toArray(wrapper.querySelectorAll("[data-scroll-section]"));
					const scrollNormalizer = ScrollTrigger.normalizeScroll(true);
					let activeScroll = null;

					document.addEventListener(
						"touchstart",
						(e) => {
							if (activeScroll) {
								e.preventDefault();
								e.stopImmediatePropagation();
							}
						},
						{ capture: true, passive: false }
					);

					panels.forEach((panel, index) => {
						ScrollTrigger.create({
							trigger: panel,
							start: "top bottom",
							end: "+=199%",
							onToggle: (self) => {
								if (self.isActive && !activeScroll) {
									activeScroll = gsap.to(window, {
										scrollTo: { y: index * window.innerHeight, autoKill: false },
										onStart: () => {
											scrollNormalizer.disable();
											scrollNormalizer.enable();
										},
										duration: 1,
										onComplete: () => {
											activeScroll = null;
										},
										overwrite: true,
									});
								}
							},
						});


						ScrollTrigger.create({
							trigger: panel,
							start: () =>
								panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom",
							pin: true,
							pinSpacing: index === panels.length - 1,
							scrub: true,
						});
					});


					ScrollTrigger.create({
						trigger: panels[0],
						start: "top top",
						endTrigger: panels[panels.length - 1],
						end: "bottom bottom",
						snap: {
							snapTo: 1 / (panels.length - 1),
							duration: 0.5,
						},
					});


					const scrollToButtons = document.querySelectorAll("[scroll-to]");
					scrollToButtons.forEach((button) => {
						button.addEventListener("click", (e) => {
							document.body.classList.remove('menu-opened');
							const targetId = button.getAttribute("scroll-to");
							const targetSection = document.getElementById(targetId);
							let targetIndex = panels.findIndex((panel) => panel.id === targetId);

							if (targetIndex !== -1) {
								activeScroll = gsap.to(window, {
									scrollTo: { y: targetIndex * window.innerHeight, autoKill: false },
									onStart: () => {
										scrollNormalizer.disable();
										scrollNormalizer.enable();
									},
									duration: 2,
									onComplete: () => {
										activeScroll = null;
									},
									overwrite: true,
								});
							}
						});
					});
				},

				// For smaller screens (less than 992px) you can implement custom behavior if needed
				"(max-width: 991px)": () => {
					const scrolls = document.querySelectorAll("[scroll-to]");

					if (scrolls) {
						for (const scroll of scrolls) {
							scroll.addEventListener("click", clickHandler);
						}

						function clickHandler(e) {
							document.body.classList.remove('menu-opened');
							e.preventDefault();
							const dataScroll = this.getAttribute("scroll-to");
							const targetElement = document.querySelector(`#${dataScroll}`);

							if (targetElement) {
								gsap.to(window, {
									scrollTo: {
										y: targetElement,
										offsetY: 0,
										autoKill: false
									},
									duration: 0.85,
									ease: "power2.out",
									onStart: () => {

										ScrollTrigger.getAll().forEach((trigger) => trigger.disable());
									},
									onComplete: () => {
										ScrollTrigger.getAll().forEach((trigger) => trigger.enable());
									}
								});
							}
						}
					}
				},
			});
		});
	}



}



function gsapAnimations() {
	if (document.querySelector('.page-home')) {
		gsap.timeline({
			scrollTrigger: {
				trigger: document.querySelector('.section-intro'),
				start: "top 80%",
				end: "top 60%",
				toggleActions: "play none none none",
			},
		})
			.to(".clipped-box .clipped-text", {
				y: 0,
				stagger: 0.05,
				delay: 0.2,
				duration: .45
			})
			.fromTo(".section-intro .section-footer",
				{ y: 50, opacity: 0, },
				{ y: 0, opacity: 1, stagger: 0.05, duration: 0.45 },
				"<"
			)
			.to(document.querySelector('.section-intro .glitch-text'), {
				textShadow: "2px 0 0 #00ff00",
				duration: 0.1,
				ease: "power2.inOut",
			}, "+=0.3")
			.to(document.querySelector('.section-intro .glitch-text'), {
				textShadow: "2px 0 0 #ff0000",
				duration: 0.1,
				ease: "power2.inOut",
			})
			.to(document.querySelector('.section-intro .glitch-text'), {
				textShadow: "-2px 0 0 #00ff00",
				duration: 0.1,
				ease: "power2.inOut",
			})
			.to(document.querySelector('.section-intro .glitch-text'), {
				textShadow: "-2px 0 0 #ff0000",
				duration: 0.1,
				ease: "power2.inOut",
			})
			.to(document.querySelector('.section-intro .glitch-text'), {
				textShadow: "0px 0px 0px transparent",
				color: "#EC2426",
				duration: 0.2,
				ease: "power2.inOut",
			});



		gsap.timeline({
			scrollTrigger: {
				trigger: document.querySelector('.section-about'),
				start: "top 50%",
				end: "top 80%",
				toggleActions: "play none none none",
			},
		})
			.fromTo(".section-about .block-about",
				{ y: 150, opacity: 0, },
				{ y: 0, opacity: 1, duration: 1, delay: 0.1 }
			)
			.fromTo(".section-about .headding-2",
				{ y: 50, opacity: 0, },
				{ y: 0, opacity: 1, duration: .75, },
				"<"
			).to(document.querySelector('.section-about .glitch-text'), {
				textShadow: "2px 0 0 #00ff00",
				duration: 0.1,
				ease: "power2.inOut",
			})
			.to(document.querySelector('.section-about .glitch-text'), {
				textShadow: "2px 0 0 #ff0000",
				duration: 0.1,
				ease: "power2.inOut",
			})
			.to(document.querySelector('.section-about .glitch-text'), {
				textShadow: "-2px 0 0 #00ff00",
				duration: 0.1,
				ease: "power2.inOut",
			})
			.to(document.querySelector('.section-about .glitch-text'), {
				textShadow: "-2px 0 0 #ff0000",
				duration: 0.1,
				ease: "power2.inOut",
			})
			.to(document.querySelector('.section-about .glitch-text'), {
				textShadow: "0px 0px 0px transparent",
				color: "#EC2426",
				duration: 0.2,
				ease: "power2.inOut",
			})
			.fromTo(".section-about .decor-line",
				{ y: 50, opacity: 0, },
				{ y: 0, opacity: 1, duration: .95, },
				"0"
			)
			.fromTo(".section-about .text-holder",
				{ y: 50, opacity: 0, },
				{ y: 0, opacity: 1, duration: 1.15, },
				"<"
			)
			.fromTo(".section-about .decor-white-block",
				{ y: 50, opacity: 0, },
				{ y: 0, opacity: 1, duration: 1.15, },
				"<"
			);



		gsap.timeline({
			scrollTrigger: {
				trigger: document.querySelector('.section-preysight'),
				start: "top 50%",
				end: "top 80%",
				toggleActions: "play none none none",
			},
		})
			.fromTo(".section-preysight .headding-2",
				{ y: 50, opacity: 0, },
				{ y: 0, opacity: 1, duration: .75, },
				"<"
			)
			.to(document.querySelector('.section-preysight .glitch-text'), {
				textShadow: "2px 0 0 #00ff00",
				duration: 0.1,
				ease: "power2.inOut",
			}, "+=0.1")
			.to(document.querySelector('.section-preysight .glitch-text'), {
				textShadow: "2px 0 0 #ff0000",
				duration: 0.1,
				ease: "power2.inOut",
			})
			.to(document.querySelector('.section-preysight .glitch-text'), {
				textShadow: "-2px 0 0 #00ff00",
				duration: 0.1,
				ease: "power2.inOut",
			})
			.to(document.querySelector('.section-preysight .glitch-text'), {
				textShadow: "-2px 0 0 #ff0000",
				duration: 0.1,
				ease: "power2.inOut",
			})
			.to(document.querySelector('.section-preysight .glitch-text'), {
				textShadow: "0px 0px 0px transparent",
				color: "#EC2426",
				duration: 0.2,
				ease: "power2.inOut",
			})
			.fromTo(".section-preysight .text-holder",
				{ y: 50, opacity: 0, },
				{ y: 0, opacity: 1, duration: 1.15, },
				"0"
			)
			.fromTo(".section-preysight .btn-primary",
				{ y: 50, opacity: 0, },
				{ y: 0, opacity: 1, duration: .95, },
				"<"
			)
			.fromTo(".section-preysight .img-holder-1",
				{ y: 50, opacity: 0, },
				{ y: 0, opacity: 1, duration: 0.8, },
				"<"
			)
			.fromTo(".section-preysight .img-holder-2",
				{ y: 50, opacity: 0, },
				{ y: 0, opacity: 1, duration: 1.25, },
				"<"
			)
			.fromTo(".section-preysight .img-holder-3",
				{ y: 50, opacity: 0, },
				{ y: 0, opacity: 1, duration: 1.35, },
				"<"
			);



		gsap.timeline({
			scrollTrigger: {
				trigger: document.querySelector('.section-choose-us'),
				start: "top 50%",
				end: "top 80%",
				toggleActions: "play none none none",
			},
		})
			.fromTo(".section-choose-us .headding-2",
				{ y: 50, opacity: 0, },
				{ y: 0, opacity: 1, duration: .75, },
				"<"
			)
			.to(document.querySelector('.section-choose-us .glitch-text'), {
				textShadow: "2px 0 0 #00ff00",
				duration: 0.1,
				ease: "power2.inOut",
				color: "white",
			})
			.to(document.querySelector('.section-choose-us .glitch-text'), {
				textShadow: "2px 0 0 #ff0000",
				duration: 0.1,
				ease: "power2.inOut",
			})
			.to(document.querySelector('.section-choose-us .glitch-text'), {
				textShadow: "-2px 0 0 #00ff00",
				duration: 0.1,
				ease: "power2.inOut",
			})
			.to(document.querySelector('.section-choose-us .glitch-text'), {
				textShadow: "-2px 0 0 #ff0000",
				duration: 0.1,
				ease: "power2.inOut",
			})
			.to(document.querySelector('.section-choose-us .glitch-text'), {
				textShadow: "0px 0px 0px transparent",
				duration: 0.2,
				ease: "power2.inOut",
			}).fromTo(".section-choose-us .swiper-slide",
				{ y: 50, opacity: 0 },
				{ y: 0, opacity: 1, duration: 1.15, stagger: 0.15 },
				"0"
			);

		gsap.timeline({
			scrollTrigger: {
				trigger: document.querySelector('.section-contact'),
				start: "top 50%",
				end: "top 80%",
				toggleActions: "play none none none",
			},
		})
			.fromTo(".section-contact .headding-2",
				{ y: 50, opacity: 0, },
				{ y: 0, opacity: 1, duration: .75, },
				"<"
			)
			.to(document.querySelector('.section-contact .glitch-text'), {
				delay: 0.1,
				textShadow: "2px 0 0 #00ff00",
				duration: 0.1,
				ease: "power2.inOut",
				color: "white",
			})
			.to(document.querySelector('.section-contact .glitch-text'), {
				textShadow: "2px 0 0 #ff0000",
				duration: 0.1,
				ease: "power2.inOut",
			})
			.to(document.querySelector('.section-contact .glitch-text'), {
				textShadow: "-2px 0 0 #00ff00",
				duration: 0.1,
				ease: "power2.inOut",
			})
			.to(document.querySelector('.section-contact .glitch-text'), {
				textShadow: "-2px 0 0 #ff0000",
				duration: 0.1,
				ease: "power2.inOut",
			})
			.to(document.querySelector('.section-contact .glitch-text'), {
				textShadow: "0px 0px 0px transparent",
				color: "#EC2426",
				duration: 0.2,
				ease: "power2.inOut",
			})
			.fromTo(".section-contact .section-text",
				{ y: 80, opacity: 0, },
				{ y: 0, opacity: 1, duration: .95, },
				"0"
			)
			.fromTo(".section-contact .link-mail",
				{ y: 80, opacity: 0, },
				{ y: 0, opacity: 1, duration: .95, },
				"0"
			)
			.fromTo(".section-contact .right-side",
				{ y: 50, opacity: 0, },
				{ y: 0, opacity: 1, duration: .95, },
				"0"
			)
			.fromTo(".section-contact .block-input, .section-contact .btn-holder",
				{ opacity: 0, y: 50 },
				{ opacity: 1, y: 0, duration: 1.15, stagger: 0.1 },
				"0"
			);
	}



	if (document.querySelector('.page-blog')) {
		gsap.timeline({
			scrollTrigger: {
				trigger: document.querySelector('.page-blog'),
				start: "top 50%",
				end: "top 80%",
				toggleActions: "play none none none",
			},
		})
			.fromTo(".page-blog .headding-1",
				{ y: 50, opacity: 0, },
				{ y: 0, opacity: 1, duration: .75, },
				"<"
			)
			.to(document.querySelector('.page-blog .glitch-text'), {
				delay: 0.1,
				textShadow: "2px 0 0 #00ff00",
				duration: 0.1,
				ease: "power2.inOut",
				color: "white",
			})
			.to(document.querySelector('.page-blog .glitch-text'), {
				textShadow: "2px 0 0 #ff0000",
				duration: 0.1,
				ease: "power2.inOut",
			})
			.to(document.querySelector('.page-blog .glitch-text'), {
				textShadow: "-2px 0 0 #00ff00",
				duration: 0.1,
				ease: "power2.inOut",
			})
			.to(document.querySelector('.page-blog .glitch-text'), {
				textShadow: "-2px 0 0 #ff0000",
				duration: 0.1,
				ease: "power2.inOut",
			})
			.to(document.querySelector('.page-blog .glitch-text'), {
				textShadow: "0px 0px 0px transparent",
				color: "#EC2426",
				duration: 0.2,
				ease: "power2.inOut",
			});


		gsap.set(".page-blog .card-blog", { y: 100, opacity: 0 });
		ScrollTrigger.batch(".page-blog .card-blog", {
			onEnter: batch => gsap.to(batch, { delay: 0.1, autoAlpha: 1, y: 0, opacity: 1, stagger: 0.15, duration: 0.6, }),
			scrollTrigger: {
				start: "top 60%",
				trigger: document.querySelector(".page-blog")
			}
		});

		gsap.from(".page-blog .nav-pagination", {
			y: 50,
			opacity: 0,
			duration: 0.55,
			stagger: 0.5,
			scrollTrigger: {
				start: "top 60%",
				trigger: document.querySelector(".page-blog .nav-pagination")
			}
		});
	}

	if (document.querySelector('.page-404')) {
		gsap.set(".page-404 .fadeInUp", { y: 50, opacity: 0, autoAlpha: 0 });
		ScrollTrigger.batch(".page-404 .fadeInUp", {
			onEnter: batch => gsap.to(batch, { delay: 0.1, autoAlpha: 1, y: 0, opacity: 1, stagger: 0.15, duration: 0.6, }),
			start: "top 90%",
			end: "top 100%",
			trigger: ".page-404",
			once: true,
			batchMax: 6,
		});
	}

	if (document.querySelector('.page-text')) {
		gsap.timeline({
			scrollTrigger: {
				trigger: document.querySelector('.page-text'),
				start: "top 50%",
				end: "top 80%",
				toggleActions: "play none none none",
			},
		}).fromTo(".page-text .container",
			{ y: 50, opacity: 0, },
			{ y: 0, opacity: 1, duration: .75, },
			"<"
		)
			.to(document.querySelector('.page-text .glitch-text'), {
				delay: 0.1,
				textShadow: "2px 0 0 #00ff00",
				duration: 0.1,
				ease: "power2.inOut",
				color: "white",
			})
			.to(document.querySelector('.page-text .glitch-text'), {
				textShadow: "2px 0 0 #ff0000",
				duration: 0.1,
				ease: "power2.inOut",
			})
			.to(document.querySelector('.page-text .glitch-text'), {
				textShadow: "-2px 0 0 #00ff00",
				duration: 0.1,
				ease: "power2.inOut",
			})
			.to(document.querySelector('.page-text .glitch-text'), {
				textShadow: "-2px 0 0 #ff0000",
				duration: 0.1,
				ease: "power2.inOut",
			})
			.to(document.querySelector('.page-text .glitch-text'), {
				textShadow: "0px 0px 0px transparent",
				color: "#EC2426",
				duration: 0.2,
				ease: "power2.inOut",
			});
	}


	if (document.querySelector('.page-blog-post')) {
		gsap.set(".page-blog-post .fadeInUp", { y: 50, opacity: 0, autoAlpha: 0 });
		ScrollTrigger.batch(".page-blog-post .fadeInUp", {
			onEnter: batch => gsap.to(batch, { delay: 0.1, autoAlpha: 1, y: 0, opacity: 1, stagger: 0.15, duration: 0.6, }),
			start: "top 90%",
			end: "top 100%",
			trigger: ".page-blog-post",
			once: true,
			batchMax: 6,
		});
	}

	if (document.querySelector('.page-product')) {
		gsap.timeline({
			scrollTrigger: {
				trigger: document.querySelector('.section-intro'),
				start: "top 80%",
				end: "top 60%",
				toggleActions: "play none none none",
			},
		})
			.to(".clipped-box .clipped-text", {
				y: 0,
				stagger: 0.05,
				delay: 0.2,
				duration: .45
			})
			.fromTo(".section-intro .section-footer",
				{ y: 50, opacity: 0, },
				{ y: 0, opacity: 1, stagger: 0.05, duration: 0.45 },
				"<"
			)
			.to(document.querySelector('.section-intro .glitch-text'), {
				textShadow: "2px 0 0 #00ff00",
				duration: 0.1,
				ease: "power2.inOut",
			}, "+=0.3")
			.to(document.querySelector('.section-intro .glitch-text'), {
				textShadow: "2px 0 0 #ff0000",
				duration: 0.1,
				ease: "power2.inOut",
			})
			.to(document.querySelector('.section-intro .glitch-text'), {
				textShadow: "-2px 0 0 #00ff00",
				duration: 0.1,
				ease: "power2.inOut",
			})
			.to(document.querySelector('.section-intro .glitch-text'), {
				textShadow: "-2px 0 0 #ff0000",
				duration: 0.1,
				ease: "power2.inOut",
			})
			.to(document.querySelector('.section-intro .glitch-text'), {
				textShadow: "0px 0px 0px transparent",
				color: "#EC2426",
				duration: 0.2,
				ease: "power2.inOut",
			});


		gsap.timeline({
			scrollTrigger: {
				trigger: document.querySelector('.section-vision'),
				start: "top 80%",
				end: "top 60%",
				toggleActions: "play none none none",
			},
		})
			.fromTo(".section-vision .block-background",
				{ y: 80, opacity: 0, },
				{ y: 0, opacity: 1, stagger: 0.05, duration: 1.25 },
				"<"
			)
			.fromTo(".section-vision .headding-3",
				{ y: 80, opacity: 0, },
				{ y: 0, opacity: 1, stagger: 0.05, duration: 0.55, delay: 0.1 },
				"<"
			)
			.fromTo(".section-vision .text-holder",
				{ y: 50, opacity: 0, },
				{ y: 0, opacity: 1, stagger: 0.05, duration: 0.55, delay: 0.1 },
				"<"
			)
			.to(document.querySelector('.section-vision .glitch-text'), {
				textShadow: "2px 0 0 #00ff00",
				duration: 0.1,
				ease: "power2.inOut",
			})
			.to(document.querySelector('.section-vision .glitch-text'), {
				textShadow: "2px 0 0 #ff0000",
				duration: 0.1,
				ease: "power2.inOut",
			})
			.to(document.querySelector('.section-vision .glitch-text'), {
				textShadow: "-2px 0 0 #00ff00",
				duration: 0.1,
				ease: "power2.inOut",
			})
			.to(document.querySelector('.section-vision .glitch-text'), {
				textShadow: "-2px 0 0 #ff0000",
				duration: 0.1,
				ease: "power2.inOut",
			})
			.to(document.querySelector('.section-vision .glitch-text'), {
				textShadow: "0px 0px 0px transparent",
				color: "#EC2426",
				duration: 0.2,
				ease: "power2.inOut",
			})
			.fromTo(".section-vision .img-holder:first-of-type",
				{ y: 50, opacity: 0, },
				{ y: 0, opacity: 1, stagger: 0.05, duration: 0.75, delay: 0.1 },
				"0"
			)
			.fromTo(".section-vision .img-holder:last-of-type",
				{ y: 50, opacity: 0 },
				{ y: 0, opacity: 1, stagger: 0.05, duration: 0.75, delay: 0.2 },
				"0"
			);


		gsap.timeline({
			scrollTrigger: {
				trigger: document.querySelector('.section-gallery'),
				start: "top 80%",
				end: "top 60%",
				toggleActions: "play none none none",
			},
		}).fromTo(".section-gallery .img-holder, .section-gallery .video-holder",
			{ opacity: 0, scale: 0, },
			{ scale: 1, opacity: 1, stagger: 0.05, duration: 0.75, delay: 0.1 },
			"0"
		);



		gsap.timeline({
			scrollTrigger: {
				trigger: document.querySelector('.section-technology'),
				start: "top 80%",
				end: "top 60%",
				toggleActions: "play none none none",
			},
		})
			.fromTo(".section-technology .block-content",
				{ y: 80, opacity: 0, },
				{ y: 0, opacity: 1, stagger: 0.05, duration: 1.25 },
				"<"
			)
			.fromTo(".section-technology .headding-3",
				{ y: 80, opacity: 0, },
				{ y: 0, opacity: 1, stagger: 0.05, duration: 0.55, delay: 0.1 },
				"<"
			)
			.fromTo(".section-technology .right-side .text-holder",
				{ y: 50, opacity: 0, },
				{ y: 0, opacity: 1, stagger: 0.05, duration: 0.55, delay: 0.1 },
				"<"
			)
			.to(document.querySelector('.section-technology .glitch-text'), {
				textShadow: "2px 0 0 #00ff00",
				duration: 0.1,
				ease: "power2.inOut",
			})
			.to(document.querySelector('.section-technology .glitch-text'), {
				textShadow: "2px 0 0 #ff0000",
				duration: 0.1,
				ease: "power2.inOut",
			})
			.to(document.querySelector('.section-technology .glitch-text'), {
				textShadow: "-2px 0 0 #00ff00",
				duration: 0.1,
				ease: "power2.inOut",
			})
			.to(document.querySelector('.section-technology .glitch-text'), {
				textShadow: "-2px 0 0 #ff0000",
				duration: 0.1,
				ease: "power2.inOut",
			})
			.to(document.querySelector('.section-technology .glitch-text'), {
				textShadow: "0px 0px 0px transparent",
				color: "#EC2426",
				duration: 0.2,
				ease: "power2.inOut",
			})
			.fromTo(".section-technology .card-info",
				{ opacity: 0, y: 80, },
				{ y: 0, opacity: 1, stagger: 0.15, duration: 0.55, delay: 0.1 },
				"0"
			);

		gsap.timeline({
			scrollTrigger: {
				trigger: document.querySelector('.section-contact'),
				start: "top 50%",
				end: "top 80%",
				toggleActions: "play none none none",
			},
		})
			.fromTo(".section-contact .headding-2",
				{ y: 50, opacity: 0, },
				{ y: 0, opacity: 1, duration: .75, },
				"<"
			)
			.to(document.querySelector('.section-contact .glitch-text'), {
				delay: 0.1,
				textShadow: "2px 0 0 #00ff00",
				duration: 0.1,
				ease: "power2.inOut",
				color: "white",
			})
			.to(document.querySelector('.section-contact .glitch-text'), {
				textShadow: "2px 0 0 #ff0000",
				duration: 0.1,
				ease: "power2.inOut",
			})
			.to(document.querySelector('.section-contact .glitch-text'), {
				textShadow: "-2px 0 0 #00ff00",
				duration: 0.1,
				ease: "power2.inOut",
			})
			.to(document.querySelector('.section-contact .glitch-text'), {
				textShadow: "-2px 0 0 #ff0000",
				duration: 0.1,
				ease: "power2.inOut",
			})
			.to(document.querySelector('.section-contact .glitch-text'), {
				textShadow: "0px 0px 0px transparent",
				color: "#EC2426",
				duration: 0.2,
				ease: "power2.inOut",
			})
			.fromTo(".section-contact .section-text",
				{ y: 80, opacity: 0, },
				{ y: 0, opacity: 1, duration: .95, },
				"0"
			)
			.fromTo(".section-contact .link-mail",
				{ y: 80, opacity: 0, },
				{ y: 0, opacity: 1, duration: .95, },
				"0"
			)
			.fromTo(".section-contact .right-side",
				{ y: 50, opacity: 0, },
				{ y: 0, opacity: 1, duration: .95, },
				"0"
			)
			.fromTo(".section-contact .block-input, .section-contact .btn-holder",
				{ opacity: 0, y: 50 },
				{ opacity: 1, y: 0, duration: 1.15, stagger: 0.1 },
				"0"
			);

	}

}





