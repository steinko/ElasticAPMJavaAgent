import * as k8s from '@pulumi/kubernetes'
import {clusterProvider} from './cluster'

export const claim = new k8s.core.v1.PersistentVolumeClaim("claim", {
	        metadata: { 
               name: "postgres-pv-claim",
             },
             spec: {
                         accessModes: ["ReadWriteOnce"],
                         resources: { requests:  {storage: "5Gi"}}
             }, 
        }, 
        { provider: clusterProvider})