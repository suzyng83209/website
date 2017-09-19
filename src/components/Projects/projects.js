export default [
  {
    title: 'Log(me);',
    demoUrl: 'https://logme.life',
    githubUrl: 'https://github.com/suzyng83209/htn2017',
    description:
      'Log(me) is a platform for social good developed at Hack the North 2017. ' +
      'It utilizes semantic analysis on user-inputted daily logs and uses algorithms ' +
      'to map those values to quantitative user mood inputs taking into account local events and weather. ' +
      'Log(me) takes advantage of Firebase auth, database, and cloud messaging api' +
      'and uses Microsoft Azure Cognitive Services to perform semantic analysis.',
    languages: ['javascript', 'React']
  },
  {
    title: 'CyanoSleuth',
    demoUrl: 'https://app.cyanosleuth.com',
    githubUrl: 'https://github.com/suzyng83209/cyanosleuth',
    description:
      'CyanoSleuth is an app that targets Citizen Scientists that are concerned ' +
      'with water quality in their local rivers, ponds, and lakes. ' +
      'Coupled with an extensive hardware attachment, CyanoSleuth provides ' +
      'the average curious George to be able to test their water for themselves. ' +
      'CyanoSleuth utilizes MapBox to map hardware-tested water quality data with terrain and topography ' +
      "and provides users with the ability to track their previous submissions and other's submissions.",
    languages: ['React', 'javascript', 'NodeJS', 'hardware']
  },
  {
    title: 'Markov Messenger',
    githubUrl: 'https://github.com/suzyng83209/markov-messenger-bot',
    description:
      'Created by a group of friends at University of Waterloo that were too lazy to attempt to ' +
      'keep up with messages on social media and decided to make an AI that could generate smart, ' +
      'context-driven sentences and reactions on their behalf. We used python to scrape our chat histories, ' +
      'run them through natural language processing, populate our markov chain, and generate real sentences ' +
      'that make sense, have context, sound like the person they are emulating. We even run the prompts ' +
      'through semantic analysis and use Facebook Reacts to indicate its humanity. We set up numerous servers ' +
      'to transfer data from one process to another. ',
    languages: ['React-Native', 'Python', 'javascript', 'NodeJS']
  },
  {
    title: "Who's face",
    githubUrl: 'https://github.com/suzyng83209/whosface',
    description:
      "Created during a time of political intrique, Who's face capitalizes on people's innate " +
      "curiosity about popular figures from popular events. Who's face is an app that allows users " +
      'to determine whether or not a picture contains Trump, Clinton, or Obama. We trained and used ' +
      "Clarifai's image recognition api to determine positive and negative cases and run semantic " +
      "analysis on their internet presence and scraped for their social media updates. Who's face " +
      'attempts to educate its users by providing data and analytics on them. ',
    languages: ['React', 'Python', 'javascript', 'NodeJS']
  },
  {
    title: 'Health Hacking',
    githubUrl: 'https://github.com/suzyng83209/DeltaHacks3',
    description:
      'How does one make exercising and eating well more fun and easy to maintain? ' +
      'Health Hacking attempts to answer that question through the simple conecept of gamification. ' +
      'It not only lets you log and search for recipes, nutritional info, ' +
      'and exercises, it also enabled the user to rack up points and achievements while doing so. ' +
      'Repeated use increases the point multiplier and encourages users to come onto the platform regularly. ' +
      'Health Hacking is an Android Studio Project. ',
    languages: ['Java']
  },
  {
	  title: 'Beyond (a Junior Achievement Company)',
	  demoUrl: 'http://beyondjasa.wixsite.com/beyond',
	  description:
		'A business project rather than a technical one, Beyond was created in my Senior year of high school ' + 
		'through the Junior Achievement program; a 20 week guided entreprenuerial business competition. ' + 
		'As president of the company, I led our efforts into generating business plans, sales strategies, ' + 
		'and prototyping of the product -- an adult coloring book made from local artists and printed by local printers. ' +
		'We were able to generate $10 500.00 in revenue through 12 weeks of operation, $7000.00 of which were pure profit. ' + 
		'Being my first foray into business, it drove leadership and competitive spirit into me.',
  }
];

export const languageColors = {
  React: '#53c1de',
  Redux: '#764abc',
  'React-Native': '#5bbbd6',
  javascript: '#f0da50',
  NodeJS: '#90c53f',
  Python: '#3b77aa',
  Java: '#ea2d2f',
  hardware: '#292929'
};
