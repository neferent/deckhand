<template>
	<div class="icon-container">
		<n-card size="small">
			<n-flex justify="space-between">
				<img :src="`./assets/icons/${icon}.png`" />
				<n-flex vertical>
					<n-tooltip placement="top-start" trigger="click">
						<template #trigger>
							<n-button secondary circle type="tertiary" size="tiny">
								<template #icon
									><n-icon :size="24" color="#546a9b"><InfoOutlined /></n-icon
								></template>
							</n-button>
						</template>
						{{ icon }}
					</n-tooltip>
					<n-button
						secondary
						circle
						type="tertiary"
						size="tiny"
						tag="a"
						:href="`./assets/icons/${icon}.png`"
						download
					>
						<template #icon
							><n-icon :size="24" color="#546a9b"><DownloadForOfflineOutlined /></n-icon
						></template> </n-button
				></n-flex>
			</n-flex>
		</n-card>
	</div>
</template>

<script setup lang="ts">
	import { DownloadForOfflineOutlined, InfoOutlined } from '@vicons/material';
	defineProps({
		icon: {
			type: String,
			default: 'Icon Name',
		},
	});
</script>
