import { SideBarHandler } from "@/components/SideBarHandler";

export const ContainerLayout = () => {
	return (
		<header className="lg:px-12 lg:py-6 px-6 py-3 border-b sticky top-0 left-0 z-50 bg-background/80 max-h-16 flex items-center">
			<div className="flex items-center">
				<div className="">
					<SideBarHandler />
				</div>
				<p className="text-xl font-medium">infinity</p>
			</div>
		</header>
	);
};
