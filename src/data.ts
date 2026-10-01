import { DataCenter, StatItem, Executive, JobPosition, PressRelease } from './types';

export const DATA_CENTERS: DataCenter[] = [
  {
    id: 'odessa',
    name: 'Odessa Facility',
    location: 'Ector County, Texas',
    powerCapacity: 207,
    hashrate: 6.2,
    description: 'Cipher’s flagship facility and one of the largest single-site Bitcoin mining data centers in the world. Features highly custom-engineered dry-cooler and liquid immersion cooling loops designed for ultimate efficiency in high ambient temperatures.',
    status: 'Operational',
    coolingType: 'Liquid Immersion & Dry-Coolers',
    energySource: 'ERCOT Grid (Sourced with massive local wind & solar assets)'
  },
  {
    id: 'bear',
    name: 'Bear Facility',
    location: 'Andrews County, Texas',
    powerCapacity: 20,
    hashrate: 0.6,
    description: 'Co-located directly with a local utility sub-station. Sourced under a long-term, low-cost power purchase agreement utilizing local Texas wind generation.',
    status: 'Operational',
    coolingType: 'Air Cooled (Smart Shrouding)',
    energySource: '100% Wind Power (Co-located)'
  },
  {
    id: 'chief',
    name: 'Chief Facility',
    location: 'Andrews County, Texas',
    powerCapacity: 10,
    hashrate: 0.3,
    description: 'A sister facility to Bear, utilizing optimized containerized modular mining enclosures. Enables rapid hardware deployment and dynamic thermodynamic management.',
    status: 'Operational',
    coolingType: 'Air Cooled',
    energySource: '100% Wind Power (Co-located)'
  },
  {
    id: 'sandhills',
    name: 'Sandhills Facility',
    location: 'Ward County, Texas',
    powerCapacity: 20,
    hashrate: 0.6,
    description: 'Strategically located in West Texas to utilize local excess energy generation. Employs advanced smart automation systems for maximum uptime.',
    status: 'Operational',
    coolingType: 'Air Cooled',
    energySource: 'ERCOT Mix'
  },
  {
    id: 'winkler',
    name: 'Winkler Facility',
    location: 'Winkler County, Texas',
    powerCapacity: 20,
    hashrate: 0.6,
    description: 'A robust, high-availability facility featuring robust container deployment. Fully operational and integrated with ERCOT grid response capabilities.',
    status: 'Operational',
    coolingType: 'Air Cooled',
    energySource: 'ERCOT Mix'
  },
  {
    id: 'alun-expansion',
    name: 'Alun Expansion Site',
    location: 'Texas Panhandle',
    powerCapacity: 40,
    hashrate: 1.2,
    description: 'Under active construction. Will implement next-generation ultra-density modular hosting containers and highly optimized power distribution mechanisms.',
    status: 'Expansion',
    coolingType: 'Liquid Immersion (Next-Gen)',
    energySource: 'Wind & Solar Grid Contracts'
  }
];

export const CORE_STATS: StatItem[] = [
  {
    label: 'Total Power Portfolio',
    value: '277+',
    suffix: ' MW',
    description: 'Active utility scale capacity under long-term, low-cost contracts.'
  },
  {
    label: 'Current Hashrate',
    value: '8.4',
    suffix: ' EH/s',
    description: 'Active processing capacity secured by state-of-the-art ASIC rigs.'
  },
  {
    label: 'Target Power Portfolio',
    value: '1.2+',
    suffix: ' GW',
    description: 'Pipeline of future power expansions under development across North America.'
  },
  {
    label: 'Power Efficiency',
    value: '22',
    suffix: ' J/TH',
    description: 'Average mining hardware fleet efficiency, placing Cipher in the top tier of operators.'
  }
];

