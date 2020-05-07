
import GunGuideCarousel from './GunGuideCarousel'
import PopularArticles from './PopularArticles'
import ArticleList from './ArticleList'

const GunGuide = () => {
  const popularArticles = ARTICLES.slice(0, 6);

  return (
    <>
      <GunGuideCarousel />
      <PopularArticles articles={popularArticles} />
      <ArticleList articles={ARTICLES} />
    </>
  )
}

export default GunGuide;

const ARTICLES = [
  {
    title: 'Article Title Ipissit volesomnis',
    description: `Aecabore la si corerspedit occustium atiore eomquia quam eos repudandia sim quatiae dolor sunt porro.
    Aecabore la si corerspedit occustium atiore eomquia quam eos repudandia sim quatiae dolor sunt porro.`,
    date: '2020-05-06T20:52:28.076+00:00',
    imageUrl: '/img/articles/article-1.jpg'
  },
  {
    title: 'Article Title Ipissit volesomnis',
    description: `Aecabore la si corerspedit occustium atiore eomquia quam eos repudandia sim quatiae dolor sunt porro.`,
    date: '2020-05-06T20:52:28.076+00:00',
    imageUrl: '/img/articles/article-2.jpg'
  },
  {
    title: 'Article Title Ipissit volesomnis',
    description: `Aecabore la si corerspedit occustium atiore eomquia quam eos repudandia sim quatiae dolor sunt porro.`,
    date: '2020-05-06T20:52:28.076+00:00',
    imageUrl: '/img/articles/article-3.jpg'
  },
  {
    title: 'Article Title Ipissit volesomnis',
    description: `Aecabore la si corerspedit occustium atiore eomquia quam eos repudandia sim quatiae dolor sunt porro.`,
    date: '2020-05-06T20:52:28.076+00:00',
    imageUrl: '/img/articles/article-4.jpg'
  },
  {
    title: 'Article Title Ipissit volesomnis',
    description: `Aecabore la si corerspedit occustium atiore eomquia quam eos repudandia sim quatiae dolor sunt porro.`,
    date: '2020-05-06T20:52:28.076+00:00',
    imageUrl: '/img/articles/article-5.jpg'
  },
  {
    title: 'Article Title Ipissit volesomnis',
    description: `Aecabore la si corerspedit occustium atiore eomquia quam eos repudandia sim quatiae dolor sunt porro.`,
    date: '2020-05-06T20:52:28.076+00:00',
    imageUrl: '/img/articles/article-6.jpg'
  },
  {
    title: 'Article Title Ipissit volesomnis',
    description: `Aecabore la si corerspedit occustium atiore eomquia quam eos repudandia sim quatiae dolor sunt porro.`,
    date: '2020-05-06T20:52:28.076+00:00',
    imageUrl: '/img/articles/article-7.jpg'
  },
  {
    title: 'Article Title Ipissit volesomnis',
    description: `Aecabore la si corerspedit occustium atiore eomquia quam eos repudandia sim quatiae dolor sunt porro.`,
    date: '2020-05-06T20:52:28.076+00:00',
    imageUrl: '/img/articles/article-8.jpg'
  },
  {
    title: 'Article Title Ipissit volesomnis',
    description: `Aecabore la si corerspedit occustium atiore eomquia quam eos repudandia sim quatiae dolor sunt porro.`,
    date: '2020-05-06T20:52:28.076+00:00',
    imageUrl: '/img/articles/article-9.jpg'
  }
]