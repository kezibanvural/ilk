import React from "react";
import '../../styles/index.scss'; 
import Image from "next/image";

const Loading = () => {
	return (
		<div
			style={{
				height: "80vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
			}}
		>
			<Image 
				src="/favicon.ico" 
				alt="Loading"
				className="wave-image"
				style={{ marginTop: "20px" }}
				width={125} 
				height={125}
			/>
		</div>
	);
};

export default Loading;