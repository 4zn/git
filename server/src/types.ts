export type Ability = {
  id: string;
  name: string;
  description: string;
  tags: string[];
};

export type Character = {
  id: string;
  codename: string;
  realName: string;
  faction: 'AegisCoalition' | 'ArcaneOrder' | 'TitanProgram' | 'RogueSyndicate' | 'Unaffiliated';
  origin: string;
  biography: string;
  role: 'Striker' | 'Guardian' | 'Controller' | 'Support' | 'Skirmisher';
  abilities: Ability[];
  attributes: {
    power: number;
    agility: number;
    resilience: number;
    intellect: number;
    mysticism: number;
  };
};

export type StoryChoice = {
  id: string;
  text: string;
  outcomeSummary: string;
  nextEpisodeId: string | null;
};

export type StoryEpisode = {
  id: string;
  title: string;
  synopsis: string;
  narrative: string;
  choices: StoryChoice[];
};

export type Player = {
  id: string;
  displayName: string;
  characterId: string | null;
};

export type RoomState = {
  code: string;
  players: Record<string, Player>;
  currentEpisodeId: string | null;
  choiceVotes: Record<string, string>; // playerId -> choiceId
};