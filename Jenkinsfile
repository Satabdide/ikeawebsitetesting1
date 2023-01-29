/*pipeline{
	agent any {
		tools {nodejs "node"}

		stages {
			stage ('Build'){
				steps{
					git 'https://github.com/Satabdide/ikeawebsitetesting1.git'
					sh 'npm install'
      }
			}
		}
	}
}*/

pipeline {
  agent any
    
  tools {NodeJs "node"}
    
  stages {
        
    stage('Git') {
      steps {
        git 'https://github.com/Satabdide/ikeawebsitetesting1.git'
      }
    }
     
    stage('Build') {
      steps {
        sh 'npm install'
         sh '<<Build Command>>'
      }
    }  
    
            
    stage('Test') {
      steps {
        sh 'node test'
      }
    }
  }
}
