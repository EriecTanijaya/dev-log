import { useSyncExternalStore } from "react";

export function ArticleFooter() {
	return (
		<footer className="fixed bottom-0 w-full bg-slate-200">
			<ScrollBar />
		</footer>
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
