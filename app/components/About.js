import React from "react";
import SharedStyles from "../styles/sharedStyles.js";
import Radium from 'radium';
import Modal from 'react-modal';

class About extends React.Component {
	constructor(props){
		super(props);
		this.state = {modalIsOpen: false, testimonialIndex: 0};
	}
	openModal(i){
		this.setState({modalIsOpen: true, testimonialIndex: i});
	}
	closeModal(){
		this.setState({modalIsOpen: false});
	}
	render(){
		return (
			<div>
				<div className="container-fluid" style={SharedStyles.mainStyles}>
					<div className="row" style={SharedStyles.titleRowStyles}>
						<div className="col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
							<h2 style={SharedStyles.titleStyles}>Who We Are</h2>
						</div>
					</div>
				</div>
				<div className="container" style={SharedStyles.mainStyles}>
					<div className="row">
						<div className="col-sm-offset-1 col-sm-10" style={inline.paragraphRowStyle}>
							<h4 style={inline.paragraphStyle}>{text.mainParagraph1}</h4>
							<h4 style={inline.paragraphStyle}>{text.mainParagraph2}</h4>
						</div>
					</div>
				</div>
				<div className="container-fluid" style={SharedStyles.mainStyles}>
					<div className="row" style={inline.therapistRowStyle}>
						<div className="col-sm-offset-1 col-sm-10">
							{<h2>{text.therapistTitle}</h2>}
						</div>
					</div>
					<div className="row" style={inline.therapistRowStyle}>
						<div style={SharedStyles.maxWidth}>
						<div className="col-xs-12 col-sm-offset-0 col-sm-4">
							<div className='slp' style={inline.photoStyle}></div>
						</div>
						<div className="col-xs-12 col-sm-8">
							<h4 style={inline.therapistParagraphStyle}>{text.therapistIntro}</h4>
							<h4 style={inline.therapistParagraphStyle}>{text.therapistMain}</h4>
						</div>
						</div>
					</div>
				</div>
				<div className="container" style={SharedStyles.mainStyles}>
					<div className="row" style={inline.testimonialRowStyles}>
						<div className="col-sm-offset-1 col-sm-10">
							{text.testimonialTitle}
						</div>
						<div className="col-sm-offset-1 col-sm-10">
							<h3>Here is what our clients and families have to say! </h3>
						</div>
						<div className="col-sm-offset-1 col-sm-10">
							<hr/>
						</div>
					</div>
					<div className="row" >
						<div className="col-xs-12 col-sm-offset-1 col-sm-10">
							<ul style={{listStyle: 'none', padding: '0'}}>
								{text.testimonialShort.map((em,i)=>{
									return <li key={i} style={inline.testimonialLiStyles}><div style={inline.testimonialLinkStyles} key={i+15} onClick={this.openModal.bind(this, i)}>{em}</div></li>;
								})}
							</ul>
						</div>
					</div>
					<Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal.bind(this)} style={inline.modalStyles}>
						<button onClick={this.closeModal.bind(this)} style={inline.modalButtonStyles}>x</button>
						{text.testimonialFull[this.state.testimonialIndex]}
					</Modal>
					<div style={inline.extraPadding}></div>
				</div>
			</div>
		);
	}
}

export default Radium(About);

