import React from 'react'

import {demoImageData} from '../demoDb/Demo'
import { Component } from "react";
import "../css/style.css";



export default class GridCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      preview: false,
      previewUrl: ""
    };
    this.setPreview = this.setPreview.bind(this);
    this.cancelPreview = this.cancelPreview.bind(this);
  }

  setPreview(id) {
    this.setState({
      preview: true,
      previewUrl: demoImageData[id].img
    });
  }

  cancelPreview() {
    this.setState({
      preview: false
    });
  }

  render() {
    return (
      <div className="app mt-[30px]">
        <header>
        <h1 className="text-[30px] sm:text-[50px] md:text-[70px] lg:text-[80px] xl:text-[90px] text-black text-center">
  Discover your top <br /> ideas here 💡
</h1>

        </header>
        <div className="gallery">
          {demoImageData.map((image, idx) => {
            return (
              <div
                key={idx}
                className="item"
                onClick={() => this.setPreview(idx)}
              >
                <img src={image.img} alt="unsplash" />
              </div>
            );
          })}
          {this.state.preview && (
            <div id="preview" onClick={this.cancelPreview}>
              <img src={this.state.previewUrl} alt="preview" />
            </div>
          )}
        </div>
      </div>
    );
  }
}

