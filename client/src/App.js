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
import github from './icons/github.png'
import gmail from './icons/gmail.png'
import location from './icons/location.png'
import puppeteer from './icons/puppeteer.png'
import sass from './icons/sass.png'
import graphql from './icons/graphql.png'
import js from './icons/js.png'
import mui from './icons/mui.png'
import html from './icons/html.png'
import css from './icons/css.png'
import npm from './icons/npm.png'
import git from './icons/git.png'
import sql from './icons/sql.png'
import mongoose from './icons/mongoose.png'
import sequelize from './icons/sequelize.png'
import jquery from './icons/jquery.png'
import typescript from './icons/typescript.png'
import externalLink from './icons/external-link-symbol.svg'

const contact = [
    {
        icon: cell,
        data: '714 - 878 - 5117',
        type: 'phone',
        url: '714-878-5117',
    },
    {
        icon: gmail,
        url: 'blakelmason@gmail.com',
        data: 'blakelmason@gmail.com',
        type: 'email',
    },
    {
        icon: location,
        data: 'South Jordan, UT 84095',
        url:
            'https://www.google.com/maps?q=84095&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjOn4K5357rAhV_CjQIHZtbBNkQ_AUoAXoECBQQAw',
    },

    {
        icon: linkedin,
        data: 'LinkedIn',
        url: 'https://www.linkedin.com/in/blakelmason/',
    },
    {
        icon: github,
        data: 'Github',
        url: 'https://github.com/blakelmason',
    },
]

const skills = [
    {
        name: 'HTML',
        url: 'https://www.w3schools.com/html/',
        icon: html,
    },
    {
        name: 'CSS',
        url: 'https://www.w3schools.com/css/',
        icon: css,
    },
    {
        name: 'JavaScript',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        icon: js,
    },
    {
        name: 'jQuery',
        url: 'https://jquery.com/',
        icon: jquery,
    },
    { name: 'React', url: 'https://reactjs.org/', icon: react },
    { name: 'Redux', url: 'https://redux.js.org/', icon: redux },
    { name: 'Node', url: 'https://nodejs.org/en/', icon: node },
    {
        name: 'npm',
        url: 'https://www.npmjs.com/',
        icon: npm,
    },
    {
        name: 'TypeScript',
        url: 'https://www.typescriptlang.org/',
        icon: typescript,
    },
    {
        name: 'Git',
        url: 'https://git-scm.com/',
        icon: git,
    },
    { name: 'MongoDB', url: 'https://www.mongodb.com/', icon: mongo },
    { name: 'Mongoose', url: 'https://mongoosejs.com/', icon: mongoose },
    { name: 'SQL', url: 'https://www.w3schools.com/sql/', icon: sql },
    { name: 'Sequelize', url: 'https://sequelize.org/', icon: sequelize },
    { name: 'MySQL', url: 'https://www.mysql.com/', icon: mysql },
    { name: 'PostgreSQL', url: 'https://www.postgresql.org/', icon: pg },
    { name: 'Sass', url: 'https://sass-lang.com/', icon: sass },
    { name: 'Bootstrap', url: 'https://getbootstrap.com/', icon: bootstrap },
    { name: 'Material-UI', url: 'https://material-ui.com/', icon: mui },
    { name: 'AWS', url: 'https://aws.amazon.com/', icon: aws },
    { name: 'Webpack', url: 'https://webpack.js.org/', icon: webpack },
    { name: 'Docker', url: 'https://www.docker.com/', icon: docker },
    {
        name: 'GraphQL',
        url: 'https://graphql.org/',
        icon: graphql,
    },
    {
        name: 'Puppeteer',
        url: 'https://developers.google.com/web/tools/puppeteer',
        icon: puppeteer,
    },
    { name: 'JWT', url: 'https://jwt.io/', icon: jwt },
]

const experience = [
    {
        description: 'State of the art online card editor.',
        href: 'https://www.sendoutcards.com/app',
        company: 'SendOutCards',
        position: 'Software Engineer',
        date: '2021 - Current',
        data: (
            <>
                Support card-building front end application and new product
                websites. Work with UI/UX to build React components to match
                Framer designs. Front end technologies include React, Redux,
                TypeScript, and GraphQL with a Python/Django backend.
            </>
        ),
    },
    {
        description: 'Online small business loan marketplace.',
        href: 'https://lendio.com/',
        company: 'Lendio',
        position: 'Software Engineer',
        date: '2020 - 2021',
        data: (
            <>
                Worked on public-facing applications. Coordinated closely with
                UI/UX to build and refine pages and components.
            </>
        ),
    },
    {
        description: 'Full service digital sales and marketing agency.',
        href: 'https://vonazon.com/',
        company: 'Vonazon',
        position: 'Web Developer',
        date: '2020',
        data: (
            <>
                Built websites for clients using the HubSpot CMS. Created and
                updated custom templates and modules in HubSpot using the Hubl
                templating language and Preact, a performant React alternative.
                Translated design and styling guidelines from the Graphics
                Design team into attractive and responsive web pages using
                custom Bootstrap themes.
            </>
        ),
    },
    {
        href: 'http://www.uswheel.com/',
        company: 'US Wheel Corp.',
        position: 'software engineer',
        date: '2017 - 2019',
        data: (
            <>
                Wrote code to automate business operations such as order entry,
                invoicing, reporting, and generating work order bill of
                materials. Built simple web applications using JavaScript tools,
                technologies and frameworks such as React, NodeJS, and Express.
                Helped troubleshoot any IT problems for the office and
                warehouse.
            </>
        ),
        description: 'Steel wheel assembly and tire distribution.',
    },
]

