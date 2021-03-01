import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import DataTable, { defaultThemes } from 'react-data-table-component';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import FullScreenAvtar from "./FullScreenAvtar/FullScreenAvtar";
import FilterComponent from "./FilterComponent/FilterComponent";
import { ConditionalRowStyles, CustomStyles } from "./Utils/Utils"
import { config, URL } from "../API/ApiConfig";
import ErrorPage from "./ErrorPage/ErrorPage";
import createPersistedState from 'use-persisted-state';
const useCounterState = createPersistedState('persistedTableData');
const Button = styled.button`
font-size: 1em;
text-align: center;
color: #003865;
`;

function EmployeeDetails() {

  const [tableData, setTableData] = useState([]);
  const [avatar, setAvatar] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedColor, setColor] = useState("");
  const [selectedRow, setSelectedRow] = useState(null);
  const [isError, setError] = useState(false);
  const [filterText, setFilterText] = useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const [persistedTableData, setPersistedTableData] = useCounterState("");

  useEffect(() => {
    if (selectedRow && selectedColor) {
      const updatedData = tableData.map(item => {
        if (selectedRow.uuid === item.uuid) {
          return {
            ...item,
            color: selectedColor
          };
        }
        return item;
      });
      setTableData(updatedData);
      setPersistedTableData(updatedData);
    }
  }, [selectedRow, selectedColor]);

  const handleAdd = (labelData, row) => {
    labelData.preventDefault();
    const data = new FormData(labelData.target);
    const updatedData = tableData.map(item => {
      if (row.uuid === item.uuid) {
        return {
          ...item,
          label: data.get('label')
        };
      }
      return item;
    });
    setTableData(updatedData);
    setPersistedTableData(updatedData);
  }
  const columns = [
    {
      name: 'Avatar',
      selector: 'avatar',
      grow: 0,
      cell: row => { if (row.avatar == "http://httpstat.us/503" || row.avatar == "0") { return "Avatar Not Available" } else { return <img height="84px" onClick={() => showFullAvtar(row)} width="56px" alt={row.name} src={row.avatar} /> } },
    },
    ,
    {
      name: 'Name',
      selector: 'name',
      sortable: true,
      width: '10%',
    },
    {
      name: 'Bio',
      selector: 'bio',
      sortable: false,
      width: '40%',
      grow: 0,
      cell: row => <ReactMarkdown escapeHtml={false} source={row.bio} />,
    },
    {
      name: 'Company',
      selector: 'company',
      sortable: true,
      width: '10%',
    },
    {
      name: 'Choose Color',
      grow: 0,
      width: '10%',
      cell: row => <select name={row.uuid} id={row.uuid} onChange={(e) => { setSelectedRow(row); setColor(e.target.value) }} value={row.color}><option value="">Select Color</option><option value="red">Red</option><option value="blue">Blue</option><option value="green">Green</option></select>
    },
    {
      name: 'Add Label',
      grow: 0,
      width: '20%',
      cell: row => <form id={row.uuid} onSubmit={(e) => handleAdd(e, row)}>
        <InputGroup>
          <FormControl name="label" placeholder="Enter Label" />
          <Button variant="outline-secondary" type="submit">Add</Button>
        </InputGroup></form>
    },
  ];
  const showFullAvtar = (rowData) => {
    setAvatar(rowData.avatar)
    setShowModal(true);
  }

  let filteredItems;
  filteredItems = tableData;
  if (filterText) {
    filteredItems = tableData.filter(item => item.label && item.label.toLowerCase().includes(filterText.toLowerCase()));
  }

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText('');
      }
    };

    return <FilterComponent onFilter={e => { setFilterText(e.target.value) }} onClear={handleClear} filterText={filterText} />;
  }, [filterText, resetPaginationToggle]);

  useEffect(() => {
    if (persistedTableData) {
      setTableData(persistedTableData);
    } else {
      axios.get(URL, config)
        .then(function (response) {

          setTableData(response.data);

        })
        .catch(function (error) {
          setError(true);
        })
    }
  }, [])

  return (
    <>
      {isError ? <ErrorPage /> :
        <>
          <FullScreenAvtar showModalBollean={showModal} imagePath={avatar} />
          <DataTable
            title="Employee Details"
            columns={columns}
            pagination
            customStyles={CustomStyles}
            data={filteredItems}
            paginationTotalRows={100}
            paginationPerPage={20}
            conditionalRowStyles={ConditionalRowStyles}
            paginationResetDefaultPage={resetPaginationToggle}
            subHeader
            subHeaderComponent={subHeaderComponentMemo}
            overflowY={true}
            responsive={true}
          />
        </>
      }
    </>
  )
}

export default EmployeeDetails; 