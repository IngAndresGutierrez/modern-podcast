import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'

import { savePodcasts } from '@/redux/reducers/podcasts'
import { Search, SearchIconWrapper, StyledInputBase } from './styles'

const SearchPodcasts = () => {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('')
  const { podcastsCopy } = useSelector((state) => state.podcasts)

  useEffect(() => {
    searchByName()
  }, [inputValue])

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const searchByName = () => {
    const newPodcastList = [...podcastsCopy]

    const findedPodcasts = newPodcastList.filter((item) =>
      item['im:name']?.label?.toLowerCase()?.includes(inputValue?.toLowerCase())
    )

    dispatch(savePodcasts(findedPodcasts))
  }

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
  )
}

export default SearchPodcasts
