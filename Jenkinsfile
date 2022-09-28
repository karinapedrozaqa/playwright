 pipeline{
    agent { label 'principal' }
    tools { nodejs "nodejs" }
    stages {
        stage('Checkout'){
            steps {
                git branch: 'main', url: 'https://github.com/karinapedrozaqa/playwright.git'
                sh 'npm install'
            }
        }
        stage('Test'){
            steps {
                sh 'npx playwright install msedge'
                sh 'npx playwright test'
            }
        }
        stage('Report'){
            steps {
                publishHTML (target : [allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Nike Testing Report',
                reportTitles: 'Nike Testing Report'])
            }
        }
    }
}
