import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { IMatch, ROUNDS } from '../data/InitData';

interface IMainProps {}

interface ITableRow {
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
    position?: number;
}

interface IRoundResults {
    roundNumber: number;
    roundResult: ITableRow[];
    roundTable: ITableRow[];
}

interface IClubResults2 {
    [club: string]: ITableRow;
}

interface IClubResults {
    [club: string]: ITableRow;
}

interface IRoundResults {
    [round: number]: IClubResults;
}

const initTableRow = {
    played: 0,
    club: '',
    ga: 0,
    gf: 0,
    lost: 0,
    drawn: 0,
    form: [],
    gd: 0,
    points: 0,
    won: 0,
} as ITableRow;

export const Main: React.FunctionComponent<IMainProps> = (props) => {
    const [roundNumber, setRoundNumber] = useState<number>();

    const TABLES = useRef<IRoundResults[]>([]);

    useEffect(() => {
        //@ts-ignore
        window.$rounds = ROUNDS;

        TABLES.current = createTablesPerRounds();
        setRoundNumber(ROUNDS.length - 1)

        console.log(TABLES, '<--- arr');
    }, []);

    const isWiner = (match: IMatch, nr: number): number => {
        const result = 0;
        if (Object.keys(match)[0] > Object.keys(match)[1]) {
            return 1;
        }

        return result;
    };

    const comparator = (a: ITableRow, b: ITableRow) => {
        let comparison = 0;
        if (a.club > b.club) {
            comparison = 1;
        } else if (a.club < b.club) {
            comparison = -1;
        }
        return comparison;
    };

    const comparatorPoints = (a: ITableRow, b: ITableRow) => {
        let comparison = 0;
        if (a.points > b.points) {
            comparison = -1;
        } else if (a.points < b.points) {
            comparison = 1;
        }
        return comparison;
    };

    const createTablesPerRounds = () => {
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

    const getClubResult = (match: IMatch, br: number): ITableRow => {
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

    return (
        <>
            <div>Top bar</div>

            <div id={'container'}>
                <select
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                        console.log('change', e.target, e.target.value);
                        setRoundNumber(parseInt(e.target.value));
                    }}
                >
                    <option value={ROUNDS[ROUNDS.length -1].round}>All matchweeks</option>
                    {ROUNDS.map((round) => (
                        <option value={round.round}>{round.round}</option>
                    ))}
                </select>

                <hr />

                {TABLES.current.filter(round => round.roundNumber === roundNumber)
                .map((round) =>
                    round.roundTable.map((club) => (
                        <tr>
                            <td>{club.position}</td>
                            <td>{club.club}</td>
                            <td>{club.played}</td>
                            <td>{club.won}</td>
                            <td>{club.lost}</td>
                            <td>{club.gf}</td>
                            <td>{club.ga}</td>
                            <td>{club.gd}</td>
                            <td>{club.points}</td>
                            <td>{club.form.map(f => f + ", ")}</td>

                        </tr>
                    ))
                )}

                {/*{ROUNDS.filter((round) => round.round === roundNumber).map((round) => {*/}
                {/*    console.log(round, '<--- runde');*/}
                {/*    return (*/}
                {/*      <>*/}

                {/*          {round.matches.map((match) => (*/}
                {/*            <div>*/}
                {/*                {Object.keys(match).map((club) => (*/}
                {/*                  <div>*/}
                {/*                      {club}: {match[club]}*/}
                {/*                  </div>*/}
                {/*                ))}*/}
                {/*            </div>*/}
                {/*          ))}*/}
                {/*      </>*/}
                {/*    );*/}
                {/*})}*/}
            </div>
        </>
    );
};
