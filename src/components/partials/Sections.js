import styled from "styled-components";

const MinDiv = styled.main`
    min-height: calc(100vh - 143px - 397px);
    max-width: calc(100vw - 100px);
    left: 0;
    border: 1px solid lightgrey;
    border-left: 0;
    border-bottom: 0;
    border-top: 0;
    overflow: hidden;
`;

const MinDivBorder = styled.div`
    margin-left: 100px;
    border-top: 1px solid #000000;
`;

export { MinDivBorder };