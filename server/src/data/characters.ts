import { Character } from '../types.js';

export const characters: Character[] = [
  {
    id: 'char-aegis-01',
    codename: 'Aegis Knight',
    realName: 'Selene Ward',
    faction: 'AegisCoalition',
    origin: 'A former urban defender who engineered a photonic barrier harnessed from the Umbral Flux.',
    biography: 'Selene built the first adaptive light-shield rigs to keep Helios City safe during the Blackout Riots. The Eclipse awakened a resonance in her tech—and in her.',
    role: 'Guardian',
    abilities: [
      { id: 'ab-aegis-01', name: 'Photonic Bulwark', description: 'Deploy a mobile light barrier that absorbs damage.', tags: ['defense', 'team'] },
      { id: 'ab-aegis-02', name: 'Radiant Bash', description: 'Overcharge the shield and slam, staggering foes.', tags: ['control', 'melee'] }
    ],
    attributes: { power: 6, agility: 5, resilience: 9, intellect: 8, mysticism: 2 }
  },
  {
    id: 'char-arc-01',
    codename: 'Stormweaver',
    realName: 'Imani Kade',
    faction: 'ArcaneOrder',
    origin: 'Elemental adept who threads weather sigils into living storms.',
    biography: 'Initiated into the Arcane Order at thirteen, Imani learned to braid sigils into the wind. The Eclipse taught the winds to answer back.',
    role: 'Controller',
    abilities: [
      { id: 'ab-storm-01', name: 'Tempest Sigil', description: 'Conjure a binding squall that slows and lifts.', tags: ['control', 'area'] },
      { id: 'ab-storm-02', name: 'Chain Lightning', description: 'Arc lightning between targets.', tags: ['offense', 'ranged'] }
    ],
    attributes: { power: 8, agility: 6, resilience: 5, intellect: 7, mysticism: 9 }
  },
  {
    id: 'char-titan-01',
    codename: 'Pulse Titan',
    realName: 'Diego Alvarez',
    faction: 'TitanProgram',
    origin: 'Bioengineered responder bonded to a living reactor core.',
    biography: 'A first responder who volunteered for the Titan Program. The core bonded beyond design, amplifying his heartbeats into shockwaves.',
    role: 'Striker',
    abilities: [
      { id: 'ab-pulse-01', name: 'Seismic Pulse', description: 'Emit a conical shockwave that cracks armor.', tags: ['offense', 'crowd'] },
      { id: 'ab-pulse-02', name: 'Overclock', description: 'Briefly supercharge speed and power.', tags: ['buff', 'self'] }
    ],
    attributes: { power: 9, agility: 7, resilience: 7, intellect: 5, mysticism: 3 }
  },
  {
    id: 'char-rogue-01',
    codename: 'Night Cipher',
    realName: 'Mika Tan',
    faction: 'Unaffiliated',
    origin: 'Ex-black hat who decrypts reality through umbral patterns.',
    biography: 'Mika can read the world as code since the Eclipse. Locks are syntax. Walls are rules. She edits both.',
    role: 'Skirmisher',
    abilities: [
      { id: 'ab-cipher-01', name: 'Shadow Step', description: 'Blink between low-light anchors.', tags: ['mobility', 'stealth'] },
      { id: 'ab-cipher-02', name: 'Umbral Rewrite', description: 'Disrupt enemy abilities, forcing a cooldown reset.', tags: ['control', 'debuff'] }
    ],
    attributes: { power: 6, agility: 9, resilience: 4, intellect: 9, mysticism: 6 }
  },
  {
    id: 'char-aegis-02',
    codename: 'Quantum Sentinel',
    realName: 'Arjun Rao',
    faction: 'AegisCoalition',
    origin: 'Ex-defense contractor piloting a semi-autonomous hardlight exosuit.',
    biography: 'Arjun dismantled weapons for a living. After the Eclipse, he built one capable of protecting everyone else from the ones he could not destroy.',
    role: 'Support',
    abilities: [
      { id: 'ab-qs-01', name: 'Hardlight Forge', description: 'Project cover or platforms teammates can use.', tags: ['utility', 'team'] },
      { id: 'ab-qs-02', name: 'Spectral Drone', description: 'Deploy a drone that heals and scans.', tags: ['support', 'recon'] }
    ],
    attributes: { power: 5, agility: 5, resilience: 6, intellect: 9, mysticism: 2 }
  },
  {
    id: 'char-arc-02',
    codename: 'Lumen Warden',
    realName: 'Priya Das',
    faction: 'ArcaneOrder',
    origin: 'Scholar of light-weaving rites.',
    biography: 'Priya guards the Veiled Library beneath Helios. The Eclipse opened shelves long sealed to the brave and the foolish.',
    role: 'Guardian',
    abilities: [
      { id: 'ab-lumen-01', name: 'Aegis of Dawn', description: 'Ward that reduces incoming damage and banishes shadows.', tags: ['defense', 'aura'] },
      { id: 'ab-lumen-02', name: 'Sunlance', description: 'Focused beam of solar rite fire.', tags: ['offense', 'ranged'] }
    ],
    attributes: { power: 7, agility: 4, resilience: 8, intellect: 8, mysticism: 8 }
  },
  {
    id: 'char-titan-02',
    codename: 'Bioforge',
    realName: 'Ivana Petrovic',
    faction: 'TitanProgram',
    origin: 'Adaptive morphogenesis grants rapid reconfiguration.',
    biography: 'Ivana can rethread her own tissues into tools and armor. A miracle to some, a weapon to others.',
    role: 'Controller',
    abilities: [
      { id: 'ab-bio-01', name: 'Living Rampart', description: 'Grow temporary cover and pin targets.', tags: ['control', 'terrain'] },
      { id: 'ab-bio-02', name: 'Regrowth', description: 'Regenerate health rapidly for a short time.', tags: ['heal', 'self'] }
    ],
    attributes: { power: 7, agility: 6, resilience: 8, intellect: 6, mysticism: 3 }
  },
  {
    id: 'char-rogue-02',
    codename: 'Glass Viper',
    realName: 'Marisol Quinn',
    faction: 'RogueSyndicate',
    origin: 'Black market enhancer dealer turned antihero.',
    biography: 'Marisol perfected crystalline toxin amplifiers. The Eclipse turned her formulas into sentient lattices.',
    role: 'Striker',
    abilities: [
      { id: 'ab-viper-01', name: 'Crystal Shards', description: 'Launch homing shards that splinter on impact.', tags: ['offense', 'ranged'] },
      { id: 'ab-viper-02', name: 'Toxic Bloom', description: 'Area denial with stacking debuffs.', tags: ['area', 'debuff'] }
    ],
    attributes: { power: 8, agility: 7, resilience: 5, intellect: 7, mysticism: 4 }
  }
];