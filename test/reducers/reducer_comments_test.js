import { expect } from '../test_helper'
import { SAVE_COMMENT } from '../../src/actions/types'
import commentsReducer from '../../src/reducers/reducer_comments'

describe('Comments Reducer', () => {
    it('Handles unknown action.type', () => {
        expect(commentsReducer()).to.eql([])
    })

    it('Handles SAVE_COMMENT action.type', () => {
        const action = { type: SAVE_COMMENT, payload: 'new comment' }
        expect(commentsReducer([], action)).to.eql(['new comment'])
    })
})
