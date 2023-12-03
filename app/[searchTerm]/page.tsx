import getWikiResults from "@/lib/getWikiResults";
import Item from "./components/Item";

type Props = {
	params: {
		searchTerm: string;
	};
};

export async function generateMetadata({ params: { searchTerm } }: Props) {
	const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
	const data = await wikiData;

	const displayTerm = searchTerm.replaceAll("%20", " ");

	if (!data?.query?.pages) {
		return {
			title: `Not data found for ${displayTerm}`,
		};
	}
	return {
		title: displayTerm,
		description: `Search result for ${displayTerm}`,
	};
}

async function page({ params: { searchTerm } }: Props) {
	const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
	const data = await wikiData;

	const results: Result[] | undefined = data?.query?.pages;

	return (
		<main className="bg-slate-200 mx-auto max-w-lg py-1 min-h-screen">
			{results ? (
				Object.values(results).map((result) => {
					return <Item key={result.pageid} result={result} />;
				})
			) : (
				<p className="text-center text-2xl">No results found!</p>
			)}
		</main>
	);
}
export default page;
