
// This is the main shared styles of the website

var mainColor = "#A5D6A7";
var mainTextColor = "gray";
var altColor = "white";
var navTextColor = "#3E2723";
var navTextColorHover = "gray";
var lineHeight = "1.5";

var SharedStyles = {
	mainColor: mainColor,
	mainTextColor: mainTextColor,
	altColor: altColor,
	lineHeight: lineHeight,
	navTextColor: navTextColor,
	navTextColorHover: navTextColorHover,
	mainStyles: {
		fontFamily: "'Open Sans', sans-serif",
		textAlign: "center",
		color: mainTextColor
	},
	titleRowStyles: {
		backgroundColor: mainColor
	},
	titleStyles: {
		color: altColor,
		paddingBottom: "10px",
	},
	paragraphRowStyles: {
		backgroundColor: altColor,
		padding: "25px 0"
	},
	altParagraphRowStyles: {
		backgroundColor: mainColor,
		padding: "20px 0 50px 0"
	},
	glyphiconStyles: {
		top: "4px"
	}
};

export default SharedStyles;