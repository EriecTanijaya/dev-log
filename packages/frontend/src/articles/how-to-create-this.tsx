import { CATEGORY_ID } from "../categories";
import { Lightbox } from "../components/article/lightbox";
import { ArticlePage } from "../pages/articlePage";
import type { Article } from "./article";

function HowToCreateThis() {
	return (
		<ArticlePage>
			<img
				src="assets/portrait.jpg"
				alt="blog"
				className="size-80 m-auto object-cover object-center"
			/>

			<h1 className="text-3xl font-bold">How to create this?</h1>

			<p>
				Maintaining a positive outlook during challenging times is crucial for
				both mental and emotional well-being. Difficult days can often lead to
				feelings of despair, anxiety, and hopelessness, which can further
				exacerbate the situation. By consciously choosing to focus on the
				positive aspects of life, individuals can cultivate resilience and
				foster a mindset that allows them to navigate through adversity more
				effectively. This positive perspective not only helps in alleviating
				stress but also encourages proactive problem-solving, enabling
				individuals to confront their challenges with a renewed sense of purpose
				and determination.
			</p>

			<Lightbox />

			<p>
				The significance of positivity extends beyond mere emotional comfort; it
				can also have tangible effects on physical health. Research has shown
				that a positive mindset can lead to lower levels of stress hormones,
				improved immune function, and even enhanced longevity. When faced with
				hardships, those who maintain an optimistic outlook are more likely to
				engage in healthy coping mechanisms, such as exercise, social support,
				and mindfulness practices. These behaviors not only contribute to better
				health outcomes but also create a feedback loop that reinforces a
				positive attitude, making it easier to face future challenges with
				confidence.
			</p>

			<p>
				Furthermore, fostering positivity during tough times can have a profound
				impact on relationships and social interactions. A positive demeanor can
				be contagious, inspiring those around us to adopt a similar outlook.
				This collective positivity can create a supportive environment where
				individuals feel empowered to share their struggles and seek help when
				needed. In this way, maintaining a positive attitude not only benefits
				the individual but also strengthens community bonds, promoting a culture
				of resilience and mutual support. Ultimately, embracing positivity in
				difficult days is not just a personal choice; it is a vital component of
				collective well-being.
			</p>
		</ArticlePage>
	);
}

export const howToCreateThis: Article = {
	slug: "how-to-create-this",
	component: <HowToCreateThis />,
	title: "How to create this?",
	estimatedReadingTime: 24,
	createdAt: "10 October 2025",
	thumbnailUrl: "assets/how-to-create-this/thumbnail.jpg",
	categoryId: CATEGORY_ID.BLOG,
};
