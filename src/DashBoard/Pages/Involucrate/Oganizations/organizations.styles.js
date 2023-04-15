import styled from "styled-components";

export const SubmitList = styled.div`
display: flex;
flex-direction: column;
gap: 30px;
.blogHeader {
 display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;


  thead {
    th {
      text-align: left;
      padding: 30px 0;
    }
  }

  tbody {
    tr {
      display: table-row;
      width: auto;
      white-space: nowrap;
    }

    td {
      padding: 0.8rem 0;
      vertical-align: center;
      border-top: 1px solid #dee2e6;
    }
  }
  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
`;