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
}

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
}*/
pipeline{
	agent any
	  tools{
			nodejs "My NodeJS"
		}

		stages{
			stage ('Build'){
				steps{
					echo 'Building..'
					sh 'npm install'
				}

			}
			stage ('Patch'){
				steps{
					echo 'Patching'
					sh 'pwd'
					sh 'cp /Users/himadrisekharde/Desktop/ikeawebsitetesting1/node_modules/chromedriver/lib/chromedriver/chromedriver ./node_modules/chromedriver/lib/chromedriver/chromedriver' 				
				}

			}
			stage ('Test'){
				steps{
					echo 'Testing..'
					sh 'npm test'
				}
			}
			stage('Deploy'){
				steps{
					echo 'Deploying'
				}
			}
		}
}
