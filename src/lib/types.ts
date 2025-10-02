export interface Driver {
  driverId: string;
  number: number;
  shortName: string;
  name: string;
  surname: string;
  url: string;
  nationality: string;
  teamId: string;
  birthday: string;
}

export interface Team {
  teamId: string;
  teamName: string;
}

export interface RaceSchedule {
  date: string;
  time: string;
}

export interface RaceResultItem {
  position: number;
  points: number;
  driver: Driver;
  team: Team;
}

export interface ChampionshipStandingItem {
  position: number;
  points: number;
  driver: Driver;
  team: Team;
}

export interface NextRaceApiResponse {
  race?: {
    raceName?: string;
    schedule: {
      race: RaceSchedule;
    };
  }[];
}

export interface RaceResultApiResponse {
  season: number;
  races?: {
    round: number;
    raceName?: string;
    date: string;
    results: RaceResultItem[];
  };
}

export interface DriversChampionshipApiResponse {
  season: number;
  drivers_championship: ChampionshipStandingItem[];
}

export interface ConstructorsChampionshipApiResponse {
  season: number;
  constructors_championship: {
    position: number;
    points: number;
    team: Team;
  }[];
}

export interface CurrentDriversInfoApiResponse {
  season: number;
  drivers: Driver[];
}
