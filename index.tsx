import React from "react";
import { createRoot } from "react-dom/client";
import {
	Deck,
	DefaultTemplate,
	Slide,
	FlexBox,
	Heading,
	SpectacleLogo,
} from "spectacle";
import Default from "./templates/Default";
const transition = {
	from: {
		opacity: 0.9,
		duration: 1000,
	},
	enter: {
		opacity: 1,
		duration: 1000,
	},
	leave: {
		opacity: 1,
		duration: 1000,
	},
};

const Presentation = () => (
	<Deck template={Default} transition={transition}>
		<Slide>
			<FlexBox height="100%">
				<Heading>codean-present</Heading>
			</FlexBox>
		</Slide>
		<Slide>
			<FlexBox height="100%">
				<Heading fontSize="h2">Made with</Heading>
				<SpectacleLogo size={300} />
			</FlexBox>
		</Slide>
		<Slide>
			<FlexBox height="100%">
				<Heading fontSize="h2">Slide 3</Heading>
			</FlexBox>
		</Slide>
	</Deck>
);

createRoot(document.getElementById("app")!).render(<Presentation />);
