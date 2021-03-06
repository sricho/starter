import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import App from '.'
import styles from './App.module.css'

describe('<App />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App hello="crazyland" env="test" />)
  })

  it('has a .root class', () => {
    expect(wrapper.find(`.${styles.root}`)).to.have.length(1)
  })

  it('has a a heading element', () => {
    expect(wrapper.find('h1')).to.have.length(1)
  })

  it('displays the hello message', () => {
    expect(wrapper).to.contain.text('crazyland')
  })

  it('displays the env', () => {
    expect(wrapper).to.contain.text('test')
  })

  it('displays some content in paragraphs', () => {
    expect(wrapper.find('p')).to.be.present()
  })
})
