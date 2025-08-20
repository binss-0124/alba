# 📱 알바어플 - React 웹 애플리케이션

## 🎯 프로젝트 개요
알바생과 점주를 위한 통합 알바 관리 웹 애플리케이션입니다. 출퇴근 관리, 급여 관리, 커뮤니티 기능을 제공하여 알바생의 근무 생활을 체계적으로 관리할 수 있습니다.

## 🚀 주요 기능

### 📅 메인 화면 - 달력
- **월별 달력 뷰**: 출근/미출근 상태를 색상으로 구분하여 표시
- **일별 요약**: 각 날짜별 근무 시간 및 급여 요약 정보
- **상세 정보**: 날짜 클릭 시 해당 날의 근무 상세 정보 모달
- **통계**: 월별 근무 시간, 급여 통계 차트

### ⏰ 출퇴근 관리
- **출근/퇴근 기록**: 근무 장소와 함께 시간 기록
- **QR코드 스캔**: 매장에서 제공하는 QR코드로 간편한 출퇴근
- **자동 계산**: 근무 시간 자동 계산 및 저장
- **실시간 타이머**: 현재 근무 시간 실시간 표시

### 💰 급여 관리 (가계부)
- **일별 급여**: 시급 × 근무 시간으로 자동 계산
- **세금 공제**: 소득세, 국민연금 등 공제 항목 계산
- **통계 분석**: 일별/주별/월별 급여 추이 차트
- **지출 관리**: 급여 외 수입/지출 내역 관리
- **목표 설정**: 월별 급여 목표 설정 및 달성률 추적

### 💬 커뮤니티
- **동료 소통**: 같은 매장 또는 지역 알바생들과 소통
- **정보 공유**: 근무 팁, 매장 정보, 불만사항 공유
- **게시글 관리**: 카테고리별 분류, 검색, 정렬 기능
- **댓글 시스템**: 계층형 댓글 및 답글 기능

## 🛠 기술 스택

### Frontend
- **React 18**: 최신 React 기능 활용
- **TypeScript**: 타입 안정성 확보
- **CSS3**: 모던한 UI/UX 디자인
- **Responsive Design**: 모바일/데스크톱 반응형 지원

### 개발 도구
- **Create React App**: 빠른 개발 환경 구축
- **ESLint**: 코드 품질 관리
- **Prettier**: 코드 포맷팅

## 📁 프로젝트 구조

```
src/
├── components/           # 재사용 가능한 컴포넌트
│   ├── common/          # 공통 컴포넌트
│   │   ├── Button.tsx   # 버튼 컴포넌트
│   │   ├── Input.tsx    # 입력 필드 컴포넌트
│   │   ├── Modal.tsx    # 모달 컴포넌트
│   │   └── Loading.tsx  # 로딩 컴포넌트
│   ├── calendar/        # 달력 관련 컴포넌트
│   │   ├── Calendar.tsx # 메인 달력
│   │   ├── DayCell.tsx  # 날짜 셀
│   │   └── WorkDetailModal.tsx # 근무 상세 모달
│   ├── work/            # 출퇴근 관련 컴포넌트
│   │   ├── ClockInOut.tsx # 출퇴근 관리
│   │   ├── WorkHistory.tsx # 근무 이력
│   │   └── QRScanner.tsx  # QR 스캐너
│   ├── salary/          # 급여 관련 컴포넌트
│   │   ├── SalaryChart.tsx # 급여 차트
│   │   ├── ExpenseTracker.tsx # 지출 관리
│   │   └── TaxCalculator.tsx # 세금 계산기
│   └── community/       # 커뮤니티 관련 컴포넌트
│       ├── PostList.tsx # 게시글 목록
│       ├── PostDetail.tsx # 게시글 상세
│       └── CommentSection.tsx # 댓글 섹션
├── screens/             # 화면 컴포넌트
├── navigation/          # 네비게이션
├── services/            # API 및 서비스
├── store/               # 상태 관리
├── utils/               # 유틸리티 함수
├── types/               # TypeScript 타입 정의
├── hooks/               # 커스텀 훅
├── App.tsx              # 메인 앱 컴포넌트
└── index.tsx            # 앱 진입점
```

