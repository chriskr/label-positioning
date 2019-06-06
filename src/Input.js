import React from 'react';
import styled from 'styled-components';

const nop = () => null;

const StyledInput = styled.input`
  -webkit-appearance: none;
  background: none;
  border: 1px solid hsla(30, 56%, 20%, 0);
  color: hsla(30, 56%, 20%, 0.7);
  font: inherit;
  height: 32px;
  line-height: 1;
  margin: 0;
  padding: 0 8px;
  text-align: center;
  width: 2em;
  &:hover {
    background: white !important;
    border-color: hsla(30, 56%, 20%, 0.3) !important;
  }
`;

class Input extends React.Component {
  onInput = ({ target: { value } }) => this.setState({ value });
  state = {
    value: '',
  };

  submit = () => this.props.onChange && this.props.onChange(this.state.value);

  onKeyDown = event => {
    switch (event.key) {
      case 'Enter':
        this.submit();
        break;
    }
  };

  ref = React.createRef();
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
  }

  render() {
    const { onChange, placeholder } = this.props;

    return (
      <StyledInput
        type="text"
        value={this.state.value}
        placeholder={placeholder}
        onInput={this.onInput}
        onChange={nop}
        onKeyDown={this.onKeyDown}
      />
    );
  }
}

export default Input;
