import type { ReactNode } from "react";
import { Main } from "../main";

type ArticleMainProps = {
	children: ReactNode;
};

export function ArticleMain({ children }: ArticleMainProps) {
	return <Main className="p-3 mb-6 flex flex-col gap-6">{children}</Main>;
}
