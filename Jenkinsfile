podTemplate(
    label: 'agent',
    cloud: 'kubernetes',
    nodeSelector: 'gitpod.io/jenkins_agents=true',
    containers: [
        containerTemplate(
            name: 'devenv',
            image: env.GITPOD_DEVENV_IMAGE,
            ttyEnabled: true,
            privileged: false,
            alwaysPullImage: true,
            resourceRequestCpu: '100m',
            resourceLimitCpu: '1000m',
            resourceRequestMemory: '100Mi',
            resourceLimitMemory: '1000Mi',
        )
    ]
) {
    node('agent') {
        checkout scm

        container('devenv') {
            stage("generate") {
                sh("yarn install")
                sh("yarn generate")
            }
            stage("gcloud") {
                withCredentials([file(credentialsId: 'gitpod-publish-static-web-pages', variable: 'gkey')]) {
                    sh('gcloud auth activate-service-account --key-file=${gkey}')
                }

                sh("gcloud config set project " + env.GITPOD_GCP_PROJECT)
                sh("gsutil -m rsync -d -r ./dist/ gs://status-gitpod-io/")
                sh("gsutil -m acl ch -r -u AllUsers:R gs://status-gitpod-io/")
            }
        }
    }
}

