
export interface  IMatch {
    [club: string] : number
}

export interface IRound {
    round: number;
    matches: IMatch[] ;
}

export const ROUNDS = [
    {
        round: 1,
        matches: [
            {
                'Hull City': 2,
                'Leicester City': 1,
            },
            {
                Burnley: 0,
                Swansea: 1,
            },
            {
                'Crystal Palace': 0,
                'West Bromwich Albion': 1,
            },
            {
                Everton: 1,
                'Tottenham Hotspur': 1,
            },
            {
                Middlesbrough: 1,
                'Stoke City': 1,
            },
            {
                Southampton: 1,
                Watford: 1,
            },
            {
                'Manchester City': 2,
                Sunderland: 1,
            },
            {
                Bournemouth: 1,
                'Manchester United': 3,
            },
            {
                Arsenal: 3,
                Liverpool: 4,
            },
            {
                Chelsea: 2,
                'West Ham United': 1,
            },
        ],
    },
    {
        round: 2,
        matches: [
            {
                'Manchester United': 2,
                Southampton: 0,
            },
            {
                'Stoke City': 1,
                'Manchester City': 4,
            },
            {
                Burnley: 2,
                Liverpool: 0,
            },
            {
                Swansea: 0,
                'Hull City': 2,
            },
            {
                'Tottenham Hotspur': 1,
                'Crystal Palace': 0,
            },
            {
                Watford: 1,
                Chelsea: 2,
            },
            {
                'West Bromwich Albion': 1,
                Everton: 2,
            },
            {
                'Leicester City': 0,
                Arsenal: 0,
            },
            {
                Sunderland: 1,
                Middlesbrough: 2,
            },
            {
                'West Ham United': 1,
                Bournemouth: 0,
            },
        ],
    },
    {
        round: 3,
        matches: [
            {
                'Tottenham Hotspur': 1,
                Liverpool: 1,
            },
            {
                Chelsea: 3,
                Burnley: 0,
            },
            {
                'Crystal Palace': 1,
                Bournemouth: 1,
            },
            {
                Everton: 1,
                'Stoke City': 0,
            },
            {
                'Leicester City': 2,
                Swansea: 1,
            },
            {
                Southampton: 1,
                Sunderland: 1,
            },
            {
                Watford: 1,
                Arsenal: 3,
            },
            {
                'Hull City': 0,
                'Manchester United': 1,
            },
            {
                'West Bromwich Albion': 0,
                Middlesbrough: 0,
            },
            {
                'Manchester City': 3,
                'West Ham United': 1,
            },
        ],
    },
    {
        round: 4,
        matches: [
            {
                'Manchester United': 1,
                'Manchester City': 2,
            },
            {
                Bournemouth: 1,
                'West Bromwich Albion': 0,
            },
            {
                Arsenal: 2,
                Southampton: 1,
            },
            {
                Burnley: 1,
                'Hull City': 1,
            },
            {
                Middlesbrough: 1,
                'Crystal Palace': 2,
            },
            {
                'Stoke City': 0,
                'Tottenham Hotspur': 4,
            },
            {
                'West Ham United': 2,
                Watford: 4,
            },
            {
                Liverpool: 4,
                'Leicester City': 1,
            },
            {
                Swansea: 2,
                Chelsea: 2,
            },
            {
                Sunderland: 0,
                Everton: 3,
            },
        ],
    },
    {
        round: 5,
        matches: [
            {
                Chelsea: 1,
                Liverpool: 2,
            },
            {
                'Hull City': 1,
                Arsenal: 4,
            },
            {
                'Leicester City': 3,
                Burnley: 0,
            },
            {
                'Manchester City': 4,
                Bournemouth: 0,
            },
            {
                'West Bromwich Albion': 4,
                'West Ham United': 2,
            },
            {
                Everton: 3,
                Middlesbrough: 1,
            },
            {
                Watford: 3,
                'Manchester United': 1,
            },
            {
                'Crystal Palace': 4,
                'Stoke City': 1,
            },
            {
                Southampton: 1,
                Swansea: 0,
            },
            {
                'Tottenham Hotspur': 1,
                Sunderland: 0,
            },
        ],
    },
    {
        round: 6,
        matches: [
            {
                'Manchester United': 4,
                'Leicester City': 1,
            },
            {
                Bournemouth: 1,
                Everton: 0,
            },
            {
                Liverpool: 5,
                'Hull City': 1,
            },
            {
                Middlesbrough: 1,
                'Tottenham Hotspur': 2,
            },
            {
                'Stoke City': 1,
                'West Bromwich Albion': 1,
            },
            {
                Sunderland: 2,
                'Crystal Palace': 3,
            },
            {
                Swansea: 1,
                'Manchester City': 3,
            },
            {
                Arsenal: 3,
                Chelsea: 0,
            },
            {
                'West Ham United': 0,
                Southampton: 3,
            },
            {
                Burnley: 2,
                Watford: 0,
            },
        ],
    },
    {
        round: 7,
        matches: [
            {
                Everton: 1,
                'Crystal Palace': 1,
            },
            {
                Swansea: 1,
                Liverpool: 2,
            },
            {
                'Hull City': 0,
                Chelsea: 2,
            },
            {
                Sunderland: 1,
                'West Bromwich Albion': 1,
            },
            {
                Watford: 2,
                Bournemouth: 2,
            },
            {
                'West Ham United': 1,
                Middlesbrough: 1,
            },
            {
                'Manchester United': 1,
                'Stoke City': 1,
            },
            {
                'Leicester City': 0,
                Southampton: 0,
            },
            {
                'Tottenham Hotspur': 2,
                'Manchester City': 0,
            },
            {
                Burnley: 0,
                Arsenal: 1,
            },
        ],
    },
    {
        round: 8,
        matches: [
            {
                Chelsea: 3,
                'Leicester City': 0,
            },
            {
                Bournemouth: 6,
                'Hull City': 1,
            },
            {
                Arsenal: 3,
                Swansea: 2,
            },
            {
                'Manchester City': 1,
                Everton: 1,
            },
            {
                'Stoke City': 2,
                Sunderland: 0,
            },
            {
                'West Bromwich Albion': 1,
                'Tottenham Hotspur': 1,
            },
            {
                'Crystal Palace': 0,
                'West Ham United': 1,
            },
            {
                Middlesbrough: 0,
                Watford: 1,
            },
            {
                Southampton: 3,
                Burnley: 1,
            },
            {
                Liverpool: 0,
                'Manchester United': 0,
            },
        ],
    },
    {
        round: 9,
        matches: [
            {
                Bournemouth: 0,
                'Tottenham Hotspur': 0,
            },
            {
                Arsenal: 0,
                Middlesbrough: 0,
            },
            {
                Burnley: 2,
                Everton: 1,
            },
            {
                Chelsea: 4,
                'Manchester United': 0,
            },
            {
                'Hull City': 0,
                'Stoke City': 2,
            },
            {
                'Leicester City': 3,
                'Crystal Palace': 1,
            },
            {
                Liverpool: 2,
                'West Bromwich Albion': 1,
            },
            {
                'Manchester City': 1,
                Southampton: 1,
            },
            {
                Swansea: 0,
                Watford: 0,
            },
            {
                'West Ham United': 1,
                Sunderland: 0,
            },
        ],
    },
    {
        round: 10,
        matches: [
            {
                'Crystal Palace': 2,
                Liverpool: 4,
            },
            {
                Everton: 2,
                'West Ham United': 0,
            },
            {
                'Manchester United': 0,
                Burnley: 0,
            },
            {
                Middlesbrough: 2,
                Bournemouth: 0,
            },
            {
                Southampton: 0,
                Chelsea: 2,
            },
            {
                'Stoke City': 3,
                Swansea: 1,
            },
            {
                Sunderland: 1,
                Arsenal: 4,
            },
            {
                'Tottenham Hotspur': 1,
                'Leicester City': 1,
            },
            {
                Watford: 1,
                'Hull City': 0,
            },
            {
                'West Bromwich Albion': 0,
                'Manchester City': 4,
            },
        ],
    },
    {
        round: 11,
        matches: [
            {
                Bournemouth: 1,
                Sunderland: 2,
            },
            {
                Arsenal: 1,
                'Tottenham Hotspur': 1,
            },
            {
                Burnley: 3,
                'Crystal Palace': 2,
            },
            {
                Chelsea: 5,
                Everton: 0,
            },
            {
                'Hull City': 2,
                Southampton: 1,
            },
            {
                'Leicester City': 1,
                'West Bromwich Albion': 2,
            },
            {
                Liverpool: 6,
                Watford: 1,
            },
            {
                'Manchester City': 1,
                Middlesbrough: 1,
            },
            {
                Swansea: 1,
                'Manchester United': 3,
            },
            {
                'West Ham United': 1,
                'Stoke City': 1,
            },
        ],
    },
    {
        round: 12,
        matches: [
            {
                'Crystal Palace': 1,
                'Manchester City': 2,
            },
            {
                Everton: 1,
                Swansea: 1,
            },
            {
                'Manchester United': 1,
                Arsenal: 1,
            },
            {
                Middlesbrough: 0,
                Chelsea: 1,
            },
            {
                Southampton: 0,
                Liverpool: 0,
            },
            {
                'Stoke City': 0,
                Bournemouth: 1,
            },
            {
                Sunderland: 3,
                'Hull City': 0,
            },
            {
                'Tottenham Hotspur': 3,
                'West Ham United': 2,
            },
            {
                Watford: 2,
                'Leicester City': 1,
            },
            {
                'West Bromwich Albion': 4,
                Burnley: 0,
            },
        ],
    },
    {
        round: 13,
        matches: [
            {
                Burnley: 1,
                'Manchester City': 2,
            },
            {
                Chelsea: 2,
                'Tottenham Hotspur': 1,
            },
            {
                'Hull City': 1,
                'West Bromwich Albion': 1,
            },
            {
                'Leicester City': 2,
                Middlesbrough: 2,
            },
            {
                Liverpool: 2,
                Sunderland: 0,
            },
            {
                Swansea: 5,
                'Crystal Palace': 4,
            },
            {
                Watford: 0,
                'Stoke City': 1,
            },
            {
                Arsenal: 3,
                Bournemouth: 1,
            },
            {
                'Manchester United': 1,
                'West Ham United': 1,
            },
            {
                Southampton: 1,
                Everton: 0,
            },
        ],
    },
    {
        round: 14,
        matches: [
            {
                'Crystal Palace': 3,
                Southampton: 0,
            },
            {
                'Manchester City': 1,
                Chelsea: 3,
            },
            {
                'Stoke City': 2,
                Burnley: 0,
            },
            {
                Sunderland: 2,
                'Leicester City': 1,
            },
            {
                'Tottenham Hotspur': 5,
                Swansea: 0,
            },
            {
                'West Bromwich Albion': 3,
                Watford: 1,
            },
            {
                'West Ham United': 1,
                Arsenal: 5,
            },
            {
                Bournemouth: 4,
                Liverpool: 3,
            },
            {
                Everton: 1,
                'Manchester United': 1,
            },
            {
                Middlesbrough: 1,
                'Hull City': 0,
            },
        ],
    },
    {
        round: 15,
        matches: [
            {
                Arsenal: 3,
                'Stoke City': 1,
            },
            {
                Burnley: 3,
                Bournemouth: 2,
            },
            {
                'Hull City': 3,
                'Crystal Palace': 3,
            },
            {
                'Leicester City': 4,
                'Manchester City': 2,
            },
            {
                Swansea: 3,
                Sunderland: 0,
            },
            {
                Watford: 3,
                Everton: 2,
            },
            {
                Chelsea: 1,
                'West Bromwich Albion': 0,
            },
            {
                'Manchester United': 1,
                'Tottenham Hotspur': 0,
            },
            {
                Southampton: 1,
                Middlesbrough: 0,
            },
            {
                Liverpool: 2,
                'West Ham United': 2,
            },
        ],
    },
    {
        round: 16,
        matches: [
            {
                Bournemouth: 1,
                'Leicester City': 0,
            },
            {
                Everton: 2,
                Arsenal: 1,
            },
            {
                'Crystal Palace': 1,
                'Manchester United': 2,
            },
            {
                Middlesbrough: 0,
                Liverpool: 3,
            },
            {
                Sunderland: 0,
                Chelsea: 1,
            },
            {
                'West Bromwich Albion': 3,
                Swansea: 1,
            },
            {
                'West Ham United': 1,
                Burnley: 0,
            },
            {
                'Manchester City': 2,
                Watford: 0,
            },
            {
                'Stoke City': 0,
                Southampton: 0,
            },
            {
                'Tottenham Hotspur': 3,
                'Hull City': 0,
            },
        ],
    },
    {
        round: 17,
        matches: [
            {
                'Crystal Palace': 0,
                Chelsea: 1,
            },
            {
                Middlesbrough: 3,
                Swansea: 0,
            },
            {
                'Stoke City': 2,
                'Leicester City': 2,
            },
            {
                Sunderland: 1,
                Watford: 0,
            },
            {
                'West Bromwich Albion': 0,
                'Manchester United': 2,
            },
            {
                'West Ham United': 1,
                'Hull City': 0,
            },
            {
                Bournemouth: 1,
                Southampton: 3,
            },
            {
                'Manchester City': 2,
                Arsenal: 1,
            },
            {
                'Tottenham Hotspur': 2,
                Burnley: 1,
            },
            {
                Everton: 0,
                Liverpool: 1,
            },
        ],
    },
    {
        round: 18,
        matches: [
            {
                Arsenal: 1,
                'West Bromwich Albion': 0,
            },
            {
                Burnley: 1,
                Middlesbrough: 0,
            },
            {
                Chelsea: 3,
                Bournemouth: 0,
            },
            {
                'Hull City': 0,
                'Manchester City': 3,
            },
            {
                'Leicester City': 0,
                Everton: 2,
            },
            {
                'Manchester United': 3,
                Sunderland: 1,
            },
            {
                Swansea: 1,
                'West Ham United': 4,
            },
            {
                Watford: 1,
                'Crystal Palace': 1,
            },
            {
                Liverpool: 4,
                'Stoke City': 1,
            },
            {
                Southampton: 1,
                'Tottenham Hotspur': 4,
            },
        ],
    },
    {
        round: 19,
        matches: [
            {
                'Hull City': 2,
                Everton: 2,
            },
            {
                Burnley: 4,
                Sunderland: 1,
            },
            {
                Chelsea: 4,
                'Stoke City': 2,
            },
            {
                'Leicester City': 1,
                'West Ham United': 0,
            },
            {
                Liverpool: 1,
                'Manchester City': 0,
            },
            {
                'Manchester United': 2,
                Middlesbrough: 1,
            },
            {
                Southampton: 1,
                'West Bromwich Albion': 2,
            },
            {
                Swansea: 0,
                Bournemouth: 3,
            },
            {
                Watford: 1,
                'Tottenham Hotspur': 4,
            },
            {
                Arsenal: 2,
                'Crystal Palace': 0,
            },
        ],
    },
    {
        round: 20,
        matches: [
            {
                Bournemouth: 3,
                Arsenal: 3,
            },
            {
                'Crystal Palace': 1,
                Swansea: 2,
            },
            {
                Everton: 3,
                Southampton: 0,
            },
            {
                'Manchester City': 2,
                Burnley: 1,
            },
            {
                Middlesbrough: 0,
                'Leicester City': 0,
            },
            {
                'Stoke City': 2,
                Watford: 0,
            },
            {
                Sunderland: 2,
                Liverpool: 2,
            },
            {
                'Tottenham Hotspur': 2,
                Chelsea: 0,
            },
            {
                'West Bromwich Albion': 3,
                'Hull City': 1,
            },
            {
                'West Ham United': 0,
                'Manchester United': 2,
            },
        ],
    },
    {
        round: 21,
        matches: [
            {
                Burnley: 1,
                Southampton: 0,
            },
            {
                Everton: 4,
                'Manchester City': 0,
            },
            {
                'Hull City': 3,
                Bournemouth: 1,
            },
            {
                'Leicester City': 0,
                Chelsea: 3,
            },
            {
                'Manchester United': 1,
                Liverpool: 1,
            },
            {
                Sunderland: 1,
                'Stoke City': 3,
            },
            {
                Swansea: 0,
                Arsenal: 4,
            },
            {
                'Tottenham Hotspur': 4,
                'West Bromwich Albion': 0,
            },
            {
                Watford: 0,
                Middlesbrough: 0,
            },
            {
                'West Ham United': 3,
                'Crystal Palace': 0,
            },
        ],
    },
    {
        round: 22,
        matches: [
            {
                Bournemouth: 2,
                Watford: 2,
            },
            {
                Arsenal: 2,
                Burnley: 1,
            },
            {
                Chelsea: 2,
                'Hull City': 0,
            },
            {
                'Crystal Palace': 0,
                Everton: 1,
            },
            {
                Liverpool: 2,
                Swansea: 3,
            },
            {
                'Manchester City': 2,
                'Tottenham Hotspur': 2,
            },
            {
                Middlesbrough: 1,
                'West Ham United': 3,
            },
            {
                Southampton: 3,
                'Leicester City': 0,
            },
            {
                'Stoke City': 1,
                'Manchester United': 1,
            },
            {
                'West Bromwich Albion': 2,
                Sunderland: 0,
            },
        ],
    },
    {
        round: 23,
        matches: [
            {
                Bournemouth: 0,
                'Crystal Palace': 2,
            },
            {
                Arsenal: 1,
                Watford: 2,
            },
            {
                Burnley: 1,
                'Leicester City': 0,
            },
            {
                'Manchester United': 0,
                'Hull City': 0,
            },
            {
                Middlesbrough: 1,
                'West Bromwich Albion': 1,
            },
            {
                Sunderland: 0,
                'Tottenham Hotspur': 0,
            },
            {
                Swansea: 2,
                Southampton: 1,
            },
            {
                'West Ham United': 0,
                'Manchester City': 4,
            },
            {
                Liverpool: 1,
                Chelsea: 1,
            },
            {
                'Stoke City': 1,
                Everton: 1,
            },
        ],
    },
    {
        round: 24,
        matches: [
            {
                Chelsea: 3,
                Arsenal: 1,
            },
            {
                'Crystal Palace': 0,
                Sunderland: 4,
            },
            {
                Everton: 6,
                Bournemouth: 3,
            },
            {
                'Hull City': 2,
                Liverpool: 0,
            },
            {
                Southampton: 1,
                'West Ham United': 3,
            },
            {
                'Tottenham Hotspur': 1,
                Middlesbrough: 0,
            },
            {
                Watford: 2,
                Burnley: 1,
            },
            {
                'West Bromwich Albion': 1,
                'Stoke City': 0,
            },
            {
                'Manchester City': 2,
                Swansea: 1,
            },
            {
                'Leicester City': 0,
                'Manchester United': 3,
            },
        ],
    },
    {
        round: 25,
        matches: [
            {
                Arsenal: 2,
                'Hull City': 0,
            },
            {
                Liverpool: 2,
                'Tottenham Hotspur': 0,
            },
            {
                'Manchester United': 2,
                Watford: 0,
            },
            {
                Middlesbrough: 0,
                Everton: 0,
            },
            {
                'Stoke City': 1,
                'Crystal Palace': 0,
            },
            {
                Sunderland: 0,
                Southampton: 4,
            },
            {
                'West Ham United': 2,
                'West Bromwich Albion': 2,
            },
            {
                Burnley: 1,
                Chelsea: 1,
            },
            {
                Swansea: 2,
                'Leicester City': 0,
            },
            {
                Bournemouth: 0,
                'Manchester City': 2,
            },
        ],
    },
    {
        round: 26,
        matches: [
            {
                Chelsea: 3,
                Swansea: 1,
            },
            {
                'Crystal Palace': 1,
                Middlesbrough: 0,
            },
            {
                Everton: 2,
                Sunderland: 0,
            },
            {
                'Hull City': 1,
                Burnley: 1,
            },
            {
                'Leicester City': 3,
                Liverpool: 1,
            },
            {
                'Manchester City': 0,
                'Manchester United': 0,
            },
            {
                Southampton: 0,
                Arsenal: 2,
            },
            {
                'Tottenham Hotspur': 4,
                'Stoke City': 0,
            },
            {
                Watford: 1,
                'West Ham United': 1,
            },
            {
                'West Bromwich Albion': 2,
                Bournemouth: 1,
            },
        ],
    },
    {
        round: 27,
        matches: [
            {
                'Leicester City': 3,
                'Hull City': 1,
            },
            {
                Liverpool: 3,
                Arsenal: 1,
            },
            {
                'Manchester United': 1,
                Bournemouth: 1,
            },
            {
                'Stoke City': 2,
                Middlesbrough: 0,
            },
            {
                Sunderland: 0,
                'Manchester City': 2,
            },
            {
                Swansea: 3,
                Burnley: 2,
            },
            {
                'Tottenham Hotspur': 3,
                Everton: 2,
            },
            {
                Watford: 3,
                Southampton: 4,
            },
            {
                'West Bromwich Albion': 0,
                'Crystal Palace': 2,
            },
            {
                'West Ham United': 1,
                Chelsea: 2,
            },
        ],
    },
    {
        round: 28,
        matches: [
            {
                Bournemouth: 3,
                'West Ham United': 2,
            },
            {
                Arsenal: 1,
                'Leicester City': 0,
            },
            {
                Liverpool: 2,
                Burnley: 1,
            },
            {
                Chelsea: 4,
                Watford: 3,
            },
            {
                Everton: 3,
                'West Bromwich Albion': 0,
            },
            {
                'Hull City': 2,
                Swansea: 1,
            },
            {
                'Manchester City': 0,
                'Stoke City': 0,
            },
            {
                Middlesbrough: 1,
                Sunderland: 0,
            },
            {
                Southampton: 0,
                'Manchester United': 0,
            },
            {
                'Crystal Palace': 0,
                'Tottenham Hotspur': 1,
            },
        ],
    },
    {
        round: 29,
        matches: [
            {
                Bournemouth: 2,
                Swansea: 0,
            },
            {
                'Crystal Palace': 1,
                Watford: 0,
            },
            {
                Everton: 4,
                'Hull City': 0,
            },
            {
                'Manchester City': 1,
                Liverpool: 1,
            },
            {
                Middlesbrough: 1,
                'Manchester United': 3,
            },
            {
                'Stoke City': 1,
                Chelsea: 2,
            },
            {
                Sunderland: 0,
                Burnley: 0,
            },
            {
                'Tottenham Hotspur': 2,
                Southampton: 1,
            },
            {
                'West Bromwich Albion': 3,
                Arsenal: 1,
            },
            {
                'West Ham United': 2,
                'Leicester City': 3,
            },
        ],
    },
    {
        round: 30,
        matches: [
            {
                Arsenal: 2,
                'Manchester City': 2,
            },
            {
                Burnley: 0,
                'Tottenham Hotspur': 2,
            },
            {
                Chelsea: 1,
                'Crystal Palace': 2,
            },
            {
                'Hull City': 2,
                'West Ham United': 1,
            },
            {
                'Leicester City': 2,
                'Stoke City': 0,
            },
            {
                Liverpool: 3,
                Everton: 1,
            },
            {
                'Manchester United': 0,
                'West Bromwich Albion': 0,
            },
            {
                Southampton: 0,
                Bournemouth: 0,
            },
            {
                Swansea: 0,
                Middlesbrough: 0,
            },
            {
                Watford: 1,
                Sunderland: 0,
            },
        ],
    },
    {
        round: 31,
        matches: [
            {
                Burnley: 1,
                'Stoke City': 0,
            },
            {
                'Leicester City': 2,
                Sunderland: 0,
            },
            {
                'Manchester United': 1,
                Everton: 1,
            },
            {
                Watford: 2,
                'West Bromwich Albion': 0,
            },
            {
                Chelsea: 2,
                'Manchester City': 1,
            },
            {
                Liverpool: 2,
                Bournemouth: 2,
            },
            {
                Southampton: 3,
                'Crystal Palace': 1,
            },
            {
                'Hull City': 4,
                Middlesbrough: 2,
            },
            {
                Arsenal: 3,
                'West Ham United': 0,
            },
            {
                Swansea: 1,
                'Tottenham Hotspur': 3,
            },
        ],
    },
    {
        round: 32,
        matches: [
            {
                Bournemouth: 1,
                Chelsea: 3,
            },
            {
                'Crystal Palace': 3,
                Arsenal: 0,
            },
            {
                Everton: 4,
                'Leicester City': 2,
            },
            {
                'Manchester City': 3,
                'Hull City': 1,
            },
            {
                Middlesbrough: 0,
                Burnley: 0,
            },
            {
                'Stoke City': 1,
                Liverpool: 2,
            },
            {
                Sunderland: 0,
                'Manchester United': 3,
            },
            {
                'Tottenham Hotspur': 4,
                Watford: 0,
            },
            {
                'West Bromwich Albion': 0,
                Southampton: 1,
            },
            {
                'West Ham United': 1,
                Swansea: 0,
            },
        ],
    },
    {
        round: 33,
        matches: [
            {
                'Crystal Palace': 2,
                'Leicester City': 2,
            },
            {
                Everton: 3,
                Burnley: 1,
            },
            {
                'Manchester United': 2,
                Chelsea: 0,
            },
            {
                Middlesbrough: 1,
                Arsenal: 2,
            },
            {
                Southampton: 0,
                'Manchester City': 3,
            },
            {
                'Stoke City': 3,
                'Hull City': 1,
            },
            {
                Sunderland: 2,
                'West Ham United': 2,
            },
            {
                'Tottenham Hotspur': 4,
                Bournemouth: 0,
            },
            {
                Watford: 1,
                Swansea: 0,
            },
            {
                'West Bromwich Albion': 0,
                Liverpool: 1,
            },
        ],
    },
    {
        round: 34,
        matches: [
            {
                Bournemouth: 4,
                Middlesbrough: 0,
            },
            {
                Arsenal: 2,
                Sunderland: 0,
            },
            {
                Burnley: 0,
                'Manchester United': 2,
            },
            {
                Chelsea: 4,
                Southampton: 2,
            },
            {
                'Hull City': 2,
                Watford: 0,
            },
            {
                'Leicester City': 1,
                'Tottenham Hotspur': 6,
            },
            {
                Liverpool: 1,
                'Crystal Palace': 2,
            },
            {
                'Manchester City': 3,
                'West Bromwich Albion': 1,
            },
            {
                Swansea: 2,
                'Stoke City': 0,
            },
            {
                'West Ham United': 0,
                Everton: 0,
            },
        ],
    },
    {
        round: 35,
        matches: [
            {
                'Crystal Palace': 0,
                Burnley: 2,
            },
            {
                Everton: 0,
                Chelsea: 3,
            },
            {
                'Manchester United': 1,
                Swansea: 1,
            },
            {
                Middlesbrough: 2,
                'Manchester City': 2,
            },
            {
                Southampton: 0,
                'Hull City': 0,
            },
            {
                'Stoke City': 0,
                'West Ham United': 0,
            },
            {
                Sunderland: 0,
                Bournemouth: 1,
            },
            {
                'Tottenham Hotspur': 2,
                Arsenal: 0,
            },
            {
                Watford: 0,
                Liverpool: 1,
            },
            {
                'West Bromwich Albion': 0,
                'Leicester City': 1,
            },
        ],
    },
    {
        round: 36,
        matches: [
            {
                Bournemouth: 2,
                'Stoke City': 2,
            },
            {
                Arsenal: 2,
                'Manchester United': 0,
            },
            {
                Burnley: 2,
                'West Bromwich Albion': 2,
            },
            {
                Chelsea: 3,
                Middlesbrough: 0,
            },
            {
                'Hull City': 0,
                Sunderland: 2,
            },
            {
                'Leicester City': 3,
                Watford: 0,
            },
            {
                Liverpool: 0,
                Southampton: 0,
            },
            {
                'Manchester City': 5,
                'Crystal Palace': 0,
            },
            {
                Swansea: 1,
                Everton: 0,
            },
            {
                'West Ham United': 1,
                'Tottenham Hotspur': 0,
            },
        ],
    },
    {
        round: 37,
        matches: [
            {
                Bournemouth: 2,
                Burnley: 1,
            },
            {
                'Crystal Palace': 4,
                'Hull City': 0,
            },
            {
                Everton: 1,
                Watford: 0,
            },
            {
                'Manchester City': 2,
                'Leicester City': 1,
            },
            {
                Middlesbrough: 1,
                Southampton: 2,
            },
            {
                'Stoke City': 1,
                Arsenal: 4,
            },
            {
                Sunderland: 0,
                Swansea: 2,
            },
            {
                'Tottenham Hotspur': 2,
                'Manchester United': 1,
            },
            {
                'West Bromwich Albion': 0,
                Chelsea: 1,
            },
            {
                'West Ham United': 0,
                Liverpool: 4,
            },
        ],
    },
    {
        round: 38,
        matches: [
            {
                Arsenal: 3,
                Everton: 1,
            },
            {
                Burnley: 1,
                'West Ham United': 2,
            },
            {
                Chelsea: 5,
                Sunderland: 1,
            },
            {
                'Hull City': 1,
                'Tottenham Hotspur': 7,
            },
            {
                'Leicester City': 1,
                Bournemouth: 1,
            },
            {
                Liverpool: 3,
                Middlesbrough: 0,
            },
            {
                'Manchester United': 2,
                'Crystal Palace': 0,
            },
            {
                Southampton: 0,
                'Stoke City': 1,
            },
            {
                Swansea: 2,
                'West Bromwich Albion': 1,
            },
            {
                Watford: 0,
                'Manchester City': 5,
            },
        ],
    },
] as IRound[]
