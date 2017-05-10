import { renderComponent, expect } from '../test_helper'
import CommentList from '../../src/components/comment_list'

describe('CommentList', () => {
    let component

    beforeEach(() => {
        const props = { comments: ['comment 1', 'comment 2']}
        component = renderComponent(CommentList, null, props)
    })

    it('shows an li for each comment', () => {

    })

    it('shows correct comment content', () => {

    })
})
