import axios from 'axios';
import React, { Component } from 'react'

export default class TemporaryPage extends Component {
    state = {
        facts: []
    }
    componentDidMount() {
        setTimeout(()=>{
            axios.get(`https://api.api-ninjas.com/v1/facts?limit=1`, {
            method: "GET",
            headers: { 'X-Api-Key': 'Wh/QdrvRmkukius0linclA==hsKHh9IVMgozB1RF'},
            contentType: 'application/json'
            })
            .then(res => {
                const facts = res.data;
                this.setState({ facts });
            })
                setInterval(() => {
                    axios.get(`https://api.api-ninjas.com/v1/facts?limit=1`, {
                        method: "GET",
                        headers: { 'X-Api-Key': 'Wh/QdrvRmkukius0linclA==hsKHh9IVMgozB1RF'},
                        contentType: 'application/json'
                        })
                        .then(res => {
                            const facts = res.data;
                            this.setState({ facts });
                        })
            } ,  5000);
        }, 0)
    }
    render() {
        return (
            <div className='jakarta-400 text-[14px] flex flex-col items-center gap-10 bg-[#f2f2f7] dark:bg-[#10101A] text-[#282a2f] dark:text-[#cccbcb] duration-200 h-screen text-center py-48'>
                <p className='linear-wipe jakarta-700 text-[39px]'>Not available for now</p>
                {
                    this.state.facts.map(fact => <p key={fact.id} className="w-[500px]">{fact.fact}</p>)
                }
            </div>
        )
    }
}
