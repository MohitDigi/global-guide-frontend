import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  .ant-table-cell,
  .ant-table-thead > tr > th {
    text-align: left;
    /* height: 42px; */
    max-height: 41px;
    height: 100%;
    padding: 9px 8px;
  }
  .ant-table-tbody > tr > td {
    padding: 8px;  
  }
`;
const PopoverContent = styled.div`
  .actions {
    cursor: pointer;
    padding-block: 0.3rem;
    padding-right: 2rem;
    padding-left: 0.25rem;
  }
  .actions:hover {
    background-color: #fef8f8;
  }
`;

export default {
  Wrapper,
  PopoverContent,
};
