pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test -- --coverage --watchAll=false'
            }
        }
    }

    post {
        always {
            junit 'coverage/**/junit.xml'
        }
    }
}
