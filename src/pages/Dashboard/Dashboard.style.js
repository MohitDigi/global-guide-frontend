import styled from 'styled-components';

const Wrapper = styled.div`
  .analytics-wrapper {
    .stats-container {
      background: #fff;
      border-radius: 8px;
      padding: 12px !important;
      min-width: 24%;
      color: #1b1b1b;
      @media (max-width: 991px) {
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      /* gap: 47px;
      display: flex;
      flex-direction: column;
      justify-content: space-between; */
      .stats-info {
        display: flex;
        justify-content: space-between;
        padding-bottom: 40px;
        @media (max-width: 991px) {
          padding-bottom: 20px;
        }
        .stats-title {
          color: #1b1b1b;
          text-wrap: nowrap;
          padding-bottom: 12px;
          font-size: 16px;
          font-weight: 400;
          @media (max-width: 1200px) {
            font-size: 13px;
          }
          @media (max-width: 1024px) {
            font-size: 12px;
          }
          @media (max-width: 991px) {
            font-size: 14px;
          }
        }
        .icon-container {
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 50px;
            height: 50px;
            @media (max-width: 1200px) {
              width: 40px;
              height: 40px;
              margin-left: 5px;
            }
            @media (max-width: 991px) {
              width: 45px;
              height: 45px;
              margin-left: 5px;
            }
          }
        }
        .stats-desc {
          font-size: 26px;
          font-weight: 700;
          letter-spacing: 1px;
          color: #1b1b1b;
          @media (max-width: 1418px) {
            font-size: 24px;
          }
          @media (max-width: 1318px) {
            font-size: 22px;
          }
          @media (max-width: 1266px) {
            font-size: 20px;
          }
          @media (max-width: 1116px) {
            font-size: 18px;
          }
          @media (max-width: 991px) {
            font-size: 20px;
          }
        }
      }
      .recent-stats-trend {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 16px;
        font-weight: 400;
        @media (max-width: 1210px) {
          font-size: 12px;
        }
        @media (max-width: 1006px) {
          font-size: 11px;
        }
        @media (max-width: 991px) {
          font-size: 14px;
        }
        .trend-highlight {
          display: flex;
          align-items: center;
          color: #00b69b;
          gap: 6px;
          @media (max-width: 1024px) {
            gap: 3px;
          }
          svg {
            @media (max-width: 1418px) {
              width: 22px;
              height: 22px;
            }
            @media (max-width: 1318px) {
              width: 20px;
              height: 20px;
            }
            @media (max-width: 1266px) {
              width: 18px;
              height: 18px;
            }
            @media (max-width: 1165px) {
              width: 16px;
              height: 16px;
            }
            @media (max-width: 1116px) {
              width: 14px;
              height: 14px;
            }
          }
        }
      }
    }
    @media (max-width: 991px) {
      row-gap: 40px;
    }
  }

  .shipment-section {
    background: #fff;
    padding: 16px;
    border-radius: 8px;
    .shipment-title {
      font-size: 18px;
      font-weight: 600;
      color: #1b1b1b;
    }
    .shipment-header {
      padding: 18px 0;
      .shipment-input {
        max-width: 370px;
        width: 100%;
        height: 39px;
        padding: 10px 11px;
        &.ant-input-filled {
          background: #f5f6fa;
        }
      }
    }
  }
  .stats-graph-section {
    padding: 30px 0;
    display: flex;
    .stats-side-section {
      background: #fff;
      border-radius: 8px;
      padding: 16px;
      @media (max-width: 991px) {
        width: 100%;
      }
      .outer-div {
        max-width: 136px;
        width: 100%;
        height: 304px;
        @media (max-width: 991px) {
          display: flex;
          width: 100%;
          max-width: none;
          height: auto;
          justify-content: space-between;
          column-gap: 20px;
        }
      }
      .stats-side-container {
        background: #fff;
        max-height: 25%;
        height: 100%;
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 16px 22px 16px 16px;
        &:not(:last-child) {
          border-bottom: solid 1px #d0d5dd;
        }
        @media (max-width: 991px) {
          flex: 1;
          padding: 16px;
        }
        @media (max-width: 991px) {
          &:not(:last-child) {
            border-bottom: 0px;
          }
          &:not(:last-child) {
            border-right: solid 1px #d0d5dd;
          }
        }
        .stats-side-value {
          font-size: 16px;
          color: #1b1b1b;
          font-weight: 700;
        }
        .stats-side-title {
          color: #667085;
          font-weight: 400;
        }
      }
    }

    @media (max-width: 991px) {
      display: block;
      .graph-wrapper {
        max-width: 100%;
        margin-bottom: 20px;
      }
    }

    @media (max-width: 1300px) {
      flex-flow: nowrap;
    }
  }
  .highcharts-credits {
    display: none;
  }
`;

export default {
  Wrapper,
};
