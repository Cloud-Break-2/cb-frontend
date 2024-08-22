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
            withAWS(region: 'ap-northeast-2', credentials: 'aws-credentials') {
            sh 'ls -la build'
            sh 'aws s3 sync build s3://jenkins-react-sk/ --delete'
            // sh 'aws cloudfront create-invalidation --distribution-id E32BFE6SSECM0S --paths "/*"'
        }
    }
}
    }
}
