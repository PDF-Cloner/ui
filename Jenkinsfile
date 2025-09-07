pipeline {
    agent {
        label 'dotnet-agent'
    }

    options {
        timeout(time: 10, unit: 'MINUTES')
    }

    environment {
        SONAR_TOKEN = credentials('SONAR_TOKEN')
    }

    stages {
        stage('Checkout') {
            steps {
                cleanWs()
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Format Code') {
            steps {
                bat 'npm run format'
            }
        }

        stage('Lint Code') {
            steps {
                bat 'npm run lint'
            }
        }

        stage('Type Check') {
            steps {
                bat 'npm run type-check'
            }
        }

        stage('Unit Tests with Coverage') {
            steps {
                bat 'npm run test:ut:coverage'
            }
        }

        stage('Integration Tests') {
            steps {
                bat 'npm run test:it'
            }
        }

        stage('End to End Testing') {
            steps {
                // sh 'npm run prepare'
                bat 'npm run test:e2e'
            }
        }

        stage('SonarCloud Scan') {
            steps {
                withSonarQubeEnv('SonarCloud') {
                    sh """
                    sonar-scanner \
                    -Dsonar.projectKey=pdfcloner_ui \
                    -Dsonar.organization=pdfcloner
                    """
                }
            }
        }

        stage('Quality Gate') {
            steps {
                waitForQualityGate abortPipeline: true
            }
        }
    }
}
