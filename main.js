/*
  All questions array.
  Each question object: {q: "...", options: [...], answer: <index> }
  This file includes all questions provided by the user (WISE, Hooks, Signposting, Verbal, Non-verbal, Voice, Engagement, Structure, Nervousness,
  Technical Writing grammar questions, and scenario-based items).
*/

const questions = [
  // WISE + Hooks + Signposting etc. (from user's data)
  { q: "The main goal of “E – Explain why it’s relevant” is to:", options:["Show your expertise","Make the topic meaningful to the audience","Repeat your name","Summarize your slides"], answer:1 },
  { q: "In the WISE technique, the “W” stands for:", options:["Work","Welcome","Welcome the audience","Warm-up topic"], answer:2 },
  { q: "In the WISE framework, “S” refers to:", options:["Summarize your talk","Show enthusiasm and structure","Share stories only","Skip introduction"], answer:1 },
  { q: "“I – Introduce” in WISE focuses on:", options:["Telling your name, purpose, and topic clearly","Starting with humor only","Reading your slides","Sharing a personal story only"], answer:0 },
  { q: "Why is the “Explain relevance” step important?", options:["It connects the topic to audience needs","It gives data and facts only","It shortens the introduction","It replaces the conclusion"], answer:0 },
  { q: "What is the main benefit of using the WISE technique?", options:["Creates a clear and engaging opening","Saves time","Avoids body language","Makes slides unnecessary"], answer:0 },
  { q: "Which of these best represents the “Show enthusiasm” part of WISE?", options:["Speaking softly","Using confident tone and gestures","Reading word-for-word","Avoiding eye contact"], answer:1 },

  // Hooks
  { q: "What is the main purpose of a hook?", options:["Capture audience attention immediately","Fill time","End presentation","Avoid questions"], answer:0 },
  { q: "Scenario: “Have you ever been so nervous that you forgot your own name?” This is an example of:", options:["Rhetorical question hook","Fact hook","Quote hook","Story hook"], answer:0 },
  { q: "Scenario: “According to WHO, 60% of people fear public speaking more than death.” This is:", options:["Fact/statistical hook","Story hook","Humor hook","Analogy hook"], answer:0 },
  { q: "Scenario: “Imagine a future where no student is left behind.” This is:", options:["Visual imagination hook","Story hook","Question hook","Humor hook"], answer:0 },
  { q: "Scenario: “Once, I failed my first presentation. But that changed how I see communication forever.” This is:", options:["Personal story hook","Data hook","Quote hook","Joke hook"], answer:0 },
  { q: "Scenario: “As Nelson Mandela said, ‘Education is the most powerful weapon you can use to change the world.’” This is:", options:["Quote hook","Story hook","Fact hook","Humor hook"], answer:0 },
  { q: "Scenario: “Why do some speakers inspire us while others bore us?” This is:", options:["Rhetorical question hook","Visual hook","Personal hook","Humor hook"], answer:0 },
  { q: "A 'Humor hook' should be used only when:", options:["It fits the audience and topic naturally","You want to avoid attention","You feel nervous","You don’t know the topic"], answer:0 },
  { q: "A 'Story hook' works best when:", options:["It connects emotionally to your message","It’s unrelated to the topic","It’s very long","It focuses on jokes"], answer:0 },

  // Signposting & Transitions
  { q: "What is the main purpose of signposting in a presentation?", options:["Guide the audience through your ideas","Decorate slides","Replace visuals","Add jokes"], answer:0 },
  { q: "Which is a good example of signposting?", options:["“Now, let’s move to the second point—body language.”","“Next.”","“I don’t know what’s next.”","“Anyway…”"], answer:0 },
  { q: "“To sum up, we have explored three key ideas.” is an example of:", options:["Transition to conclusion","Hook","Body section","Question"], answer:0 },
  { q: "Transitions help:", options:["Maintain flow and audience focus","Skip slides quickly","Change topic suddenly","Avoid summary"], answer:0 },
  { q: "A poor transition example is:", options:["“Okay, that’s done. Next slide.”","“Now let’s explore our next idea.”","“Moving smoothly to the next step.”","“So far, we’ve covered…”"], answer:0 },
  { q: "What phrase indicates a transition between ideas?", options:["“This brings us to…”","“Uh…”","“Hmm…”","“Let’s skip this.”"], answer:0 },

  // Verbal communication
  { q: "Effective verbal communication includes:", options:["Clear voice, good pace, correct pronunciation","Speaking fast and low","Reading slides word-for-word","Avoiding tone variation"], answer:0 },
  { q: "What does tone variation help with?", options:["Keeping attention and emphasizing meaning","Distracting the audience","Filling silence","Sounding robotic"], answer:0 },
  { q: "Pausing during speaking helps to:", options:["Emphasize key points","Waste time","Confuse audience","Hide mistakes"], answer:0 },
  { q: "Overusing filler words makes you sound:", options:["Less confident","More natural","More professional","More engaging"], answer:0 },
  { q: "The best speaking pace is:", options:["Moderate and clear","Fast and loud","Monotone","Whispering"], answer:0 },

  // Non-verbal
  { q: "Eye contact mainly helps to:", options:["Build trust and connection","Distract audience","Show nervousness","Avoid engagement"], answer:0 },
  { q: "Standing with open posture shows:", options:["Confidence and openness","Fear","Anger","Disinterest"], answer:0 },
  { q: "Crossing arms during presentation usually communicates:", options:["Closed or defensive attitude","Relaxation","Confidence","Warmth"], answer:0 },
  { q: "Purposeful gestures help to:", options:["Support and emphasize speech","Replace content","Distract the audience","Show nervousness"], answer:0 },
  { q: "What should a speaker do with their hands?", options:["Use them naturally to express points","Keep them in pockets","Hide them","Wave constantly"], answer:0 },
  { q: "A confident presenter moves:", options:["Purposefully and with calm control","Randomly around the stage","Not at all","Too fast"], answer:0 },
  { q: "Facial expressions should:", options:["Match the message and tone","Stay blank","Be exaggerated","Avoid emotion"], answer:0 },
  { q: "Smiling helps to:", options:["Create warmth and audience comfort","Distract from content","Hide nervousness","Show sarcasm"], answer:0 },

  // Voice & Vocal variety
  { q: "Which of the following improves vocal delivery?", options:["Changing pitch and tone for key points","Monotone speech","Constant shouting","Speaking too fast"], answer:0 },
  { q: "Why is volume control important?", options:["Ensures clarity and audience comfort","Shows dominance","Avoids silence","Adds humor"], answer:0 },
  { q: "Stressing key words helps to:", options:["Highlight important ideas","Make speech longer","Confuse audience","Fill time"], answer:0 },
  { q: "What should you do before speaking to improve vocal clarity?", options:["Warm up your voice","Drink cold water","Whisper","Avoid breathing deeply"], answer:0 },

  // Audience Engagement
  { q: "What is the best way to keep the audience engaged?", options:["Ask questions and relate to them","Speak without pauses","Avoid eye contact","Read slides only"], answer:0 },
  { q: "When answering audience questions, a good approach is to:", options:["Listen fully, then answer clearly","Interrupt","Ignore","Argue"], answer:0 },
  { q: "To encourage participation, you should:", options:["Use open-ended questions","Ask yes/no only","Avoid interaction","Rush answers"], answer:0 },
  { q: "If an audience member looks confused, you should:", options:["Clarify or rephrase your point","Ignore them","End presentation","Joke"], answer:0 },

  // Structure
  { q: "The introduction should:", options:["Capture attention and outline purpose","Go straight to data","Repeat your name","Be skipped"], answer:0 },
  { q: "The body of a presentation should:", options:["Contain clear, organized main points","Be random","Include only jokes","Be shortest part"], answer:0 },
  { q: "The conclusion should:", options:["Summarize and leave a strong final message","Introduce new topics","Skip summary","Repeat everything"], answer:0 },
  { q: "A powerful ending often includes:", options:["Call to action or memorable quote","Reading the last slide silently","Apologizing","Turning off projector fast"], answer:0 },

  // Handling nervousness
  { q: "What is the best way to manage presentation anxiety?", options:["Practice, deep breathing, positive mindset","Ignore preparation","Avoid audience","Speak faster"], answer:0 },
  { q: "Nervousness can be reduced by:", options:["Knowing your content well","Arriving late","Skipping rehearsal","Avoiding eye contact"], answer:0 },
  { q: "Before stepping on stage, a confident presenter should:", options:["Take a deep breath and smile","Hide backstage","Read slides silently","Panic"], answer:0 },

  // TECHNICAL WRITING section (from user's text)
  { q: "The sentence 'AI continues to evolve as an indispensable tool' is:", options:["Complex sentence","Simple sentence","Compound sentence","Compound-complex sentence"], answer:1 },
  { q: "Convert: 'Engineers design algorithms to enhance decision-making.' (passive)", options:["Algorithms are designed by engineers to enhance decision-making.","Engineers are enhanced by algorithms.","Algorithms enhance decision-making engineers.","Engineers design enhanced decision-making algorithms."], answer:0 },
  { q: "Which phrase represents a formal tone?", options:["AI is kinda cool in how it works.","AI systems have become really smart.","AI systems demonstrate remarkable precision.","I think AI is changing stuff fast."], answer:2 },
  { q: "In technical writing, the main purpose is to:", options:["Entertain readers","Inform and explain clearly","Persuade emotionally","Impress through complex vocabulary"], answer:1 },
  { q: "Identify the compound sentence below:", options:["AI systems learn from data, and they improve over time.","Since AI systems learn, they improve over time.","AI learning depends on the quality of data.","Learning AI is interesting."], answer:0 },
  { q: "Which word best reflects an objective tone?", options:["Amazing","Incredible","Effective","Awesome"], answer:2 },
  { q: "Technical writing avoids 'I think' or 'we believe' because:", options:["They are too long.","They reduce objectivity.","They make the report exciting.","They are grammatically incorrect."], answer:1 },
  { q: "Which is NOT a feature of technical writing?", options:["Clarity","Precision","Personal opinion","Objectivity"], answer:2 },
  { q: "Which of the following best defines a technical report?", options:["A personal reflection of experiences","A structured presentation of data, process, and results","A persuasive essay","A narrative account"], answer:1 },

  // Section B – Presentation Skills (from user's text)
  { q: "The WISE technique in introductions stands for:", options:["Welcome – Introduce – Significance – Engage","Wait – Inform – Start – End","Write – Introduce – Speak – Explain","Welcome – Interact – Structure – Evaluate"], answer:0 },
  { q: "When introducing a topic, mentioning why it’s important helps to:", options:["Fill time during the presentation","Build relevance and engage the audience","Impress with vocabulary","Distract from the main point"], answer:1 },
  { q: "In the WISE model, 'E' (Engage) refers to:", options:["Ending with a joke","Asking a question or involving the audience","Writing on the board","Speaking loudly"], answer:1 },
  { q: "During technical presentations, eye contact is essential because it:", options:["Reduces nervousness","Builds connection and credibility","Distracts the audience","Makes the presenter look informal"], answer:1 },
  { q: "Appropriate gesture in presentation means:", options:["Overusing hand movements for emphasis","Using controlled gestures to support ideas","Keeping hands in pockets","Avoiding movement entirely"], answer:1 },
  { q: "'Signposting language' refers to:", options:["Road directions in slides","Words that guide listeners through structure (e.g., Firstly, Moreover, To conclude)","Grammar corrections","Language used for signs"], answer:1 },
  { q: "Which of the following statements shows good posture during a presentation?", options:["Leaning on the podium","Standing straight with relaxed shoulders","Crossing arms","Looking at slides constantly"], answer:1 },
  { q: "A formal closing in a presentation should:", options:["Thank the audience and restate the key takeaway","Include personal stories","End abruptly","Ask if anyone wants to leave"], answer:0 },
  { q: "The best tone for technical presentations is:", options:["Persuasive and emotional","Informative and professional","Conversational and casual","Dramatic and expressive"], answer:1 },
  { q: "The most common mistake in technical presentations is:", options:["Using visuals","Reading slides word-for-word without interaction","Making eye contact","Summarizing points"], answer:1 },

  // Scenario-based Presentation Skills (first set)
  { q: "1 — Nervous Reading: Omar reads all text from slides, says 'um' frequently, and keeps hands in pockets, rarely looks at audience. Which single change would most immediately improve connection?", options:["Add more slides with details","Remove filler words and maintain eye contact","Wear brighter clothes","Speak faster"], answer:1 },
  { q: "2 — Strong Rhetorical Question: Sara opens with 'Have you ever wondered how your personal data is used while you sleep?' Which effect does this opening primarily create?", options:["Confusion about the topic","Immediate engagement and relevance","Shows presenter is nervous","Makes the audience bored"], answer:1 },
  { q: "3 — Missing Relevance: Ahmed introduces himself and topic but never says why it matters. Which WISE step was omitted and likely consequence?", options:["Welcome — audience will be rude","Explain importance — audience may not stay engaged","Introduce — audience will not know his name","Engage — audience will ask many questions"], answer:1 },
  { q: "4 — Dense Slides: Layla’s slides contain long paragraphs, tiny font, and complex diagrams without explanation. What is the primary problem and best corrective action?", options:["Not enough slides — Add more text.","Visual overload — Simplify slides and narrate key points.","Wrong font — Use italics.","Too few diagrams — Add more diagrams."], answer:1 },
  { q: "5 — Overactive Movement: Hassan paces rapidly, uses large exaggerated gestures, often turns away. How does this affect credibility and what should he change?", options:["Enhances credibility; keep pacing","Distracts and reduces clarity; adopt controlled gestures and limited movement","Shows expertise; add more slides","Increases energy; talk even faster"], answer:1 },
  { q: "6 — Screen Focus: Rana spends most time looking at screen not audience while explaining data points. The audience will interpret this as:", options:["Confidence and mastery of material","Disinterest and lack of engagement; alternate eye contact","Excellent use of visuals","Appropriate for technical talks — no change needed"], answer:1 },
  { q: "7 — Monotone Delivery: Adel reads the text in a low, even tone with no pauses. Which two strategies best improve listener attention?", options:["Speed up and add more slides","Add vocal variety (pitch & pace) and purposeful pauses","Avoid eye contact and speak in a whisper","Use a larger font and more animations"], answer:1 },
  { q: "8 — Too Casual: Dina greets the class with 'Hey guys' and uses slang throughout a formal seminar. What is the core problem and the best fix?", options:["Too formal; add jokes","Tone mismatch; use a more formal greeting and register","Slides too bright; lower brightness","Too much eye contact; avoid looking"], answer:1 },
  { q: "9 — Model Introduction: Fatima 'Good morning. I’m Fatima. Today I’ll present on mental health on campus and why every student should care.' Which WISE elements are present?", options:["Only Welcome — ineffective","Welcome, Introduce, Say Topic, Explain Importance — effective","No WISE elements — confusing","Only Engage — too interactive"], answer:1 },
  { q: "10 — Phones & Attention: During Ali’s talk students check phones; slides long, no interaction. Which immediate change would re-engage?", options:["Add more text to slides","Ask a direct question to the audience and reduce slide text","Walk off the stage","Increase slide animation speed"], answer:1 },
  { q: "11 — Memorable Close: Noor finishes: 'We can protect the planet by small daily changes. Will you join me?' What type of close is this?", options:["Summary — repeats facts only","Call to action — invites behavior change","Thank-you note","Joke"], answer:1 },
  { q: "12 — Chaotic Flow: Khaled moves rapidly through unrelated points with no transitions. What critical skill is missing and how to correct?", options:["Signposting and organization; add clear transitions and an outline at the start","Good clothes; change outfit","More jokes; add humor everywhere","Faster slides; speed up the slide deck"], answer:0 },
  { q: "13 — Confident Presence: Mariam stands straight, shoulders relaxed, open gestures, calm pace. What communicates confidence?", options:["Closed posture and silence","Open posture, steady eye contact, measured pacing — projects competence and warmth","Rapid pacing and no pauses","Reading from notes without looking up"], answer:1 },
  { q: "14 — Team Interruptions: Team members interrupt each other and change topics. What is best team rehearsal focus?", options:["Role clarity and practiced transitions to ensure smooth handovers","More slides per person","Laugh tracks between speakers","Individual rehearse only"], answer:0 },
  { q: "15 — Missing Closure: Eman ends mid-sentence as time runs out; no summary. What does this lack most affect and how to avoid it?", options:["Visuals; use better images","Closure and takeaway; reserve 1–2 minutes for a concise conclusion and call to action","Introduction; add more jokes","Slide order; randomize slides"], answer:1 },
  { q: "16 — Silent Visuals: Adam uses excellent diagrams but never explains what they show. What’s missing and what should he do?", options:["More diagrams; add complexity","Narration and linking statements; explain visuals and relate them to the argument","Better fonts; change font family","Faster slide transitions"], answer:1 },
  { q: "17 — Mismatched Expression: Reem smiles throughout a solemn discussion. What should she change?", options:["Keep smiling — always good","Align facial expression with topic tone (serious when discussing serious issues)","Speak in a higher pitch only","Use jokes to defuse tension"], answer:1 },
  { q: "18 — Tech Failure Calm: Lights or slides fail mid-presentation; Omar freezes. Best immediate reaction to maintain audience trust?", options:["Panic and apologize profusely","Remain calm, continue the narrative verbally, use notes or engage with the audience while issue is fixed","End the presentation early","Ask the audience to leave"], answer:1 },
  { q: "19 — Jargon Overload: Heba uses many specialized terms without definition. What is the main issue and best correction?", options:["Too few slides. Fix: Add more images.","Vocabulary gap. Fix: Define key terms and use plain-language equivalents where possible","Too much eye contact. Fix: Avoid contact","Need more animations"], answer:1 },
  { q: "20 — Personal Story Hook: Mohamed begins with a concise personal story that ends with the central idea. What is the strongest effect of a well-used story hook?", options:["It wastes time on irrelevant details","It creates emotional connection and frames the topic for the audience","It confuses the audience about objectives","It replaces the need for clear organization"], answer:1 },

  // Second scenario set (the user posted another 20 with minor differences — include these too)
  { q: "1 — Nervous Speaker: Omar says 'um' frequently, reads slides verbatim, keeps one hand in his pocket while avoiding eye contact. Best remedy?", options:["He needs richer visuals.","He must improve vocal delivery, eye contact, and open posture.","He should shorten his presentation.","He should memorize his slides exactly."], answer:1 },
  { q: "2 — Powerful Start (Subtle): Sara opens: 'Have you noticed your phone spends more time thinking for you than you do?' She pauses, smiles, and looks around. This is:", options:["A risky joke that will alienate the audience.","An effective rhetorical question hook that invites reflection.","Inappropriate; she should start with a statistic.","Irrelevant to most audiences."], answer:1 },
  { q: "3 — Missing 'Why' (Nuanced): Ahmed introduces topic but skips who benefits. Best interpretation?", options:["Purpose is optional.","He missed WISE 'Explain importance' and may lose interest.","Add more technical details instead.","Make a joke to recover."], answer:1 },
  { q: "4 — Overloaded Slides (Critical): Layla’s slides are text-heavy; during Q&A she reads a paragraph verbatim while audience checks phones. Best action?", options:["Reduce on-slide text and narrate concise key points.","Add more paragraphs to clarify.","Stop Q&A and continue presenting.","Speak faster to cover all slides."], answer:0 },
  { q: "5 — Overacting Speaker (Subtle): Hassan paces a lot and uses large sweeping arm movements that sometimes obscure slide content. Best fix?", options:["Larger gestures always increase engagement.","Reduce and control gestures and use purposeful movement.","Add louder music to regain attention.","Avoid any hand movement."], answer:1 },
  { q: "6 — Eye Contact Challenge (Nuanced): Rana reads notes without looking up; audience attention drops. Best fix?", options:["Memorize everything to avoid notes.","Integrate brief eye contact scans and practice cue phrases.","Read more slowly.","Use smaller font to keep people focused."], answer:1 },
  { q: "7 — Flat Voice (Critical): Adel accurate but monotone. Best fix?", options:["Tone doesn’t matter if content is correct.","Add vocal variety (pitch/pace/pauses).","Replace slides with handouts only.","Whisper the conclusion for effect."], answer:1 },
  { q: "8 — Overly Informal (Nuanced): Dina begins 'Hey guys...' in an exam-room of faculty and guests. Best fix?", options:["Great—this will make formal audiences comfortable.","Adopt a more formal register for this audience.","Jargon fixes the issue.","Continue; audience prefers informality."], answer:1 },
  { q: "9 — Great WISE Introduction (Challenging): Fatima intro shows topic and 3 steps to apply. Which is true?", options:["Used Welcome, Introduce, Say Topic, Explain Importance — strong.","Used only two WISE elements; missing Engage.","Should not state steps in the intro.","Used casual tone; too informal."], answer:0 },
  { q: "10 — Distracted Audience (Subtle): Ali has useful data but no stories/hooks; audience uses phones. Best change?", options:["Phones indicate rude audience; ignore them.","Add a brief engaging story or question and reduce slide density.","Stop and give a quiz.","Speed up to fit more content."], answer:1 },
  { q: "11 — Strong Ending (Critical): Noor ends with 'Small changes today protect our planet tomorrow — join us.' This is:", options:["A weak ending; restate facts instead.","A call-to-action ending that provides closure and motivates.","Should have ended with humor.","Irrelevant to WISE."], answer:1 },
  { q: "12 — No Structure (Nuanced): Khaled’s talk leaps between points; listeners feel lost. Best fix?", options:["Creativity > order; acceptable.","Needs signposting and logical sequencing.","Shorten the talk to avoid confusion.","Audience should be responsible to follow."], answer:1 },
  { q: "13 — Confident Posture (Subtle): Mariam stands tall and uses open gestures. True statement?", options:["Power posture increases audience trust and speaker presence.","Posture seems arrogant and should be minimized.","Posture is irrelevant.","Use closed posture to appear serious."], answer:0 },
  { q: "14 — Team Presentation (Critical): Two teammates interrupt each other. Best rehearsal focus?", options:["Visuals fix delivery issues automatically.","Rehearse role division, handovers, and concise transitions.","Each talk longer to fill time.","Interruptions indicate strong teamwork."], answer:1 },
  { q: "15 — Missing Conclusion (Nuanced): Eman finishes without summary. Best correction?", options:["WISE executed correctly; summary not necessary.","A brief conclusion/call-to-action is required for clarity.","Add more slides.","Leave time for more technical details."], answer:1 },
  { q: "16 — Visuals but No Explanation (Challenging): Adam includes vivid charts but never explains them. Best fix?", options:["Visuals alone suffice.","Narrate and interpret visuals, linking data to claims.","Remove visuals.","Hand out charts and stop speaking."], answer:1 },
  { q: "17 — Forced Smile (Nuanced): Reem smiles constantly while discussing layoffs; audience feels dissonance. Best fix?", options:["Smiling is always positive; keep smiling.","Adjust facial expression to match content.","Increase smiles to ease tension.","Laugh to show resilience."], answer:1 },
  { q: "18 — Sudden Technical Failure (Challenging): During demo screen goes blank; Omar freezes. Best reaction?", options:["Pause silently until tech team fixes it.","Continue speaking, narrate demo verbally, and use alternate engagement (questions) while tech is fixed.","End the presentation.","Leave the stage."], answer:1 },
  { q: "19 — Unclear Message (Nuanced): Heba uses complex jargon and long sentences. Best correction?", options:["Advanced vocabulary demonstrates expertise.","Simplify language and use examples to convey meaning more clearly.","Speed up to cover more terms.","Add more acronyms."], answer:1 },
  { q: "20 — Strong Hook Example (Critical): Mohamed opens with a personal story about miscommunication in a hospital. This is:", options:["An irrelevant anecdote.","An effective story hook that relates personally and sets the topic’s relevance.","The story is too long for an intro.","He should have started with a statistic."], answer:1 },

  // If any duplicate phrasing from the user existed, they're included above; that's the full set the user supplied.
];


