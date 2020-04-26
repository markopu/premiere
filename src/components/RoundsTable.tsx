import * as React from 'react';
import { IRoundResults, ITableRow } from '../data/prepareData';
import styled from 'styled-components';

interface IRoundsTableProps {
    roundNumber: number;
    tables: IRoundResults[];
}

const initTableRow = {
    position: 0,
    club: '',
    played: 0,
    won: 0,
    drawn: 0,
    lost: 0,
    gf: 0,
    ga: 0,
    gd: 0,
    points: 0,
    form: [],
} as ITableRow;

type ThProps = {};
const Th = styled.th<ThProps>`
    text-transform: capitalize;
    font-weight: normal;
    font-size: 0.8rem;
    line-height: 2.4rem;
`;

const TrHead = styled.tr`
    background-color: ghostwhite;
`;

const Table = styled.table`
    border-collapse: collapse;
    width: 100%;
    margin-top: 1rem;
`;

type IFormItemProps = {
    backgroundColor: string;
};

const FormItem = styled.div<IFormItemProps>`
    height: 24px;
    width: 24px;
    background-color: ${(props) => props.backgroundColor};
    border-radius: 50%;
    display: inline-block;
    margin: 0 2px;
    color: whitesmoke;
    text-align: center;
    font-size: 12px;
    font-weight: bold;
    line-height: 24px;
`;

const Td = styled.td`
    text-align: center;
    line-height: 3rem;
    border-bottom: 1px gainsboro solid;
    @media (max-width: 768px) {
        line-height: 1rem;
        padding: 0.5rem 0;
    }
`;

const TdResp = styled(Td)`
    @media (max-width: 768px) {
        display: none;
    }
`;

const ThResp = styled(Th)`
    @media (max-width: 768px) {
        display: none;
    }
`;

const ThLeft = styled(Th)`
    text-align: left;
`;

const getBGColor = (result: string) => {
    switch (result) {
        case 'W':
            return 'green';
            break;
        case 'D':
            return 'gray';
            break;
        case 'L':
            return 'red';
        default:
            return '';
    }
};

export const RoundsTable: React.FunctionComponent<IRoundsTableProps> = (props) => {
    return (
        <>
            <Table>
                <TrHead>
                    <Th>Position</Th>
                    <ThLeft>Club</ThLeft>
                    <Th>{'Played'}</Th>
                    <Th>{'Won'}</Th>
                    <Th>{'Drawn'}</Th>
                    <Th>{'Lost'}</Th>
                    <ThResp>{'GF'}</ThResp>
                    <ThResp>{'GA'}</ThResp>
                    <Th>{'GD'}</Th>
                    <Th>{'Points'}</Th>
                    <ThResp>{'Form'}</ThResp>
                </TrHead>
                <tbody>
                    {props.tables
                        .filter((round) => round.roundNumber === props.roundNumber)
                        .map((round) =>
                            round.roundTable.map((club) => (
                                <tr>
                                    <Td>{club.position}</Td>
                                    <Td style={{ textAlign: 'left' }}>{club.club}</Td>
                                    <Td>{club.played}</Td>
                                    <Td>{club.won}</Td>
                                    <Td>{club.drawn}</Td>
                                    <Td>{club.lost}</Td>
                                    <TdResp>{club.gf}</TdResp>
                                    <TdResp>{club.ga}</TdResp>
                                    <Td>{club.gd}</Td>
                                    <Td>{club.points}</Td>
                                    <TdResp>
                                        {club.form.map((result) => (
                                            <FormItem backgroundColor={getBGColor(result)}>{result}</FormItem>
                                        ))}
                                    </TdResp>
                                </tr>
                            ))
                        )}
                </tbody>
            </Table>
        </>
    );
};
