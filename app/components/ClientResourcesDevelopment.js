import React from 'react';
import SharedStyles from "../styles/sharedStyles.js";
import List from "./shared/list.js";
import ListWithToggleList from "./shared/ListWithToggleList.js";
import ListWithList from "./shared/ListWithList.js";
import Radium from "radium";

class ClientResourcesDevelopment extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			selectedSection: development.zeroToOneYear.zeroToThreeMonths,
			selectedTitle: "0-3 Months",
			zeroToOneVisible: true
		};
	}
	handleClick(e){
		e.preventDefault();
		switch(e.target.innerHTML){
			case "0-3 Months":
				this.setState({selectedSection: development.zeroToOneYear.zeroToThreeMonths, selectedTitle: "0-3 months"});
				break;
			case "4-6 Months":
				this.setState({selectedSection: development.zeroToOneYear.fourToSixMonths, selectedTitle: "4-6 months"});
				break;
			case "7-12 Months":
				this.setState({selectedSection: development.zeroToOneYear.sevenToTwelveMonths, selectedTitle: "7-12 months"});
				break;
			case "1-2 Years":
				this.setState({selectedSection: development.oneToTwoYears, selectedTitle: "1-2 Years"});
				break;	
			case "2-3 Years":
				this.setState({selectedSection: development.twoToThreeYears, selectedTitle: "2-3 Years"});
				break;
			case "3-4 Years":
				this.setState({selectedSection: development.threeToFourYears, selectedTitle: "3-4 Years"});
				break;
			case "4-5 Years":
				this.setState({selectedSection: development.fourToFiveYears, selectedTitle: "4-5 Years"});
				break;		
			case "End of Kindergarten":
				this.setState({selectedSection: development.endOfKindergarten, selectedTitle: "End of Kindergarten"});
				break;
			case "End of First Grade":
				this.setState({selectedSection: development.firstGrade, selectedTitle: "End of First Grade"});
				break;	
			case "End of Second Grade":
				this.setState({selectedSection: development.secondGrade, selectedTitle: "End of Second Grade"});
				break;	
			case "End of Third Grade":
				this.setState({selectedSection: development.thirdGrade, selectedTitle: "End of Third Grade"});
				break;	
			case "End of Fourth Grade":
				this.setState({selectedSection: development.fourthGrade, selectedTitle: "End of Fourth Grade"});
				break;	
			case "End of Fifth Grade":
				this.setState({selectedSection: development.fifthGrade, selectedTitle: "End of Fifth Grade"});
				break;																																		
			default:
				this.setState({selectedSection: null, selectedTitle: "null"});
		}
	}
	handleZeroOneClick(e){
		e.preventDefault();
		this.setState({zeroToOneVisible: !this.state.zeroToOneVisible});
	}
	render(){
		let ulStyles = {
			listStyle: "none",
			textAlign: "left",
			fontSize: "1.3em",
			'@media (max-width: 768px)': {
				padding: "0"
			}
		};
		let liStyles = {
			padding: "20px 0 0 0"
		};

		let innerUlStyles = {
			listStyle: "none",
			display: this.state.zeroToOneVisible? "block" : "none"
		};
		let innerLiStyles = {
			padding: "5px 0"
		}
		return (
			<div className="container-fluid" style={SharedStyles.mainStyles}>
				<div className="row" style={SharedStyles.titleRowStyles}>
					<div className="col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
						<h2 style={SharedStyles.titleStyles}>Typical Language Development</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-4 col-sm-3">
						<ul style={ulStyles}>
							<li style={liStyles}><a href="#" onClick={this.handleZeroOneClick.bind(this)}>0-1 Year</a>
								<ul style={innerUlStyles}>
									<li style={innerLiStyles}>
										<a href="#" onClick={this.handleClick.bind(this)}>0-3 Months</a>
									</li>
									<li style={innerLiStyles}>
										<a href="#" onClick={this.handleClick.bind(this)}>4-6 Months</a>
									</li>
									<li style={innerLiStyles}>
										<a href="#" onClick={this.handleClick.bind(this)}>7-12 Months</a>
									</li>							
								</ul>
							</li>
							<li style={liStyles}>
								<a href="#" onClick={this.handleClick.bind(this)}>1-2 Years</a>						
							</li>
							<li style={liStyles}>
								<a href="#" onClick={this.handleClick.bind(this)}>2-3 Years</a>								
							</li>
							<li style={liStyles}>
								<a href="#" onClick={this.handleClick.bind(this)}>3-4 Years</a>								
							</li>
							<li style={liStyles}>
								<a href="#" onClick={this.handleClick.bind(this)}>4-5 Years</a>	
							</li>
							<li style={liStyles}>
								<a href="#" onClick={this.handleClick.bind(this)}>End of Kindergarten</a>	
							</li>
							<li style={liStyles}>
								<a href="#" onClick={this.handleClick.bind(this)}>End of First Grade</a>									
							</li>
							<li style={liStyles}>
								<a href="#" onClick={this.handleClick.bind(this)}>End of Second Grade</a>						
							</li>
							<li style={liStyles}>
								<a href="#" onClick={this.handleClick.bind(this)}>End of Third Grade</a>
							</li>
							<li style={liStyles}>
								<a href="#" onClick={this.handleClick.bind(this)}>End of Fourth Grade</a>					
							</li>
							<li style={liStyles}>
								<a href="#" onClick={this.handleClick.bind(this)}>End of Fifth Grade</a>					
							</li>																																												
						</ul>
					</div>
					<div className="col-xs-8 col-sm-9">
						<ListWithList title={this.state.selectedTitle} data={this.state.selectedSection}/>
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

export default Radium(ClientResourcesDevelopment);


let development = {
	zeroToOneYear: {
		zeroToThreeMonths: {
			hearingAndUnderstanding: [
				"Startles to loud sounds",
				"Quiets or smiles when spoken to",
				"Seems to recognize your voice and quiets if crying",
				"Increases or decreases sucking behavior in response to sound"
			],
			talking: [
				"Makes pleasure sounds (cooing, gooing)",
				"Cries differently for different needs",
				"Smiles when sees you"
			]
		},
		fourToSixMonths: {
			hearingAndUnderstanding: [
				"Moves eyes in direction of sounds",
				"Responds to changes in tone of your voice",
				"Notices toys that make sounds",
				"Pays attention to music"
			],
			talking: [
				"Babbling sounds more speech-like with many different sounds, including p, b and m",
				"Chuckles and laughs",
				"Vocalizes excitement and displeasure",
				"Makes gurgling sounds when left alone and when playing with you"
			]
		},
		sevenToTwelveMonths: {
			hearingAndUnderstanding: [
				"Enjoys games like peek-a-boo and pat-a-cake",
				"Turns and looks in direction of sounds",
				"Listens when spoken to",
				'Recognizes words for common items like "cup", "shoe", "book", or "juice"',
				'Begins to respond to requests (e.g. "Come here" or "Want more?")'
			],
			talking: [
				'Babbling has both long and short groups of sounds such as "tata upup bibibibi"',
				'Uses speech or noncrying sounds to get and keep attention',
				'Uses gestures to communicate (waving, holding arms to be picked up)',
				'Imitates different speech sounds',
				'Has one or two words (hi, dog, dada, mama) around first birthday, although sounds may not be clear'
			]
		}
	},
	oneToTwoYears: {
		hearingAndUnderstanding: [
			'Points to a few body parts when asked.',
			'Follows simple commands and understands simple questions ("Roll the ball," "Kiss the baby," "Where\'s your shoe?").',
			'Listens to simple stories, songs, and rhymes.',
			'Points to pictures in a book when named.'
		],
		talking: [
			'Says more words every month.',
			'Uses some one- or two- word questions ("Where kitty?" "Go bye-bye?" "What\'s that?").',
			'Puts two words together ("more cookie," "no juice," "mommy book").',
			'Uses many different consonant sounds at the beginning of words.'
		]
	},
	twoToThreeYears: {
		hearingAndUnderstanding: [
			'Understands differences in meaning ("go-stop," "in-on," "big-little," "up-down").',
			'Follows two requests ("Get the book and put it on the table").',
			'Listens to and enjoys hearing stories for longer periods of time'
		],
		talking: [
			'Has a word for almost everything.',
			'Uses two- or three- words to talk about and ask for things.',
			'Uses k, g, f, t, d, and n sounds.',
			'Speech is understood by familiar listeners most of the time.',
			'Often asks for or directs attention to objects by naming them.',
			'Asks why?',
			'May stutter on words or sounds'
		]
	},
	threeToFourYears: {
		hearingAndUnderstanding: [
			'Hears you when you call from another room.',
			'Hears television or radio at the same loudness level as other family members.',
			'Understands words for some colors, like red, blue, and green',
			'Understands words for some shapes, like circle and square',
			'Understands words for family, like brother, grandmother, and aunt'
		],
		talking: [
			'Talks about activities at school or at friends\' homes.',
			'Talks about what happened during the day. Uses about 4 sentences at a time.',
			'People outside of the family usually understand child\'s speech.',
			'Answers simple "who?", "what?", and "where?" questions.',
			'Asks when and how questions.',
			'Says rhyming words, like hat-cat',
			'Uses pronouns, like I, you, me, we, and they',
			'Uses some plural words, like toys, birds, and buses',
			'Uses a lot of sentences that have 4 or more words.',
			'Usually talks easily without repeating syllables or words.'
		]
	},
	fourToFiveYears: {
		hearingAndUnderstanding: [
			'Understands words for order, like first, next, and last.',
			'Understands words for time, like yesterday, today, and tomorrow.',
			'Follows longer directions, like "Put your pajamas on, brush your teeth, and then pick out a book."',
			'Follows classroom directions, like "Draw a circle on your paper around something you eat."',
			'Hears and understands most of what is said at home and in school.'
		],
		talking: [
			'Says all speech sounds in words. May make mistakes on sounds that are harder to say, like l, s, r, v, z, ch, sh, th. ',
			'Responds to "What did you say?"',
			'Talks without repeating sounds or words most of the time.',
			'Names letters and numbers.',
			'Uses sentences that have more than 1 action word, like jump, play, and get. May make some mistakes, like "Zach got 2 video games, but I got one."',
			'Tells a short story.',
			'Keeps a conversation going.',
			'Talks in different ways depending on the listener and place. May use short sentences with younger children or talk louder outside than inside.'
		]
	},
	endOfKindergarten: {
		listening: [
			'Follow 1-2 simple directions in a sequence',
			'Listen to and understand age-appropriate stories read aloud',
			'Follow a simple conversation'
		],
		speaking: [
			'Be understood by most people',
			'Answer simple "yes/no" questions',
			'Answer open-ended questions (e.g., "What did you have for lunch today?")',
			'Retell a story or talk about an event',
			'Participate appropriately in conversations',
			'Show interest in and start conversations'
		],
		reading: [
			'Know how a book works (e.g., read from left to right and top to bottom in English)',
			'Understand that spoken words are made up of sounds',
			'Identify words that rhyme (e.g., cat and hat)',
			'Compare and match words based on their sounds',
			'Understand that letters represent speech sounds and match sounds to letters',
			'Identify upper- and lowercase letters',
			'Recognize some words by sight',
			'"Read" a few picture books from memory',
			'Imitate reading by talking about pictures in a book'
		],
		writing: [
			'Print own first and last name',
			'Draw a picture that tells a story and label and write about the picture',
			'Write upper- and lowercase letters (may not be clearly written)'
		]
	},
	firstGrade: {
		listening: [
			'Remember information',
			'Respond to instructions',
			'Follow 2-3 step directions in a sequence'
		],
		speaking: [
			'Be easily understood',
			'Answer more complex "yes/no" questions',
			'Tell and retell stories and events in a logical order',
			'Express ideas with a variety of complete sentences',
			'Use most parts of speech (grammar) correctly',
			'Ask and respond to "wh" questions (who, what, where, when, why)',
			'Stay on topic and take turns in conversation',
			'Give directions',
			'Start conversations'
		],
		reading: [
			'Create rhyming words',
			'Identify all sounds in short words',
			'Blend separate sounds to form words',
			'Match spoken words with print',
			'Know how a book works (e.g., read from left to right and top to bottom in English)',
			'Identify letters, words, and sentences',
			'Sound out words when reading',
			'Have a sight vocabulary of 100 common words',
			'Read grade-level material fluently',
			'Understand what is read'
		],
		writing: [
			'Express ideas through writing',
			'Print clearly',
			'Spell frequently used words correctly',
			'Begin each sentence with capital letters and use ending punctuation',
			'Write a variety of stories, journal entries, or letters/notes'
		]
	},
	secondGrade: {
		listening: [
			'Follow 3-4 oral directions in a sequence',
			'Understand direction words (e.g., location, space, and time words)',
			'Correctly answer questions about a grade-level story'
		],
		speaking: [
			'Be easily understood',
			'Answer more complex "yes/no" questions',
			'Ask and answer "wh" questions (e.g., who, what, where, when, why)',
			'Use increasingly complex sentence structures',
			'Clarify and explain words and ideas',
			'Give directions with 3-4 steps',
			'Use oral language to inform, to persuade, and to entertain',
			'Stay on topic, take turns, and use appropriate eye contact during conversation',
			'Open and close conversation appropriately'
		],
		reading: [
			'Have fully mastered phonics/sound awareness',
			'Associate speech sounds, syllables, words, and phrases with their written forms',
			'Recognize many words by sight',
			'Use meaning clues when reading (e.g., pictures, titles/headings, information in the story)',
			'Reread and self-correct when necessary',
			'Locate information to answer questions',
			'Explain key elements of a story (e.g., main idea, main characters, plot)',
			'Use own experience to predict and justify what will happen in grade-level stories',
			'Read, paraphrase/retell a story in a sequence',
			'Read grade-level stories, poetry, or dramatic text silently and aloud with fluency',
			'Read spontaneously',
			'Identify and use spelling patterns in words when reading'
		],
		writing: [
			'Write legibly',
			'Use a variety of sentence types in writing essays, poetry, or short stories (fiction and nonfiction)',
			'Use basic punctuation and capitalization appropriately',
			'Organize writing to include beginning, middle, and end',
			'Spell frequently used words correctly',
			'Progress from inventive spelling (e.g., spelling by sound) to more accurate spelling'
		]
	},
	thirdGrade: {
		listening: [
			'Listen attentively in group situations',
			'Understand grade-level material'
		],
		speaking: [
			'Speak clearly with an appropriate voice',
			'Ask and respond to questions',
			'Participate in conversations and group discussions',
			'Use subject-related vocabulary',
			'Stay on topic, use appropriate eye contact, and take turns in conversation',
			'Summarize a story accurately',
			'Explain what has been learned'
		],
		reading: [
			'Demonstrate full mastery of basic phonics',
			'Use word analysis skills when reading',
			'Use clues from language content and structure to help understand what is read',
			'Predict and justify what will happen next in stories and compare and contrast stories',
			'Ask and answer questions regarding reading material',
			'Use acquired information to learn about new topics',
			'Read grade-level books fluently (fiction and nonfiction)',
			'Reread and correct errors when necessary'
		],
		writing: [
			'Plan, organize, revise, and edit',
			'Include details in writing',
			'Write stories, letters, simple explanations, and brief reports',
			'Spell simple words correctly, correct most spelling independently, and use a dictionary to correct spelling',
			'Write clearly in cursive'
		]
	},
	fourthGrade: {
		listening: [
			'Listen to and understand information presented by others',
			'Form opinions based on evidence',
			'Listen for specific purposes'
		],
		speaking: [
			'Use words appropriately in conversation',
			'Use language effectively for a variety of purposes',
			'Understand some figurative language (e.g., "the forest stretched acrossâ€¦")',
			'Participate in group discussions',
			'Give accurate directions to others',
			'Summarize and restate ideas',
			'Organize information for clarity',
			'Use subject area information and vocabulary (e.g., social studies) for learning',
			'Make effective oral presentations'
		],
		reading: [
			'Read for specific purposes',
			'Read grade-level books fluently',
			'Use previously learned information to understand new material',
			'Follow written directions',
			'Take brief notes',
			'Link information learned to different subjects',
			'Learn meanings of new words through knowledge of word origins, synonyms, and multiple meanings',
			'Use reference materials (e.g., dictionary)',
			'Explain the author\'s purpose and writing style',
			'Read and understand a variety of types of literature, including fiction, nonfiction, historical fiction, and poetry',
			'Compare and contrast in content areas',
			'Make inferences from texts',
			'Paraphrase content, including the main idea and details'
		],
		writing: [
			'Write effective stories and explanations, including several paragraphs about the same topic',
			'Develop a plan for writing, including a beginning, middle, and end',
			'Organize writing to convey a central idea',
			'Edit final copies for grammar, punctuation, and spelling'
		]
	},
	fifthGrade: {
		listening: [
			'Listen and draw conclusions in subject area learning activities'
		],
		speaking: [
			'Make planned oral presentations appropriate to the audience',
			'Maintain eye contact and use gestures, facial expressions, and appropriate voice during group presentations',
			'Participate in class discussions across subject areas',
			'Summarize main points',
			'Report about information gathered in group activities'
		],
		reading: [
			'Read grade-level books fluently',
			'Learn meanings of unfamiliar words through knowledge of root words, prefixes, and suffixes',
			'Prioritize information according to the purpose of reading',
			'Read a variety of literary forms',
			'Describe development of character and plot',
			'Describe characteristics of poetry',
			'Analyze author\'s language and style',
			'Use reference materials to support opinions'
		],
		writing: [
			'Write for a variety of purposes',
			'Use vocabulary effectively',
			'Vary sentence structure',
			'Revise writing for clarity',
			'Edit final copies'
		]
	}
};