let inline = {
	paragraphStyle: {
		lineHeight: SharedStyles.lineHeight,
		padding: "10px 0"
	},
	paragraphRowStyle: {
		padding: "10px 0"
	},
	therapistTitleStyle: {
		border: "2px solid white",
		padding: "10px 25px",
		borderRadius: "10px"
	},
	photoStyle: {
		margin: "20px 0",
		border: "5px solid white",
		borderRadius: "20px"
	},
	therapistRowStyle: {
		padding: "30px 0",
		color: SharedStyles.altColor,
		backgroundColor: SharedStyles.mainColor
	},
	therapistParagraphStyle: {
		textAlign: "left",
		padding: "10px 0",
		lineHeight: "1.5"
	},
	testimonialTitleStyle: {
		display: 'inline-block',
		border: '2px solid gray',
		padding: '15px 20px',
		borderRadius: '10px'
	},
	testimonialRowStyles: {
		padding: "10px 0"
	},
	testimonialLiStyles: {
		padding: '10px',
		borderRadius: '10px',
		':hover': {
			backgroundColor: '#E8F5E9'
		}
	},
	testimonialShortStyle: {
		lineHeight: '1.4',
		textAlign: 'left'
	},
	testimonialLinkStyles: {
		color: 'gray',
		':hover': {
			textDecoration: 'none',
			cursor: 'pointer'
		},
		':focus': {
			textDecoration: 'none',
			outline: 'none'
		}
	},
	authorStyles: {
		fontSize: '1.1em',
		textAlign: 'right'
	},
	extraPadding: {
		padding: '20px 0'
	},
	expandStyle: {
		textDecoration: 'underline',
		color: '#0091EA',
		textAlign: 'right'
	},
	modalStyles: {
		overlay: {
			backgroundColor: 'rgba(0,0,0,0.5)'
		},
		content: {
			top: '50%',
			left: '50%',
			bottom: 'auto',
			right: 'auto',
			transform: 'translate(-50%, -50%)',
			borderRadius: '30px',
			color: 'dimgray',
			border: '10px solid #A5D6A7',
			transition: 'all 0.5s ease',
			fontFamily: "'Open Sans', sans-serif"
		}
	},
	modalButtonStyles: {
		float: 'right',
		borderRadius: '50%',
		backgroundColor: 'transparent',
		border: 'none',
		fontSize: '1.5em',
		color: 'gray',
		padding: '0 13px 5px',
		':hover': {
			backgroundColor: '#F5F5F5'
		}
	},
	modalContentStyles: {
		fontSize: '1.3em',
		lineHeight: '1.7',
		textAlign: 'left',
		padding: '10px 30px'
	}

};

