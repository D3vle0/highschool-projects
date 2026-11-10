#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT_DIR = path.resolve(__dirname, '..');
const DIST_DIR = path.join(ROOT_DIR, 'dist');

console.log('🚀 Highschool Projects 정적 파일 빌드를 시작합니다...');
console.log(`📁 Workspace: ${ROOT_DIR}`);
console.log(`📁 Dist directory: ${DIST_DIR}`);

// 1. dist 디렉토리 초기화
if (fs.existsSync(DIST_DIR)) {
  fs.rmSync(DIST_DIR, { recursive: true, force: true });
}
fs.mkdirSync(DIST_DIR, { recursive: true });

// GitHub Pages용 .nojekyll 생성 (Jekyll 처리 방지)
fs.writeFileSync(path.join(DIST_DIR, '.nojekyll'), '');

// 디렉토리 복사 유틸리티
function copyDirSync(src, dest, filterFn) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.name === 'node_modules' || entry.name === '.git' || entry.name === '.DS_Store') {
      continue;
    }

    if (filterFn && !filterFn(srcPath, entry)) {
      continue;
    }

    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath, filterFn);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// 2. 정적 웹 프로젝트 복사
console.log('\n📦 [1/2] 순수 정적 웹 프로젝트 복사 중...');

// 2-1. dimigo-website
const dimigoSrc = path.join(ROOT_DIR, '2021학년도 2학년 1학기 응용프로그래밍화면구현', 'dimigo-website');
const dimigoDest = path.join(DIST_DIR, 'projects', '2021-1', 'dimigo-website');
console.log('  -> 복사: dimigo-website');
copyDirSync(dimigoSrc, dimigoDest);

// 2-2. html-study
const htmlStudySrc = path.join(ROOT_DIR, '2021학년도 2학년 1학기 응용프로그래밍화면구현', 'html-study');
const htmlStudyDest = path.join(DIST_DIR, 'projects', '2021-1', 'html-study');
console.log('  -> 복사: html-study');
copyDirSync(htmlStudySrc, htmlStudyDest);

// 2-3. basic-web (HTML 및 정적 에셋만 복사)
const basicWebSrc = path.join(ROOT_DIR, '2021학년도 2학년 1학기 응용프로그래밍화면구현', 'basic-web');
const basicWebDest = path.join(DIST_DIR, 'projects', '2021-1', 'basic-web');
console.log('  -> 복사: basic-web (정적 파일)');
copyDirSync(basicWebSrc, basicWebDest, (srcPath, entry) => {
  if (entry.isDirectory()) {
    return false;
  }
  const ext = path.extname(entry.name).toLowerCase();
  return ['.html', '.css', '.js', '.jpg', '.jpeg', '.png', '.gif', '.svg'].includes(ext);
});

// 2-4. js-study
const jsStudySrc = path.join(ROOT_DIR, '2021학년도 2학년 2학기 응용프로그래밍화면구현', 'js-study');
const jsStudyDest = path.join(DIST_DIR, 'projects', '2021-2', 'js-study');
console.log('  -> 복사: js-study');
copyDirSync(jsStudySrc, jsStudyDest);

// 2-5. fft (공업일반 오디오 비주얼라이저)
const fftSrc = path.join(ROOT_DIR, '2022학년도 3학년 2학기 공업일반', 'fft');
const fftDest = path.join(DIST_DIR, 'projects', '2022-2', 'fft');
console.log('  -> 복사: fft (Audio Visualizer)');
copyDirSync(fftSrc, fftDest);

// 3. React 프로젝트 빌드 및 배포 복사
console.log('\n⚛️  [2/2] React 프로젝트 빌드 및 복사 중...');
const reactProjects = [
  'project01',
  'react-hooks-example',
  'react-portfolio',
  'react-router',
  'redux-start',
  'style-loaders-example',
  'controlled-uncontrolled-example'
];

const r2BaseDir = path.join(ROOT_DIR, '2021학년도 2학년 2학기 응용프로그래밍화면구현');
const skipBuild = process.env.SKIP_BUILD === '1';

for (const proj of reactProjects) {
  const projDir = path.join(r2BaseDir, proj);
  const buildDir = path.join(projDir, 'build');
  const projDest = path.join(DIST_DIR, 'projects', '2021-2', proj);

  const hasNodeModules = fs.existsSync(path.join(projDir, 'node_modules'));
  if (!hasNodeModules) {
    console.log(`  📦 [${proj}] node_modules 설치 중 (npm install --legacy-peer-deps)...`);
    execSync('npm install --legacy-peer-deps --prefer-offline --no-audit', { cwd: projDir, stdio: 'inherit' });
  }

  const buildIndex = path.join(buildDir, 'index.html');
  const needBuild = !skipBuild || !fs.existsSync(buildIndex);

  if (needBuild) {
    console.log(`  🔨 [${proj}] React 빌드 실행 (CI=false, PUBLIC_URL="./")...`);
    execSync('npm run build', {
      cwd: projDir,
      env: { ...process.env, CI: 'false', PUBLIC_URL: './' },
      stdio: 'inherit'
    });
  } else {
    console.log(`  ⚡ [${proj}] 기존 빌드 결과물 재사용`);
  }

  console.log(`  -> 복사: [${proj}] build -> dist/projects/2021-2/${proj}`);
  copyDirSync(buildDir, projDest);
}

// 루트 접속 시 GitHub 저장소로 이동하는 간단한 리다이렉트 파일 생성
const rootRedirectHtml = `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="refresh" content="0; url=https://github.com/D3vle0/highschool-projects">
  <title>Redirecting...</title>
</head>
<body>
  <p>GitHub 저장소로 이동 중입니다... <a href="https://github.com/D3vle0/highschool-projects">여기를 클릭하세요</a></p>
</body>
</html>
`;
fs.writeFileSync(path.join(DIST_DIR, 'index.html'), rootRedirectHtml);

console.log('\n✨ [완료] 각 프로젝트 배포 파일이 준비되었습니다!');
