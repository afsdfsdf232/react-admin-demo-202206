import Mock from 'mockjs'

export default Mock.mock('/api/articles', 'get', req => {
  return {
    code: 0,
    message: '成功',
    data: {
      results: [{
          id: '8218',
          comment_count: 0,
          cover: {
            images: ['http://geek.itheima.net/resources/images/15.jpg'],
          },
          like_count: 0,
          pubdate: '2019-03-11 09:00:00',
          read_count: 2,
          status: 2,
          title: 'wkwebview离线化加载h5资源解决方案1'
        },
        {
          id: '8219',
          comment_count: 0,
          cover: {
            images: ['http://geek.itheima.net/resources/images/15.jpg'],
          },
          like_count: 0,
          pubdate: '2019-03-11 09:00:00',
          read_count: 2,
          status: 2,
          title: 'wkwebview离线化加载h5资源解决方案'
        },
        {
          id: '8220',
          comment_count: 0,
          cover: {
            images: ['http://geek.itheima.net/resources/images/15.jpg'],
          },
          like_count: 0,
          pubdate: '2019-03-11 09:00:00',
          read_count: 2,
          status: 2,
          title: 'wkwebview离线化加载h5资源解决方案'
        },
        {
          id: '8221',
          comment_count: 0,
          cover: {
            images: ['http://geek.itheima.net/resources/images/15.jpg'],
          },
          like_count: 0,
          pubdate: '2019-03-11 09:00:00',
          read_count: 2,
          status: 2,
          title: 'wkwebview离线化加载h5资源解决方案'
        },
        {
          id: '8222',
          comment_count: 0,
          cover: {
            images: ['http://geek.itheima.net/resources/images/15.jpg'],
          },
          like_count: 0,
          pubdate: '2019-03-11 09:00:00',
          read_count: 2,
          status: 2,
          title: 'wkwebview离线化加载h5资源解决方案'
        }
      ],
      total_count: 5
    }
  }

})