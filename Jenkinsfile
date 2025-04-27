pipeline {
    agent any
    tools {
        nodejs 'NodeJS' // Refers to the Node.js installation configured in Global Tool Configuration
    }
    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/amrita-de/Task-Manager.git', branch: 'main'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test -- --reporters=default --reporters=jest-junit'
            }
        }
    }
    post {
        always {
            junit 'junit.xml' // Publishes test results in Jenkins
        }
    }
}


