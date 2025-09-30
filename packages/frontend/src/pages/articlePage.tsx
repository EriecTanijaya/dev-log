import { Footer } from "../components/footer";
import { Main } from "../components/main";

// todo: add progress bar reading

export function ArticlePage() {
	return (
		<div>
			<header className="flex fixed w-full h-16 p-4 items-center bg-slate-200 top-0 gap-3">
				<a href="/">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						fill="#000000"
						viewBox="0 0 256 256"
					>
						<title>back icon</title>
						<path d="M232,200a8,8,0,0,1-16,0,88.1,88.1,0,0,0-88-88H51.31l34.35,34.34a8,8,0,0,1-11.32,11.32l-48-48a8,8,0,0,1,0-11.32l48-48A8,8,0,0,1,85.66,61.66L51.31,96H128A104.11,104.11,0,0,1,232,200Z"></path>
					</svg>
				</a>
				<div className="flex flex-col">
					<h2 className="font-black">
						{/** biome-ignore lint/suspicious/noCommentText: double slash for name */}
						Eriec // Dev/Log
					</h2>
					<p className="text-sm">29 JULY 1998 - BLOG</p>
				</div>
			</header>
			<Main className="p-3 indent-7 text-justify mb-16 flex flex-col gap-7">
				<img
					src="assets/blog-portrait-image.jpg"
					alt="blog"
					className="size-80 m-auto"
				/>
				<p>
					Maintaining a positive outlook during challenging times is crucial for
					both mental and emotional well-being. Difficult days can often lead to
					feelings of despair, anxiety, and hopelessness, which can further
					exacerbate the situation. By consciously choosing to focus on the
					positive aspects of life, individuals can cultivate resilience and
					foster a mindset that allows them to navigate through adversity more
					effectively. This positive perspective not only helps in alleviating
					stress but also encourages proactive problem-solving, enabling
					individuals to confront their challenges with a renewed sense of
					purpose and determination.
				</p>

				<p>
					The significance of positivity extends beyond mere emotional comfort;
					it can also have tangible effects on physical health. Research has
					shown that a positive mindset can lead to lower levels of stress
					hormones, improved immune function, and even enhanced longevity. When
					faced with hardships, those who maintain an optimistic outlook are
					more likely to engage in healthy coping mechanisms, such as exercise,
					social support, and mindfulness practices. These behaviors not only
					contribute to better health outcomes but also create a feedback loop
					that reinforces a positive attitude, making it easier to face future
					challenges with confidence.
				</p>

				<p>
					Furthermore, fostering positivity during tough times can have a
					profound impact on relationships and social interactions. A positive
					demeanor can be contagious, inspiring those around us to adopt a
					similar outlook. This collective positivity can create a supportive
					environment where individuals feel empowered to share their struggles
					and seek help when needed. In this way, maintaining a positive
					attitude not only benefits the individual but also strengthens
					community bonds, promoting a culture of resilience and mutual support.
					Ultimately, embracing positivity in difficult days is not just a
					personal choice; it is a vital component of collective well-being.
				</p>
			</Main>
			<Footer />
		</div>
	);
}