const education = [
    {
        href: 'https://www.hackreactor.com/',
        company: 'Hack Reactor',
        position: 'Software Engineering Immersive',
        date: '2020',
        data: [
            `Worked on mastering full stack JavaScript and Computer Science fundamentals while exploring new tech using the most refined, up-to-date curriculum.
      Hosted a front end  project on AWS EC2 free tier instances and designed a system to maximize application load.
      Split the proxy, services, and database to individual EC2 instances and configured a load balancer using NGINX.`,
        ],
        description:
            'An advanced coding bootcamp focused on building autonomous software engineers ready for any job in the tech industry.',
    },
    {
        href: 'https://bootcamp.ce.uci.edu/coding/',
        company: 'UCI Division of Continuing Education',
        position: 'Web Development Bootcamp',
        date: '2018',
        data: [
            'Completed complex projects and received hands-on programming training through experiential learning opportunities.',
        ],
        description:
            'A web development program that teaches the key skills for full stack development.',
    },
    {
        href: 'https://www.byu.edu/',
        company: 'Brigham Young University, Utah',
        position: "Bachelor's Degree - Business Management",
        date: '2016',
        data: [],
    },
]

function App() {
    return (
        <div
            style={{
                height: 1200,
                width: 850,
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <div
                style={{
                    height: '10%',
                    backgroundColor: '#343a40',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    flexDirection: 'column',
                }}
            >
                <div
                    style={{
                        fontSize: 28,
                        fontWeight: 500,
                        letterSpacing: 6,
                        wordSpacing: 4,
                    }}
                >
                    BLAKE MASON
                </div>
                <div
                    style={{
                        borderBottom: '1px solid white',
                        width: 375,
                        position: 'absolute',
                        top: 63,
                    }}
                />
                <div
                    style={{
                        position: 'relative',
                        fontWeight: 300,
                        fontSize: 12,
                        letterSpacing: 4,
                        right: 11,
                        top: 2,
                    }}
                >
                    Software Engineer
                </div>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    flexGrow: 1,
                    padding: 24,
                }}
            >
                <div>
                    <h1>Contact</h1>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        {contact.map((item, i) => (
                            <a
                                href={
                                    ({ phone: 'tel:', email: 'mailto:' }[
                                        item.type
                                    ] || '') + item.url
                                }
                                target="_blank"
                                rel="noreferrer"
                                key={`contact-items-${i}`}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <img
                                        src={item.icon}
                                        style={{
                                            height: 'auto',
                                            width: 16,
                                            marginRight: 4,
                                        }}
                                        alt="contact icon"
                                    />
                                    <div
                                        style={{
                                            position: 'relative',
                                            top: 1,
                                            fontSize: 14,
                                        }}
                                    >
                                        {item.data}
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
                <div>
                    <h1 style={{ marginBottom: 4 }}>Skills</h1>
                    <div
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                        }}
                    >
                        {skills.map((skill, i) => (
                            <a
                                key={`skill-item-${i}`}
                                href={skill.url}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginTop: 8,
                                    border: '1px solid #adb5bd',
                                    padding: '4px 6px',
                                    borderRadius: 4,
                                    marginRight: 6,
                                    background: 'white',
                                }}
                            >
                                <img
                                    src={skill.icon}
                                    alt="skill icon"
                                    style={{ height: 20, marginRight: 4 }}
                                />
                                <div>{skill.name}</div>
                            </a>
                        ))}
                    </div>
                </div>
                <Section title="Experience" items={experience} />
                <Section title="Education" items={education} />
            </div>
        </div>
    )
}

function Section({ items, title }) {
    return (
        <div>
            <h1>{title}</h1>
            <div style={{ display: 'grid', gap: 24 }}>
                {items.map((item, i) => (
                    <Item {...item} key={`${title}-item-${i}`} />
                ))}
            </div>
        </div>
    )
}

function Item({ href, company, date, description, position, data }) {
    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <h2>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href={href}
                        style={{
                            display: 'flex',
                        }}
                    >
                        <div>
                            <div style={{ position: 'relative', zIndex: 2 }}>
                                {company}
                            </div>
                            <div
                                style={{
                                    borderBottom: '1px solid #adb5bd',
                                    position: 'relative',
                                    bottom: 2,
                                    zIndex: 1,
                                }}
                            />
                        </div>
                        <img
                            style={{
                                width: 8,
                                top: -8,
                                left: 2,
                                position: 'relative',
                            }}
                            src={externalLink}
                            alt="external link"
                        />
                    </a>
                </h2>
                <div>{date}</div>
            </div>
            {description ? (
                <div className="position">{position}</div>
            ) : (
                <div className="position" style={{ marginBottom: 0 }}>
                    {position}
                </div>
            )}
            {description && (
                <div className="organization-description">{description}</div>
            )}
            {data && <div className="job-description">{data}</div>}
        </div>
    )
}

export default App
