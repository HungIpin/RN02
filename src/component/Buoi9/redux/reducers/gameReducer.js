import { Scissor } from '../../../../assets'
import gameAction from '../actions/gameAction'

const initialState = {
    arrayGame: [{ id: 'scissor', image: Scissorsor, status: false }, { id: 'rock', image: Rock, status: false }, { id: 'paper', image: Paper, status: true }],
}

const gameReducer = (state = initialState, action) => {
    switch (action.state) {
        default:
            return state
    }
}
