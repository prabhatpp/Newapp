pipeline {
    agent any

    environment {
        FRONTEND_IMAGE = 'newapp-frontend:latest'
        BACKEND_IMAGE  = 'newapp-backend:latest'
    }

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Build Frontend Docker Image') {
            steps {
                dir('frontend') {
                    script {
                        docker.build("${FRONTEND_IMAGE}")
                    }
                }
            }
        }

        stage('Build Backend Docker Image') {
            steps {
                dir('backend') {
                    script {
                        docker.build("${BACKEND_IMAGE}")
                    }
                }
            }
        }

        stage('Run Containers') {
            steps {
                script {
                    // Stop and remove existing containers if any
                    sh """
                    docker stop frontend-app || true
                    docker rm frontend-app || true
                    docker stop backend-app || true
                    docker rm backend-app || true

                    // Run frontend container
                    docker run -d -p 3000:3000 --name frontend-app ${FRONTEND_IMAGE}

                    // Run backend container (e.g., on port 5000)
                    docker run -d -p 5000:5000 --name backend-app ${BACKEND_IMAGE}
                    """
                }
            }
        }
    }

    post {
        success {
            echo '✔️ Deployment completed successfully!'
        }
        failure {
            echo '❌ Something went wrong during the build/deployment process.'
        }
    }
}
