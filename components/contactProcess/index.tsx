import {FunctionComponent } from "react";
import ProcessCard from "./component";
import styles from "./component/process.module.css"

const ContactProcess:FunctionComponent = () =>{

    return (
      <div className = {styles.processWrapper}> 
        <ProcessCard svg={"Mail"}>
          <h1>Idea</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed atque
            doloribus quasi tempore odit consequatur quae quis magni omnis nihil
            repellendus nesciunt voluptatem impedit, natus sequi numquam illum
            voluptatum aspernatur.
          </p>
        </ProcessCard>
        <ProcessCard svg={"Palette"}>
          <h1>Pre-Production</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed atque
            doloribus quasi tempore odit consequatur quae quis magni omnis nihil
            repellendus nesciunt voluptatem impedit, natus sequi numquam illum
            voluptatum aspernatur. Lorem100
          </p>
        </ProcessCard>
        <ProcessCard svg={"Gear"}>
          <h1>Development</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed atque
            doloribus quasi tempore odit consequatur quae quis magni omnis nihil
            repellendus nesciunt voluptatem impedit, natus sequi numquam illum
            voluptatum aspernatur.
          </p>
        </ProcessCard>
        <ProcessCard svg={"Earth"}>
          <h1>Publishing</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed atque
            doloribus quasi tempore odit consequatur quae quis magni omnis nihil
            repellendus nesciunt voluptatem impedit, natus sequi numquam illum
            voluptatum aspernatur.
          </p>
        </ProcessCard>
      </div>
    );

}

export default ContactProcess;