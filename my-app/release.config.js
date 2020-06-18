module.exports = {
    branches: "master",
    repositoryUrl: "https://github.com/vitorbasso/actions",
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/github'
    ]
}