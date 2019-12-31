import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (
        <div style={{ position: "relative", height: "auto", backgroundColor: "#005B9A", marginBottom: "0px", fontFamily: "comic sans" }}>
            <Row style={{ padding: "10px 0px" }}>
                <Col sm={6} md={2} style={{ padding: "5px" }}>
                    <SocialIcon url="https://www.instagram.com/sudhanshu__coder/" bgColor="#74C2E1" fgColor="white" target="_blank" rel="noopener noreferrer" />
                </Col>
                <Col sm={6} md={2} style={{ padding: "5px" }}>
                    <SocialIcon url="https://www.youtube.com/channel/UCjE9suTwwhmCgkKCwDXYpkg" bgColor="#74C2E1"
                        fgColor="white" target="_blank" rel="noopener noreferrer" />
                </Col>
                <Col sm={12} md={4} style={{ padding: "5px" }}>
                    <h1 style={{ fontSize: "16px", color: "white", padding: "20px" }}>Created by <a href="https://sudhanshu647.000webhostapp.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#74C2E1" }}>Sudhanshu Sharma</a></h1>
                </Col>
                <Col sm={6} md={2} style={{ padding: "5px" }}>
                    <SocialIcon url="https://www.facebook.com/sudhanshucoder/" bgColor="#74C2E1" fgColor="white" target="_blank" rel="noopener noreferrer" />
                </Col>
                <Col sm={6} md={2} style={{ padding: "5px" }}>
                    <SocialIcon url="https://www.linkedin.com/in/sudhanshu-sharma-8aa08517a/" bgColor="#74C2E1" fgColor="white" target="_blank" rel="noopener noreferrer" />
                </Col>
            </Row>
        </div>
    );
}

export default Footer;