## 🚀 시작하기

### 필수 요구사항
- Node.js 16.0.0 이상
- npm 또는 yarn

### 설치 및 실행

1. **저장소 클론**
```bash
git clone [repository-url]
cd alba-app
```

2. **의존성 설치**
```bash
npm install
# 또는
yarn install
```

3. **개발 서버 실행**
```bash
npm start
# 또는
yarn start
```

4. **브라우저에서 확인**
```
http://localhost:3000
```

### 빌드
```bash
npm run build
# 또는
yarn build
```

## 📱 주요 컴포넌트 설명

### Calendar 컴포넌트
- 월별 달력 표시
- 출근/미출근 상태 시각화
- 날짜별 근무 정보 요약
- 월간 네비게이션

### ClockInOut 컴포넌트
- 실시간 시계 표시
- 출근/퇴근 버튼
- 근무 장소 입력
- 현재 근무 시간 표시

### SalaryChart 컴포넌트
- 월별/주별 급여 차트
- 근무 시간과 급여 비교
- 통계 요약 정보
- 기간별 필터링

### ExpenseTracker 컴포넌트
- 지출 추가/수정/삭제
- 카테고리별 분류
- 지출 통계 및 분석
- 날짜별 필터링

### PostList 컴포넌트
- 게시글 목록 표시
- 카테고리별 필터링
- 검색 기능
- 정렬 옵션 (최신순, 인기순, 조회순)

## 🎨 UI/UX 특징

- **모던한 디자인**: 깔끔하고 직관적인 인터페이스
- **반응형 레이아웃**: 모든 디바이스에서 최적화된 경험
- **색상 구분**: 기능별 명확한 색상 코딩
- **애니메이션**: 부드러운 전환 효과
- **접근성**: 키보드 네비게이션 및 스크린 리더 지원

## 🔧 개발 가이드

### 컴포넌트 생성
```typescript
import React from 'react';
import './ComponentName.css';

interface ComponentNameProps {
  // props 타입 정의
}

export const ComponentName: React.FC<ComponentNameProps> = ({ props }) => {
  return (
    <div className="component-name">
      {/* 컴포넌트 내용 */}
    </div>
  );
};
```

### CSS 스타일링
- CSS 클래스 기반 스타일링
- BEM 방법론 적용
- 반응형 미디어 쿼리 사용
- CSS 변수 활용

## 📊 데이터 구조

### WorkRecord
```typescript
interface WorkRecord {
  id: string;
  date: string;
  clockIn: string;
  clockOut?: string;
  workHours?: number;
  hourlyWage?: number;
  dailySalary?: number;
  location?: string;
  notes?: string;
}
```

### Post
```typescript
interface Post {
  id: string;
  title: string;
  content: string;
  category: string;
  author: string;
  createdAt: string;
  likes: number;
  comments: Comment[];
  views: number;
}
```

## 🚧 향후 개발 계획

### Phase 1: 기본 기능 (완료)
- [x] 달력 컴포넌트
- [x] 출퇴근 관리
- [x] 급여 차트
- [x] 지출 관리
- [x] 세금 계산기
- [x] 커뮤니티

### Phase 2: 고급 기능
- [ ] 사용자 인증 시스템
- [ ] 데이터베이스 연동
- [ ] 실시간 알림
- [ ] 파일 업로드
- [ ] 다국어 지원

### Phase 3: 최적화
- [ ] 성능 최적화
- [ ] PWA 지원
- [ ] 오프라인 모드
- [ ] 테스트 코드 작성

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 📞 문의

프로젝트에 대한 문의사항이나 제안사항이 있으시면 이슈를 생성해 주세요.

---

**알바어플**으로 더 체계적이고 효율적인 알바 생활을 시작하세요! 🚀
