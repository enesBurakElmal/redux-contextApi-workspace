import styled from 'styled-components'

export const LeftContent = styled.div`
  max-width: 296px;
  width: 100%;
  max-height: 274px;
  height: 100%;
  display: flex;
  flex-direction: column;
  //   border: 1px solid;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  margin-bottom: 40px;
  padding: 50px;
  align-items: start;
  justify-content: start;
  text-align: start;
  background-color: white;
  overflow-x: hidden;
  overflow-y: auto;
  text-align: justify;
  ::-webkit-scrollbar {
    width: 4px;
    height: 28px !important;
  }
  ::-webkit-scrollbar-thumb {
    background-color: darkgrey;
  }
  -webkit-scrollbar-track {
    box-shadow: inset 0 0 15x rgba(0, 0, 0, 15);
  }
`
export const RadioContent = styled.div`
  padding: 5px;
`
