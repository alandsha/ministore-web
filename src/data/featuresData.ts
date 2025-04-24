import { Feature } from '../types';

export const features: Feature[] = [
  {
    id: 'screenshot',
    title: 'Instant Screenshots',
    description: 'Capture any text on your screen with a simple hotkey, no matter what game you\'re playing.',
    icon: 'Camera'
  },
  {
    id: 'recognition',
    title: 'Advanced OCR',
    description: 'Our state-of-the-art text recognition works with any font or text style in your games.',
    icon: 'ScanText'
  },
  {
    id: 'voice',
    title: 'Natural Voice',
    description: 'High-quality voice synthesis reads text aloud in natural-sounding voices so you never miss important dialogue.',
    icon: 'MessageSquareText'
  },
  {
    id: 'customization',
    title: 'Full Customization',
    description: 'Configure hotkeys, voices, reading speed, and text selection preferences to match your gaming style.',
    icon: 'Settings'
  },
  {
    id: 'performance',
    title: 'Low Performance Impact',
    description: 'Designed to run efficiently in the background without affecting your game\'s performance.',
    icon: 'Zap'
  },
  {
    id: 'compatibility',
    title: 'Universal Compatibility',
    description: 'Works with virtually any PC game, from modern AAA titles to classic games and visual novels.',
    icon: 'Gamepad2'
  }
];