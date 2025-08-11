pipeline {
    agent any

    stages {
        stage('Check & Run Backend') {
            steps {
                script {
                    dir('backend') {
                        def backendRunning = sh(script: "docker ps --filter 'name=node-backend' --filter 'status=running' -q", returnStdout: true).trim()
                        if (backendRunning) {
                            echo "✅ Backend container is already running."
                        } else {
                            echo "🚀 Starting Backend container..."
                            sh 'docker-compose up -d'
                        }
                    }
                }
            }
        }

        stage('Check & Run Frontend') {
            steps {
                script {
                    dir('frontend') {
                        def frontendRunning = sh(script: "docker ps --filter 'name=tiffin-service' --filter 'status=running' -q", returnStdout: true).trim()
                        if (frontendRunning) {
                            echo "✅ Frontend container is already running."
                        } else {
                            echo "🚀 Starting Frontend container..."
                            sh 'docker-compose up -d'
                        }
                    }
                }
            }
        }
    }
}
