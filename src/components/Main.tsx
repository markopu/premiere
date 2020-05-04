import * as React from 'react';
import { useState } from 'react';
import { ROUNDS } from '../data/InitData';
import styled from 'styled-components';
import logo from '../style/logo.svg';
import { RoundTable } from './RoundTable';
import { RoundResult } from "./RoundResult";

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

const Img = styled.img`
  height: 3rem;
  margin: .25rem 0;
`;


export const Main: React.FunctionComponent<IMainProps> = (props) => {
    const [roundNumber, setRoundNumber] = useState<number>(ROUNDS.length);

    return (
        <>
            <TopBar>
                <Img src={logo} />
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

                <RoundResult roundNumber={roundNumber}/>
                <RoundTable roundNumber={roundNumber}  />
            </Container>
        </>
    );
};
