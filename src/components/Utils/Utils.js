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
            '&:not(:last-of-type)': {
                borderRightStyle: 'solid',
                borderRightWidth: '1px',
                borderRightColor: defaultThemes.default.divider.default,
            },
        },
    },
    cells: {
        style: {
            '&:not(:last-of-type)': {
                borderRightStyle: 'solid',
                borderRightWidth: '1px',
                borderRightColor: defaultThemes.default.divider.default,

            },
        },
    },
};