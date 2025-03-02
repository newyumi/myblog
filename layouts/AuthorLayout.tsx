import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import Image from '@/components/Image'
import {
  experienceData,
  workData,
  educationData,
  certificateData,
} from '@/data/authors/experiences'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, twitter, bluesky, linkedin, github } = content

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            About
          </h1>
        </div>
        <div className="items-start xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-4">
            {avatar && (
              <Image
                src={avatar}
                alt="avatar"
                width={192}
                height={192}
                className="h-48 w-48 rounded-full"
              />
            )}
            <h3 className="pt-4 pb-2 text-2xl leading-8 font-bold tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>

            <div className="space-y-4 pt-16">{children}</div>
          </div>
          <div className="prose dark:prose-invert max-w-none pb-8 leading-snug xl:col-span-2">
            <div className="px-0 xl:px-8">
              <section className="py-6">
                <div className="text-primary-500 text-xl font-bold">
                  <p>
                    <span>&#x1F440;</span>
                    &nbsp; 업무 경험
                  </p>
                </div>

                <ul className="grid list-none gap-6 pl-0">
                  {experienceData.map((experience) => (
                    <li className="text-sm" key={experience.title}>
                      <div className="font-bold">
                        {experience.title}
                        <span className="pl-2 text-xs font-bold text-gray-500">
                          {experience.duration}
                        </span>
                      </div>
                      {experience.description}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="py-6">
                <div className="text-primary-500 text-xl font-bold">
                  <p>
                    <span>&#x2615;</span>
                    &nbsp; 주요 연구실적
                  </p>
                </div>
                <ul className="list-none pl-0 text-sm leading-6">
                  {workData.map((work) => (
                    <li key={work.title}>{`- (${work.duration}) ${work.title}`} </li>
                  ))}
                </ul>
              </section>

              <div className="grid grid-cols-2 xl:grid-cols-1">
                <section className="py-6">
                  <div className="text-primary-500 text-xl font-bold">
                    <p>
                      <span>&#x1f393;</span>
                      &nbsp; 학력
                    </p>
                  </div>
                  <div className="text-sm">
                    {educationData.map((edu, index) => (
                      <div key={index} className="mb-4">
                        <div>{edu.title}</div>
                        <div>{edu.description}</div>
                        <div>{edu.duration}</div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="py-6">
                  <div className="text-primary-500 text-xl font-bold">
                    <p>
                      <span>&#x1F4C4;</span>
                      &nbsp; Certificate
                    </p>
                  </div>
                  <div className="text-sm">
                    {certificateData.map((certificate) => (
                      <div key={certificate.title} className="mb-4">
                        <div>{certificate.title}</div>
                        <div>{certificate.date}</div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
