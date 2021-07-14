import * as k8s from "@pulumi/kubernetes";
import {clusterProvider} from './cluster'
export const postgresService = new k8s.core.v1.Service('postgres-service', {
	           metadata: {name: 'postgres'},
               spec: { type: 'ClusterIP',
                       ports: [ {port:5432}],
                       selector: { app:'postgres'}, 
                       externalName: 'postgres.steinko.org' 
                     }
           },
          { provider: clusterProvider}
)
