import moment from 'moment';
import React, { Component } from 'react';

export default class Github extends Component {
    state = {
        commits: []
    }

    componentDidMount() {
        fetch('https://api.github.com/repos/rafaelcahya/Codingcom-V2/commits')
            .then((response) => response.json())
            .then(commitsList => {
                this.setState({ commits: commitsList });
                console.log({ commits: commitsList[0] })
        });
    }
    
    render() {
        return (
            <>
                <div className='flex flex-col gap-10'>
                    {
                        this.state.commits.map((commit, index) => (
                            <div key={index} className='text_poppins_200 text-14 letterspacing-1 text-gray-300'>
                                <div className='flex flex-col gap-5'>
                                    <div className='flex items-center gap-1'>
                                        <p className='text_poppins_400'>{commit.commit.committer.name}</p>
                                        <div className='flex gap-1'>
                                            <p className='text-13 text-gray-400'>committed on {moment(commit.commit.committer.date).format('lll')}</p>
                                        </div>
                                    </div>
                                    <p className='border border-gray-900 rounded-lg p-3'>{commit.commit.message}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </>
        )
    }
}