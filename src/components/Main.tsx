import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { IMatch, ROUNDS } from '../data/InitData';
import styled from 'styled-components';
import { createTablesPerRounds, IRoundResults, ITableRow } from '../data/prepareData';
import logo from '../style/logo.svg';
import { RoundsTable } from './RoundsTable';

interface IMainProps {}

const Container = styled.div`
    margin: 0 1rem;
`;

const Select = styled.select`
    border-radius: 0;
    height: 2rem;
    font-size: 1rem;
    width: 150px;
    margin-left: 1rem;
`;

const TopBar = styled.div`
    width: 100%;
    height: 3.5rem;
    background-color: ghostwhite;
    border-bottom: gainsboro;
    padding: 0 1rem;
    display: flex;
    align-items: center;
`;

export const Main: React.FunctionComponent<IMainProps> = (props) => {
    const [roundNumber, setRoundNumber] = useState<number>();

    const TABLES = useRef<IRoundResults[]>([]);

    useEffect(() => {
        //@ts-ignore
        window.$rounds = ROUNDS;

        TABLES.current = createTablesPerRounds();
        setRoundNumber(ROUNDS.length);

        console.log(TABLES, '<--- arr');
    }, []);

    return (
        <>
            <TopBar>
                <img style={{ height: '48px', margin: '4px 0' }} src={logo} />
                <Select
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                        setRoundNumber(parseInt(e.target.value));
                    }}
                >
                    <option value={ROUNDS[ROUNDS.length - 1].round}>All matchweeks</option>
                    {ROUNDS.map((round) => (
                        <option value={round.round}>{round.round}</option>
                    ))}
                </Select>
            </TopBar>

            <Container>
                <RoundsTable roundNumber={roundNumber as number} tables={TABLES.current} />
            </Container>
        </>
    );
};
