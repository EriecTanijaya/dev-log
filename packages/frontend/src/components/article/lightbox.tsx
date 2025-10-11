import { useState } from "react";

type LightboxProps = {
	imageUrls: string[];
};

export function Lightbox({ imageUrls }: LightboxProps) {
	const [isShowLightbox, setShowLightbox] = useState(false);
	const displayedImageUrls = imageUrls.slice(0, 3);

	return isShowLightbox ? (
		<div className="fixed z-1 inset-0 bg-white p-3 overflow-y-scroll gap-3 flex flex-col overscroll-contain">
			{displayedImageUrls.map((imageUrl) => (
				<img src={imageUrl} alt="img" key={imageUrl} />
			))}

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
			{imageUrls.map((imageUrl) => (
				<img src={imageUrl} alt="img" key={imageUrl} />
			))}

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
