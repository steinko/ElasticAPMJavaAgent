import React from 'react'
import { withTransaction } from '@elastic/apm-rum-react'

 export class HomeComponent extends React.Component{ 
	render() {return(<div>
	
	</div>)}
}

export default withTransaction('HomeComponent', 'component')(HomeComponent)