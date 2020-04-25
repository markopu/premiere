import { IMatch, ROUNDS } from "./InitData";


export interface ITableRow {
  position?: number;
  club: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  gf: number;
  ga: number;
  gd: number;
  points: number;
  form: Array<string>;
}

export interface IRoundResults {
  roundNumber: number;
  roundResult: ITableRow[];
  roundTable: ITableRow[];
}

export interface IClubResults {
  [club: string]: ITableRow;
}

export interface IRoundResults {
  [round: number]: IClubResults;
}


 const comparator = (a: ITableRow, b: ITableRow) => {
  let comparison = 0;
  if (a.club > b.club ) {
    comparison = 1;
  } else if (a.club < b.club) {
    comparison = -1;
  }
  return comparison;
};

 const comparatorPoints = (a: ITableRow, b: ITableRow) => {
  let comparison = 0;
  if (a.points > b.points ) {
    comparison = -1;
  } else if (a.points < b.points ) {
    comparison = 1;
  } else {

    if (a.gd > b.gd) return 1;
    else if (a.gd < b.gd) return -1

    else {
     if (a.gf > b.gf)  return 1;
     else if (a.gf < b.gf) return 1;
    }

  }
  return comparison;
};

export const createTablesPerRounds = () => {
  let tablesPerRound = [] as IRoundResults[];

  let helperTable = [] as ITableRow[];

  ROUNDS.forEach((round, roundIndex) => {
    const roundTable = [] as ITableRow[];

    round.matches.forEach((match: IMatch) => {
      Object.keys(match).forEach((club, matchIndex) => {
        const teamMatchResult: ITableRow = getClubResult(match, matchIndex);

        if (helperTable.length === 0) {
          roundTable.push(teamMatchResult);
        } else {
          const index = helperTable.findIndex((a) => a.club === club);
          if (index > -1) {
            /// sumiraj
            roundTable.push({
              club: club,
              played: helperTable[index].played + teamMatchResult.played,
              won: helperTable[index].won + teamMatchResult.won,
              drawn: helperTable[index].drawn + teamMatchResult.drawn,
              lost: helperTable[index].lost + teamMatchResult.lost,
              gf: helperTable[index].gf + teamMatchResult.gf,
              ga: helperTable[index].ga + teamMatchResult.ga,
              gd: helperTable[index].gd + teamMatchResult.gd,
              points: helperTable[index].points + teamMatchResult.points,
              form: [...helperTable[index].form, ...teamMatchResult.form].slice(-5),
            } as ITableRow);
          }
        }
      });
    });

    helperTable = [...roundTable];

    tablesPerRound.push({
      roundNumber: round.round,
      roundResult: [...roundTable].sort(comparator),
      roundTable: roundTable.sort(comparatorPoints).map((club, idx) => ({ ...club, position: idx + 1 })),
    });
  });
  return tablesPerRound;
};

export const getClubResult = (match: IMatch, br: number): ITableRow => {
  const club0 = Object.keys(match)[!!br ? 1 : 0];
  const club1 = Object.keys(match)[!!br ? 0 : 1];

  let obj = {} as ITableRow;
  obj.club = club0;
  obj.played = 1;
  obj.won = match[club0] > match[club1] ? 1 : 0;
  obj.drawn = match[club0] === match[club1] ? 1 : 0;
  obj.lost = match[club0] < match[club1] ? 1 : 0;
  obj.gf = match[club0];
  obj.ga = match[club1];
  obj.gd = match[club0] - match[club1];
  obj.points = !!obj.won ? 3 : !!obj.drawn ? 1 : 0;
  obj.form = [Boolean(obj.won) ? 'W' : Boolean(obj.drawn) ? 'D' : 'L'];
  return obj;
};
