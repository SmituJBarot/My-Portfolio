import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'web design' ?
            <ToggleButton active value="web design" onClick={() => setToggle('web design')}>WEB DESIGN</ToggleButton>
            :
            <ToggleButton value="web design" onClick={() => setToggle('web design')}>WEB DESIGN</ToggleButton>
          }
          <Divider />
          {toggle === 'frontend app' ?
            <ToggleButton active value="frontend app" onClick={() => setToggle('frontend app')}>FRONT-END APP</ToggleButton>
            :
            <ToggleButton value="frontend app" onClick={() => setToggle('frontend app')}>FRONT-END APP</ToggleButton>
          }
          <Divider />
          {toggle === 'fullstack app' ?
            <ToggleButton active value="fullstack app" onClick={() => setToggle('fullstack app')}>FULL-STACK APP</ToggleButton>
            :
            <ToggleButton value="fullstack app" onClick={() => setToggle('fullstack app')}>FULL-STACK APP</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects