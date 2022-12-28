<template>
	<div class="section-contact">
		<div class="container-fluid">
			<h2>contact us</h2>
			<div class="text-holder">
				<p>If you are interested in our work and want to hire a project, contact us and ask for a price.</p>
			</div>
			<div class="row">
				<div class="col-md-6">
					<div class="form-wrapper">
						<form action="#">
							<div class="form-group">
								<input type="text" placeholder="Your Name" class="form-control" />
							</div>
							<div class="form-group">
								<input type="email" placeholder="you@email.com" class="form-control" />
							</div>
							<div class="form-group">
								<input type="text" placeholder="+1 408 123 4567" class="form-control" />
							</div>
							<div class="form-group">
								<input type="text" placeholder="Message" class="form-control" />
							</div>
							<a href="#" class="btn-send"
								>send
								<span class="icon-holder">
									<img src="@/assets/images/icon-02.svg" alt="#" />
								</span>
							</a>
						</form>
					</div>
				</div>
				<div class="col-md-6 d-flex align-items-center">
					<ul>
						<li>
							<span>Our E-mail</span>

							<a href="mailto:contact@architectural.com">contact@architectural.com</a>
						</li>
						<li>
							<span>Our Phone</span>
							<a href="tel:+14085684657">+1 408 568 4657</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "SectionContact"
};
</script>

<style lang="scss">
@import "@/components/SectionContact/SectionContact.scss";
</style>
