import React from 'react'
import Title from './Title'

function Right() {
  return (
    <div
      style={{
        borderLeft: '1px solid #4c5867',
        paddingLeft: 24,
        fontSize: 14,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Title left>Cover Letter</Title>
      <div style={{}}>Hello!</div>
      <P>
        I am a software engineer who loves code. After college I thought I would do something with finance or business, but then
        my older brother introduced me to JavaScript. This opened me up to the world of coding, and I dove in. That was three
        years ago and my only regret is that I didn't find out about coding sooner! Since then I have eaten up every opportunity
        I could find to learn more and work toward a professional career in with coding.
      </P>
      <P>
        I am a software engineer who loves code. After college I thought I would do something with finance or business, but then
        my older brother introduced me to JavaScript. This opened me up to the world of coding, and I dove in. It has been a log
        time since I began coding, and my only regret is that I didn't find out about coding sooner! Since I began have eaten up
        every opportunity I could find to learn more and work toward a professional career in with coding.
      </P>
      <P>
        I believe that if I become a part of the dev team for The Church of Jesus Christ of Latter-day Saints, there will be no
        doubt or regret in the decision to bring me on. My positive attitude, resourcefulness, and stubborn perseverance when
        facing a challenge make me a productive contributor to any professional team.
      </P>
      <P>I hope to hear back from you soon!</P>
      <div style={{ marginBottom: 14 }}>Sincerely,</div>
      <div>Blake Mason</div>
    </div>
  )
}

function P({ children }) {
  return (
    <div
      style={{
        lineHeight: 1.5,
        textJustify: 'inter-word',
        textAlign: 'justify',
      }}
    >
      {children}
    </div>
  )
}

export default Right
