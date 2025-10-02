import { useState, useSyncExternalStore } from "react";
import { Main } from "../components/main";

export function ArticlePage() {
	return (
		<div>
			<header className="flex fixed w-full h-16 p-4 items-center bg-slate-200 top-0 gap-3 z-1">
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
					<p className="text-xs text-teal-700 font-semibold">
						29 JULY 1998 - BLOG
					</p>
				</div>
			</header>

			<Main className="p-3 mb-16 flex flex-col gap-6">
				<img
					src="assets/blog-portrait-image.jpg"
					alt="blog"
					className="size-80 m-auto object-cover object-center"
				/>

				<h1 className="text-3xl font-bold">why i write this shitttttt</h1>

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

				<Lightbox />

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

			<footer className="fixed bottom-0 w-full bg-slate-200 h-16 flex flex-col justify-between">
				<ScrollBar />

				<div className="flex justify-evenly items-center">
					<a
						href="#"
						className="border-b-4 border-b-teal-700 pb-[calc(1rem+env(safe-area-inset-bottom))]"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="32"
							height="32"
							fill="#000000"
							viewBox="0 0 256 256"
							className="fill-teal-700"
						>
							<title>explore icon</title>
							<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm51.58,57.79-32,64a4.08,4.08,0,0,1-1.79,1.79l-64,32a4,4,0,0,1-5.37-5.37l32-64a4.08,4.08,0,0,1,1.79-1.79l64-32A4,4,0,0,1,179.58,81.79Z"></path>
						</svg>
					</a>

					<a href="#" className="pb-[calc(1rem+env(safe-area-inset-bottom))]">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="32"
							height="32"
							fill="#000000"
							viewBox="0 0 256 256"
							className="fill-teal-700"
						>
							<title>profile icon</title>
							<path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
						</svg>
					</a>
				</div>
			</footer>
		</div>
	);
}

function ScrollBar() {
	const scrollProgress = useScrollProgress();

	return (
		<div className="h-1.5 bg-slate-400">
			<div
				className="h-1.5 bg-teal-700"
				style={{ width: `${scrollProgress}%` }}
			></div>
		</div>
	);
}

function useScrollProgress(): number {
	const scrollPosition = useSyncExternalStore(subscribe, getSnapshot);

	function subscribe(callback: () => void) {
		window.addEventListener("scroll", callback, { passive: true });

		return () => {
			window.removeEventListener("scroll", callback);
		};
	}

	function getSnapshot() {
		return document.body.scrollTop || document.documentElement.scrollTop;
	}

	const height =
		document.documentElement.scrollHeight -
		document.documentElement.clientHeight;

	const scrolled =
		height === 0 ? 0 : Math.ceil((scrollPosition / height) * 100);

	return scrolled;
}

function Lightbox() {
	const [isShowLightbox, setShowLightbox] = useState(false);

	return isShowLightbox ? (
		<div className="fixed z-1 inset-0 bg-white p-3 overflow-y-scroll gap-3 flex flex-col overscroll-contain transition-all duration-1000 ease-in-out">
			<img src="assets/blog-portrait-image.jpg" alt="blog" />
			<img src="assets/blog-landscape-image.jpg" alt="blog" />
			<img src="assets/blog-portrait-image.jpg" alt="blog" />

			<button
				type="button"
				className="fixed font-semibold text-sm bg-teal-700 p-4 shadow-xl shadow-teal-700/50 rounded-lg text-white top-11/12 left-1/2 -translate-x-1/2 -translate-y-1/2"
				onClick={() => setShowLightbox(false)}
			>
				less
			</button>
		</div>
	) : (
		<div className="flex justify-between items-center">
			<img
				src="assets/blog-landscape-image.jpg"
				alt="blog"
				className="w-[calc(33.33%---spacing(3))] object-cover object-center aspect-square"
			/>
			<img
				src="assets/blog-portrait-image.jpg"
				alt="blog"
				className="w-[calc(33.33%---spacing(3))] object-cover object-center aspect-square"
			/>
			<img
				src="assets/blog-landscape-image.jpg"
				alt="blog"
				className="w-[calc(33.33%---spacing(3))] object-cover object-center aspect-square"
			/>
			<button
				type="button"
				className="absolute right-1 bg-teal-700 p-4 shadow-xl shadow-teal-700/50 rounded-lg text-white font-semibold text-sm"
				onClick={() => setShowLightbox(true)}
			>
				more
			</button>
		</div>
	);
}
