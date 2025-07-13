
import { Chapter } from '../../types';

export const grade11GeographyChapters: Chapter[] = [
  {
    id: 'geo-11-1',
    name: 'Physical Geography',
    description: 'Study of Earth\'s physical features and processes',
    questions: [
      {
        id: 'geo-11-1-1',
        question: 'Which layer of the atmosphere contains most weather phenomena?',
        options: ['Stratosphere', 'Troposphere', 'Mesosphere', 'Thermosphere'],
        correct: 'Troposphere',
        explanation: 'The troposphere is the lowest layer where most weather occurs.',
        difficulty: 'easy'
      },
      {
        id: 'geo-11-1-2',
        question: 'What type of rock forms when magma cools and solidifies?',
        options: ['Sedimentary', 'Metamorphic', 'Igneous', 'Crystalline'],
        correct: 'Igneous',
        explanation: 'Igneous rocks form from the cooling and solidification of magma or lava.',
        difficulty: 'medium'
      },
      {
        id: 'geo-11-1-3',
        question: 'Which process is responsible for the formation of the Himalayas?',
        options: ['Volcanic activity', 'Plate collision', 'Erosion', 'Sedimentation'],
        correct: 'Plate collision',
        explanation: 'The Himalayas formed due to the collision between the Indian and Eurasian plates.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'geo-11-2',
    name: 'Climate and Weather',
    description: 'Understanding weather patterns and climate systems',
    questions: [
      {
        id: 'geo-11-2-1',
        question: 'What is the difference between weather and climate?',
        options: ['No difference', 'Weather is short-term, climate is long-term', 'Climate is short-term, weather is long-term', 'Weather is global, climate is local'],
        correct: 'Weather is short-term, climate is long-term',
        explanation: 'Weather refers to short-term atmospheric conditions, while climate is long-term patterns.',
        difficulty: 'easy'
      },
      {
        id: 'geo-11-2-2',
        question: 'Which factor most influences Ethiopia\'s climate?',
        options: ['Ocean currents', 'Altitude', 'Latitude', 'Wind patterns'],
        correct: 'Altitude',
        explanation: 'Ethiopia\'s varied altitude creates different climate zones from tropical to temperate.',
        difficulty: 'medium'
      },
      {
        id: 'geo-11-2-3',
        question: 'What causes the monsoon rains in Ethiopia?',
        options: ['Trade winds', 'Westerlies', 'Intertropical Convergence Zone (ITCZ)', 'Ocean currents'],
        correct: 'Intertropical Convergence Zone (ITCZ)',
        explanation: 'The seasonal movement of the ITCZ brings monsoon rains to Ethiopia.',
        difficulty: 'hard'
      }
    ]
  }
];
