import React from "react";
import {
	AnimatedProgress,
	Box,
	DeckProps,
	FlexBox,
	FullScreen,
	Progress,
} from "spectacle";

const DefaultTemplate: DeckProps["template"] = ({
	slideNumber,
	numberOfSlides,
}) => {
	return (
		<FlexBox
			justifyContent="space-between"
			position="absolute"
			top={0}
			width={1}
		>
			<Box padding="0 1em">
				<FullScreen />
			</Box>
			<Box padding="1em">
				<AnimatedProgress size={numberOfSlides} />
			</Box>
		</FlexBox>
	);
};

export default DefaultTemplate;
