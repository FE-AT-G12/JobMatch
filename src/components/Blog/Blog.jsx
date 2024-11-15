import React from 'react'
import { Card } from 'antd' // Import Divider from Ant Design
import { Link } from 'react-router-dom' // Ensure you import Link from react-router-dom
import { useGetBlogListQuery } from '../../features/blog/blogApi'
export default function Blog() {
  const { data: blog = [], error, isLoading } = useGetBlogListQuery()
  const sortedBlog = blog
    ?.slice()
    .sort((a, b) => a.category.localeCompare(b.category))
  const displayedCategories = new Set()
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (

    <div>
      {sortedBlog.length > 0 ? (
        sortedBlog.map((blogItem, index) => {
          const categoryDisplayed = displayedCategories.has(blogItem.category)
          if (!categoryDisplayed) {
            displayedCategories.add(blogItem.category)
          }
          return (
            <div key={index}>
              {!categoryDisplayed && <h1>{blogItem.category}</h1>}
              <div >
                <Link to={`/blog/${blogItem.id}`}>
                  <Card style={{
                    width: '100%',
                    background: 'rgba(0, 0, 0, 0)',
                    borderBottom: '2px solid #000',
                    marginBottom: '10px',
                    borderRadius: '0',
                  }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                      <div style={{
                        width: '70%',
                      }}>
                        <div>
                          <h4>{blogItem.title}</h4>
                        </div>
                        <div>
                          <p>{blogItem.description}</p>
                        </div>
                      </div>
                      <div>
                        <img src={blogItem.thumbnail} style={{
                          height: '150px',
                          borderRadius: '5px',
                        }} />
                      </div>
                    </div>
                  </Card>
                </Link>
              </div>
            </div>
          )
        })
      ) : (
        <div>No blog items available</div>
      )}
    </div>

  )
}
