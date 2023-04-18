import React, { Component } from 'react'
import { arrProduct } from '../assets/data/data'

export default class Body_RenderWidthMap extends Component {


    state = {
        srcGlasses: './img/v1.png',
        nameGlasses: 'GUCCI G8850U',
        descGlasses: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip._1',
    }

    handleChangeGlasses = (url, name, desc) => {
        this.setState({
            srcGlasses: url,
            nameGlasses: name,
            descGlasses: desc,
        })
    }

    renderMapBtn = () => {
        let arrJSXBtn = arrProduct.map((item) => {
            return <div className="col-6 col-md-4 col-lg-3 col-xl-2 pt-2" key={item.id}>
                <button onClick={() => {
                    this.handleChangeGlasses(item.url, item.name, item.desc)
                }}>
                    <img src={item.url} alt="..." />
                </button>
            </div>
        })

        return arrJSXBtn
    }


    render() {
        return (
            <div className='container '>
                <div className="row text-center list">
                    <div className="col-12 col-sm-6 col-lg-3 mx-auto item">
                        <div className="content mx-auto">
                            <img className='imgPerson' src="./img/model.jpg" alt="..." />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3 mx-auto item pt-3 pt-sm-0">
                        <div className='content mx-auto'>
                            <img className='imgPerson' src="./img/model.jpg" alt="..." />
                            <div className='imgGlasses'>
                                <img src={this.state.srcGlasses} alt="..." />
                            </div>
                            <div className='title text-start'>
                                <h3 className='text-primary mb-0'>{this.state.nameGlasses}</h3>
                                <p className='text-white mb-0'>{this.state.descGlasses}</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='text-center mt-5 btnGlasses'>
                    <div className='row bg-light p-4'>
                        {this.renderMapBtn()}
                    </div>
                </div>

            </div>

        )
    }
}
