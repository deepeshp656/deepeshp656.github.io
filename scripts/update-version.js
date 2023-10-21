const { writeFileSync, readFileSync } = require('fs');
const { resolve } = require('path');

const packageJsonPath = resolve(__dirname, '../package.json');
const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));

const isBetaRelease = process.env.SEMANTIC_RELEASE_BRANCH === 'main';
const versionSuffix = isBetaRelease ? '-beta' : '';

packageJson.version += versionSuffix;

writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
