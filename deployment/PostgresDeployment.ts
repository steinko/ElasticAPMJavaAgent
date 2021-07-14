import * as k8s from "@pulumi/kubernetes";
import {clusterProvider } from './cluster'
import {dbUserName, dbPassword } from './config'

export const postgresDeployment = new k8s.apps.v1.Deployment('postgres-deployment', {
	                metadata:{name: "postgres-depoyment"},
                    spec: {
	                        template: {
		                           metadata: {labels: { app: 'postgres'}},
                                   spec: {
                                           volumes:
                                                        [{name: 'postgres-storage',
                                                          persistentVolumeClaim:{
	                                                               claimName:'postgres-pv-claim'}
                                                        }] ,
                                          containers: [{ 
	                                         name: "postgres-container",
                                             image: 'docker.io/postgres',
                                             env: [ {name: 'POSTGRES_PASSWORD', value: dbPassword},
                                                    {name: 'POSTGRES_USER', value: dbUserName},
                                                    {name: 'PGDATA', value: '/var/lib/postgresql/data/pgdata'}
                                                  ] ,
                                             ports:[
	                                           {containerPort: 5432,
                                                name: 'postgres' }
                                             ],
                                            volumeMounts: [{
	                                                      name: 'postgres-storage',
                                                          mountPath: '/var/lib/postgresql/data'
                                                        }]
                                        }]
                             }
                           
                        },
                            selector:  { matchLabels: { app: 'postgres'}}
         }
 },{provider: clusterProvider})