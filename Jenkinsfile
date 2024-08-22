pipeline {
    agent any
    tools {
        nodejs "node22"
    }
    
    stages {
        stage ('Git Clone'){ 
        	steps { 
            	git branch: 'main', 
                credentialsId: 'chaeminseok', 
                url: 'https://github.com/Cloud-Break-2/cb-frontend.git' 
            } 
        } 

        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
                sh 'ls'
                sh 'cd build'
                sh 'ls'
            }
        }
        stage('S3 Upload') {
            steps {
            sh 'aws s3 sync build s3://cloud-break-frontend --delete'
           sh 'aws cloudfront create-invalidation --distribution-id E1E9J54E7UNS4D --paths "/*"'
        }   
}
    }
}
