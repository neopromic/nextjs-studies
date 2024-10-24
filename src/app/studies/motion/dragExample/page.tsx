"use client";
import { motion } from "framer-motion";

const DragExample = () => {
	return (
		<div className="flex justify-center items-center h-[100dvh]">
			<motion.div
				drag
				dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }} // define os limites do drag
				className="bg-white rounded-lg w-64 h-64"
			/>
		</div>
	);
};

export default DragExample;
