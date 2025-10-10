import type { ReactNode } from "react";
import { ArticleFooter } from "../components/article/articleFooter";
import { ArticleHeader } from "../components/article/articleHeader";
import { Main } from "../components/main";

type ArticlePageProps = {
	children: ReactNode;
};

export function ArticlePage({ children }: ArticlePageProps) {
	return (
		<div>
			<ArticleHeader />

			<Main className="p-3 mb-16 flex flex-col gap-6">{children}</Main>

			<ArticleFooter />
		</div>
	);
}
