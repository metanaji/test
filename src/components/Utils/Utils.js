import styled from 'styled-components';
import { defaultThemes } from 'react-data-table-component';
export const ConditionalRowStyles = [
    {
        when: row => row.color === "red",
        style: {
            backgroundColor: '#ffcccb',
            color: '#000',
        },
    },
    {
        when: row => row.color === "green",
        style: {
            backgroundColor: '#d0f0c0',
            color: '#000',
        },
    },
    {
        when: row => row.color === "blue",
        style: {
            backgroundColor: '#d1edf2',
            color: '#000',
        },
    },
];

export const CustomStyles = {
    header: {
        style: {
            minHeight: '56px',
            background: '#003865',
            color: '#fff',
        },
    },
    headRow: {
        style: {
            borderTopStyle: 'solid',
            borderTopWidth: '1px',
            borderTopColor: defaultThemes.default.divider.default,
        },
    },
    headCells: {
        style: {
            borderRightStyle: 'solid',
            borderRightWidth: '1px',
            borderRightColor: defaultThemes.default.divider.default,
            fontWeight: 'bold',
            background: '#43b02a',
            color: '#fff',
            border: '1px solid 0,0,0,.12',
        },
    },
    cells: {
        style: {
            '&:not(:last-of-type)': {
                borderRightStyle: 'solid',
                borderRightWidth: '1px',
                borderRightColor: defaultThemes.default.divider.default,
                padding: '5px',
            },
        },
    },
};

export const Button = styled.button`
  font-size: 1em;
  text-align: center;
  color: #fff;
  background:#f2a900;
  border:1px solid #f2a900;
  padding:.3rem;
`;
export const FormControl = styled.input`
  font-size: 1em;
  text-align: left;
  color: #003865;
  border:1px solid #f2a900;
  padding:.3rem;
  @media (max-width: 778px) {
    width:60%;
  } 
`;
export const Select = styled.select`
  font-size: 1em;
  text-align: left;
  color: #003865;
  border:1px solid #f2a900;
  padding:.3rem;
  @media (max-width: 778px) {
    width:30px;
  } 
`;