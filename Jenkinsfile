pipeline {
	agent any

	stages {
		stage('Clone Repository'){
			steps{
				git 'https://github.com/Xbot-me/simple-js-app.git'
				}
			}

		stage('Run JavaScript App') {
			steps {
				sh 'node index,js'
				}
			}
		}
	}
