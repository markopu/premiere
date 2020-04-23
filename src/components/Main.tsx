import * as React from 'react';
import { useEffect, useState } from 'react';
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
    roundTable?: any;
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

    useEffect(() => {
        //@ts-ignore
        window.$rounds = ROUNDS;
        //createRoundResults()
        let arr = createArr();
        console.log(arr, '<--- arr');
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

    const createArr = () => {
        let arr = [] as IRoundResults[];

        let pArr = [] as ITableRow[];

        ROUNDS.forEach((round, roundIndex) => {
            const pomArr = [] as ITableRow[];

            round.matches.forEach((match: IMatch) => {
                Object.keys(match).forEach((club, matchIndex) => {
                    const clubResult1Round: ITableRow = getClubResult(match, matchIndex);

                    // pomArr.push(clubResult1Round);
                    if (pArr.length === 0) {
                        pomArr.push(clubResult1Round);
                    } else {
                        const index = pArr.findIndex((a) => a.club === club);
                        //console.log(index)
                        if (index > -1) {
                            /// sumiraj
                            pomArr.push({
                                club: club,
                                played: pArr[index].played + clubResult1Round.played,
                                won: pArr[index].won + clubResult1Round.won,
                                drawn: pArr[index].drawn + clubResult1Round.drawn,
                                lost: pArr[index].lost + clubResult1Round.lost,
                                gf: pArr[index].gf + clubResult1Round.gf,
                                ga: pArr[index].ga + clubResult1Round.ga,
                                gd: pArr[index].gd + clubResult1Round.gd,
                                points: pArr[index].points + clubResult1Round.points,
                                form: [...pArr[index].form, ...clubResult1Round.form].slice(-5),
                            } as ITableRow);
                        }
                    }
                });
            });

          //  console.log(pomArr);
            pArr = [...pomArr];

            arr.push({
                roundNumber: round.round,
                roundResult: [...pomArr].sort(comparator),
                roundTable: pomArr.sort(comparatorPoints).map((club, idx) => ({ ...club, position: idx + 1 })),
            });
        });
        return arr;
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

            <select
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    console.log('change', e.target, e.target.value);
                    setRoundNumber(parseInt(e.target.value));
                }}
            >
                {ROUNDS.map((round) => (
                    <option value={round.round}>{round.round}</option>
                ))}
            </select>

            <hr />
            {ROUNDS.filter((round) => round.round === roundNumber).map((round) => {
                console.log(round, '<--- runde');
                return (
                    <div>
                        {round.matches.map((match) => (
                            <div>
                                {Object.keys(match).map((club) => (
                                    <div>
                                        {club}: {match[club]}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                );
            })}
        </>
    );
};
