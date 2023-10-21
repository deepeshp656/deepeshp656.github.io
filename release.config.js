module.exports = {
  repositoryUrl: 'https://github.com/deepeshp656/deepeshp656.github.io',  // Update with your repository URL
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/git',
    '@semantic-release/github',
  ],
};
