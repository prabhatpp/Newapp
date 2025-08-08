stage('Build Frontend Docker Image') {
    steps {
        sh '''
            cd frontend
            docker build -t newapp-frontend:latest .
        '''
    }
}

stage('Run Frontend Container') {
    steps {
        sh '''
            docker rm -f frontend-app || true
            docker run -d -p 3000:3000 --name frontend-app newapp-frontend:latest
        '''
    }
}
