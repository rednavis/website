import React, { Component } from "react"
import listBenefits from './items'
import  "./style.scss"
import BenefitsItem from "./BenefintsItem"

class Benefits  extends Component{
  render(){
    return (
      <section className="benefits" id="benefits">
        <div className="container">
            <div className="benefits__row">
              <BenefitsItem listBenefits={listBenefits} />
            </div>
        </div>
      </section>
    )
  }
}

export default Benefits;