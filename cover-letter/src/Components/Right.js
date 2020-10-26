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
        my older brother introduced me to JavaScript. This opened me up to the world of coding, and I dove in. That was 
        years ago and my only regret is that I didn't find out about coding sooner! Since then I have eaten up every opportunity
        I could find to learn more and expand my coding career.
      </P>
      <P>
        I am applying to this job with Homie because my strengths are with front-end development. I enjoy working across the full stack, but I am expecially fond of React, CSS, and Sass.
        There is nothing more satisfying than making a design come to life in the browser and having it work flawlessly. My education and background are also in real estate, so working for Homie seems like
        a perfect match for my skills and experience.
      </P>
      <P>
        Whatever the responsibilities may be, I believe my positive attitude, resourcefulness, and stubborn perseverance when
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
