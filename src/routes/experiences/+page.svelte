<script>
	import {
		Timeline,
		TimelineItem,
		TimelineSeparator,
		TimelineDot,
		TimelineConnector,
		TimelineContent,
		TimelineOppositeContent
	} from 'svelte-vertical-timeline';
	import { texts } from '../../store';

	$: currentExperienceTexts = $texts.experience[$texts.currentLanguage];
</script>

<div class="flex items-center justify-center w-full py-3">
	<Timeline position="alternate">
		{#each currentExperienceTexts.options as option}
			<TimelineItem>
				<TimelineOppositeContent slot="opposite-content">
					<p class="text-lg text-gray-600">{option.time}</p>
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineDot />
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent>
					<h3 class="text-xl font-bold">{option.job.title}</h3>
					<div class="flex flex-col">
						{#each option.job.items as item}
							<p class="text-gray-600">{item}</p>
						{/each}
					</div>
				</TimelineContent>
			</TimelineItem>
		{/each}
	</Timeline>
</div>
