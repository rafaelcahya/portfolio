import React, { Component } from 'react'

export default class Trend extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            result: [],
            DataisLoaded: false
        };
    }
    componentDidMount() {
        fetch(
            "https://disease.sh/v3/covid-19/all")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    results: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, results } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Please wait some time.... </h1> </div> ;
        return (
            <div className='frosted_glass text-gray-300 text_poppins_400 text-14 flex flex-col gap-5 p-5 letterspacing-1 w-[300px]'>
                <div className='flex justify-between'>
                    <p>Coronavirus</p>
                    <p>{new Date().getFullYear()}</p>
                </div>
                <div className='textcolor2 text-12 text_poppins_200'>
                    <div className='flex justify-between'>
                        <p>Infected</p>
                        <p className='text_poppins_400 leading-loose'>{results.cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>Total active</p>
                        <p className='text_poppins_400 leading-loose'>{results.active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                    </div>
                    <div className='flex justify-between leading-loose'>
                        <p>Deaths</p>
                        <p className='text_poppins_400'>{results.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                    </div>
                    <div className='flex justify-between leading-loose'>
                        <p>Recovered</p>
                        <p className='text_poppins_400'>{results.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                    </div>
                </div>
            </div>
        )
    }
}
