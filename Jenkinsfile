pipeline {
    agent any

    stages {
        stage('Git checkout') {
            steps{
                // Get source code from a GitHub repository					
                git branch:'devops/pico', url:'https://github.com/picowithleo/pn-app'
            }
        }
        
        stage('npm install') {
            steps{
                sh 'npm install'
            }
        }
        
            stage('test') {
            steps{
                sh 'npm test'
            }
        }
    
        stage('build') {
            steps{
                sh 'npm run build'
            }
        }
       
    }
}