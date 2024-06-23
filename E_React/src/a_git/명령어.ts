export const tmp = '';

/*
1. Fork 및 Clone
: 팀원들은 원본 리포지토리를 Fork하고 자신의 GitHub 계정에 복사된 리포지토리를 로컬로 클론

$ git clone https://github.com/your-username/repository-name.git
$ cd repository-name

2. Upstream 원격 추가
: 원본 리포지토리의 변경 사항을 가져오기 위해 upstream 원격을 추가

$ git remote add upstream https://github.com/original-owner/repository-name.git
-----------------------------------------------------------------------------

3. 브랜치 생성 및 작업
: 각 팀원은 자신의 브랜치를 생성하고 그 브랜치에서 작업을 수행

브랜치 생성
$ git checkout -b feature-branch-name

작업 내용 커밋
$ git add .
$ git commit -m "작업 내용 설명"

자신의 GitHub 리포지토리에 푸시
$ git push origin feature-branch-name

4. 원본 리포지토리와 동기화

원본 리포지토리의 변경 사항 가져오기
$ git fetch upstream

로컬 메인 브랜치로 이동
$ git checkout main

원본 리포지토리의 변경 사항을 로컬 메일 브랜치에 병합
$ git merge upstream/main

=== 병합 후 충돌 해결 (필요한 경우) === 
충돌이 발생하면 충돌된 파일을 수정한 후 스테이징하고 커밋

-- 충돌 수정 후 --
$ git add 충돌된-파일
$ git commit -m "충돌 해결"

5. 브랜치에 변경 사항 반영

작업 브랜치로 돌아가기
$ git checkout feature-branch-name

메인 브랜치의 변경 사항을 작업 브랜치에 병합
$ git merge main

작업 브랜치의 변경사항을 다시 푸시
$ git push origin feature-branch-name
*/