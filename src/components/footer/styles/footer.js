import styled from 'styled-components'

export const Container = styled.div`
    padding-top:8rem 10rem;
    background-color:rgb(238,132,109);
    padding-top:70vh;
    padding-bottom:10rem;
`;
export const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    max-width:1000px;
    margin:0px auto;
`;
export const Row = styled.div`
    display:grid;
    grid-template-columns:repeat(auto-fill, minmax(230px,1fr));
    grid-gap:20px;
`;
export const Column = styled.div`
display:flex;
flex-direction:column;
margin-left:30px;
`;
export const Link = styled.div`
    color:#fff;
    font-size:1rem;
    text-decoration:none;
    display:block;
    margin-bottom:10px;
`;
export const Title = styled.div`
    color:#f7f7f7;
    font-size:1.4rem;
    margin-bottom:1.4rem;
    font-weight:bold;
`;