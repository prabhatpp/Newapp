pipeline {
    agent any

    stages {
        stage('Build Frontend Docker Image') {
            steps {
                dir('frontend') {
                    bat 'docker build -t newapp-frontend:latest .'
                }
            }
        }

        stage('Build Backend Docker Image') {
            steps {
                dir('backend') {
                    bat 'docker build -t newapp-backend:latest .'
                }
            }
        }

        stage('Run Frontend Container') {
            steps {
                bat 'docker run -d -p 3000:3000 --name frontend-app newapp-frontend:latest'
            }
        }

        stage('Run Backend Container') {
            steps {
                bat 'docker run -d -p 5000:5000 --name backend-app newapp-backend:latest'
            }
        }
    }

    post {
        failure {
            echo 'Build or deployment failed!'
        }
        success {
            echo 'Application is up and running!'
        }
    }
}
