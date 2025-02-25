<template>
	<div class="home">
		<img src="./../assets/img/deckhand-logo.svg" />
		<div class="home__nav">
			<n-flex>
				<router-link to="/icons" tag="a">View Icons</router-link>
				<a href="./assets/icons.zip" download>Download All Icons</a></n-flex
			>
		</div>
	</div>
</template>

<style lang="less">
	@import (reference) '../assets/css/imports.less';

	.home {
		display: flex;
		flex-flow: column;
		align-items: center;
		align-content: center;
		justify-content: center;

		height: 100%;

		&__nav {
			font-size: 18px;
		}
	}

	a:link,
	a:visited,
	a:active,
	a:hover {
		font-family: 'Montserrat', 'serif';
		font-weight: 600;
	}

	a:link,
	a:visited,
	a:active {
		color: @light-text-primary;
	}

	a:hover {
		color: @light-text-accent;
	}
</style>
