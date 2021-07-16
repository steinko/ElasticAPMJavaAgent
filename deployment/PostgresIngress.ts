import * as k8s from "@pulumi/kubernetes";
import {clusterProvider} from './cluster'
import {postgresService} from './PostgresService'

export const postgresIngress = new k8s.networking.v1beta1.Ingress('postgres-ingress', 
	{ metadata: { name: 'postgresql-ingress',
    },
	  spec:{
              backend:{ serviceName:'postgres',
                        servicePort:  5432  
                      }             	
	  }
}, {provider: clusterProvider })

