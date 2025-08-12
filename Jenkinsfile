pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // This pulls your code from the linked SCM (GitHub, Bitbucket, etc.)
                checkout scm
            }
        }

        stage('Backend - Docker Compose Up') {
            steps {
                bat '''
                cd backend
                docker-compose up -d
                '''
            }
        }

        stage('Frontend - Docker Compose Up') {
            steps {
                bat '''
                cd frontend
                docker-compose up -d
                '''
            }
        }
    }
}
