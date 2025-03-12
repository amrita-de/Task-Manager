pipeline {
    agent any

    environment {
        NODE_ENV = 'production' // Set environment variable if needed
    }

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test -- --coverage --watchAll=false'
            }
            post {
                always {
                    junit 'coverage/**/junit.xml'
                    cobertura coberturaReportFile: 'coverage/cobertura-coverage.xml'
                }
            }
        }

        stage('Build Application') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            when {
                branch 'main' // Deploy only from the main branch
            }
            steps {
                echo 'Deploying application...'
                sh './deploy.sh' // Replace with your deployment script
            }
        }
    }

    post {
        success {
            echo 'Pipeline executed successfully!'
        }
        failure {
            mail to: 'dev-team@example.com',
                 subject: 'Jenkins Build Failed',
                 body: 'Check Jenkins for details.'
        }
    }
}
