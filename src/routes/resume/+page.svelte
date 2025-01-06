<script>
	import { me, skills, languages, educations, experiences, seoTags } from '$lib/resume-source'

	import Chip from '$lib/components/chip/Chip.svelte'

	import ResumeFile from '$lib/assets/resume.pdf'

	const { name, title, profileImage } = me
	const {
		resume: { pageTitle, pageDescription }
	} = seoTags
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={pageDescription} />
</svelte:head>

<article class="my-7 mx-auto flex flex-col justify-items-center lg:flex-row">
	<aside class="max-[468px]:mb-7 w-full lg:w-1/3 lg:mr-10">
		<img
			class="rounded-full w-[280px] h-[280px] mx-auto mb-4 ring-neutral ring-offset-base-100 ring ring-offset-2"
			src={profileImage}
			alt={`profile image of ${name}`}
		/>
		<h1 class="heading-title capitalize">
			{name} <br />
			<span class="text-[0.8em]">{title}</span>
		</h1>

		<h2 class="mt-7 pb-[10px] my-[1em] capitalize font-normal heading-title section-underline">
			Skills
		</h2>
		<section class="flex flex-wrap">
			{#each skills as skill}
				<Chip title={skill} />
			{/each}
		</section>

		<h2 class="mt-7 pb-[10px] my-[1em] capitalize font-normal heading-title section-underline">
			Languages
		</h2>
		<section class="flex flex-wrap">
			{#each languages as language}
				<Chip title={language} />
			{/each}
		</section>

		<h2 class="mt-7 pb-[10px] my-[1em] capitalize font-normal heading-title section-underline">
			Education
		</h2>
		{#each educations as education}
			<div class="pb-[30px] section-underline mb-7">
				{#if education.school}
					<h3 class="heading-title">{education.school}</h3>
				{/if}
				<div class="my-[10px]">
					{#if education.degree}
						<span class="font-medium">{education.degree}</span>
					{/if}
					- {education.fieldOfStudy}
				</div>
				{#if education.time}
					<time class="block italic font-normal heading-title text-base">{education.time}</time>
				{/if}
			</div>
		{/each}
	</aside>

	<section class="w-full lg:w-2/3">
		<h2 class="pb-[10px] my-[1em] capitalize font-normal heading-title section-underline">
			Experience
		</h2>
		{#each experiences as experience}
			<section class="pb-[30px] section-underline mb-7">
				<div class="flex flex-col xl:flex-row xl:items-center justify-between w-full">
					<div class="flex flex-col xl:flex-row xl:items-center gap-2">
						{#if experience.title}
							<h3 class="heading-title">{experience.title}</h3>
						{/if}
						<span class="hidden xl:block">|</span>
						<div class="my-[10px]">
							{#if experience.companyName && experience.link}
								<a
									href={experience.link}
									target="_blank"
									rel="noopener noreferrer"
									class="heading-title"
								>
									<span class="font-medium">{experience.companyName}</span>
								</a>
							{:else}
								<span class="font-medium">
									{experience.companyName}
								</span>
							{/if}

							{' '}
							- {experience.city}
						</div>
					</div>
					{#if experience.time}
						<time class="block italic font-normal heading-title text-base">{experience.time}</time>
					{/if}
				</div>

				{#if experience.companyDescription}
					<p class="my-[10px]">{experience.companyDescription}</p>
				{/if}

				{#if experience.achievements}
					<ul class="list-disc ml-12 mb-0">
						{#each experience.achievements as achievement}
							<li class="my-2.5 mx-0">{achievement}</li>
						{/each}
					</ul>
				{/if}
			</section>
		{/each}
	</section>
</article>

<div class="flex justify-center">
	<a
		class="border-primary border-solid border-2 text-white gradient-bg no-underline capitalize px-4 py-2 rounded-md"
		href={ResumeFile}
		download={`Resume_${name}.pdf`}
	>
		Download resume
	</a>
</div>
