export const tmp = '';

/*
! Clone (복사하다)
: 원격 리포지토리를 로컬 컴퓨터로 '복사'

- 주로 협업자들이 같은 프로젝트에서 작업하기 위해 사용
- 원격 리포지토리와 로컬 리포지토리 간에 연결이 유지 
  , 로컬에서 작업한 내용을 원격 리포지토리에 푸시(push) 가능

! Fork (나누다)
: 다른 사용자의 리포지토리를 자신의 GitHub 계정으로 복사(작업 공간을 '나누는 것')

- 원본 리포지토리에 대한 접근 권한이 없거나 독립적으로 프로젝트를 발전시키고 싶을 때 사용
- Fork한 리포지토리는 원본 리포지토리와는 별개의 리포지토리로, 원본 리포지토리에 영향 X
  >> Pull Request를 통해 변경 사항을 원본 리포지토리에 제안 가능

# 협업 프로젝트 환경 설정 방법
: 각 팀원들이 자신의 리포지토리를 가지면서
  , 동시에 메인 프로젝트와 동기화된 상태를 유지하고 싶을 경우

? 1. 원본 리포지토리 "Fork"
: 각 팀원은 원본 리포지토리를 Fork 하여 
  자신의 GitHub 계정에 복사된 리포지토리를 생성

? 2. Fork된 리포지토리 클론
: 각 팀원은 자신의 계정에 있는 Fork된 리포지토리를 로컬로 클론

$ git clone https://github.com/your-username/repository-name.git
$ cd repository-name

? 3. 원본 리포지토리와 동기화
: 로컬 리포지토리를 원본 리포지토리와 동기화하기 위해 upstream 원격을 추가
  >> 로컬 리포지토리가 원본 리포지토리의 변경 사항을 추적 가능 
     (한 번만 수행!)

$ git remote add upstream https://github.com/original-owner/repository-name.git

? 4. 동기화 작업
: 원본 리포지토리의 변경 사항을 정기적으로 자신의 로컬 리포지토리와 동기화

$ git fetch upstream (원본 리포지토리의 변경 사항을 가져와서 로컬에 반영)
$ git checkout main 
$ git merge upstream/main (원본 리포지토리의 변경 사항을 로컬 메인 브랜치에 병합)

$ git push origin main (원본 리포지토리의 변경 사항을 동기화)

? 5. 작업 내용 푸시 (사용자 A)
: 각 팀원은 자신의 Fork된 리포지토리에서 작업하고 
  변경 사항을 자신의 GitHub 리포지토리에 푸시

$ git checkout -b userA
$ git add .
$ git commit -m "날짜 이니셜 내용"
$ git push origin userA


? 6. 사용자 A가 원본 리포지토리에 Pull Request 생성
- GitHub에서 PR 생성
- 리뷰 요청
- 병합 후 브랜치 삭제
*/