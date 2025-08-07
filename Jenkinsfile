pipeline {
    agent any
    stages {
        stage('Build Docker Image') {
            steps {
                bat 'docker build -t newapp:latest .'
            }
        }
        stage('Run App') {
            steps {
                bat '''
                docker stop newapp || exit 0
                docker rm newapp || exit 0
                docker run -d -p 3000:3000 --name newapp newapp:latest
                '''
            }
        }
    }
}
