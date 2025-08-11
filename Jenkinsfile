pipeline {
    agent any

    stages {
        stage('Check & Run Backend') {
            steps {
                script {
                    def backendRunning = sh(script: "docker ps --filter 'name=node-backend' --format '{{.Names}}'", returnStdout: true).trim()
                    if (backendRunning) {
                        echo "✅ Backend container is already running: ${backendRunning}"
                    } else {
                        echo "🚀 Starting backend with docker-compose..."
                        sh """
                            cd backend
                            docker-compose up -d
                        """
                    }
                }
            }
        }

        stage('Check & Run Frontend') {
            steps {
                script {
                    def frontendRunning = sh(script: "docker ps --filter 'name=tiffin-service' --format '{{.Names}}'", returnStdout: true).trim()
                    if (frontendRunning) {
                        echo "✅ Frontend container is already running: ${frontendRunning}"
                    } else {
                        echo "🚀 Starting frontend with docker-compose..."
                        sh """
                            cd frontend
                            docker-compose up -d
                        """
                    }
                }
            }
        }
    }
}
