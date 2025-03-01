import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'

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
                  <li className="text-sm">
                    <div className="font-bold">
                      컴퍼니위
                      <span className="pl-2 text-xs font-bold text-gray-500">2015 ~ 2024.04</span>
                    </div>
                    플랫폼 개발팀 팀 리드
                    <div className="pt-2 text-sm font-semibold">
                      - CNCITY ENERGY에 파견
                      <span className="pl-2 text-xs font-bold text-gray-500">
                        2022.02 ~ 2023.02
                      </span>
                    </div>
                    대전시 스마트시티 챌린지, 주차공유시스템 TPM
                  </li>

                  <li className="text-sm">
                    <div className="font-bold">
                      양명고등학교 - 고등학교 방과 후 수업 강의
                      <span className="pl-2 text-xs font-bold text-gray-500">
                        2017.03 ~ 2017. 12
                      </span>
                    </div>
                    '미래를 향한 런웨이' 프로그램 소프트웨어 강의
                  </li>

                  <li className="text-sm">
                    <div className="font-bold">
                      퍼릭스, 개발팀
                      <span className="pl-2 text-xs font-bold text-gray-500">014.11 ~ 2015.11</span>
                    </div>
                    기업 내 협업 프로그램 cocoworks의 client 개발팀 연구원.
                  </li>

                  <li className="text-sm">
                    <div className="font-bold">
                      인피니트 헬스케어, 산학연계
                      <span className="tpl-2 ext-xs font-bold text-gray-500">
                        2013.03 ~ 2014.10
                      </span>
                    </div>
                    PACS(의료영상저장전송시스템) 프로그램팀에서 실습 및 논문작성.
                    <div className="pt-2 text-xs">
                      컴퓨터 단층촬영 방사선 노출 관리 시스템 소프트웨어 설계, System Software
                      Design of Computerized Tomography Radiation Dose Management
                      [디지털산업정보학회 논문지 제10권 제3호-2014년 9월]
                    </div>
                  </li>
                  <li className="text-sm">
                    <div className="font-bold">
                      LG전자 미래IT융합, 인턴
                      <span className="pl-2 text-xs font-bold text-gray-500">
                        2012.05 ~ 2012.11
                      </span>
                    </div>
                    옵티머스 G 핸드폰에 탑재된 Q 보이스의 음성 테이터의 관리 및 변환 프로그램
                    유지보수.
                  </li>
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
                  <li>- (2022-2024.04) IaaS형 데이터 관리 플랫폼 Thing's platform의 개발 리드</li>
                  <li>- (2022) 대전시 스마트시티챌린지 주차공유시스템 TPM</li>
                  <li>- (2021-2022) 콜드체인 상태정보 관리 및 실시간 모니터링 체계 구축 과제</li>
                  <li>- (2021) 협업을 위한 모바일앱 Last apple tree 개발</li>
                  <li>- (2020) CNCITY에너지 그룹웨어에 연계되는 협업시스템 Works 개발</li>
                  <li>- (2019) 태양광 모니터링 시스템 웹 & 하이브리드 모바일 앱 개발</li>
                  <li>- (2016-2019) 미국 전력계통 연계형 1MW/1MWh ESS 개발</li>
                  <li>- (2018) 인업스 TOC 시스템 개발</li>
                  <li>- (2018) CJ헬로비전, 부산도시가스 PCC/EMS 개발</li>
                  <li>- (2017-2019) AMI 인프라를 활용한 국민 VPP 에너지관리시스템 개발</li>
                  <li>- (2018) 노원구 제로에너지주택 모니터링 개발 및 실증</li>
                  <li>- (2016-2018) 에너지 제로 스마트 양식 시스템 개발</li>
                  <li>- (2016) 인도네시아향 마이크로그리드 연계형 태양광 LED 가로등 시스템 개발</li>
                  <li>
                    - (2015-2018) 공릉동 보건지소/서초 경로당/공덕 경로당/강동구청 제2청사 건물
                    에너지 모니터링 개발
                  </li>
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
                    <div>서울과학기술대학교</div>
                    <div>SW분석설계학과</div>
                    <div>2013.03 ~ 2015.02</div>
                    <br />
                    <div>서울과학기술대학교</div>
                    <div>컴퓨터공학과</div>
                    <div>2008.03 ~ 2012.06</div>
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
                    <div>AWS Certified AI Practitioner</div>
                    <div>2025.02</div>
                    <br />
                    <div>AWS Certified Solutions Architect - Associate</div>
                    <div>2024.10</div>
                    <br />
                    <div>정보처리기사</div>
                    <div>2013.08</div>
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
