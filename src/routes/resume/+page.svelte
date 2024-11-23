<script>
	import {
		me,
		socials,
		skills,
		languages,
		educations,
		experiences,
		seoTags
	} from '$lib/resume-source'

	import Chip from '$lib/components/chip/Chip.svelte'

	import ResumeFile from '$lib/assets/resume.pdf'

	const { name, about, title, profileImage } = me
	const {
		resume: { title: pageTitle, description: pageDescription }
	} = seoTags
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={pageDescription} />
</svelte:head>

<article class="resume flex flex-col justify-items-center lg:flex-row">
	<aside class="resume__sidebar w-full lg:w-1/3 lg:mr-10">
		<img class="rounded-full resume__img" src={profileImage} alt={`profile image of ${name}`} />
		<h1 class="resume__name">
			{name} <br />
			<span class="resume__title">{title}</span>
		</h1>
		<p>{about}</p>

		<h2 class="resume__category">contacts</h2>
		<ul class="resume__contact list-none">
			{#each socials as social}
				<li>
					<a href={social.href} target="_blank" rel="noopener noreferrer">
						<span class={social.icon}></span>
						{social.text}
					</a>
				</li>
			{/each}
		</ul>

		<h2 class="resume__margin-top-lg resume__category">Skills</h2>
		<section class="resume__skills">
			{#each skills as skill}
				<Chip title={skill} />
			{/each}
		</section>

		<h2 class="resume__margin-top-lg resume__category">Languages</h2>
		<section class="resume__skills">
			{#each languages as language}
				<Chip title={language} />
			{/each}
		</section>

		<h2 class="resume__margin-top-lg resume__category">Education</h2>
		{#each educations as education}
			<div class="resume-section">
				{#if education.school}
					<h3 class="heading-title">{education.school}</h3>
				{/if}
				<div class="resume-section__info">
					{#if education.degree}
						<span class="resume-section__secondary-title">{education.degree}</span>
					{/if}
					- {education.fieldOfStudy}
				</div>
				{#if education.time}
					<time class="resume-section__time">{education.time}</time>
				{/if}
			</div>
		{/each}
	</aside>

	<section class="resume__main w-full lg:w-2/3">
		<h2 class="resume__category">Experience</h2>
		{#each experiences as experience}
			<section class="resume-section">
				{#if experience.title}
					<h3 class="heading-title">{experience.title}</h3>
				{/if}

				<div class="resume-section__info">
					{#if experience.companyName && experience.link}
						<a
							href={experience.link}
							target="_blank"
							rel="noopener noreferrer"
							class="resume-section__link"
						>
							<span class="resume-section__secondary-title">{experience.companyName}</span>
						</a>
					{:else}
						<span class="resume-section__secondary-title resume-section__link">
							{experience.companyName}
						</span>
					{/if}

					{' '}
					- {experience.city}
				</div>

				{#if experience.time}
					<time class="resume-section__time">{experience.time}</time>
				{/if}

				{#if experience.companyDescription}
					<p class="resume-section__about">{experience.companyDescription}</p>
				{/if}

				{#if experience.achievements}
					<ul class="resume-section__work-list ml-12">
						{#each experience.achievements as achievement}
							<li>{achievement}</li>
						{/each}
					</ul>
				{/if}
			</section>
		{/each}
	</section>
</article>

<div class="flex justify-center">
	<a class="download-resume" href={ResumeFile} download={`Resume_${name}.pdf`}> Download resume </a>
</div>

<style lang="css">
	.resume {
		margin: var(--margin_mx) auto;
	}
	.resume__name {
		color: var(--heading-color);
		text-transform: capitalize;
	}
	.resume__title {
		font-size: 0.8em;
	}
	.resume__img {
		width: 280px;
		margin: 0 auto 1em;
	}
	.resume__skills {
		display: flex;
		flex-wrap: wrap;
	}
	.resume__contact {
		margin: 0;
		padding: 0;
	}
	.resume__contact li {
		margin: var(--margin_sm) 0;
	}
	.resume__contact a {
		color: var(--heading-color);
	}
	.resume__margin-top-lg {
		margin-top: var(--margin-lg);
	}
	.resume__category {
		color: var(--heading-color);
		border-bottom: 3px solid var(--heading-color);
		padding-bottom: 10px;
		margin: 1em 0;
		text-transform: capitalize;
		font-weight: 400;
	}
	.resume .resume-section:last-child {
		border-bottom: none;
		margin-bottom: 0;
		padding-bottom: 0;
	}
	.resume-section {
		margin-bottom: var(--margin-lg);
		padding-bottom: 30px;
		border-bottom: 3px solid var(--heading-color);
	}
	.resume-section__secondary-title {
		font-weight: 500;
	}
	.resume-section__list-header {
		margin: 0 0 10px;
	}
	.resume-section__info {
		margin: 10px 0;
	}
	.resume-section__about {
		margin: 10px 0;
	}
	.resume-section__work-list {
		list-style-type: disc;
		margin-bottom: 0;
	}
	.resume-section__work-list li {
		margin: var(--margin_sm) 0;
	}
	.resume-section__link {
		color: var(--heading-color);
	}
	.resume-section__time {
		display: block;
		margin-top: var(--margin_sm);
		color: var(--heading-color);
		font-style: italic;
		font-weight: 400;
		font-size: var(--font_small);
	}
	.download-resume {
		background: var(--gradient);
		color: var(--white);
		border-radius: var(--border_radius);
		text-decoration: none;
		text-transform: capitalize;
		padding: 8px 16px;
		border: 2px solid var(--primary);
	}
	@media only screen and (max-width: 486px) {
		.resume__sidebar {
			margin-bottom: var(--margin-lg);
		}
	}
</style>
