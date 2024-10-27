"use client";
import { motion } from "framer-motion";

const AnimationBasics = () => {
	return (
		<div className="justify-center items-center px-6 lg:px-12 py-4 w-full h-[100dvh]">
			<motion.div
				drag
				dragConstraints={{
					top: -100,
					bottom: 100,
					left: -100,
					right: 100,
				}}
				initial={{
					opacity: 0,
					translateX: 0,
				}}
				animate={{
					opacity: 1,
					translateX: 1,
				}}
				transition={{
					duration: 0.9,
				}}
				className="bg-white size-64"
			/>
			<motion.p
				initial={{
					opacity: 0,
					translateX: -100,
				}}
				animate={{
					opacity: 1,
					translateX: 1,
				}}
				transition={{
					duration: 0.6,
					repeatType: "reverse",
				}}
			>
				Hello, world
			</motion.p>

			<motion.div
				initial={{
					borderRadius: 0,
					backgroundColor: "#0000000",
					scale: 0,
				}}
				animate={{
					borderRadius: 8,
					backgroundColor: "#fafafa",
					scale: 1,
				}}
				transition={{
					duration: 0.8,
				}}
				className="size-64"
			/>
		</div>
	);
};

export default AnimationBasics;
