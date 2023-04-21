import React, { Component } from 'react'
import { arrProduct } from '../../assets/data/data'
import Button from './Button'


export default class Body_State_Props extends Component {


    state = {
        spChiTiet: {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./img/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip._1 "
        },
    }


    renderWidthMapBtn = () => {
        return arrProduct.map((item) => {
            return <div className="col-6 col-md-4 col-lg-3 col-xl-2 pt-2" key={item.id}>
                <Button item={item} handleChangeGlasses={this.handleChangeGlasses}/>
            </div>
        })
    }


    handleChangeGlasses = (itemClick) => {
        this.setState({
            spChiTiet: itemClick,
        })
    }


    render() {
        let {name, url, desc} = this.state.spChiTiet;

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
                                <img src={url} alt="..." />
                            </div>
                            <div className='title text-start'>
                                <h3 className='text-primary mb-0'>{name}</h3>
                                <p className='text-white mb-0'>{desc}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='text-center mt-5 btnGlasses'>
                    <div className='row bg-light p-4'>
                        {this.renderWidthMapBtn()}
                    </div>
                </div>
            </div>

        )
    }
}