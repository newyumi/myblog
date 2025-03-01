import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div className="my-6 flex flex-col gap-x-12 lg:mb-12 lg:flex-row">
        <div className="flex flex-col items-start justify-start space-y-6 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
          <div className="max-w-xs space-y-4 md:border-r-2 md:border-gray-200 dark:md:border-gray-700">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-gray-100">
              {siteMetadata.author}
            </h1>
            <p className="text-primary-500 mr-2 w-96 text-sm tracking-wider uppercase">
              {siteMetadata.description}
            </p>
          </div>
          <div className="max-w-xl space-y-4 text-gray-600 dark:text-gray-400">
            <p>
              Front-end 개발자이자 Technical Program Manager 양유미 입니다. 새로운 일에 도전하여
              많은 경험을 하는 것을 좋아하고, 서비스의 목표가 명확하며 즐거운 서비스를 제공하는 것을
              일의 보람으로 여기고 있습니다. 최근에는 인공지능 기술과 영어 커뮤니케이션에 관심이
              많습니다.
            </p>
            <p>
              I am Yang Yumi, a front-end developer and Technical Program Manager. I enjoy taking on
              new challenges and gaining diverse experiences. I find fulfillment in working towards
              clear goals and providing enjoyable services. Recently, I have developed a keen
              interest in artificial intelligence technology and English communication.
            </p>
          </div>
        </div>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h2 className="text-sm font-bold tracking-wider text-gray-500 uppercase dark:text-gray-400">
            Latest Writing
          </h2>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl leading-8 font-bold tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-sm leading-6 text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base leading-6 font-medium">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base leading-6 font-medium">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
