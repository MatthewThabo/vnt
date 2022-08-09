import React from "react";
// import './Services.css';
import styled from 'styled-components';
import { ServicesImages } from '../Data';

const Services = () => {
    return (
        <Wrapper>
            {ServicesImages.map((data) => (
                <div key={data.id}>
                        <Movie>
                            <Img img src={data.img} alt="photos" />
                            <Movieinfo>
                                <Text>{data.title}</Text>
                                <p>{data.info}</p>
                            </Movieinfo>
                        </Movie>
                </div>   
            ))}
        </Wrapper>
    )
};

export default Services;

const Wrapper = styled.ul`
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: center; 
    position: relative;
    z-index: 2;
`;

const Movie = styled.section`
    width: 200px;
    margin: 1rem;
    border-radius: 3px;
    box-shadow: 0.2px 4px 5px rgba(0,0,0,0.4);
    background-color: rgba(0, 0, 0, 0.7);
    position:relative;
    overflow: hidden;
`;

const Img = styled.img`
    width:100%;
    cursor: pointer;
`;

const Movieinfo = styled.div`
    color:tomato;
    /* display: flex; */
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem 1rem;
`;
const Text = styled.h3`
    margin-top: 0;
`;

