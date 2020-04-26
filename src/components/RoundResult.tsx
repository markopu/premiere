import * as React from "react";
import { IMatch, ROUNDS } from "../data/InitData";
import styled from "styled-components";

interface IRoundResultProps {
  roundNumber : number;
};

const Container = styled.div`
    margin-top: 1rem;

`;

const Header = styled.div`
    background-color: ghostwhite;
    font-size: .8rem;
    line-height: 2.4rem;
    padding: 0 1rem;
`;
const List = styled.div`
    margin: 1rem;

`;

const Item = styled.div`
  width: 184px;
  text-align: left;
  margin-bottom: 1rem;
  margin-right: 1rem;
`;
const ClubResult = styled.div`
margin-bottom: 2px;
//display: flex;
//justify-content: space-between;
`;

export const RoundResult: React.FunctionComponent<IRoundResultProps> = (props) => {
  return (
    <Container >
      <Header > Round {props.roundNumber} results</Header>
      {ROUNDS.filter((round) => round.round === props.roundNumber).map((round) => {
        console.log(round, '<--- runde');
        return (
          <List>
            {round.matches.map((match: IMatch) => (
              <Item >
                {Object.keys(match).map((club) => (
                  <ClubResult>
                    {club}: <b>{match[club]}</b>
                  </ClubResult>
                ))}
              </Item>
            ))}
          </List>
        );
      })}
    </Container>
  );
};