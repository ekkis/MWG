
import { useRouter } from 'next/router';

import ArticleHeader from './ArticleHeader'
import ArticleFooter from './ArticleFooter'
import ArticleContent from './ArticleContent';

const GunGuideArticle = () => {
  const router = useRouter();

  const article = ARTICLES[router.query.id - 1];
  return (
    <>
      <ArticleHeader article={article} />
      <ArticleContent article={article} />
      <ArticleFooter />
    </>
  )
}

export default GunGuideArticle;

const ARTICLES = [
  {
    id: 1,
    title: 'Article Title Ipissit volesomnis',
    description: `Aecabore la si corerspedit occustium atiore eomquia quam eos repudandia sim quatiae dolor sunt porro.
    Aecabore la si corerspedit occustium atiore eomquia quam eos repudandia sim quatiae dolor sunt porro.`,
    date: '2020-05-06T20:52:28.076+00:00',
    imageUrl: '/img/articles/article-1.jpg'
  },
  {
    id: 2,
    title: 'Article Title Ipissit volesomnis',
    description: `Aecabore la si corerspedit occustium atiore eomquia quam eos repudandia sim quatiae dolor sunt porro.`,
    date: '2020-05-06T20:52:28.076+00:00',
    imageUrl: '/img/articles/article-2.jpg'
  },
  {
    id: 3,
    title: 'Article Title Ipissit volesomnis',
    description: `Aecabore la si corerspedit occustium atiore eomquia quam eos repudandia sim quatiae dolor sunt porro.`,
    date: '2020-05-06T20:52:28.076+00:00',
    imageUrl: '/img/articles/article-3.jpg'
  },
  {
    id: 4,
    title: 'Article Title Ipissit volesomnis',
    description: `Aecabore la si corerspedit occustium atiore eomquia quam eos repudandia sim quatiae dolor sunt porro.`,
    date: '2020-05-06T20:52:28.076+00:00',
    imageUrl: '/img/articles/article-4.jpg'
  },
  {
    id: 5,
    title: 'Article Title Ipissit volesomnis',
    description: `Aecabore la si corerspedit occustium atiore eomquia quam eos repudandia sim quatiae dolor sunt porro.`,
    date: '2020-05-06T20:52:28.076+00:00',
    imageUrl: '/img/articles/article-5.jpg'
  },
  {
    id: 6,
    title: 'Article Title Ipissit volesomnis',
    description: `Aecabore la si corerspedit occustium atiore eomquia quam eos repudandia sim quatiae dolor sunt porro.`,
    date: '2020-05-06T20:52:28.076+00:00',
    imageUrl: '/img/articles/article-6.jpg'
  },
  {
    id: 7,
    title: 'Article Title Ipissit volesomnis',
    description: `Aecabore la si corerspedit occustium atiore eomquia quam eos repudandia sim quatiae dolor sunt porro.`,
    date: '2020-05-06T20:52:28.076+00:00',
    imageUrl: '/img/articles/article-7.jpg'
  },
  {
    id: 8,
    title: 'Article Title Ipissit volesomnis',
    description: `Aecabore la si corerspedit occustium atiore eomquia quam eos repudandia sim quatiae dolor sunt porro.`,
    date: '2020-05-06T20:52:28.076+00:00',
    imageUrl: '/img/articles/article-8.jpg'
  },
  {
    id: 9,
    title: 'Article Title Ipissit volesomnis',
    description: `Aecabore la si corerspedit occustium atiore eomquia quam eos repudandia sim quatiae dolor sunt porro.`,
    date: '2020-05-06T20:52:28.076+00:00',
    imageUrl: '/img/articles/article-9.jpg'
  }
]