export const LEADERSHIP_TEAM: Executive[] = [
  {
    name: 'Tyler Page',
    title: 'Chief Executive Officer & Director',
    bio: 'Tyler has more than 20 years of experience in institutional finance, investment banking, fintech, and digital assets. Prior to Cipher, Tyler served as Head of Business Development for Bitfury and has held executive roles at senior global investment firms, where he led institutional client coverage and digital infrastructure deployment.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&h=256&fit=crop'
  },
  {
    name: 'Patrick Fleury',
    title: 'Chief Financial Officer',
    bio: 'Patrick brings over 15 years of investment banking, capital markets, and private equity experience focusing on the power generation, energy infrastructure, and digital processing spaces. He oversees the strategic deployment of capital, treasury operations, and investor communications for Cipher.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=256&h=256&fit=crop'
  },
  {
    name: 'Edward Farrell',
    title: 'Chief Operating Officer & Director',
    bio: 'Edward has decades of engineering and management experience in large-scale utility power plants, high-voltage substations, and critical heavy industrial operations. He directs all data center construction, high-voltage grid integrations, and day-to-day mining operations.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256&h=256&fit=crop'
  },
  {
    name: 'William Herkelrath',
    title: 'Chief Information Officer',
    bio: 'William has over 20 years of experience designing and scaling ultra-high density IT infrastructure, corporate networks, and specialized cloud storage pipelines. At Cipher, he manages ASIC fleet acquisition, performance optimization firmware, and corporate cyber security systems.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=256&h=256&fit=crop'
  }
];

export const JOB_OPENINGS: JobPosition[] = [
  {
    id: 'dc-tech-odessa',
    title: 'Data Center Operations Technician',
    department: 'Operations',
    location: 'Odessa, TX',
    type: 'Full-time',
    description: 'We are seeking a highly motivated technician to monitor, maintain, and repair our state-of-the-art Bitcoin mining fleet and immersion cooling infrastructure at the Odessa facility.',
    requirements: [
      'Experience diagnosing computer/server hardware failures and replacing components.',
      'Basic understanding of network switching, cabling, and power distribution.',
      'Ability to operate in high ambient temperatures and lift up to 50 lbs.',
      'Familiarity with liquid immersion cooling loops is a strong plus.'
    ]
  },
  {
    id: 'hve-engineer',
    title: 'Senior High Voltage Electrical Engineer',
    department: 'Engineering',
    location: 'Andrews, TX (or Dallas, TX)',
    type: 'Full-time',
    description: 'Oversee the design, installation, commissioning, and optimization of 138kV / 34.5kV utility-scale substations, transformers, and heavy power distribution equipment across all sites.',
    requirements: [
      'B.S. in Electrical Engineering with a focus on power systems (M.S. or PE License preferred).',
      '8+ years of experience with utility-scale substation engineering and grid integration.',
      'Proficiency in power system modeling software (ETAP, SKM, or EasyPower).',
      'Experience interfacing with major power grids, specifically ERCOT.'
    ]
  },
  {
    id: 'asic-repair',
    title: 'ASIC Repair Specialist',
    department: 'Maintenance & Repairs',
    location: 'Andrews, TX',
    type: 'Full-time',
    description: 'Responsible for component-level diagnosis, board soldering, hash board cleaning, and re-flashing of advanced Whatsminer and Antminer ASIC hardware boards.',
    requirements: [
      'Demonstrated high-precision SMD soldering and PCB repair capability.',
      'Experience using oscilloscopes, multimeters, and test fixtures to isolate ASIC chip issues.',
      'Strong analytical and logical debugging skills.',
      'Technical degree or equivalent certifications in electronics.'
    ]
  }
];

export const RECENT_UPDATES: PressRelease[] = [
  {
    id: 'pr-1',
    date: 'Jun 12, 2026',
    title: 'Cipher Mining Reports First Quarter 2026 Financial Results and Highlights Strategic Pipeline Growth',
    category: 'PR',
    snippet: 'Cipher Mining today announced its financial results for the first quarter of 2026, showcasing high fleet efficiency, robust power purchase agreements, and progress on its 40MW Alun expansion.',
    link: '#'
  },
  {
    id: 'pr-2',
    date: 'May 05, 2026',
    title: 'Cipher Mining Secures Additional 300 MW of Near-Term Power Pipeline in West Texas',
    category: 'Operational Update',
    snippet: 'Securing grid interconnection capacity represents a key step forward in our mission to reach over 1.2 Gigawatts of capacity by 2028.',
    link: '#'
  },
  {
    id: 'pr-3',
    date: 'Apr 18, 2026',
    title: 'SEC Form 10-Q Quarterly Report for Period Ending March 31, 2026',
    category: 'SEC Filing',
    snippet: 'Quarterly financial disclosure report submitted to the Securities and Exchange Commission detailing cash flows, mining inventory, and capital allocation.',
    link: '#'
  }
];
