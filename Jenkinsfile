pipeline {
    agent any

    stages {
        stage('Check & Run Backend') {
            steps {
                script {
                    dir('backend') {
                        def backendRunning = bat(script: "docker ps --filter 'name=node-backend' --filter 'status=running' -q", returnStdout: true).trim()
                        if (backendRunning) {
                            echo "✅ Backend container is already running."
                        } else {
                            echo "🚀 Starting Backend container..."
                            bat 'docker-compose up -d'
                        }
                    }
                }
            }
        }

        stage('Check & Run Frontend') {
            steps {
                script {
                    dir('frontend') {
                        def frontendRunning = bat(script: "docker ps --filter 'name=tiffin-service' --filter 'status=running' -q", returnStdout: true).trim()
                        if (frontendRunning) {
                            echo "✅ Frontend container is already running."
                        } else {
                            echo "🚀 Starting Frontend container..."
                            bat 'docker-compose up -d'
                        }
                    }
                }
            }
        }
    }
}
