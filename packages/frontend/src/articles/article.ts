import type { ReactElement } from "react";

export type Article = {
	slug: string;
	title: string;
	categoryId: string;
	thumbnailUrl: string;
	estimatedReadingTime: number;
	createdAt: string;
	component: ReactElement;
};
