import { useState } from "react";

export function Lightbox() {
	const [isShowLightbox, setShowLightbox] = useState(false);

	return isShowLightbox ? (
		<div className="fixed z-1 inset-0 bg-white p-3 overflow-y-scroll gap-3 flex flex-col overscroll-contain">
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
