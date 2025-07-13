
import { Chapter } from '../../types';

export const grade11ChemistryChapters: Chapter[] = [
  {
    id: 'chem-11-1',
    name: 'Atomic Structure',
    description: 'Advanced study of atomic structure and electron configuration',
    questions: [
      {
        id: 'chem-11-1-1',
        question: 'How many electrons can the third electron shell hold?',
        options: ['8', '18', '32', '2'],
        correct: '18',
        explanation: 'The third shell (n=3) can hold a maximum of 2n² = 2(3²) = 18 electrons.',
        difficulty: 'easy'
      },
      {
        id: 'chem-11-1-2',
        question: 'What is the electron configuration of chlorine (Z=17)?',
        options: ['1s² 2s² 2p⁶ 3s² 3p⁵', '1s² 2s² 2p⁶ 3s² 3p⁶', '1s² 2s² 2p⁶ 3s¹', '1s² 2s² 2p⁶ 3s² 3p⁴'],
        correct: '1s² 2s² 2p⁶ 3s² 3p⁵',
        explanation: 'Chlorine has 17 electrons: 2 + 2 + 6 + 2 + 5 = 17.',
        difficulty: 'medium'
      },
      {
        id: 'chem-11-1-3',
        question: 'Which principle states that electrons occupy orbitals singly before pairing?',
        options: ['Pauli exclusion principle', 'Aufbau principle', 'Hund\'s rule', 'Heisenberg principle'],
        correct: 'Hund\'s rule',
        explanation: 'Hund\'s rule states that electrons occupy orbitals of equal energy singly before pairing.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'chem-11-2',
    name: 'Chemical Bonding',
    description: 'Understanding how atoms bond to form compounds',
    questions: [
      {
        id: 'chem-11-2-1',
        question: 'What type of bond forms between sodium and chlorine?',
        options: ['Covalent bond', 'Ionic bond', 'Metallic bond', 'Hydrogen bond'],
        correct: 'Ionic bond',
        explanation: 'Sodium (metal) and chlorine (non-metal) form an ionic bond through electron transfer.',
        difficulty: 'easy'
      },
      {
        id: 'chem-11-2-2',
        question: 'How many covalent bonds does carbon typically form?',
        options: ['2', '3', '4', '1'],
        correct: '4',
        explanation: 'Carbon has 4 valence electrons and typically forms 4 covalent bonds to complete its octet.',
        difficulty: 'medium'
      },
      {
        id: 'chem-11-2-3',
        question: 'What is the molecular geometry of methane (CH₄)?',
        options: ['Linear', 'Trigonal planar', 'Tetrahedral', 'Bent'],
        correct: 'Tetrahedral',
        explanation: 'CH₄ has 4 bonding pairs around carbon, giving it a tetrahedral geometry.',
        difficulty: 'hard'
      }
    ]
  }
];
