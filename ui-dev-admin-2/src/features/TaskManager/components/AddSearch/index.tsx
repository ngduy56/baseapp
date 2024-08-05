import { Button, TextField, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import SearchInput from 'common/components/SearchInput';
import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import { useStyles } from './style';
import { useStyles as useGlobalStyles } from 'layouts/MainLayout/style';
import { useAppDispatch } from 'app/hooks';
import { searchTask } from 'features/TaskManager/store/taskManagerSlice';
import { debounce } from 'lodash';

function AddSearchTask() {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleNewTask = () => {
    navigate('new');
  };

  const debouncedSearch = useRef(
    debounce(value => {
      dispatch(searchTask(value))
    }, 300)
  ).current;

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value)
  };

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  return (
    <Typography component="div" className={classes['add-search-task']}>
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        color="primary"
        className={classes.btn}
        onClick={handleNewTask}
      >
        New task
      </Button>
      <Typography component="div" className={globalClasses.search}>
        <TextField
          type="search"
          variant="outlined"
          label="Search by task name"
          color="secondary"
          className={globalClasses['search__input']}
          onChange={handleSearch}
        />
        <SearchIcon className={globalClasses['search__icon']} />
      </Typography>
    </Typography>
  );
}

export default AddSearchTask;
