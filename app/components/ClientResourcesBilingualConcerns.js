import React from 'react';
import SharedStyles from "../styles/sharedStyles";
import ListWithAnchor from './shared/listWithAnchor';

class ClientResourcesBilingualConcerns extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		let paragraphStyles = {
			lineHeight: SharedStyles.lineHeight,
			textAlign: "left",
			padding: "5px 0"
		};

		let simpleList = function(array){
			let liStyle = {
				textAlign: "left",
				fontSize: "1.2em"
			};

			return array.map(function(em, i)
				{
					return <li key={i} style={liStyle}>{em}</li>;
				});
		};

		return (
			<div className='container-fluid' style={SharedStyles.mainStyles}>
				<div className="row" style={SharedStyles.titleRowStyles}>
					<div className="col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
						<h2 style={SharedStyles.titleStyles}>{contentTitle}</h2>
					</div>
				</div>
				<div style={SharedStyles.topPadding}></div>
				<div className="row">
					<div className="col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
						<h4 style={paragraphStyles}>{contentText[0]}</h4>
						<h4 style={paragraphStyles}>{contentText[1]}</h4>
						<h4 style={paragraphStyles}>{contentText[2]}</h4>
						<h4 style={paragraphStyles}>{contentText[3]}</h4>
						<h4 style={paragraphStyles}>{contentText[4]}</h4>
						<ul>{simpleList(contentText[5])}</ul>
						<h4 style={paragraphStyles}>{contentText[6]}</h4>
						<h4 style={paragraphStyles}>{contentText[7]}</h4>
						<h4 style={paragraphStyles}>{contentText[8]}</h4>
						<h4 style={paragraphStyles}>{contentText[9]}</h4>
						<ul>{simpleList(contentText[10])}</ul>
						<h4 style={paragraphStyles}>{contentText[11]}</h4>
						<h4 style={paragraphStyles}>{contentText[12]}</h4>
						<h4 style={paragraphStyles}>{contentText[13]}</h4>
						<h4 style={paragraphStyles}>{contentText[14]}</h4>
						<h4 style={paragraphStyles}>{contentText[15]}</h4>
						<h4 style={paragraphStyles}>{contentText[16]}</h4>
						<h4 style={paragraphStyles}>{contentText[17]}</h4>
						<h4 style={paragraphStyles}>{contentText[18]}</h4>
						<h4 style={paragraphStyles}>{contentText[19]}</h4>
						<h4 style={paragraphStyles}>{contentText[20]}</h4>
						<ListWithAnchor links={additionalLinks} texts={contentText[21]} ulStyles={linkUlStyle} />
					</div>
				</div>
				<div style={SharedStyles.bottomPadding}></div>
				<div className="row">
					<div className="col-sm-12">
						<h6 style={SharedStyles.referenceStyle}>Information obtained from <span style={{fontStyle: "italic"}}>American Speech-Language-Hearing Association</span> <a href="http://www.asha.org" target="_blank">(http://www.asha.org)</a></h6>
					</div>
				</div>
			</div>
		);
	}
}

export default ClientResourcesBilingualConcerns;

var questionStyle = {
	textDecoration: "underline",
	fontSize: '1.2em',
	color: 'black'
};

var linkUlStyle = {
	textAlign: "left",
	fontSize: "1.2em"
};

var contentTitle = <span>Learning Two Languages</span>;

var contentText = [<span>Anyone can learn a new language. Some people find it easier than others, but all of us can do it. People who can use two languages are <strong>bilingual</strong>.</span>,
<span>Children can learn to be bilingual. They can learn two languages at home, at school, or in the community. Some children learn both languages very well. But sometimes they know one language better than the other. The language a child knows better is called the <strong>dominant language</strong>. Over time the dominant language may change, especially if a child doesn't use it regularly.</span>,
<span>Speaking two languages is like any other skill. To do it well, children need lots of practice, which parents can help provide. Without practice, it may be difficult for children to understand or talk to people in both languages. </span>,
<span style={questionStyle}>How do I teach my child to be bilingual? </span>,
<span>There are a number of ways to teach children to speak more than one language. You can do the following: </span>,
[
	<span>Use two languages from the start. Many children grow up learning two languages at the same time. </span>,
	<span>Use only one language at home. Your child can learn the second language when he or she starts school. </span>,
	<span>Give your child many opportunities to hear and practice using both languages in everyday situations. </span>
],
<span style={questionStyle}>Will learning two languages cause speech or language problems? </span>,
<span>No. Children all over the world learn more than one language without developing speech or language problems. Bilingual children develop language skills just as other children do. </span>,
<span style={questionStyle}>What should I expect when my child learns more than one language? </span>,
<span>Every bilingual child is unique. Developing skills in two languages depends on the quality and amount of experience the child has using both languages. The following are some basic guidelines: </span>,
[
	<span>Like other children, most bilingual children speak their first words by the time they are 1 year old (e.g., "mama" or "dada"). By age 2, most bilingual children can use two-word phrases (e.g., "my ball" or "no juice"). These are the same language developmental milestones seen in children who learn only one language.</span>,
	<span>From time to time, children may mix grammar rules, or they might use words from both languages in the same sentence. This is a normal part of bilingual language development.</span>,
	<span>When a second language is introduced, some children may not talk much for a while. This "silent period" can sometimes last several months. Again, this is normal and will go away.</span>
],
<span style={questionStyle}>What resources can I use to help my child be bilingual? </span>,
<span><strong>Books</strong> You can read to your child in both languages. You can find the books you need at bookstores, at libraries, and on the Internet. </span>,
<span><strong>Audiotapes and CDs</strong> Tapes and CDs in other languages can help too. Singing is a great way to introduce a second language to your child, and it can be lots of fun! </span>,
<span><strong>Videotapes and DVDs</strong> Children's programs are available in many languages. These programs often teach children about numbers, letters, colors, and basic vocabulary. </span>,
<span><strong>Language programs</strong> Children can also learn to be bilingual at <strong>language camps</strong> or in <strong>bilingual education programs</strong>. These give children the chance to use two languages with other children. Some school districts offer programs to help children learn another language from an early age. </span>,
<span style={questionStyle}>If my child is having trouble communicating, should we use only one language? </span>,
<span>In this case, it's best to talk to your child in the language you're most comfortable with. This is true even if he or she uses a different language at school. But try not to make a sudden change in your child's routine. This can be stressful. </span>,
<span>Children who are having problems in both languages may need professional help. </span>,
<span style={questionStyle}>What are some additional resources? </span>,
<span>This list is not exhaustive, and inclusion does not imply endorsement of the organization or the content of the Web site by ASHA. </span>,
[
	<span>Bilingual Language Development</span>,
	<span>Can Special Needs Kids be Bilingual? </span>,
	<span>¡Colorín Colorado!</span>,
	<span>International Reading Association</span>,
	<span>Myths About Bilingual Children</span>,
	<span>National Clearinghouse for English Language Acquisition</span>,
	<span>National Association for Bilingual Education</span>,
	<span>Talk to your baby in your own language</span>,
	<span>The Advantages of Being Bilingual</span>
]
];

var additionalLinks = [
'http://www.youtube.com/watch?v=SNRqJo9niFY',
'http://youtu.be/vOhWg0YeIMs',
'http://www.colorincolorado.com',
'http://www.reading.org',
'http://youtu.be/LVYhpCprtzQ',
'http://www.ncela.gwu.edu',
'http://www.nabe.org',
'http://www.literacytrust.org.uk/talktoyourbaby/quicktips.html#language',
'http://www.asha.org/public/speech/development/The-Advantages-of-Being-Bilingual/'
];