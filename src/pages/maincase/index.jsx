import React, { Fragment, useState, useRef } from 'react';
import {
  Container,
  Grid,
  Navbar,
  Card,
  Typography,
  styled,
  Box,
  Button,
  ButtonGroup,
  Paper,
  InputBase,
  IconButton,
  MenuList,
  MenuItem,
  Grow,
  Popper,
  Checkbox
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import Sidebar from '../../layout/sidebar'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ClickAwayListener from '@mui/material/ClickAwayListener';

import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';

const options = [
  'Not submitted', 
  'Submitted to bank', 
  'Submitted to credit', 
  'Awaiting pre-approval',
  'Pre-approved',
  'Valuation initiated',
  'FOL requested',
  'FOL signed',
  'Disbursed'
];

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const NavBar = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
}))

const CreateButton = styled(Button)(({theme})=>({
  maxWidth: '230px',
  width: '100%',
  height: '40px',
  padding: '5px 10px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textTransform: 'none',
  background: '#6E4EE7',
  color: 'white',
  '&:hover': {
    boxShadow: '0px 0px 10px black',
    color: 'black'
  }
}))

const CustHeader = styled(Box)(({theme})=>({
  width: '100%',
  height: '10%',
  padding: '10px 0px 0px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}))

const CustTypography = styled(Typography)(({theme}) =>({
  textTransform: 'none',
}))

const TabTitle = styled(Typography)(({theme}) => ({
  textTransform: 'none',
}))

const TabButton = styled(Button)(({theme}) => ({
  color:theme.palette.text.secondary,
  display:'flex',
  '&:focus':{
    color:'#6E4EE7',
    fontWeight:600,
    borderBottom:'5px solid #6E4EE7',
    borderColor:'none',
    'div': {
      borderRadius: '0px',
      width: '30px',
      background: '#6E4EE7',
      color: 'white',
      padding:'0px 3px',
      marginLeft:'10px'
    }
  },
}))

function createData(name, created, loan, bank, status) {
  return {
    name,
    created,
    loan,
    bank,
    status,
  };
}

const row = [
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Donut', 452, 25.0, 51, 4.9),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Honeycomb', 408, 3.2, 87, 6.5),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Jelly Bean', 375, 0.0, 94, 0.0),
  createData('KitKat', 518, 26.0, 65, 7.0),
  createData('Lollipop', 392, 0.2, 98, 0.0),
  createData('Marshmallow', 318, 0, 81, 2.0),
  createData('Nougat', 360, 19.0, 9, 37.0),
  createData('Oreo', 437, 18.0, 63, 4.0),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Name',
  },
  {
    id: 'created',
    numeric: true,
    disablePadding: false,
    label: 'Created on',
  },
  {
    id: 'loan',
    numeric: true,
    disablePadding: false,
    label: 'Loan amount',
  },
  {
    id: 'bank',
    numeric: true,
    disablePadding: false,
    label: 'Bank',
  },
  {
    id: 'status',
    numeric: true,
    disablePadding: false,
    label: 'Status',
  },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Cases
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const MainCase = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('created');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = row.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Sidebar>
      <Box sx={{paddingBottom:'50px'}}>
        <Grid item xs={12} sm={12} ss={12} md={12} sx={{
          p: { sm: '20px', xs: '10px 0px 10px' },
          mt: { xs: '90px', sm: '0px' }
        }}>
          <CustHeader>
            <Box>
              <CustTypography variant='h4' sx={{
                color: 'black',
                fontSize: {sm: '48px', xs: '40px'}
              }}>
                Cases
              </CustTypography>
              <CustTypography variant='body1' sx={{
                color: 'black',
                fontSize: {sm: '16px', xs: '14px'}
              }}
              >
                Manage your clients
              </CustTypography>
            </Box>
            <Link to='/cases/create' style={{
              textDecoration: 'none'
            }}>
              <CreateButton>
                <Typography variant='h5'>+</Typography>
                  &nbsp;Create a case
              </CreateButton>
            </Link>
          </CustHeader>
        </Grid>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            width: '40%',
            '& > *': {
              m: 1,
            },
          }}
        >
          <ButtonGroup variant="text" aria-label="text button group" size='large' fullWidth>
            <TabButton>
              <TabTitle variant='body2'>All</TabTitle>
              <div>&nbsp;55</div>
            </TabButton>
            <TabButton>
              <TabTitle variant='body2'>Active cases</TabTitle>
              <div>&nbsp;47</div>
            </TabButton>
            <TabButton>
              <TabTitle variant='body2'>Not submitted</TabTitle>
              <div>&nbsp;8</div>
            </TabButton>
          </ButtonGroup>
        </Box>
        <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:'20px'}}>
          <Paper
            elevation={0}
            component="form"
            sx={{
                height: 36,
                border:'1px solid grey',
                width:'20%'
            }}
          >
            <div className="flex-1 p-1 m-1"></div>
            <InputBase
                placeholder="Search case..."
                inputProps={{ 'aria-label': 'search bitnorm' }}
                sx={{paddingLeft:'10px'}}
            />
            <IconButton
              size="small"
              type="submit"
              className='m-1 p-1'
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </Paper>
          <Paper 
            elevation={0}
            component="form"
          >
            ⇆ &nbsp;Filter by
          </Paper>
          <Fragment>
            <ButtonGroup ref={anchorRef} aria-label="split button">
              <Button sx={{textTransform:'none', color:'grey'}}>Status</Button>
              <Button
                size="small"
                aria-controls={open ? 'split-button-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-label="select merge strategy"
                aria-haspopup="menu"
                onClick={handleToggle}
              >
                <ArrowDropDownIcon />
              </Button>
            </ButtonGroup>
            <Popper
              sx={{
                zIndex: 1,
              }}
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === 'bottom' ? 'center top' : 'center bottom',
                  }}
                >
                  <Paper sx={{border:'1px solid grey'}}>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList id="split-button-menu" autoFocusItem>
                        {options.map((option, index) => (
                          <MenuItem
                            checked={true}
                            key={option}
                            selected={index === selectedIndex}
                            onClick={(event) => handleMenuItemClick(event, index)}
                          >
                            <Checkbox {...label} />
                            {option}
                          </MenuItem>
                        ))}
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </Fragment>
          <Button variant='outlined' sx={{textTransform:'none'}}>Pre approved (4)</Button>
          <Button variant='outlined' sx={{textTransform:'none'}}>Pending action (10)</Button>
        </Box>
        <Box sx={{marginTop:'30px', display:'flex', justifyContent:'flex-end'}}>
          <Button variant='outlined' sx={{borderRadius:'20px', textTransform:'none'}}>
            Show all
            <KeyboardArrowUpIcon />
          </Button>
        </Box>
        <Box sx={{ width: '100%' }}>
          <Paper sx={{ width: '100%', mb: 2 }}>
            <EnhancedTableToolbar numSelected={selected.length} />
            <TableContainer>
              <Table
                sx={{ minWidth: 750 }}
                aria-labelledby="tableTitle"
                size={'medium'}
              >
                <EnhancedTableHead
                  numSelected={selected.length}
                  order={order}
                  orderBy={orderBy}
                  onSelectAllClick={handleSelectAllClick}
                  onRequestSort={handleRequestSort}
                  rowCount={row.length}
                />
                <TableBody>
                  {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                    rows.slice().sort(getComparator(order, orderBy)) */}
                  {stableSort(row, getComparator(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      const isItemSelected = isSelected(row.name);
                      const labelId = `enhanced-table-checkbox-${index}`;

                      return (
                        <TableRow
                          hover
                          onClick={(event) => handleClick(event, row.name)}
                          role="checkbox"
                          aria-checked={isItemSelected}
                          tabIndex={-1}
                          key={row.name}
                          selected={isItemSelected}
                        >
                          <TableCell padding="checkbox">
                            <Checkbox
                              color="primary"
                              checked={isItemSelected}
                              inputProps={{
                                'aria-labelledby': labelId,
                              }}
                            />
                          </TableCell>
                          <TableCell
                            component="th"
                            id={labelId}
                            scope="row"
                            padding="none"
                          >
                            {row.name}
                          </TableCell>
                          <TableCell align="right">{row.created}</TableCell>
                          <TableCell align="right">{row.loan}</TableCell>
                          <TableCell align="right">{row.bank}</TableCell>
                          <TableCell align="right">{row.status}</TableCell>
                        </TableRow>
                      );
                    })}
                  {emptyRows > 0 && (
                    <TableRow
                      style={{
                        height: (53) * emptyRows,
                      }}
                    >
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </Box>
      </Box>
    </Sidebar>
  )
}

export default MainCase