// Render quiz
const container = document.getElementById('quizContainer');
const total = questions.length;
let answeredCount = 0;
let correctCount = 0;

document.getElementById('finalScore').textContent = `Answered: 0 / ${total}`;
updatePercentBadge();

questions.forEach((qObj, idx) => {
  const qDiv = document.createElement('section');
  qDiv.className = 'question';
  qDiv.id = 'q' + idx;

  const qTitle = document.createElement('h3');
  qTitle.innerHTML = `${idx+1}. ${escapeHtml(qObj.q)}`;
  qDiv.appendChild(qTitle);

  const optWrap = document.createElement('div');
  optWrap.className = 'options';

  qObj.options.forEach((optText, optIdx) => {
    const label = document.createElement('label');
    label.className = 'option';
    label.htmlFor = `q${idx}_opt${optIdx}`;

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = `q${idx}`;
    radio.id = `q${idx}_opt${optIdx}`;
    radio.value = optIdx;
    radio.dataset.qindex = idx;
    radio.dataset.optindex = optIdx;

    const span = document.createElement('span');
    span.innerText = optText;

    label.appendChild(radio);
    label.appendChild(span);
    optWrap.appendChild(label);
  });

  qDiv.appendChild(optWrap);

  const meta = document.createElement('div');
  meta.className = 'meta';
  const info = document.createElement('div');
  info.className = 'meta-info';
  info.innerHTML = `<small style="color:var(--muted)">Select an answer to lock and reveal correctness.</small>`;
  const placeholder = document.createElement('div');
  placeholder.className = 'meta-right';
  meta.appendChild(info);
  meta.appendChild(placeholder);
  qDiv.appendChild(meta);

  container.appendChild(qDiv);
});

