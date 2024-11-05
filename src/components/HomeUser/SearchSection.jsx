import { SearchOutlined, EnvironmentOutlined } from '@ant-design/icons'
import './stylesHome/_search.scss'

function SearchSection({ input1, setInput1, input2, setInput2 }) {
  const handleSearch = () => {
    console.log('Search for:', input1, input2)
  }

  return (
    <div className='search'>
      <h1 className='slogan'>
        Tìm việc nhanh, kiếm tiền nhanh hơn với Job Match
      </h1>
      <div className='advanced-search'>
        <div className='search-group'>
          <div className='combined-input'>
            <div className='input-with-icon'>
              <SearchOutlined className='input-icon' />
              <input
                type='text'
                placeholder='Vị trí tuyển dụng'
                value={input1}
                onChange={(e) => setInput1(e.target.value)}
              />
            </div>
            <div className='input-with-icon'>
              <EnvironmentOutlined className='input-icon' />
              <input
                type='text'
                placeholder='Tất cả địa điểm'
                value={input2}
                onChange={(e) => setInput2(e.target.value)}
              />
            </div>
            <button className='button' onClick={handleSearch}>
              Tìm kiếm
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchSection
