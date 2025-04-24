import { Faq } from '../types';

export const faqs: Faq[] = [
  {
    id: 'how-works',
    question: 'How does SnapVoice work?',
    answer: 'SnapVoice runs in the background while you play. When you press your configured hotkey, it takes a screenshot, uses OCR to recognize text on the screen, and then reads that text aloud using text-to-speech technology.'
  },
  {
    id: 'game-compatibility',
    question: 'Which games are compatible with SnapVoice?',
    answer: 'SnapVoice works with virtually any PC game that displays text on screen. This includes RPGs, visual novels, strategy games, and more. If you can see text in the game, SnapVoice can read it.'
  },
  {
    id: 'performance',
    question: 'Will SnapVoice affect my game performance?',
    answer: 'SnapVoice is designed to have minimal impact on your gaming experience. It uses efficient algorithms and runs only when activated, so your FPS and gameplay should not be affected.'
  },
  {
    id: 'subscription',
    question: 'What happens if I cancel my subscription?',
    answer: 'If you cancel your subscription, you can continue using SnapVoice until the end of your billing period. After that, the app will revert to the free version with limited functionality.'
  },
  {
    id: 'languages',
    question: 'What languages does SnapVoice support?',
    answer: 'The base version supports English, with the Pro and Ultimate tiers supporting additional languages including Spanish, French, German, Japanese, and Chinese. We regularly add new language support.'
  },
  {
    id: 'refund',
    question: 'What is your refund policy?',
    answer: 'We offer a 7-day money-back guarantee if you\'re not satisfied with SnapVoice. Simply contact our support team within 7 days of your purchase for a full refund.'
  }
];