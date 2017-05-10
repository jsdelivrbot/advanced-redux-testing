import { renderComponent, expect } from '../test_helper'
import App from '../../src/components/app'

describe('app', () => {
    let component

    beforeEach(() => {
        component = renderComponent(App)
    })

    it('CommentBox is rendered', () => {
        expect(component.find('.comment-box')).to.exist
    })

    it('CommentList is rendered', () => {
        expect(component.find('.comment-list')).to.exist
    })
})
