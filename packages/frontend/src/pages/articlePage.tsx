import type { ReactNode } from "react";
import { ArticleFooter } from "../components/article/articleFooter";
import { ArticleHeader } from "../components/article/articleHeader";
import { ArticleMain } from "../components/article/articleMain";

type ArticlePageProps = {
	children: ReactNode;
	// todo: could use useContext
	categoryName: string;
	createdAt: string;
};

export function ArticlePage({
	children,
	categoryName,
	createdAt,
}: ArticlePageProps) {
	return (
		<div>
			<ArticleHeader categoryName={categoryName} createdAt={createdAt} />

			<ArticleMain>{children}</ArticleMain>

			<ArticleFooter />
		</div>
	);
}
