import { useState } from "react";

type ImageGroupProps = {
	imageUrls: string[];
};

export function ImageGroup({ imageUrls }: ImageGroupProps) {
	const [isShowLightbox, setShowLightbox] = useState(false);
	const isHasLightbox = imageUrls.length > 1;
	const displayedImageUrls = imageUrls.slice(0, 3);

	let displayedImageSizeStyle = "object-cover object-center aspect-square";
	if (imageUrls.length >= 3) {
		displayedImageSizeStyle += " w-[calc(33.33%---spacing(2))]";
	} else if (imageUrls.length > 1) {
		displayedImageSizeStyle += " w-[calc(50%---spacing(2))]";
	} else {
		displayedImageSizeStyle += ` w-full`;
	}

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
			{displayedImageUrls.map((imageUrl) => (
				<img
					src={imageUrl}
					className={displayedImageSizeStyle}
					alt="img"
					key={imageUrl}
				/>
			))}

			{isHasLightbox ? (
				<button
					type="button"
					className="absolute right-1 bg-teal-700 p-4 shadow-xl shadow-teal-700/50 rounded-lg text-white font-semibold text-sm"
					onClick={() => setShowLightbox(true)}
				>
					more
				</button>
			) : (
				""
			)}
		</div>
	);
}
