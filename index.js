import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/night.css";
// import "./style.css";
import "reveal.js/dist/theme/fonts/source-sans-pro/source-sans-pro.css";
import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.js";
import Highlight from "reveal.js/plugin/highlight/highlight.js";
import "reveal.js/plugin/highlight/zenburn.css";

const deck = new Reveal({
	plugins: [Markdown, Highlight],
	transition: "fade",
	view: "scroll",
	scrollLayout: "full",
	transitionSpeed: "slow",
	// scrollSnap: "proximity",
	// rtl: true,
	// backgroundTransition: "concave",
	scrollProgress: true,

	// autoAnimate: true,
	// autoAnimateDuration: 1000,
	// autoSlide: 1000,
});

deck.initialize({});
