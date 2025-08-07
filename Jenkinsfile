pipeline {
    agent any
    stages {
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t newapp:latest .'
            }
        }
        stage('Run App') {
            steps {
                sh 'docker run -d -p 3000:3000 --name newapp newapp:latest'
            }
        }
    }
}
