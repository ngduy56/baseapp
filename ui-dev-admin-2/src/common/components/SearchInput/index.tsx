import { Typography, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useStyles } from 'common/components/SearchInput/style';

type Props = {
  title: string;
  searchValue: string;
  handleSearch: (e: HTMLInputElement) => void;
};

function SearchInput({ title, searchValue, handleSearch}: Props) {
  const classes = useStyles();
  return (
    <Typography component="div" className={classes.search}>
      <TextField
        type="search"
        variant="outlined"
        label={title}
        color="secondary"
        className={classes['search__input']}
        value={searchValue}
        onChange={(e) => handleSearch}
      />
      <SearchIcon className={classes['search__icon']} />
    </Typography>
  );
}

export default SearchInput;
