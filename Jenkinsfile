#!/usr/bin/env groovy

node {
    stage('checkout') {
        checkout scm
    }

    stage('check java') {
        sh "java -version"
    }

    stage('clean') {
        sh "./gradlew clean"
    }

    stage('npm install') {
        sh "./gradlew npmInstall -PnodeInstall"
    }

    stage('backend tests') {
        try {
            sh "./gradlew test -PnodeInstall"
        } catch(err) {
            throw err
        } finally {
            junit '**/build/**/TEST-*.xml'
        }
    }

    stage('frontend tests') {
        try {
            sh "./gradlew gulp_test -PnodeInstall"
        } catch(err) {
            throw err
        } finally {
            junit '**/build/test-results/karma/TESTS-*.xml'
        }
    }

    stage('packaging') {
        sh "./gradlew bootRepackage -x test -Pprod -PnodeInstall"
        archiveArtifacts artifacts: '**/build/*.war', fingerprint: true
    }

    // Uncomment the following block to add Sonar analysis.
    /*stage('quality analysis') {
        withSonarQubeEnv('Sonar Server') {
            sh "./gradlew sonarqube"
        }
    }*/

}
