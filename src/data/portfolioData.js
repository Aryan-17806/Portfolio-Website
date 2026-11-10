import {
  BookOpen,
  Code2,
  CodeXml,
  Command,
  Github,
  Layers3,
  Linkedin,
  Sparkles,
  Terminal,
  Zap,
} from 'lucide-react'

export const links = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Skills', 'skills'],
  ['Experience', 'experience'],
  ['Projects', 'projects'],
  ['Achievements', 'achievements'],
  ['Contact', 'contact'],
]

export const skillGroups = [
  { title: 'Programming Languages', icon: Code2, items: ['Java', 'Python', 'C', 'SQL'] },
  { title: 'Frontend Development', icon: Layers3, items: ['React.js', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Tailwind CSS'] },
  { title: 'Backend Development', icon: Terminal, items: ['Node.js', 'Express.js', 'REST APIs'] },
  { title: 'Databases', icon: BookOpen, items: ['MongoDB', 'MySQL'] },
  { title: 'Cloud & CRM', icon: Sparkles, items: ['Salesforce CRM', 'Salesforce Administration'] },
  { title: 'Developer Tools', icon: Command, items: ['Git', 'Docker', 'VS Code'] },
  { title: 'Core Computer Science', icon: Zap, items: ['Data Structures & Algorithms', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks'] },
]

export const projects = [
  {
    number: '01',
    name: 'AlgoFlow',
    type: 'AI-ENABLED DSA VISUALIZATION PLATFORM',
    description: 'An interactive MERN-stack learning environment that turns algorithm execution into a clear, step-by-step visual experience.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'OpenAI API', 'D3.js'],
    features: ['11+ algorithms with interactive execution', 'Simulation engine tracks comparisons, swaps & recursion', 'GPT-4-assisted algorithm analysis', 'Playback controls and complexity insights'],
    live: 'https://algo-flow-amber.vercel.app/',
    github: 'https://github.com/Aryan-17806/AlgoFlow',
    visual: 'algo',
  },
  {
    number: '02',
    name: 'Online Book Store',
    type: 'FULL-STACK E-COMMERCE APPLICATION',
    description: 'A full-stack MERN application for discovering, browsing, and purchasing books, with dedicated inventory and order management.',
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT'],
    features: ['User registration and authentication', 'Category browsing, search & product details', 'Cart and checkout experience', 'Admin tools for books, inventory & orders'],
    github: 'https://github.com/Aryan-17806/ONLINE-BOOK-STORE',
    visual: 'store',
  },
]

export const profiles = [
  { name: 'LeetCode', detail: '700+ problems solved', metric: '1675', label: 'CONTEST RATING', url: 'https://leetcode.com/u/Aryan_1786/', icon: CodeXml },
  { name: 'GitHub', detail: 'Projects, experiments & code', metric: 'Aryan-17806', label: 'USERNAME', url: 'https://github.com/Aryan-17806', icon: Github },
  { name: 'LinkedIn', detail: 'Connect professionally', metric: 'Let’s connect', label: 'PROFILE', url: 'https://www.linkedin.com/in/aryan-singh-1a1143325/', icon: Linkedin },
]
