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
					sh 'rm -f ./node_modules/chromedriver/lib/chromedriver/chromedriver'
					sh 'cp ./chromedriver ./node_modules/chromedriver/lib/chromedriver/' 				
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
