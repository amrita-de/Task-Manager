pipeline {
    agent any

    stages {
        stage('Check Git Installation') {
            steps {
                bat '''
                where git >nul 2>nul
                if %ERRORLEVEL% NEQ 0 (
                    echo Git is not installed. Please install Git and retry.
                    exit /b 1
                ) else (
                    echo Git is installed. Version:
                    git --version
                )
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
                bat 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npm test -- --coverage --watchAll=false'
            }
        }
    }
}