// Event delegation for clicks on radio inputs
container.addEventListener('change', (e) => {
  const input = e.target;
  if (input && input.matches('input[type="radio"]')) {
    const qIndex = Number(input.dataset.qindex);
    const optIndex = Number(input.dataset.optindex);
    handleAnswer(qIndex, optIndex);
  }
});

function handleAnswer(qIndex, optIndex){
  // prevent double-answering
  const qSection = document.getElementById('q' + qIndex);
  if (!qSection) return;
  // if already locked, ignore
  if (qSection.dataset.locked === "true") return;

  const correct = questions[qIndex].answer === optIndex;
  const optionLabels = qSection.querySelectorAll('.option');
  optionLabels.forEach((label, i) => {
    // mark correct option
    if (i === questions[qIndex].answer) label.classList.add('correct');
    // mark chosen but incorrect
    if (i === optIndex && !correct) label.classList.add('incorrect');
    // disable inputs
    const inp = label.querySelector('input');
    if (inp) inp.disabled = true;
  });

  // provide small visual feedback
  if (correct) {
    correctCount++;
  }
  answeredCount++;

  // lock this question visually and logically
  qSection.dataset.locked = "true";

  // update progress and score
  updateProgress();
  updateScoreDisplay();
}

function updateProgress(){
  const percentAnswered = Math.round((answeredCount / total) * 100);
  document.getElementById('progressFill').style.width = percentAnswered + '%';
  document.getElementById('finalScore').textContent = `Answered: ${answeredCount} / ${total}`;
  updatePercentBadge();
}

