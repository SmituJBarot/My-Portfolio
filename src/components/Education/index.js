
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
    padding: 20px 0px 60px 0px;
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
    padding: 40px 0px 0px 0px;
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
    @media (max-width: 660px) {
        align-items: end;
    }
`;



const index = () => {
    return (
        <Container id="education">
            <Wrapper>
                <Title>Education & Certifications</Title>
                <Desc>
                    My education has been a journey of self-discovery and growth. My educational details are as follows.
                </Desc>
                <TimelineSection>
                <VerticalTimeline>
                <VerticalTimelineElement
                     className="vertical-timeline-element--work"
                     contentStyle={{ background: 'rgba(0,0,0,0.3)', color: '#b1b2b3', border: '0.1px solid #854CE6', boxshadow: 'rgba(23, 92, 230, 0.15) 0px 4px 24px', borderRadius: '10px',}}
                     contentArrowStyle={{ borderRight: '10px solid #808080 '}}
                     date="2024 - 2024"
                     iconStyle={{ background: '#854CE6', height:'15px', width:'15px', marginLeft:'-7px', marginTop:'25px'}}>
                     <h3 className="vertical-timeline-element-title" style={{color:'#fff',fontWeight:'600', fontSize:'18px',}}>Enterprise Design Thinking Practitioner</h3>
                     <h5 className="vertical-timeline-element-subtitle" style={{color:'#b1b2b3',fontWeight:'500', fontSize:'14px',}}>IBM Skill Build, Canada</h5>
                     <p>
                     I completed Enterprise Design Thinking Practitioner course from IBM.I learned essential skills to apply design thinking methodologies in complex business environments. I also gained proficiency in empathizing with users, defining problem statements, and ideating innovative solutions to address user needs effectively. 
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                     className="vertical-timeline-element--work"
                     contentStyle={{ background: 'rgba(0,0,0,0.3)', color: '#b1b2b3', border: '0.1px solid #854CE6', boxshadow: 'rgba(23, 92, 230, 0.15) 0px 4px 24px', borderRadius: '10px',}}
                     contentArrowStyle={{ borderRight: '10px solid #808080 '}}
                     date="2023 - 2023"
                     iconStyle={{ background: '#854CE6', height:'15px', width:'15px', marginLeft:'-7px', marginTop:'25px'}}>
                     <h3 className="vertical-timeline-element-title" style={{color:'#fff',fontWeight:'600', fontSize:'18px',}}>SAFe® 6 DevOps Practitioner Certification</h3>
                     <h5 className="vertical-timeline-element-subtitle" style={{color:'#b1b2b3',fontWeight:'500', fontSize:'14px',}}>Scaled Agile, Canada</h5>
                     <p>
                     I completed SAFe® 6 DevOps Practitioner certification from Scaled Agile.This certification equips me with the skills to implement DevOps principles effectively, streamline value delivery, and accelerate time-to-market in large-scale agile environments.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                     className="vertical-timeline-element--work"
                     contentStyle={{ background: 'rgba(0,0,0,0.3)', color: '#b1b2b3', border: '0.1px solid #854CE6', boxshadow: 'rgba(23, 92, 230, 0.15) 0px 4px 24px', borderRadius: '10px',}}
                     contentArrowStyle={{ borderRight: '10px solid #808080 '}}
                     date="2023 - 2023"
                     iconStyle={{ background: '#854CE6', height:'15px', width:'15px', marginLeft:'-7px', marginTop:'25px'}}>
                     <h3 className="vertical-timeline-element-title" style={{color:'#fff',fontWeight:'600', fontSize:'18px',}}>SAFe® 6 Agilist Certification</h3>
                     <h5 className="vertical-timeline-element-subtitle" style={{color:'#b1b2b3',fontWeight:'500', fontSize:'14px',}}>Scaled Agile, Canada</h5>
                     <p>
                     I completed SAFe® 6 Agilist certification from Scaled Agile. By mastering agile methodologies and lean-agile leadership, I can drive innovation and adaptability within workplace.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                     className="vertical-timeline-element--work"
                     contentStyle={{ background: 'rgba(0,0,0,0.3)', color: '#b1b2b3', border: '0.1px solid #854CE6', boxshadow: 'rgba(23, 92, 230, 0.15) 0px 4px 24px', borderRadius: '10px',}}
                     contentArrowStyle={{ borderRight: '10px solid #808080 '}}
                     date="2018 - 2020"
                     iconStyle={{ background: '#854CE6', height:'15px', width:'15px', marginLeft:'-7px', marginTop:'25px'}}>
                     <h3 className="vertical-timeline-element-title" style={{color:'#fff',fontWeight:'600', fontSize:'18px',}}>Master of Information Technology</h3>
                     <h5 className="vertical-timeline-element-subtitle" style={{color:'#b1b2b3',fontWeight:'500', fontSize:'14px',}}>CQ University, Australia</h5><br />
                     GPA : 3.30
                     <p>
                     I completed my master's at Central Queensland University(CQU), Australia where I learned Mobile Application Development, Networks and Information Security and Software Design and Development.
                    </p>
                    <p style={{fontWeight:'bold',}}>Skills:</p> • Mobile Application Development • Networks and Information Security • Software Design and Development • Artificial Intelligence • Information Systems and Analysis • Project Management 
                </VerticalTimelineElement>
                <VerticalTimelineElement
                     className="vertical-timeline-element--work"
                     contentStyle={{ background: 'rgba(0,0,0,0.3)', color: '#b1b2b3', border: '0.1px solid #854CE6', boxshadow: 'rgba(23, 92, 230, 0.15) 0px 4px 24px', borderRadius: '10px',}}
                     contentArrowStyle={{ borderRight: '10px solid #808080 '}}
                     date="2012 - 2016"
                     iconStyle={{ background: '#854CE6', height:'15px', width:'15px', marginLeft:'-7px', marginTop:'25px'}}>
                     <h3 className="vertical-timeline-element-title" style={{color:'#fff',fontWeight:'600', fontSize:'18px',}}>Bachelor of Engineering [BE] (Information Technology)</h3>
                     <h5 className="vertical-timeline-element-subtitle" style={{color:'#b1b2b3',fontWeight:'500', fontSize:'14px',}}>Gujarat Technology University, India</h5><br />
                     CGPA : 7.69
                     <p>
                     I completed my bachelor's at Gujarat Technology University(GTU), India where I studied C/C++, Core Java, Advance Java, HTML, CSS, Javascript, SQL, RDBMS.
                    </p>
                    <p style={{fontWeight:'bold',}}>Skills:</p> • Engineering Graphics & Design • Database Management Systems • Object-Oriented Programming • Web Development • Mobile Application Development • Wireless Communication  • Software Engineering 
                </VerticalTimelineElement>
                </VerticalTimeline>

                </TimelineSection>
            </Wrapper>
        </Container>
    )
}

export default index