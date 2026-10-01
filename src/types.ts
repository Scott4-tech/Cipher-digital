export interface DataCenter {
  id: string;
  name: string;
  location: string;
  powerCapacity: number; // in MW
  hashrate: number; // in EH/s or PH/s
  description: string;
  status: 'Operational' | 'Under Development' | 'Expansion';
  coolingType: string;
  energySource: string;
}

export interface StatItem {
  label: string;
  value: string;
  suffix?: string;
  description: string;
}

export interface Executive {
  name: string;
  title: string;
  bio: string;
  image?: string;
}

export interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}

export interface PressRelease {
  id: string;
  date: string;
  title: string;
  category: 'PR' | 'SEC Filing' | 'Operational Update';
  snippet: string;
  link: string;
}
