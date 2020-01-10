import React from 'react'
import image from '../image.jpg'
import Title from './Title'
import react from './icons/react.png'
import node from './icons/node.png'
import redux from './icons/redux.png'
import mongo from './icons/mongo.png'
import mysql from './icons/mysql.png'
import pg from './icons/pg.png'
import bootstrap from './icons/bootstrap.png'
import webpack from './icons/webpack.png'
import jwt from './icons/jwt.png'
import aws from './icons/aws.png'
import docker from './icons/docker.png'
import cell from './icons/cell.png'
import linkedin from './icons/linkedin.png'
import website from './icons/website.png'
import github from './icons/github.png'
import gmail from './icons/gmail.png'
import location from './icons/location.png'
import puppeteer from './icons/puppeteer.png'
import sass from './icons/sass.png'

const contact = [
  { icon: cell, data: '714 - 878 - 5117' },
  {
    icon: gmail,
    data: 'blakelmason@gmail.com'
  },
  {
    icon: location,
    data: 'Port Hueneme, CA 93041',
    url:
      'https://www.google.com/maps/place/Port+Hueneme,+CA/@34.1593617,-119.2212506,14z/data=!3m1!4b1!4m5!3m4!1s0x80e84b007fdaca29:0x48333ac255857a54!8m2!3d34.1477829!4d-119.1951074'
  },

  {
    icon: linkedin,
    data: 'LinkedIn',
    url: 'https://www.linkedin.com/in/blakelmason/'
  },
  { icon: website, data: 'Website', url: 'http://www.blakelmason.com/' },
  { icon: github, data: 'Github', url: 'https://github.com/blakelmason' }
]

const skills = [
  { name: 'React', url: 'https://reactjs.org/', icon: react },
  { name: 'Redux', url: 'https://redux.js.org/', icon: redux },
  { name: 'Node.js', url: 'https://nodejs.org/en/', icon: node },
  { name: 'Docker', url: 'https://www.docker.com/', icon: docker },
  { name: 'MongoDB', url: 'https://www.mongodb.com/', icon: mongo },
  { name: 'MySQL', url: 'https://www.mysql.com/', icon: mysql },
  { name: 'PostgreSQL', url: 'https://www.postgresql.org/', icon: pg },
  { name: 'JWT', url: 'https://jwt.io/', icon: jwt },
  { name: 'AWS', url: 'https://aws.amazon.com/', icon: aws },
  { name: 'Webpack', url: 'https://webpack.js.org/', icon: webpack },
  { name: 'Bootstrap', url: 'https://getbootstrap.com/', icon: bootstrap },
  { name: 'Sass', url: 'https://sass-lang.com/', icon: sass },
  {
    name: 'Puppeteer',
    url: 'https://developers.google.com/web/tools/puppeteer',
    icon: puppeteer
  }
]

function Left() {
  return (
    <div style={{ paddingRight: 24 }}>
      <div
        style={{
          marginBottom: 106,
          padding: 4,
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <img
          src={image}
          target="_blank"
          rel="noopener noreferrer"
          alt="ya"
          style={{
            borderRadius: '50%',
            border: '1px solid #e2e5e9',
            width: '85%',
            height: 'auto',
            boxShadow: '0 .5rem 1rem rgba(0,0,0,.15)'
          }}
        />
      </div>
      <Title>Contact</Title>
      {contact.map(({ icon, data, url }, i) => (
        <div key={`contact-${i}`} style={{ marginTop: 12 }}>
          {url ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                color: '#363f49',
                padding: 6,
                paddingRight: 8,
                textDecoration: 'none'
              }}
              href={url}
            >
              <img
                src={icon}
                alt="icon"
                style={{
                  height: 'auto',
                  width: 16,
                  marginRight: 6
                }}
              />
              {data}
            </a>
          ) : (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                color: '#363f49',
                padding: 6,
                paddingRight: 8,
                textDecoration: 'none'
              }}
            >
              <img
                src={icon}
                alt="icon"
                style={{
                  height: 'auto',
                  width: 16,
                  marginRight: 6
                }}
              />
              {data}
            </div>
          )}
        </div>
      ))}
      <Title style={{ marginTop: 106 }}>Skills</Title>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {skills.map(({ name, url, icon }, i) => (
          <div key={`skill-${i}`} style={{ padding: 2 }}>
            <div style={{ display: 'inline-block' }}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  color: '#363f49',
                  borderRadius: 4,
                  padding: 4,
                  paddingRight: 8,
                  textDecoration: 'none',
                  border: '1px solid #4c5867'
                }}
              >
                <img
                  src={icon}
                  alt="icon"
                  style={{
                    height: 'auto',
                    width: 16,
                    marginRight: 6,
                    borderRadius: icon === jwt ? '50%' : ''
                  }}
                />
                {name}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Left
