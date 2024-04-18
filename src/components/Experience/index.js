
import React from 'react'
import styled from 'styled-components'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 0px 0px 0px 0px;
    @media (max-width: 960px) {
        padding: 0px;
    }
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 80px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

const TimelineSection = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
`;



const index = () => {
    return (
        <Container id="experience">
            <Wrapper>
                <Title>Experience</Title>
                <Desc>
                    My work experience as a software engineer and working on different companies and projects.
                </Desc>
                <TimelineSection>
                <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgba(0,0,0,0.3)', color: '#b1b2b3', border: '0.1px solid #854CE6', boxshadow: 'rgba(23, 92, 230, 0.15) 0px 4px 24px', borderRadius: '10px',}}
                    contentArrowStyle={{ borderRight: '10px solid #808080 '}}
                    date="Nov 2021 - present"
                    iconStyle={{ background: '#854CE6', height:'15px', width:'15px', marginLeft:'-7px',marginTop:'23px'}}>
                    <h3 className="vertical-timeline-element-title" style={{color:'#fff',fontWeight:'600', fontSize:'18px',}}>Web Developer & Designer</h3>
                    <h5 className="vertical-timeline-element-subtitle" style={{color:'#b1b2b3',fontWeight:'500', fontSize:'14px',}}>8.Dots, India</h5>
                    <p>
                    I've worked as a web developer and designer, collaborating with clients to create visually stunning and user-friendly websites. Using HTML, CSS, and JavaScript, I've built responsive interfaces and integrated design principles for seamless navigation. I've also partnered with back-end developers to implement dynamic features and conducted rigorous testing for optimal performance. Through ongoing support and communication, I've maintained strong client relationships and provided valuable insights to achieve their digital objectives.
                    </p> 
                    <p style={{fontWeight:'bold',}}>Skills:</p> • Front-End Development • UI/UX Design • Back-End Integration • Testing and Optimization • Maintenance and Support • Client Collaboration

                </VerticalTimelineElement>
                </VerticalTimeline>
                </TimelineSection>
            </Wrapper>
        </Container>
    )
}

export default index