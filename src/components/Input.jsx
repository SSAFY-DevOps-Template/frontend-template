import styled from 'styled-components';

const Input = styled.input`
  width: ${(props) => (props.width ? props.width : '20rem')};
  height: ${(props) => (props.height ? props.height : '2rem')};
`;

export default Input;
