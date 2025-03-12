pipeline {
    agent any

    stages {
        stage('Check Git Installation') {
            steps {
                sh '''
                if ! command -v git &> /dev/null
                then
                    echo "Git is not installed. Please install Git and retry."
                    exit 1
                else
                    echo "Git is installed. Version: $(git --version)"
                fi
                '''
            }
        }

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
        }
    }
}

