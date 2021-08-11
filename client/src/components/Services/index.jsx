import React from 'react'
import Icon1 from "../../images/svg-1.svg"
import Icon2 from "../../images/svg-2.svg"
import Icon3 from "../../images/svg-3.svg"
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServiceElements'

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Our services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Budget Tracker</ServicesH2>
          <ServicesP>We help you track all your transactions at one place.</ServicesP>
        </ServicesCard>
        <ServicesCard>
        <ServicesIcon src={Icon2}/>
          <ServicesH2>Set Goals</ServicesH2>
          <ServicesP>You can easily set your financial goals and we will remind you to complete them.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <ServicesH2>Receipt Scanning</ServicesH2>
          <ServicesP>Scan all your receipts, hence saving time.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
