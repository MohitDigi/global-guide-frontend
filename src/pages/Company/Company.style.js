import styled from 'styled-components';

export const Container = styled.div`
  background-color: #ffffff;
  padding: 16px;
  border-radius: 6px;
  /* max-width: 1152px;
  width: 100%;
  max-height: 864px; */
  height: 100%;
  overflow: auto;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  .latest-created {
    height: 41px;
  }
  .name-search {
    height: 41px;
    &.ant-input-filled {
      background: #f5f6fa;
    }
  }
  .create {
    max-width: 143px;
    width: 100%;
    height: 41px;
    line-height: 17px;
  }
  h3 {
    font-size: 18px;
    font-weight: 600;
    color: #1b1b1b;
    margin: 0;
  }
  .pagination {
    padding: 24px;
    text-align: right;
  }
  .ant-table-wrapper .ant-table-container {
    min-height: 465px;
    height: 100%;
  }
  .table-header {
    display: flex;
    justify-content: space-between;
    padding-bottom: 1.25rem;
    padding-top: 1.25rem;
  }
  .search-input {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  .ant-input-affix-wrapper-lg {
    padding: 11px;
  }
`;

export default {
  Container,
};
