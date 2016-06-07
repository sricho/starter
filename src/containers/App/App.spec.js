import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import App from '.'
import styles from './App.module.css'

describe('<App />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App env="crazyland" />)
  })

  it('has a .root class', () => {
    expect(wrapper.find(`.${styles.root}`)).to.have.length(1)
  })

  it('has a a heading element', () => {
    expect(wrapper.find('h1')).to.have.length(1)
  })

  it('displays the environment', () => {
    expect(wrapper).to.contain.text('Environment: crazyland')
  })

  it('displays some content in paragraphs', () => {
    expect(wrapper.find('p')).to.be.present()
  })
})