function updateScoreDisplay(){
  const pct = Math.round((correctCount / total) * 100);
  document.getElementById('percentCorrect').textContent = pct + '% correct';
}

// Reveal all answers button
document.getElementById('revealBtn').addEventListener('click', () => {
  // mark all questions: show correct and disable options
  questions.forEach((q, idx) => {
    const qSection = document.getElementById('q' + idx);
    if (!qSection) return;
    if (qSection.dataset.locked === "true") return; // already answered
    const optionLabels = qSection.querySelectorAll('.option');
    optionLabels.forEach((label, i) => {
      if (i === q.answer) label.classList.add('correct');
      const inp = label.querySelector('input');
      if (inp) inp.disabled = true;
    });
    qSection.dataset.locked = "true";
  });
  // update stats
  answeredCount = total;
  // compute corrects as all correct answers (we haven't selected user's choices for unattempted)
  // We'll treat reveal as "show correct; score remains based on selections". But we can set correctCount to number already selected correct.
  updateProgress();
  updateScoreDisplay();
});

// Reset quiz
document.getElementById('resetBtn').addEventListener('click', () => {
  // reset counters
  answeredCount = 0;
  correctCount = 0;
  // remove DOM markers and re-enable inputs
  questions.forEach((q, idx) => {
    const qSection = document.getElementById('q' + idx);
    if (!qSection) return;
    qSection.dataset.locked = "false";
    const labels = qSection.querySelectorAll('.option');
    labels.forEach((label, i) => {
      label.classList.remove('correct','incorrect');
      const inp = label.querySelector('input');
      if (inp) { inp.disabled = false; inp.checked = false; }
    });
  });
  updateProgress();
  updateScoreDisplay();
  document.getElementById('progressFill').style.width = '0%';
});

// helpers
function updatePercentBadge(){
  const pct = total === 0 ? 0 : Math.round((correctCount / total) * 100);
  document.getElementById('percentCorrect').textContent = pct + '% correct';
}

function escapeHtml(unsafe) {
  return unsafe
       .replace(/&/g, "&amp;")
       .replace(/</g, "&lt;")
       .replace(/>/g, "&gt;")
       .replace(/"/g, "&quot;")
       .replace(/'/g, "&#039;");
}

// initialize progress (0)
updateProgress();
updateScoreDisplay();
