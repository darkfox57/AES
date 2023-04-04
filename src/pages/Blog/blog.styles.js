import styled from "styled-components";

export const BlogBody = styled.section`
    width: 100%;
    padding: var(--section-padding);
    place-items: center;
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
`