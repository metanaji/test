import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
const TextField = styled.input`
  height: 32px;
  width: 200px;
  border-radius: 3px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid #00a3e0;
  padding: 0 32px 0 16px;
  &:hover {
    cursor: pointer;
  }`;

const ClearButton = styled(Button)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-color:#00a3e0;
  height: 34px;
  width: 32px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background:#00a3e0;
  color:#fff;
`;


function FilterComponent({ filterText, onFilter, onClear }) {
    return (
        <>
            <TextField id="search" type="text" placeholder="Filter By label you added" aria-label="Search Input" value={filterText} onChange={onFilter} />
            <ClearButton type="button" onClick={onClear}>X</ClearButton>
        </>
    )
}

export default FilterComponent;