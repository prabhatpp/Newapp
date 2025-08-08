pipeline {
    agent any

    environment {
        FRONTEND_IMAGE = "my-frontend-image"
        BACKEND_IMAGE = "my-backend-image"
    }

    stages {
        stage('Build Docker Images') {
            steps {
                script {
                    echo "Building Frontend Image..."
                    def frontend = docker.build("${FRONTEND_IMAGE}", "./frontend")

                    echo "Building Backend Image..."
                    def backend = docker.build("${BACKEND_IMAGE}", "./backend")
                }
            }
        }

        stage('Run Containers') {
            steps {
                script {
                    echo "Running frontend container..."
                    docker.image("${FRONTEND_IMAGE}").run("-d -p 3000:3000")

                    echo "Running backend container..."
                    docker.image("${BACKEND_IMAGE}").run("-d -p 5000:5000")
                }
            }
        }
    }

    post {
        failure {
            echo "❌ Something went wrong during the build/deployment process."
        }
    }
}
