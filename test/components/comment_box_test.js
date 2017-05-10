import { renderComponent, expect } from '../test_helper'
import CommentBox from '../../src/components/comment_box'

describe('CommentBox', () => {
    let component

    beforeEach(() => {
        component = renderComponent(CommentBox)
    })

    it('Has correct class', () => {
        expect(component).to.have.class('comment-box')
    })
    it('Has a text area', () => {
        expect(component.find('textarea')).to.exist
    })

    it('Has a button', () => {
        expect(component.find('button')).to.exist
    })

    describe('entering some text', () => {
        beforeEach(() => {
            component.find('textarea').simulate('change', 'new comment')
        })

        it('shows text that is entered', () => {
            expect(component.find('textarea')).to.have.value('new comment')
        })

        it('clears input when submitted', () => {
            component.simulate('submit')
            
            expect(component.find('textarea')).to.have.value('')
        })
    })
})
