interface Experience {
  title: string
  duration: string
  description: string
}

interface Work {
  duration: string
  title: string
}

interface Education {
  title: string
  description: string
  duration: string
}

interface Certificate {
  title: string
  date: string
}

export const experienceData: Experience[] = [
  {
    title: '컴퍼니위',
    duration: '2015 ~ 2024.04',
    description: '플랫폼 개발팀 팀 리드',
  },
  {
    title: '- CNCITY ENERGY에 파견',
    duration: '2022.02 ~ 2023.02',
    description: '대전시 스마트시티 챌린지, 주차공유시스템 TPM',
  },
  {
    title: '양명고등학교 - 고등학교 방과 후 수업 강의',
    duration: '2017.03 ~ 2017. 12',
    description: "'미래를 향한 런웨이' 프로그램 소프트웨어 강의",
  },
  {
    title: '퍼릭스, 개발팀',
    duration: '014.11 ~ 2015.11',
    description: '기업 내 협업 프로그램 cocoworks의 client 개발팀 연구원.',
  },
  {
    title: '인피니트 헬스케어, 산학연계',
    duration: '2013.03 ~ 2014.10',
    description: 'PACS(의료영상저장전송시스템) 프로그램팀에서 실습 및 논문작성.',
  },
  {
    title: 'LG전자 미래IT융합, 인턴',
    duration: '2012.05 ~ 2012.11',
    description:
      '옵티머스 G 핸드폰에 탑재된 Q 보이스의 음성 테이터의 관리 및 변환 프로그램 유지보수.',
  },
]

export const workData: Work[] = [
  {
    duration: '2022-2024.04',
    title: `IaaS형 데이터 관리 플랫폼 Thing's platform의 개발 리드`,
  },
  {
    duration: '2022',
    title: '대전시 스마트시티챌린지 주차공유시스템 TPM',
  },
  {
    duration: '2021-2022',
    title: '콜드체인 상태정보 관리 및 실시간 모니터링 체계 구축 과제',
  },
  {
    duration: '2021',
    title: '협업을 위한 모바일앱 Last apple tree 개발',
  },
  {
    duration: '2020',
    title: 'CNCITY에너지 그룹웨어에 연계되는 협업시스템 Works 개발',
  },
  {
    duration: '2019',
    title: '태양광 모니터링 시스템 웹 & 하이브리드 모바일 앱 개발',
  },
  {
    duration: '2016-2019',
    title: '미국 전력계통 연계형 1MW/1MWh ESS 개발',
  },
  {
    duration: '2018',
    title: '인업스 TOC 시스템 개발',
  },
  {
    duration: '2018',
    title: 'CJ헬로비전, 부산도시가스 PCC/EMS 개발',
  },
  {
    duration: '2017-2019',
    title: 'AMI 인프라를 활용한 국민 VPP 에너지관리시스템 개발',
  },
  {
    duration: '2018',
    title: '노원구 제로에너지주택 모니터링 개발 및 실증',
  },
  {
    duration: '2016-2018',
    title: '에너지 제로 스마트 양식 시스템 개발',
  },
  {
    duration: '2016',
    title: '인도네시아향 마이크로그리드 연계형 태양광 LED 가로등 시스템 개발',
  },
  {
    duration: '2015-2018',
    title: '공릉동 보건지소/서초 경로당/공덕 경로당/강동구청 제2청사 건물 에너지 모니터링 개발',
  },
]

export const educationData: Education[] = [
  {
    title: '서울과학기술대학교',
    description: 'SW분석설계학과',
    duration: '2013.03 ~ 2015.02',
  },
  {
    title: '서울과학기술대학교',
    description: '컴퓨터공학과',
    duration: '2008.03 ~ 2012.06',
  },
]

export const certificateData: Certificate[] = [
  {
    title: 'AWS Certified AI Practitioner',
    date: '2025.02',
  },
  {
    title: 'AWS Certified Solutions Architect - Associate',
    date: '2024.10',
  },
  {
    title: '정보처리기사',
    date: '2013.08',
  },
]
