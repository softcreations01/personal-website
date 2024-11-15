pipeline {
    agent any
    tools {
        nodejs "NodeJS"
    }
    environment {
        DISABLE_AUTH = 'true'
        DB_ENGINE = 'sqlite'
    }
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/softcreations01/personal-website.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                // Deployment steps go here
                sh 'echo "Deploying application..."'
            }
        }
    }
}
