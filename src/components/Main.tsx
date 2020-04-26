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
    display: flex;
    @media (max-width: 768px) {
      flex-direction: column;
  }
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

const RResult = styled.div`
    margin-top: 1rem;

`;

const RResultHeader = styled.div`
    background-color: ghostwhite;
    font-size: .8rem;
    line-height: 2.4rem;
    padding: 0 1rem;
`;
const RResultList = styled.div`
    margin: 1rem;

`;

const RResultItem = styled.div`
  width: 200px;
  text-align: left;
  margin-bottom: .5rem;
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
              <RResult >
                <RResultHeader > Round {roundNumber} results</RResultHeader>
                {ROUNDS.filter((round) => round.round === roundNumber).map((round) => {
                  console.log(round, '<--- runde');
                  return (
                    <RResultList>
                      {round.matches.map((match: IMatch) => (
                        <RResultItem >
                          {Object.keys(match).map((club) => (
                            <div>
                              {club}: <b>{match[club]}</b>
                            </div>
                          ))}
                        </RResultItem>
                      ))}
                    </RResultList>
                  );
                })}
              </RResult>


                <RoundsTable roundNumber={roundNumber as number} tables={TABLES.current} />
            </Container>
        </>
    );
};
