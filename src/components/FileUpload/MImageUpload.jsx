import React from "react";

import {
  Button
} from "reactstrap";

class Products extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      localImage: null
    };

    this.imageRef = React.createRef();
  }

  setImage = (event) => {
    let reader = new FileReader();

    reader.onload = (e) => {
      this.setState({localImage: e.target.result})
    };

    reader.readAsDataURL(event.target.files[0]);
  };

  render() {
    return (
      <div className="text-center">
        {/* IMAGE */}
        <img src={this.state.localImage || require("../../assets/images/placeholder/image-placeholder.jpg")}
             width="200px"
             alt=""/>

        {/* IMAGE INPUT*/}
        <div>
          <Button color="primary" onClick={() => this.imageRef.current.click()}>
            UPLOAD PHOTO
          </Button>

          <input ref={this.imageRef}
                 type="file"
                 style={{display: "none"}}
                 onChange={this.setImage}/>
        </div>
      </div>
    );
  }
}

export default Products;