let text = {
	title: "Speech and Language Services For All",
	mainParagraph1: "Language Liftoff is a growing speech-language pathology private practice providing home-based, clinic, and telepractice speech and language services to clients in the Eastside Seattle suburbs of King County. We offer a wide range of services that enable our clients to reach their full potential and become successful communicators in the home, school, work, and community settings.",
	mainParagraph2: "We pride ourselves in providing high quality services and differential diagnoses, utilizing evidence-based methods, assessment tools, training, and resources/materials. Caring and effective services are our utmost priority!",
	therapistTitle: <span style={inline.therapistTitleStyle}>Our Therapists</span>,
	therapistIntro: <span><p><strong>Jasmin W. Wang</strong></p><p>M.A., CCC-SLP</p>Jasmin is a certified and licensed multilingual (English, Mandarin Chinese, Spanish) speech-language pathologist.  She graduated from the University of California, San Diego with a B.A. in Human Development and an emphasis in Linguistics and Cognitive Science.  Jasmin received her postgraduate degree in Speech and Language Pathology at San Jose State University.</span>,
	therapistMain: <span>Jasmin is experienced in working in a variety of settings, including private practice, public schools, rehabilitation centers, and telepractice (teletherapy).  She is also experienced in working with a wide age range of clients, including the early childhood population (ages 2-5), school-aged children and adolescents in elementary and secondary programs, and adults.  Jasmin has specialized knowledge in the areas of cognitive-communication disorders, neurogenic speech and language disorders, articulation/phonological disorders, receptive-expressive language disorders, autism spectrum disorder (ASD), and fluency/stuttering.  In addition, Jasmin also has a background in applied behavior analysis (ABA) therapy, foreign language instruction, teaching English as a second language, and literacy instruction.</span>,
	testimonialTitle: <h2 style={inline.testimonialTitleStyle}>Client Testimonials</h2>,
	testimonialFull: [
		<div>
			<h4 style={inline.modalContentStyles}>“Throughout the school year, we discussed our son’s progress with her, and Jasmin was extremely responsive and flexible in fine-tuning the [sessions] depending on pace, progress, or focus changes that came up. Jasmin is an excellent communicator and listener. We always felt connected with her, and she promptly and thoroughly replied to all our suggestions, as well as showed initiative in introducing changes in methodology depending on our son’s progress and test results. Jasmin is extremely reliable, courteous, pleasant, responsible, intelligent, and patient. She has a wonderful way with kids, making the [sessions] fun and at the same time being able to maintain focus on getting work done.”</h4>
			<h5 style={inline.authorStyles}>- Kristina, Mother of Zak (elementary student)</h5>
		</div>,
		<div>
			<h4 style={inline.modalContentStyles}>“I enjoyed personalized class design from Jasmin who genuinely wanted the same goals for me child and not just spend an hour on pre- existing/general exercises. She listened to our child's needs and worked with them based on their interests. Her skills at keeping children on track without losing interest were phenomenal. Jasmin is a great speech therapist. Our younger son loves working with her because she is so fun and patient. I love working with Jasmin because she is very structured and fit in many activities toward the improvement of the child. She will not hesitate to change the direction or pace of the course work if she feels the child is ready for the new idea or new concept. This helps us greatly as I see vast improvement in my child. Her fun and interactive drills and games and her willingness to talk to parents on weekly progress are the skills that I admire and appreciate. Jamin is truly a gem in the world of personalized instruction.”</h4>
			<h5 style={inline.authorStyles}>- Yen Li, Mother of Andrew and Casey (elementary students)</h5>
		</div>,
		<div>
			<h4 style={inline.modalContentStyles}>給王⽼師的推薦函: 親愛的家長們, 我們很開心的將王⽼師推薦給各家庭。 王老師的語言治療和英語教學是非常頂級並適合我們華語家庭。 王⽼師精通中文,能細⼼了解家長的需求,對孩子⽤有趣又實在的教學方式達到學習效果。 王老師的英⽂是母語也是她的專業,所以對需要 "modeling"/模擬的語言治療孩⼦們這是一位很難遇到的好⽼師。 如果您的孩⼦需要⽂法的訓練和加強文章表示能力, 王⽼師也是這⽅面的專家。 我深感榮幸我的孩⼦有緣與王⽼師學習, 他們的進步是王⽼師的用⼼。 再次推薦王⽼師給各位家長。</h4>
			<h5 style={inline.authorStyles}>- Yen Li, Mother of Andrew and Casey (elementary students)</h5>
		</div>
	],
	testimonialShort: [
		<div>
			<h4 style={inline.testimonialShortStyle}>"We always felt connected with her, and she promptly and thoroughly replied to all our suggestions, as well as showed initiative in introducing changes in methodology depending on our son’s progress and test results. "</h4>
			<h5 style={inline.authorStyles}>- Kristina, Mother of Zak (elementary student)</h5>
			<h5 style={inline.expandStyle}>Read more</h5>
		</div>,
		<div>
			<h4 style={inline.testimonialShortStyle}>"[Jasmin] will not hesitate to change the direction or pace of the course work if she feels the child is ready for the new idea or new concept. This helps us greatly as I see vast improvement in my child."</h4>
			<h5 style={inline.authorStyles}>- Yen Li, Mother of Andrew and Casey (elementary students)</h5>
			<h5 style={inline.expandStyle}>Read more</h5>
			</div>,
		<div>
			<h4 style={inline.testimonialShortStyle}>"王老師的語言治療和英語教學是非常頂級並適合我們華語家庭。 王⽼師精通中文,能細⼼了解家長的需求,對孩子⽤有趣又實在的教學方式達到學習效果。"</h4>
			<h5 style={inline.authorStyles}>- Yen Li, Mother of Andrew and Casey (elementary students)</h5>
			<h5 style={inline.expandStyle}>Read more</h5>
		</div>
	],
	testimonialAuthors: [
		<div>Kristina, Mother of Zak (elementary student)</div>,
		<div>Yen Li, Mother of Andrew and Casey (elementary students)</div>,
		<div>Yen Li, Mother of Andrew and Casey (elementary students)</div>
	]
};
