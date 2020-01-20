import { 
  About,
  Solutions,
  Process, 
  Cases,
  SingleCase,
  Careers,
  Partners,
  Page404,
  SingleBlog,
  Blog } from '../containers';

const routes = [
  {
    path: '/',
    component: About,
    title: `Custom Software Development Company | REDNAVIS`,
    description: `REDNAVIS is one of the top custom software development companies focused on web and mobile application development. Our IT company is made up of Java experts for developing projects at all levels.`
  },
  {
    path: '/solutions',
    component: Solutions,
    title: `Custom Software Development Solutions | REDNAVIS`,
    description: `REDNAVIS provides bespoke software development services. We develop solutions for different industries like Fintech, Cloud, Big Data, AI, RPA, IoT, Ad Tech.`
  },
  {
    path: '/process',
    component: Process,
    title: `Engagement Models & Cooperation Models | REDNAVIS`,
    description: `We offer a wide range of engagement models to reflects clients and project needs. We are flexible in using such cooperation models as a dedicated team, fixed price, TM.`
  },
  {
    path: '/cases',
    component: Cases,
    title: `Software Development Case Studies | REDNAVIS`,
    description: `Take a look at our best case studies in web and mobile app development. REDNAVIS portfolio describes software development projects for different industries like Fintech, Cloud, Big Data, AI, RPA, IoT, Ad Tech.`
  },
  {
    path: '/partners',
    component: Partners,
    title: `Business Development Software Company Partnership | REDNAVIS`,
    description: `REDNAVIS delivers perfect software. This is partly due to our expert team and partly to our partners.`
  },
  {
    path: '/cases/:id',
    component: SingleCase,
    title: ``,
    description: ``
  },
  {
    path: '/careers',
    component: Careers,
    title: `We Are Hiring Talents | REDNAVIS`,
    description: `REDNAVIS team is the best for working in IT company with great environment. We are always hiring specialists in the IT-sphere. Check out our vacancies and become a part of the software development company in Minsk.`
  },
  {
    path: '/blog',
    component: Blog,
    title: `Custom Software Development Corporate Blog | REDNAVIS`,
    description: `Read the latest news in the software development sphere, IT trends, and experience of outsourcing development firm REDNAVIS. You will find all info about custom software in our articles.`,
    keywords: `rednavis blog, it blog, corporate blog, software development firm blog, trends in software development, IT article, articles`
  },
  {
    path: '/blog/:id',
    component: SingleBlog,
    title: `Custom Software Development Corporate Blog | REDNAVIS`,
    description: `Read the latest news in the software development sphere, IT trends, and experience of outsourcing development firm REDNAVIS. You will find all info about custom software in our articles.`,
    keywords: `rednavis blog, it blog, corporate blog, software development firm blog, trends in software development, IT article, articles`
  },
  {
    path: '',
    component: Page404,
  },
]

export default routes