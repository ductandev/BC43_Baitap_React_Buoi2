import React, { Component } from 'react'

export default class Body_State extends Component {

    
    state = {
        srcGlasses: './img/v1.png'
    }

    handleChangeGlasses = (glass) => {
        this.setState({
            srcGlasses: `./img/${glass}.png`
        })
    }


    render() {
        return (
            <div className='container '>
                <div className="row text-center list">
                    <div className="col-12 col-sm-6 col-lg-3 mx-auto item">
                        <div className='content mx-auto'>
                            <img className='imgPerson' src="./img/model.jpg" alt="..." />
                            <div className='imgGlasses'>
                                <img src={this.state.srcGlasses} alt="..." />
                            </div>
                            <div className='title text-start'>
                                <h3 className='text-primary mb-0'>GUCCI G8850U</h3>
                                <p className='text-white mb-0'>Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3 mx-auto pt-3 pt-sm-0 item">
                        <div className="content mx-auto">
                            <img className='imgPerson' src="./img/model.jpg" alt="..." />
                        </div>
                    </div>
                </div>

                <div className='text-center mt-5 btnGlasses'>
                    <div className='row bg-light p-4'>
                        <div className="col-6 col-md-4 col-lg-3 col-xl-2 pt-2">
                            <button onClick={() => {
                                this.handleChangeGlasses('v1')
                            }}>
                                <img src="./img/v1.png" alt="..." />
                            </button>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3 col-xl-2 pt-2">
                            <button onClick={() => {
                                this.handleChangeGlasses('v2')
                            }}>
                                <img src="./img/v2.png" alt="" />
                            </button>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3 col-xl-2 pt-2">
                            <button onClick={() => {
                                this.handleChangeGlasses('v3')
                            }}>
                                <img src="./img/v3.png" alt="" />
                            </button>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3 col-xl-2 pt-2">
                            <button onClick={() => {
                                this.handleChangeGlasses('v4')
                            }}>
                                <img src="./img/v4.png" alt="" />
                            </button>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3 col-xl-2 pt-2">
                            <button onClick={() => {
                                this.handleChangeGlasses('v5')
                            }}>
                                <img src="./img/v5.png" alt="" />
                            </button>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3 col-xl-2 pt-2">
                            <button onClick={() => {
                                this.handleChangeGlasses('v6')
                            }}>
                                <img src="./img/v6.png" alt="" />
                            </button>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3 col-xl-2 pt-2">
                            <button onClick={() => {
                                this.handleChangeGlasses('v7')
                            }}>
                                <img src="./img/v7.png" alt="" />
                            </button>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3 col-xl-2 pt-2">
                            <button onClick={() => {
                                this.handleChangeGlasses('v8')
                            }}>
                                <img src="./img/v8.png" alt="" />
                            </button>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3 col-xl-2 pt-2">
                            <button onClick={() => {
                                this.handleChangeGlasses('v9')
                            }}>
                                <img src="./img/v9.png" alt="" />
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}
