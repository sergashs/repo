<template>
	<header class="header">
		<div class="container">
			<div class="langs">
				<div class="img-holder">
					<img src="@/assets/images/icon-01.svg" alt="icon" />
				</div>
			</div>
			<div class="logo">logo</div>
		</div>
	</header>
</template>

<style lang="scss" scoped>
.header {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;

	.container {
		display: flex;
		justify-content: space-between;
	}

	.langs,
	.logo {
		flex: 1;
	}
}
</style>
