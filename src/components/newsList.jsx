import React from 'react'


function getDateString(dateTimeStr) {
    return new Date(dateTimeStr).toDateString();
}

const NewsItem = ({ item }) => (
    <div className='card mb-4'>
        {item.urlToImage && (
            <img
                className='card-img-top'
                src={item.urlToImage}
                alt={item.title}
            />
        )}
        <div className="card-body">
            <a href={item.url} target="_blank" rel="noreferrer" style={{ color: '#424242' }}>
                <h5 className='card-title'>{item.title}</h5>
            </a>
            <a href={item.url} target="_blank" rel="noreferrer" style={{ color: '#424242' }}>
                {item.content}
            </a>
            <div className="mt-2 d-flex align-items-center">
                <small>
                    <strong>
                        published ad {getDateString(item.publishedAt)}
                    </strong>
                </small>
                <div
                    style={{
                        padding: '.25rem .05rem',
                        background: '#ededed',
                        color: '#424242',
                        borderRadius: '.25rem',
                        display: 'inline-block',
                        marginLeft:'auto'
                    }}
                >
                    <small>{item.source.name}</small>
                </div>
            </div>
        </div>
    </div>
)


export default function NewsList({ news }) {
    return (
        <div>
            {news && news.length === 0 && <p>Sorry There is no news</p>}
            {news && news.map(item => <NewsItem key={item.key} item={item} />)}
        </div>
    )
}
