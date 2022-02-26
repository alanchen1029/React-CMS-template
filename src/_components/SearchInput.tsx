import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Input from '@mui/material/Input';

interface IProps
{
  value: string;
  getSearchingKeyword: (keyword: string) => void;
}

const ariaLabel = { 'aria-label': 'description' };

export const SearchInput = ({ value, getSearchingKeyword }: IProps): JSX.Element =>
{
  return (
    <div className="input search-input">
      <SearchIcon />
      <Input
        placeholder="Search ..."
        inputProps={ariaLabel}
        value={value}
        onChange={(e) => getSearchingKeyword(e.target.value)}
      />
    </div>
  )
}