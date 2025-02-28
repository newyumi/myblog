interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: `Thing's platform`,
    description: `IoT 상태관리 시스템`,
    imgSrc: '/static/images/projects/tp-1.png',
    href: '/blog/projects/2024-05-tp',
  },
  {
    title: 'SMARTON - 대전시 주차공유시스템',
    description: `대전시 스마트시티 챌린지 주차공유 서비스`,
    imgSrc: '/static/images/projects/smarton-main.png',
    href: '/blog/projects/2023-01-smarton',
  },
  {
    title: '콜드체인 상태정보 관리 및 실시간 모니터링 체계 구축 기술 개발',
    description: `TCL(Temperature Controlled Logistics) 전용 블록체인 데이터 플랫폼 기반 기술 개발`,
    imgSrc: '/static/images/projects/tela.png',
    href: '/blog/projects/2022-12-coldchain',
  },
  {
    title: 'Last apple tree hybrid mobile application',
    description: `Ionic으로 개발한 업무 협업 모바일 어플리케이션`,
    imgSrc: '/static/images/projects/chat-05.png',
    href: '/blog/projects/2021-12-lastappletree',
  },
  {
    title: 'Active PV hybrid application',
    description: `Solaredge API를 사용하여 실시간 태양광 사용량을 모니터링하는 하이브리드 어플리케이션 개발`,
    imgSrc: '/static/images/projects/activepv-summary.jpg',
    href: '/blog/projects/2020-03-activepv',
  },
  {
    title: 'Centennial project',
    description: `캐나다 온타리오주 센테니얼 대학의 태양광-충전기 시스템 모니터링을 위한 웹 프로그램 개발`,
    imgSrc: '/static/images/projects/centennial1.png',
    href: '/blog/projects/2019-06-centennial',
  },
  {
    title: 'TOC project',
    description: `Top Operation Control System, 에너지 시스템 모니터링을 위한 웹 프로그램 개발`,
    imgSrc: '/static/images/projects/toc-main.png',
    href: '/blog/projects/2018-12-toc',
  },
]

export default projectsData
