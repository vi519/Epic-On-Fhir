import React from 'react'
import './EpicOnFhir.css'

function EpicOnFhir({redirectUri,client_id,scope}) {
    return (
        <div>
        <a href={`https://fhir.epic.com/interconnect-fhir-oauth/oauth2/authorize?response_type=code&redirect_uri=${redirectUri}&client_id=${client_id}&state=1234&scope=${scope}`} className="epic">Epic On Fhir</a>
      </div>
    )
}

export default EpicOnFhir
