// --- Layout
export type LayoutProps = {
  children: React.ReactNode;
  classes?: string;
};

// --- Header
export type HeaderProps = {
  children: React.ReactNode;
};

// --- Race data
export type RaceData = {
  race?: [
    {
      raceName?: string;

      schedule: {
        race: {
          date: string;
          time: string;
        };
      };
    },
  ];
};

// --- Race result data
export type RaceResultData = {
  season: number;
  races?: {
    round: number;
    raceName?: string;
    date: string;
    results: [
      {
        position: number;
        points: number;
        driver: {
          driverId: string;
          number: number;
          shortName: string;
          name: string;
          surname: string;
        };
        team: {
          teamId: string;
          teamName: string;
        };
      },
    ];
  };
};

//--- Drivers table data
export type DriversTableData = {
  season: number;
  drivers_championship: [
    {
      position: number;
      points: number;
      driver: {
        driverId: string;
        number: number;
        shortName: string;
        name: string;
        surname: string;
      };
      team: {
        teamId: string;
        teamName: string;
      };
    },
  ];
};
