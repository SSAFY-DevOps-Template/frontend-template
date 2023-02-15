import styled from 'styled-components';

const Button = styled.button`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1rem')};
  color: ${(props) => (props.color ? props.color : 'white')};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : 'royalblue'};
  border: none;
  border-radius: 4px;
  width: ${(props) => (props.width ? props.width : 'auto')};
  height: ${(props) => (props.height ? props.height : '2rem')};
  cursor: pointer;
`;

export default Button;
